const connection = require("../config/connection.js");


const orm = {
    selectAll: function(tableName, cb){
        const queryString = "SELECT * FROM " + tableName;
        connection.query(queryString, function(err, result){
           if (err) throw err;
           cb(result);
        });
    },
    insertOne: function(tableName, col, val, cb){
        const queryString = `INSERT INTO ` + tableName;
        queryString += `(burger_name, devoured)`;
        queryString += `VALUE (?,?)`;

        connection.query(queryString, [col, val], function(err, result){
            if (err) throw err;
            cb(result)
        });

    },
    updateOne: function(tableName, col, val, cb){
        const queryString = `UPDATE ` + tableName;
        queryString += `SET devoured = ? WHERE id =?`;

        connection.query(queryString,[col, val], function(err, result){
            if (err) throw err;
            cb(result)
        });
    }
};

module.exports = orm;