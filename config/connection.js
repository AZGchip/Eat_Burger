//required variables
const sql = require("mysql");
let connection;
//MySQL connection info

// uses JawsDB if possible
if (process.env.JAWSDB_URL) {
    connection = sql.createConnection(process.env.JAWSDB_URL);
}
else {
    // else it defaults to localhost
    connection = sql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "",
        database: "burgereat",
    });
}

//Create MySQL connection
connection.connect(function (err) {
    if (err) {
        console.error("MySQL connection attempt failed. " + err.stack);
        return
    }
    console.log("connected as id " + connection.threadId)
});
// export
module.exports = connection