const mysql = require("mysql");
const express = require("express")
const exphbs = require("express-handlebars");
var app = express();

var PORT = process.env.PORT || 8080;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
var connection;

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "taylor123!",
  database: "burgers_db"
});

module.exports= connection;