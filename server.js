const exphbs = require("express-handlebars");
const express = require("express");
const app = express;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const connection = require("./config/connection");
var PORT = process.env.PORT || 8080;


app.engine("handlebars", exphbs({ defaultLayout: "main" })); 
app.set("view engine", "handlebars");


const routes = require("./controllers/burgers_controller.js");
app.use(routes);


app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});
