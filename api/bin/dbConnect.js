const mysql = require('mysql');

const dbConnect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'naveteam'
});

module.exports = dbConnect;