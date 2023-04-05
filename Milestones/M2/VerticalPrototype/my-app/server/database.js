//This is to establish connectinn with database.
const mysql = require("mysql");

const db = mysql.createConnection({
  host: 'database-1.cjhdgriivebl.us-west-1.rds.amazonaws.com',
  user: 'admin',
  password: 'password1',
  database: 't6db'
})


db.connect((error) => {
  if(error){
    console.log('Error connecting to the MySQL Database');
    return;
  }
  console.log('Connection established sucessfully');
});
connection.end((error) => {
});

modules.exports = db;