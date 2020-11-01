const express = require("express");
const burger = require("../models/burger");
const router = express.Router();

router.get("/", function(req,res){
  burger.select(function(data){
    console.log(data)
    res.render("index", {burgers:data})
  })
})

router.post("/api/burgers", function(req, res){
  burger.insert(["burger_name"], [req.body.burger_name], function(result){
    res.json({id: result.insertId})
  })
})

router.put("/api/burgers/:id", function(req, res){
  const condition = `id = ${req.params.id}`
  burger.update({
    devoured: req.body.devoured
  }, condition, function(result){
    if (result.changedRows === 0){
      return res.status(404).end()
    }
    res.status(200).end();
  })
})

router.delete("/api/burgers/:id", function(req, res){
  const condition = `id=${req.params.id}`
  burger.delete(condition, function(result){
    if (result.affectedRows === 0){
      return res.status(404).end();
    } 
    res.status(200).end
  })
})
module.exports = router