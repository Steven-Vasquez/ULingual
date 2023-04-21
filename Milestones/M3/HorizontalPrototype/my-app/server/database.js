// Using Express to create API endpoints that will be accessed by the client-side react app
const express = require('express');

//This is to establish connectinn with database.
const mysql = require("mysql");

// This is to allow cross-origin requests. So that the client-side react app can access the API endpoints
const cors = require('cors');

const fs = require('fs');

const app = express();
const port = 3001;

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

app.get('/users', (req, res) => {
  const sql = 'SELECT * FROM USERS';
  db.query(sql, (error, result) => {
    if(error){
      console.error(error.message);
      return;
    }
    res.send(result);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
