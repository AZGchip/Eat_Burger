//required variables
const sql = require("mysql");

// lets heroku set the port. otherwise it is 7500
const PORT = process.env.PORT || 7500;

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

exports = connection