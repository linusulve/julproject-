const express = require('express');
const path = require('path');
const mysql = require('mysql');
const bodyParser = require('body-parser')
const data = require('select.js')
const app = express();
const port = 3000
const connect = require('select.js');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "jul"

});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected");
  cont.query("CREATE DATABASE jul", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});

app.use('/static', express.static ('public'));

app.get("/", function(req, res){
  res.render(__dirname + "index.html",{
    ruslt: data.result
  });
});

app.get("/random", function(req, res){
  res.render(__dirname + "/chrismaspresent.ejs",{
    x: x = Math.floor(Math.random() * 15),
    connect: connect.result
  });
});

app.listen(port, () => console.log('Example app listening on port ${port}!'))
