const express = require("express");
const app = express();
const bodyParser = (require("body-parser"));
require("dotenv").config();
var PORT = process.env.PORT || 8080;

// Requiring models for syncing
var db = require("./models");

// Syncing the sequelize models and then starting the Express app
// =============================================================

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
  
// Set Handlebars.
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.json());
app.use(express.static("public"));

// Import routes and give the server access to them.
var router = require("./controllers/burger_controller.js");
app.use(router);

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
 });
});

