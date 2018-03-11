var express = require("express");
var handlebars = require("express-handlebars");
var bodyparser = require("body-parser");
var override = require("method-override");
var path = require("path");


// // MSYQL CONNECTION

// var connection = mysql.createConnection({
//     host    : "localhost",
//     user    : "root",
//     password: "P1@yap1aya",
//     database: "burgers_db"
// });


// connection.connect((err) => {
//     if (err) {
//         throw err;
//     }
//     console.log("MySql connected...");
// });


// EXPRESS SETUP

var app = express();

app.set("views", path.join(__dirname, "views"));
app.engine("handlebars", handlebars({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.set("port", (process.env.PORT || 3000));

app.get("/", function(req, res){
    res.render("index");
});

app. listen(app.get("port"), function() {
    console.log("Server started on port " +app.get("port"))
});




// // CREATE DB
// app.get("/createdb", (req, res) => {
//     let sql = "CREATE DATABASE burgers_db";
//     connection.query(sql, (err, result) => {
//         if (err) throw err;
//         console.log(result);
//         res.send("Database created...");
//     });
// });



