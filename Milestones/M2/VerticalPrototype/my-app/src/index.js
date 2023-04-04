import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const mysql = require("mysql");

const db = mysql.createPool({
  host: 'database-1.cjhdgriivebl.us-west-1.rds.amazonaws.com',
  user: 'admin',
  password: 'password1',
  database: 't6db'
})

const sqlInsert = "INSERT INTO Tutors (TutorID,TutorFIrstName, TutorLastName, TutorPhone, TutorEmail) VALUES ('4', 'John','Doe', '559-123-4567','john.doe@gmail.com');"
db.query(sqlInsert, (err,result)=> {
  console.log('inserted to db');
})



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

