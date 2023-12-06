const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mahasiswa',
});

connection.connect((err) => {
    if (err) {
        console.error('Error connection to MySQL database:', err);
    } else {
        console.log('Connection to mySQL database');
    }
});

module.exports = connection;