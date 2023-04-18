const path = require('path');
const mysql = require('mysql');
require('dotenv').config({path: path.join(__dirname, '../.env') });

function getConnection() {
    console.log("Connecting to MySQL Server...");
    console.log("Current working directory:", process.cwd());
    console.log(process.env.DB_HOST);
    const connection = mysql.createConnection({
        host: "database-1.cjhdgriivebl.us-west-1.rds.amazonaws.com",
        port: "3306",
        user: "admin",
        password: "password1",
        database: "t6db"
    });
    
    
    connection.connect((err) => {
        if (err) {
            console.log('Error connecting to MySQL Server: ' + err.stack);
            return;
        }
        console.log('Connected to MySQL Server!');
    });


    return connection;
}


module.exports = { getConnection };