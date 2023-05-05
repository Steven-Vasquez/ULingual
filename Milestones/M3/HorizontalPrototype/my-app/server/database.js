// Using Express to create API endpoints that will be accessed by the client-side react app
const express = require('express');

//This is to establish connectinn with database.
const mysql = require("mysql");

// This is to allow cross-origin requests. So that the client-side react app can access the API endpoints
const cors = require('cors');

const fs = require('fs');

const app = express();
const port = 3001;

// CORS middleware to allow cross-origin requests
app.use(cors());

app.use(express.json());

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
    privateKey: fs.readFileSync("../../../../../credentials/key.pem"),
  },
});

db.connect((error) => {
  if(error){
    console.log('Error connecting to the MySQL Database', error);
    return;
  }
  console.log('Connection established sucessfully');
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

// API endpoint that logs in a user
app.get('/login', (req, res) => {
  const Uusername = req.query.Uusername;
  const Upassword = req.query.Upassword;
  
  const sql = 'SELECT * FROM Users WHERE Uusername = ?';
  db.query(sql, [Uusername], (error, result) => {
    if(error){
      //res.send({message: "Error logging in. No such user found (?)"})
      console.error(error.message);
      return;
    }
    if (result.length > 0) { // User found
      const user = result[0];
      bcrypt.compare(Upassword, user.Upassword, (err, response) => {
        if (err) {
          console.error(err.message);
          return;
        }
        if (response) {
          res.send(user);
        }
        else {
          res.send({message: "Invalid Username/Password."})
        }
      });
    } else { // User not found
      res.send({message: "Invalid Username/Password."})
    }
  });
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

// API endpoint that returns a search retult for tutors from the database
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
