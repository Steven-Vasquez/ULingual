// Using Express to create API endpoints that will be accessed by the client-side react app
const express = require('express');

//This is to establish connectinn with database.
const mysql = require("mysql2");
const { Client } = require('ssh2');
const sshClient = new Client();
const fs = require('fs');

// This is to allow cross-origin requests. So that the client-side react app can access the API endpoints
const cors = require('cors');

const cookieParser = require('cookie-parser'); // For cookies to be stored in the browser
const session = require('express-session'); // For sessions to be stored in the server

const nodemailer = require('nodemailer'); // Allows emails to be sent to company email

const app = express();
const port = 3001;

app.use(express.json());

//CORS middleware to allow cross-origin requests
app.use(cors({
  origin: ["http://localhost:3000"], // Allow only the react app (the provided URL) to make requests to the API
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

const dbServer = {
    host: 'database-1.cjhdgriivebl.us-west-1.rds.amazonaws.com',
    port: '3306',
    user: 'admin',
    password: 'password1',
    database: 't6db'
}
const tunnelConfig = {
    host: 'ec2-50-18-108-83.us-west-1.compute.amazonaws.com',
    port: '22',
    username: 'ubuntu',
    privateKey: fs.readFileSync("../../../../../credentials/key.pem")
}
const forwardConfig = {
    srcHost: '127.0.0.1',
    srcPort: 3306,
    dstHost: dbServer.host,
    dstPort: dbServer.port
};
let db;
const SSHConnection = new Promise((resolve, reject) => {
    sshClient.on('ready', () => {
        sshClient.forwardOut(
        forwardConfig.srcHost,
        forwardConfig.srcPort,
        forwardConfig.dstHost,
        forwardConfig.dstPort,
        (err, stream) => {
             if (err) reject(err);
             const updatedDbServer = {
                 ...dbServer,
                 stream
            };
            db =  mysql.createConnection(updatedDbServer);
            db.connect((error) => {
            if (error) {
                //reject(error);
                console.log('Error connecting to the MySQL Database', error);
                return;
            }
            //resolve(connection);
            console.log('Connection established successfully');
            });
        });
    }).connect(tunnelConfig);
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
              const sql = 'INSERT INTO Users (Ufirstname, Ulastname, Uusername, Upassword, Uemail) VALUES (?,?,?,?,?)';
              db.query(sql, 
                [Ufirstname, Ulastname, Uusername, hash, Uemail], 
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
  if (req.app.locals.user !== undefined) { // There is a user session active
    res.send({loggedIn: true, user: req.app.locals.user});
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
          req.app.locals.user = foundUser; // Set the session local to the user that just logged in so login session can persist across pages
          res.send(foundUser);
        }
        else { // Invalid password (display both for security reasons)
          res.send({message: "Invalid Username/Password."})
        }
      });
    }
    else { // User not found (display both for security reasons)
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
  req.app.locals.user = undefined; // Reset the session local to undefined
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
app.get('/tutors/search', (req, res) => {
  const search = req.query.search;
  const sql = `SELECT * FROM Tutors WHERE TutorFirstName LIKE '%${search}%' OR TutorLastName LIKE '%${search}%'`;
  db.query(sql, (error, result) => {
    if (error) {
      console.error(error.message);
      return;
    }
    res.send(result);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
