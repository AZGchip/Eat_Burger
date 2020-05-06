const connect = require("./connection");

const orm = {
    selectAll: function(table){
        let queryString = "SELECT * FROM ??";
        connect.query(queryString,[table],function(err,result){
            if (err) throw err;
            return result;
        })
    },
    insert: function(burgerName){
        let queryString = "INSERT INTO burger(burger_id,eaten) VALUES (??,false)"
        connect.query(queryString,[burgerName], function(err,result){
            if(err)throw err;
            return result;
        })
    },
    edit: function(boolian,burger_id){
        let queryString = "UPDATE burger SET eaten = ?? [WHERE burger_id = ??];";
        connect.query(queryString,[boolian,burger_id],function(err,result){
            if (err)throw err;
            return result;
        })
    },
}
module.exports = orm;