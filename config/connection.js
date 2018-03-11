var mysql = require("mysql");

// MSYQL CONNECTION

var connection = mysql.createConnection({
    host    : "localhost",
    user    : "root",
    password: "P1@yap1aya",
    database: "burgers_db",
    port: 3000
});


connection.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("MySql connected...");
});

module.exports = connection;