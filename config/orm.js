const connect = require("./connection");

const orm = {
    selectAll: function(table,callback){
        let queryString = `SELECT * FROM ${table}`;
        connect.query(queryString,[table],function(err,result){
            if (err) {throw err};
            callback(result)
        })
    },
    insert: function(table,tableVal,values,callback){
        let queryString = `INSERT INTO ${table}(${tableVal}) VALUES (${values})`
        connect.query(queryString, function(err,result){
            if(err){throw err};
            callback(result)
        })
    },
    edit: function(table,column,value,id,idVal,callback){
        let queryString = `UPDATE ${table} SET ${column} = ${value} WHERE ${id} = ${idVal};`;
        connect.query(queryString,function(err,result){
            if (err)throw err;
           callback(result)
        })
    },
};
module.exports = orm;