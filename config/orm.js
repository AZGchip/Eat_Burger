//import
const connect = require("./connection");

const orm = {
    // selects all from given table
    selectAll: function(table,callback){
        let queryString = `SELECT * FROM ${table}`;
        connect.query(queryString,[table],function(err,result){
            if (err) {throw err};
            callback(result);
        })
    },
    // inserts into given table the given values
    insert: function(table,tableVal,values,callback){
        let queryString = `INSERT INTO ${table}(${tableVal}) VALUES (${values})`
        connect.query(queryString, function(err,result){
            if(err){throw err};
            callback(result);
        })
    },
    // edits a specified table row
    edit: function(table,column,value,id,idVal,callback){
        let queryString = `UPDATE ${table} SET ${column} = ${value} WHERE ${id} = ${idVal};`;
        connect.query(queryString,function(err,result){
            if (err)throw err;
           callback(result);
        })
    },
    // deletes a specified row
    delete:function(table,tableVal,id,callback){
        let queryString = `DELETE FROM ${table} WHERE ${tableVal}=${id}`;
        connect.query(queryString,function(err,result){
            if (err)throw err;
            callback(result);
        })
    }
};
// export
module.exports = orm;