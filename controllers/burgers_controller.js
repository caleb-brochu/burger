const express = require("express");
const router = express.Router();

const burger = require("../models/burgers.js");

router.get("/", function(req, res){
    burger.all(function(data){
        var hbsObject = {
            burger: data
          };
          //console.log(hbsObject);
          res.render("index", hbsObject);
        });
         
});

router.post("/api/burger", function(req,res){
    console.log(req.body);
    burger.create([req.body.burger_name, req.body.devoured], function(result){
        //send back the id of the new burger
        console.log(`${req.body.burger_name} added!`)
        res.json({id: result.insertId});
    });
});

router.put("/api/burger/:id", function(req,res){
    const condition = "id = " + req.params.id;

    //console.log("condition", condition);
    const eaten = {devoured: 1}
    burger.update(eaten, condition, function(result) {
        if (result.changedRows === 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        }
        res.status(200).end();
  
      }
    );
  });

module.exports = router;