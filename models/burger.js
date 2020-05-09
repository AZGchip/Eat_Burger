const orm = require("../config/orm");

const burg = {
    allBurgers: function (callback) {
        orm.selectAll("burger", function (res) {
            callback(res);
        });
    },
    insertBurger: function (burgername, callback) {
        orm.insert("burger", "burger_name,eaten", `"${burgername}",false`, function (res) {
            callback(res);
        });
    },
    eatBurger: function (burgerId, callback) {
        orm.edit("burger", "eaten", "true", "burger_id", burgerId, function (res) {
            callback(res);
        });
    },
    deleteBurger: function (id, callback) {
        orm.delete("burger", "burger_id", id, function (res) {
            callback(res)
        })
    }
}
module.exports = burg



