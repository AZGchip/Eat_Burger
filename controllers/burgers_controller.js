const burg = require("../models/burger");
const express = require("express");
const router = express.Router()

//gets all burgers on startup
router.get("/", function (req, res) {
    burg.allBurgers(function (result) {
        res.render("index", {data: result}
        );
    })
});
//changes eaten boolian on selected id to true
router.put("/eat/:id", function (req, res) {
    let eatThis = req.params.id;
    burg.eatBurger(eatThis,function (result) {
        res.render("index", {data: result,}
        );
    })
});
//adds new burger to the table 
router.post("/add/:id", function (req, res) {
    let burgerName = req.params.id;
    burg.insertBurger(burgerName,function (result) {
        res.render("index", {data: result,}
        );
    })
});
// deletes burger from the table
router.delete("/delete/:id",function(req,res){
    let deleteId = req.params.id;
    burg.deleteBurger(deleteId,function(result){
        res.render("index",{data:result});
    })
})
//router export
module.exports = router;