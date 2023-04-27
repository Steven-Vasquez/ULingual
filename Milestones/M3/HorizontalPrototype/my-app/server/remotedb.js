// Using Express to create API endpoints that will be accessed by the client-side react app
const express = require('express');

//This is to establish connectinn with database.
const mysql = require("mysql2");
const { Client } = require('ssh2');
const sshClient = new Client();
const fs = require('fs');

// This is to allow cross-origin requests. So that the client-side react app can access the API endpoints
const cors = require('cors');

const app = express();
const port = 3001;

app.use(express.json());

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
            const connection =  mysql.createConnection(updatedDbServer);
            connection.connect((error) => {
            if (error) {
                //reject(error);
                console.log('Error connecting to the MySQL Database', error);
                return;
            }
            //resolve(connection);
            console.log('Connection established sucessfully');
            });
        });
    }).connect(tunnelConfig);
});

//CORS middleware to allow cross-origin requests
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
  const sql = 'INSERT INTO Users (Ufirstname, Ulastname, Uusername, Upassword, Uemail) VALUES (?,?,?,?,?)';
  
  db.query(sql, 
    [Ufirstname, Ulastname, Uusername, Upassword, Uemail], 
    (error, result) => {
    if(error){
      console.error(error.message);
      return;
    }
    res.send(result);
  });
});


app.get('/login', (req, res) => {
  const Uusername = req.body.Uusername;
  const Upassword = req.body.Upassword;

  const sql = 'SELECT * FROM Users WHERE Uusername = ? AND Upassword = ?';
  
  db.query(sql, 
    [Uusername, Upassword], 
    (error, result) => {
    if(error){
      //res.send({err: error})
      console.error(error.message);
      return;
    }
    if (result.length > 0) {
      res.send(result);
    }
    else {
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

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
