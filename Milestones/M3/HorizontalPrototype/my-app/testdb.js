var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'database-1.cjhdgriivebl.us-west-1.rds.amazonaws.com',
    user: 'admin',
    password: 'password1',
    database: 't6db'
});

con.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});