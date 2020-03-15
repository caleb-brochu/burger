const orm = require('../config/orm.js');


const burgers = {
    all: function(cb){
        orm.selectAll("burger", function(res){
            cb(res);
        })
    },
    create: function(col, val, cb){
        orm.insertOne("burger", cols, vals, function(res){
            cb(res);
        })
    },
    update: function(objColVals, condition, cb){
        orm.updateOne("burger", cols, vals, function(res){
            cb(res);
        })
    }
} 
module.exports = burgers;