var express = require("express");
var handlebars = require("express-handlebars");
var bodyParser = require("body-parser");
var override = require("method-override");
var path = require("path");
var mysql = require("mysql");




// MSYQL CONNECTION

var connection = mysql.createConnection({
    host    : "localhost",
    user    : "root",
    password: "P1@yap1aya",
    database: "burgers_db"
});


connection.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("MySql connected...");
});


// EXPRESS SETUP


var port = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
    defaultLayout: "../index"
}));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(port);
