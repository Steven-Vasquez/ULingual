// Using Express to create API endpoints that will be accessed by the client-side react app
const express = require('express');

const videoIndex = require('./video/videoIndex');
//This is to establish connectinn with database.
const mysql = require("mysql");

// This is to allow cross-origin requests. So that the client-side react app can access the API endpoints
const cors = require('cors');

const fs = require('fs');
const https = require('https');
const privateKey  = fs.readFileSync('../../../../privkey.pem', 'utf8');
const certificate = fs.readFileSync('../../../../cert.pem', 'utf8');
const credentials = {key: privateKey, cert: certificate};

const cookieParser = require('cookie-parser'); // For cookies to be stored in the browser
const session = require('express-session'); // For sessions to be stored in the server

const nodemailer = require('nodemailer'); // Allows emails to be sent to company email

const moment = require('moment'); // For date and time formatting

const app = express();
const port = 3001;

// used for image uploading
const path = require('path')
const multer = require('multer')
app.use(express.static('uploads'));
const storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null,'uploads');
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({storage: storage});

app.use(express.json());

// CORS middleware to allow cross-origin requests
app.use(cors({
  origin: ["https://50.18.108.83.nip.io"], // Allow only the react app (the provided URL) to make requests to the API
  methods: ["GET", "POST"], // Methods we want to allow
  credentials: true, // Allow cookies to be enabled and stored in the browser
}));

app.use(cookieParser());
app.use(express.urlencoded({extended: true})); // To parse URL-encoded form data (ex: from login forms)
app.use(session({
  key: "userId",
  secret: "superSecretPassword", // TODO: store this in a .env file for security purposes
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 1000 * 60 * 60 * 24, // User will stay logged in for 24 hours
  },
}));


// Password encryption
const bcrypt = require('bcrypt');
const saltRounds = 10;

// Creating a connection to the MySQL database
const db = mysql.createConnection({
  host: 'database-1.cjhdgriivebl.us-west-1.rds.amazonaws.com',
  port: '3306',
  user: 'admin',
  password: 'password1',
  database: 't6db',
  ssh: {
    host: 'ec2-50-18-108-83.us-west-1.compute.amazonaws.com',
    user: 'ubuntu',
    privateKey: fs.readFileSync("../../../credentials/key.pem"),
  },
});

db.connect((error) => {
  if(error){
    console.log('Error connecting to the MySQL Database', error);
    return;
  }
  console.log('Connection established successfully');
});


// API endpoint that returns all the users from the database
app.get('/users', (req, res) => {
  const sql = 'SELECT * FROM Users';
  db.query(sql, (error, result) => {
    if(error){
      console.error(error.message);
      return;
    }
    res.send(result);
  });
});


// API endpoint that registers a new user
app.post('/register', (req, res) => {
  const Ufirstname = req.body.Ufirstname;
  const Ulastname = req.body.Ulastname;
  const Uusername = req.body.Uusername;
  const Upassword = req.body.Upassword;
  const Uemail = req.body.Uemail;
  const NativeLanguageID = req.body.NativeLanguageID;
  const LearningLanguageID = req.body.LearningLanguageID;

  // For username verification
  const usernameQuery = 'SELECT * FROM Users WHERE Uusername = ?';
  db.query(usernameQuery, [Uusername], (error, result) => {
    if(error){
      console.error(error.message);
      return;
    }
    if (result.length > 0) { // 1. Check if the username already exists in the database
      // 1a. If it does, send an error message
      res.send({message: "Username already exists"});
    } else {
      const emailQuery = 'SELECT * FROM Users WHERE Uemail = ?';
      db.query(emailQuery, [Uemail], (error, result) => {
        if(error){
          console.error(error.message);
          return;
        }
        if (result.length > 0) { // 1. Check if the email already exists in the database
          // 1a. If it does, send an error message
          res.send({message: `Email "${Uemail}" is already in use.`});
          return;
        } else {
          bcrypt.genSalt(saltRounds, (err, salt) => {
            bcrypt.hash(Upassword, salt, (err, hash) => {
              if (err) {
                console.error(err.message);
                return;
              }
              const sql = 'INSERT INTO Users (Ufirstname, Ulastname, Uusername, Upassword, Uemail, NativeLanguageID, LearningLanguageID) VALUES (?,?,?,?,?,?,?)';
              db.query(sql, 
                [Ufirstname, Ulastname, Uusername, hash, Uemail, NativeLanguageID, LearningLanguageID], 
                (error, result) => {
                if(error){
                  console.error(error.message);
                  return;
                }
                res.send(result);
              });
            });
          });
        };
      });
    };
  });
});

// API endpoint that checks if a user is logged in
app.post("/checkLogin", (req, res) => {
  if (req.session.user) { // There is a user session active
    res.send({loggedIn: true, user: req.session.user});
  } else { // There is no user session active
    res.send({ loggedIn: false });
   }
});

// API endpoint that logs in a user
app.post('/login', (req, res) => {
  const Uusername = req.body.Uusername;
  const Upassword = req.body.Upassword;
  
  const sql = 'SELECT * FROM Users WHERE Uusername = ?';
  db.query(sql, [Uusername], (error, result) => {
    if(error){
      //res.send({message: "Error logging in. No such user found (?)"})
      console.error(error.message);
      return;
    }
    if (result.length > 0) { // User found
      const foundUser = result[0];
      bcrypt.compare(Upassword, foundUser.Upassword, (err, response) => {
        if (err) {
          console.error(err.message);
          return;
        }
        if (response) {
          req.session.user = foundUser;
          //req.app.locals.user = foundUser; // Set the session local to the user that just logged in so login session can persist across pages
          res.send(foundUser);
        } else { // Invalid password (display both for security reasons)
          res.send({message: "Invalid Username/Password."})
        }
      });
    } else { // User not found (display both for security reasons)
      res.send({message: "Invalid Username/Password."})
    }
  });
});

// API endpoint to logout (clears user session and resets the session local (req.app.locals.user)))
app.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
      res.status(500).send('An error occurred');
    } else {
      // Clear session cookie
      res.clearCookie('userId');
      res.send('User logged out successfully');
    }
  });
  //req.app.locals.user = undefined; // Reset the session local to undefined
});

// API endpoint that allows the user to send an email to the company email
app.post('/contactus', (req, res) => {
  const email = req.body.email;
  const message = req.body.message;
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ulingual6@gmail.com', //
      pass: 'dgjrzmwcnxdhsigo' //
    }
  });
  const mailOptions = {
    from: 'ulingual6@gmail.com',
    to: 'ulingual6@gmail.com',
    subject: 'New Ticket From: ' + email,
    text: message
  };
  transporter.sendMail(mailOptions, (err) => {
    if(err) {
      console.error(err);
      return;
    } else {
      res.send({message: "Your email has been sent. You may expect a reply within 48 hours."})
    }
  })
});

//API endpoint that returns user's info
app.post("/user/info", (req, res) => {
  const userID = req.session.user.UserID;
  var sql = 'SELECT L.Language FROM languages L, Users U WHERE U.UserID = ? && U.LearningLanguageID = L.LanguageID';
  db.query(sql, [userID], (err, results) => {
    if(err) {
      console.log(err.message);
      return;
    } else {
      req.session.user.LearningLanguage = results[0].Language;
      sql = 'SELECT L.Language, U.Image FROM languages L, Users U WHERE U.UserID = ? && U.NativeLanguageID = L.LanguageID';
      db.query(sql, [userID], (err, results) => {
        if(err) {
          console.log(err.message);
          return;
        } else {
          req.session.user.Image = results[0].Image;
          req.session.user.NativeLanguage = results[0].Language;
          res.send(req.session.user);
        }
      })
    }
  })
});

//API endpoint that returns user's friend count
app.post('/friends/count', (req, res) => {
  let userID = req.session.user.UserID;
  if(req.query.user) {
    userID = req.query.user;
  }

  const sql = 'SELECT COUNT(*) as count FROM friends WHERE UserID1 = ?';
  db.query(sql, [userID], (err, results) => {
    if(err) {
      console.error(err.message);
      return;
    } else {
    res.send({count: results[0].count});
    }
  });
});

//API endpoint that returns user's friends
app.post('/friends', (req, res) => {
  const userID = req.session.user.UserID;

  const sql = 'SELECT U.UserID, U.Uusername, U.Image FROM Users U, friends F WHERE F.UserID1 = ? && U.UserID = F.UserID2';
  db.query(sql, [userID], (err, results) => {
    if(err) {
      console.error(err.message);
      return;
    } else {
    res.send(results);
    }
  });
});

//API endpoint that checks if username is available
app.post('/username', (req, res) => {
  const Uusername = req.body.Uusername;
  if(Uusername == req.session.user.Uusername) {
    res.send(req.session.user);
  } else {
    const usernameQuery = 'SELECT * FROM Users WHERE Uusername = ?';
    db.query(usernameQuery, [Uusername], (error, result) => {
      if(error){
        console.error(error.message);
        return;
      }
      if (result.length > 0) { // 1. Check if the username already exists in the database
        // 1a. If it does, send an error message
        res.send({message: "Username already exists"});
      } else {
        res.send(req.session.user);
      }
    });
  }
});

//API endpoint that allows users to upload profile pictures
app.post("/upload", upload.single("image"), (req, res) => {
  const UserID = req.session.user.UserID;
  const image = req.file.filename;

  sql = 'UPDATE Users SET Image = ? WHERE UserID = ?';
  db.query(sql, [image, UserID], (err) => {
    if(err) {
      console.error(err.message);
      return;
    } else {
      req.session.user.Image = image;
      res.send(req.session.user);
    }
  })
});

//API endpoint that updates the user's profile description
app.post('/profile', (req, res) => {
  const userID = req.session.user.UserID;
  const Description = req.body.Description;
  const LearningLanguage = req.body.LearningLanguage;
  const Uusername = req.body.Uusername;
  let sql = 'SELECT LanguageID FROM languages WHERE Language = ?';
  db.query(sql, [LearningLanguage], (err, results) => {
    if(err) {
      console.error(err.message);
      return;
    } else {
      req.session.user.LearningLanguageID = results[0].LanguageID;
      const LearningLanguageID = results[0].LanguageID;
      sql = 'UPDATE Users SET Description = ?, LearningLanguageID = ?, Uusername = ? WHERE UserID = ?';
      db.query(sql, [Description, LearningLanguageID, Uusername, userID], (err, results) => {
        if(err) {
          console.error(err.message);
          return;
        } else {
          req.session.user.Description = Description;
          req.session.user.LearningLanguage = LearningLanguage;
          req.session.user.Uusername = Uusername;
          res.send(req.session.user);
        }
      });
    }
  });
})

// API endpoint that returns friend's information
app.get('/friend/profile', (req, res) => {
  const user = req.query.user;
  let friend;
  let sql = 'SELECT * FROM Users WHERE Users.Uusername = ?';
  db.query(sql, [user], (err, results) => {
    if(err) {
      console.log(err.message);
      return;
    } else {
      friend = results[0];
      sql = 'SELECT L.Language FROM languages L, Users U WHERE U.UserID = ? && U.LearningLanguageID = L.LanguageID';
      db.query(sql, [friend.UserID], (err, results) => {
        if(err) {
          console.log(err.message);
          return;
        } else {
          friend.LearningLanguage = results[0].Language;
          sql = 'SELECT L.Language FROM languages L, Users U WHERE U.UserID = ? && U.NativeLanguageID = L.LanguageID';
          db.query(sql, [friend.UserID], (err, results) => {
            if(err) {
              console.log(err.message);
              return;
            } else {
              friend.NativeLanguage = results[0].Language;
              res.send(friend);
            }
          })
        }
      })
    }
  })
});

// API endpoint that returns all the tutors from the database
app.get('/tutors', (req, res) => {
  const sql = 'SELECT * FROM Tutors';
  db.query(sql, (error, result) => {
    if(error){
      console.error(error.message);
      return;
    }
    res.send(result);
  });
});

// API endpoint that returns a search result for tutors from the database
app.get('/user/search', (req, res) => {
  const search = req.query.search;
  //const sql = `SELECT * FROM Tutors WHERE TutorFirstName LIKE '%${search}%' OR TutorLastName LIKE '%${search}%'`;
  const sql = (
    `SELECT U.UserID, U.Uusername, L.Language
    FROM Users U, languages L
    WHERE L.LanguageID = U.NativeLanguageID AND U.Uusername LIKE '%${search}%'
    UNION
    SELECT U.UserID, U.Uusername, L.Language
    FROM Users U, languages L
    WHERE L.LanguageID = U.NativeLanguageID AND L.Language = '${search}'`
  );
  db.query(sql, (error, result) => {
    if (error) {
      console.error(error.message);
      return;
    }
    if(result.length === 0) {
      res.send({message: "No results found."})
    } else {
      res.send(result);
    }
  });
});

app.get('/forums', (req, res) => {
  const sql = 'SELECT * FROM forumposts ORDER BY DateCreated DESC';
  db.query(sql, (error, results) => {
    if (error) {
      console.error(error.message);
      res.status(500).send({ message: 'An error occurred while fetching forums' });
      return;
    }
    res.send(results);
  });
});

// API endpoint to add a forum
app.post('/addForum', (req, res) => {
  const UserID = req.session.user.UserID;
  const Title = req.body.Title;
  const DateCreated = moment().format('YYYY-MM-DD HH:mm:ss');
  
  if (Title === null || Title.length === 0) {
      res.status(400).send({message: 'Forum name cannot be empty'});
      return;
  }

  const sql = 'INSERT INTO forumposts (UserID, Title, DateCreated, Comments) VALUES (?, ?, ?, 0)';
  db.query(sql, [UserID, Title, DateCreated], (error, results) => {
    if(error){
      console.error(error.message);
      res.status(500).send({message: 'An error occurred while creating forum'});
      return;
    }
    res.send({DateCreated: DateCreated});
  });
});

// API endpoint to display all usermade flashcards from the database
app.post('/flashcards/display', (req, res) => {
  const UserID = req.session.user.UserID;
  const LanguageID = req.session.user.LearningLanguageID;
  const sql = 'SELECT FlashcardID, Question, Answer FROM flashcards WHERE LanguageID = ? AND (UserID = ? OR UserID = ?)'

  db.query(sql, [LanguageID, UserID, 75], (err, results) => {
    if(err) {
      console.error(err.message);
      return;
    } else {
      res.send(results);
    }
  });
});


app.post('/flashcards/create', (req, res) => {
  const UserID = req.session.user.UserID;
  const LanguageID = req.session.user.LearningLanguageID;
  const Question = req.body.Question;
  const Answer = req.body.Answer;

  const sql = 'INSERT INTO flashcards (UserID, Question, Answer, LanguageID) VALUES (?, ?, ?, ?)';
  db.query(sql, [UserID, Question, Answer, LanguageID], (err) => {
    if(err) {
      console.error(err.message);
      return;
    } else {
      res.send({message: "Flashcard created!"})
    }
  });
});

// A link to the video chat-related API endpoints
app.use(videoIndex);

const httpsServer = https.createServer(credentials, app);
httpsServer.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
