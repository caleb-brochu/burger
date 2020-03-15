const orm = require('../config/orm.js');


const burgers = {
    all: function(cb){
        orm.selectAll("burger", function(res){
            cb(res);
        })
    },
    create: function(data, cb){
        console.log(data);
        orm.insertOne("burger", data, function(res){
            cb(res);
        })
    },
    update: function(objColVals, condition, cb){
        orm.updateOne("burger", objColVals, condition, function(res){
            cb(res);
        })
    }
} 
module.exports = burgers;