// Using Express to create API endpoints that will be accessed by the client-side react app
const express = require('express');

//This is to establish connectinn with database.
const mysql = require("mysql");

// This is to allow cross-origin requests. So that the client-side react app can access the API endpoints
const cors = require('cors');

const fs = require('fs');

const app = express();
const port = 3001;

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

// CORS middleware to allow cross-origin requests
app.use(cors());


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
    }
    const usernameRegex = /^[a-zA-Z0-9_]{4,20}$/;
    if(usernameRegex.test(Uusername) === false) { // 2. Check that length is 4-20 chars, only contains letters, numbers, and underscores (no spaces)
      // 2a. If it doesn't, send an error message
      res.send({message: "Username must be 4-20 characters long and only contain letters, numbers, and underscores (no spaces)"});
    }
  });

  // For email verification
  const emailQuery = 'SELECT * FROM Users WHERE Uemail = ?';
  db.query(emailQuery, [Uemail], (error, result) => {
    if(error){
      console.error(error.message);
      return;
    }
    if (result.length > 0) { // 1. Check if the email already exists in the database
      // 1a. If it does, send an error message
      res.send({message: "Email already exists"});
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(emailRegex.test(Uemail) === false) { // 2. Check if email is a valid email 
      res.send({message: "Email is not valid"});
    }
  });
  
  // For password verification
  // 1. At least 8 characters, 1 uppercase letter, 1 lowercase letter, 1 number, 1 special character
  const passwordChecker = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,}$/;
  if(passwordChecker.test(Upassword) === false) { // 1a. If it doesn't, send an error message
    res.send({message: "Password must be at least 8 characters long and contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character"});
  }
  // TODO: If password not equals confirm password then error

  // Encrypt the password
  bcrypt.genSalt(saltRounds, (err, salt) => {
    bcrypt.hash(Upassword, salt, (err, hash) => {
      if (err) {
        console.error(err.message);
        return;
      }
      // Register the user in the database
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
});

  // API endpoint that logs in a user
  app.get('/login', (req, res) => {
    const Uusername = req.body.Uusername;
    const Upassword = req.body.Upassword;

    const sql = 'SELECT * FROM Users WHERE Uusername = ?';
    
    db.query(sql, [Uusername], (error, result) => {
      if(error){
        //res.send({message: "Error logging in. No such user found (?)"})
        console.error(error.message);
        return;
      }
      if(result)
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
            res.send({message: "Username or Password not found"})
          }
        });
      }
      else { // User not found
        res.send({message: "Username or Password not found"})
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
