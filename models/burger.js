var orm = require("../config/orm");

//select all from table
orm.selectAll("burger");

//insert un eaten burger
orm.insert("burgername");

//change boolian of matching id
orm.edit(1,true);

