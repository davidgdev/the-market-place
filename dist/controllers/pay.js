"use strict";

var mysql = require("mysql");

var db = mysql.createPool({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE
});

exports.process = function (req, resul) {
  var _req$body = req.body,
      type = _req$body.type,
      quantity = _req$body.quantity,
      total = _req$body.total,
      id_b = _req$body.id_b,
      id_p = _req$body.id_p;
  db.query("SELECT * FROM  products WHERE id_p=".concat(id_p), function (err, res) {
    var name = res[0].name_p;
    var id_s = res[0].user_fk;

    if (res[0].stock > 0 && res[0].stock - quantity >= -1) {
      db.query('INSERT INTO payments SET ?', {
        name_pa: name,
        type_pa: type,
        quantity: quantity,
        total: total
      }, function (error, results) {
        if (error) {
          console.log(error);
        } else {
          var id_payment = results.insertId;
          console.log(id_payment);
          db.query('INSERT INTO buys SET ?', {
            user_seller: id_s,
            user_buyer: id_b,
            product_b_fk: id_p,
            payment_fk: id_payment
          }, function (error, results) {
            if (error) {
              console.log(error);
            } else {
              console.log("dato insertado tabla buys");
              db.query("UPDATE products SET stock=stock - ".concat(quantity, " WHERE id_p=").concat(id_p), function (error, results) {
                console.log("stock actualizado");
                return resul.json({
                  "status": 200,
                  "message:": 'Payment registered'
                });
              });
            }
          });
        }
      });
    } else {
      return resul.json({
        "error": {
          "message": 'No stock available'
        }
      });
    }
  });
};