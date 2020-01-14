var mysql = require('mysql');
var fs = mysql.createConnection({
  host: "locarhost",
  user: "root",
  password: "",
  database: "jul"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("connected");
  con.query("SELECT * from jul", function (err, resylt, fields) {
    if (err) throw err;
    console.log(result);
    module.export.result = result;
  });
});
