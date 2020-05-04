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
            return result
        })
    },
    edit: function(burgerName,boolian){
        let queryString = "UPDATE burger SET eaten = ?? [WHERE burger_name = ??];";
        connect.query(queryString,[boolian,burgerName],function(err,result){
            if (err)throw err;
            return result
        })
    },
}