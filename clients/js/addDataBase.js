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
  var sql = "INSERT INTO merryDATABASE (name, chrismaspresent, link) VALUES ?";
  var values = [
    ['marketcrash of 2008', './pictures/marketcrash.jpg', 'https://i.ytimg.com/vi/LA90tKUiTxs/maxresdefault.jpg']
    ['Walter the dog', './pictures/walter.jpg', 'https://i.imgur.com/LApAGif.jpg']
    ['concert ticket to some bad rapper', './static/concert.jpg', 'https://previews.123rf.com/images/ogonkova/ogonkova1904/ogonkova190400001/120026472-admission-ticket-template-vector-mockup-concert-ticket-tear-off-with-colorful-art-paint-brush-modern.jpg']
    ['Prada shirt', './static/Prada.jpg', 'https://cache.net-a-porter.com/images/products/1074754/1074754_in_pp.jpg']
    ['Storror shoes', './static/Storror.jpg', 'https://www.picclickimg.com/d/l400/pict/322912910428_/Storror-TENS-Parkour-Shoe-UK-Size-9.jpg']
    ['Canon EOS 750d complete kit', './static/canoneos750d.jpg', 'https://images-na.ssl-images-amazon.com/images/I/71RHOr986GL._SY355_.jpg']
    ['Climbing kit', './static/climbingkit.jpg', 'https://www.addnature.com/dw/image/v2/BCZL_PRD/on/demandware.static/-/Sites-master-catalog-outdoor/default/dwc15b2aa1/images/945/187/781549/black-diamond-momentum-package-herr-slate-1.jpg?sw=613']
    ['Stüssy hoodie', './static/Stüssy.jpg', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/51766186_001_b?$redesign-zoom-5x$&hei=2175&qlt=80&fit=constrain']
    ['Analog camera', './static/instafilm.jpg', 'https://www.scandinavianphoto.se/globalassets/1039870.jpg?ref=AF9BD2B641&w=960&h=960&mode=max']
    ['Stüssy pants', './static/Stüssypants.jpg', 'http://www.empire-leshop.com/boutique_us/images_produits/stussy_paneltrackpant_navy_1-z.jpg']
  ];
  con.query(sql, [values], function (err, result) {
  if (err) throw err;
console.log("Number of records inserted: " + result.affectedRows);
});
});
