var express = require("express");
var handlebars = require("express-handlebars");
var mysql = require("mysql");
var bodyparser = require("body-parser");
var override = require("method-override");
var path = require("path");

var app = express();

app.set("views", path.join(__dirname, "views"));
app.engine("handlebars", handlebars({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.set("port", (process.env.PORT || 3000));

app.get("/", function(req, res){
    res.render("home");
});

app. listen(app.get("port"), function() {
    console.log("Server started on port " +app.get("port"))
});