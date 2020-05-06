//required variables
const sql = require("mysql");

//MySQL connection info
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "burgereat",
});

//Create MySQL connection

connection.connect(function(err){
if (err){
    console.error("MySQL connection attempt failed. "+ err.stack);
    return
}
console.log("connected as id "+ connection.threadId)
});

module.exports = connection