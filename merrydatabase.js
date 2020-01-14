var mysql = require('mysql');
var connection = mysql.createConnection({
   host: "localhost",
   user: "root",
   password: ""
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected");
  cont.query("CREATE DATABASE merryDataBase", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});
