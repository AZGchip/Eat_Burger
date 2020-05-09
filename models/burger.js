// import
const orm = require("../config/orm");

// narrows down orm.js methods to the needs of the program
const burg = {
    //grabs all burgers from burger table
    allBurgers: function (callback) {
        orm.selectAll("burger", function (res) {
            callback(res);
        });
    },
    //inserts a new, uneaten burger to the table
    insertBurger: function (burgername, callback) {
        orm.insert("burger", "burger_name,eaten", `"${burgername}",false`, function (res) {
            callback(res);
        });
    },
    // changes burger eaten boolian to true
    eatBurger: function (burgerId, callback) {
        orm.edit("burger", "eaten", "true", "burger_id", burgerId, function (res) {
            callback(res);
        });
    },
    //removes a burger from the table 
    deleteBurger: function (id, callback) {
        orm.delete("burger", "burger_id", id, function (res) {
            callback(res)
        })
    }
}
// export
module.exports = burg



