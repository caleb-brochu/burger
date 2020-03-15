const connection = require("../config/connection.js");


const orm = {
    selectAll: function(tableName, cb){
        let queryString = "SELECT * FROM " + tableName;
        connection.query(queryString, function(err, result){
           if (err) throw err;
           cb(result);
        });
    },
    insertOne: function(tableName, data, cb){
        let queryString = `INSERT INTO ` + tableName;
        queryString += `(burger_name, devoured)`;
        queryString += `VALUE (?,?)`;

        connection.query(queryString, data, function(err, result){
            if (err) throw err;
            cb(result)
        });

    },
    updateOne: function(tableName, obj, condition, cb){
        // console.log(obj);
        // console.log(obj.devoured)
        let queryString = `UPDATE ` + tableName;
        queryString += ` SET devoured = ${obj.devoured} WHERE ${condition}`;

        connection.query(queryString, function(err, result){
            if (err) throw err;
            cb(result)
        });
    }
};

module.exports = orm;