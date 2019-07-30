const express = require("express");
const app = express();

var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  
// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.json());
app.use(express.static("public"));

// Import routes and give the server access to them.
var router = require("./controllers/burger_controller.js");
app.use(router);