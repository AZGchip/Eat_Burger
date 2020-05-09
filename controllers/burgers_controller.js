const burg = require("../models/burger");
const express = require("express");
const router = express.Router()


router.get("/", function (req, res) {
    burg.allBurgers(function (result) {
        res.render("index", {data: result}
        );
    })
});
router.put("/eat/:id", function (req, res) {
    console.log(req.params.id)
    let eatThis = req.params.id;
    burg.eatBurger(eatThis,function (result) {
        res.render("index", {data: result,}
        );
    })
});
router.post("/add/:id", function (req, res) {
    console.log(req.params.id)
    let burgerName = req.params.id;
    burg.insertBurger(burgerName,function (result) {
        res.render("index", {data: result,}
        );
    })
});
router.delete("/delete/:id",function(req,res){
    let deleteId = req.params.id;
    burg.deleteBurger(deleteId,function(result){
        res.render("index",{data:result});
    })
})
module.exports = router;