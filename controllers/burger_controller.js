// Dependencies
const express = require("express");
const router = express.Router();
const burger = require ("../models/burger.js");


// Create all routes and set up logic within those routes where required.
// Show all the burgers in correct area
router.get("/", function(req, res) {
  burger.showAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    //console.log("burger_controller, line 12" + hbsObject);
    res.render("index", hbsObject);
  });
});
  
// Add a burger
router.post("/api/burgers", function(req, res) {
  burger.create(req.body.burger_name, function(result) {
    //console.log("new id = " + result.id);
  res.json({ id: result.id }); // Send back the ID and name of the new burger
  });
});
  
// change burger's devoured state  
router.put("/api/burgers/:id", function(req, res) {
  var id = req.params.id;
  burger.devourBurger(id, req.body.devoured,function(result) {
    //console.log(result)
  res.json({ changed: result.changedRows })
  });
}) ;
  
// delete a burger
router.delete("/api/burgers/:id", function(req, res) {
  var id = req.params.id;
  burger.yuckyBurger(id, function(result) {
    res.json({result});
  });
});
  
  // Export routes for server.js to use.
  module.exports = router;