/*databas.js*/

var mysql = require('mysqpl')
var con = mysql.createConnection({
host: "localhost",
user: "root",
password: "",
database: "newDataBase"
});

con.connect(function(err) {
if (err) throw err;
console.log("Anslutningen Lycakades!");
var sql = "CREATE TABLE christmaspresent (name VARCHAR(255), christmaspresent VARCHAR(255), link VARCHAR(255))";
con.query(sql, function (err, result) {
if (err) throw err;
console.log("Table was succesfully made");
});
});
