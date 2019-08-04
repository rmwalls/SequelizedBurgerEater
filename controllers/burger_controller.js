// Dependencies
const express = require("express");
const router = express.Router();
const db = require("../models");

// Create all routes and set up logic within those routes where required.
// Show all the burgers in correct area

router.get("/", function (req, res) {
  res.redirect("/burgers");
})

// router to get contents of database to show onscreen
router.get("/burgers", function (req, res) {
  // express callback response by calling burger.findAll
  db.burgers.findAll()
    .then(function (allBurgers) {
      // Wrapping the array of returned burgers in a object so it can be referenced inside our handlebars
      var burgersObject = {
        burgers: allBurgers
      };
      res.render("index", burgersObject);
      //console.log("burgersObject is " + burgersObject);
    });
});

// takes the request object using it as input for burger.create
router.post("/burgers", function (req, res) {
  db.burgers.create({
    burger_name: req.body.name,
    devoured: false
  }).then(function () {
    res.redirect("/burgers");
    console.log("(burgerController)you added burger:" + req.body.name);
  });
});

// change burger's devoured state  
router.put("/burgers/:id", function (req, res) {
  db.burgers.update({
    devoured: req.body.devoured
  }, {
    where: {
      id: req.params.id
    }
  }).then(function (result) {
    //console.log(result)
    res.json({
      changed: result.changedRows
    })
    res.redirect("/burgers");
  })
});

// delete a burger
router.delete("/burgers/:id", function (req, res) {
  db.burgers.destroy({
    where: {id: req.params.id}
  }).then(function(){
    res.status(200).end();
    //console.log("(burgerController)you deleted burger");
  })
});

module.exports = router;