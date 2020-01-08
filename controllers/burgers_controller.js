var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    var allBurgers = {
      burgers: data
    };
    console.log(allBurgers);
    res.render("index", allBurgers);
  });
});

router.post("/api/burgers", function(req, res) {
    console.log(req.body);
    burger.create(
        // "burger_name", "eaten"
        req.body.burger_name
    ,
    // [
    //     req.body.burger_name, req.body.eaten
    // ],
    function(result) {
        // Send back the ID of the new quote
        // res.json({ id: result.insertId });
        res.redirect("/");
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.update(
      // eaten: req.body.eaten
      req.params.id
      , function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

  router.delete('/api/burgers/:id', function(req, res) {
    // const condition = `id = ${req.params.id}`;
    burger.delete(req.params.id, function(result) {
      // res.redirect("/");
      res.status(200).end();
    })
  });

// Export routes for server.js to use.
module.exports = router;