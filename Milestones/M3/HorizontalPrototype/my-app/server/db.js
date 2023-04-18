const mysql = require('mysql');

function getConnection() {
    const connection = mysql.createConnection({
        host: 'database-1.cjhdgriivebl.us-west-1.rds.amazonaws.com',
        port: '3306',
        user: 'admin',
        password: 'password1',
        database: 't6db'
    });
    
    /*
    connection.connect((err) => {
        if (err) throw err;
        console.log('Connected to MySQL Server!');
    });
    */

    return connection;
}


module.exports = { getConnection };