const burg = require("../models/burger");
const express = require("express");
const router = express.Router()




router.get("/", function (req, res) {
    burg.allBurgers(function (result) {
        res.render("index", {data: result}
        );
    })
});
router.put("/eat", function (req, res) {
    burg.eatBurger(function (result) {
        let result2 = [{ test: "helloworld" }]
        res.render("index", {
            data: result,
            data2: result2
        }
        );
    })
});

module.exports = router;