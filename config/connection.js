const mysql = require('mysql');
const connection;

if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
    const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Welcome2020$$",
    database:"burgers_db"
})
}
// const connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "",
//     database:"burgers_db"
// })

// connection.connect(function(err){
//     if (err) throw err;
//     console.log(`Connected as id ${connection.threadId}`)
// });

connection.connect();
module.exports = connection;