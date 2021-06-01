"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var mysql = require("mysql");

var db = mysql.createPool({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE
});

exports.infouser = function (req, res) {
  var id = req.params.id;
  db.query('SELECT * FROM users WHERE id_u= ?', [id], /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(error, results) {
      var fistName, lastName, email;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (results.length > 0) {
                fistName = results[0].first_name;
                lastName = results[0].last_name;
                email = results[0].email;
                db.query('SELECT * FROM users_rols WHERE user_r_fk= ?', [id], /*#__PURE__*/function () {
                  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(error, results) {
                    var rols;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            rols = [];
                            results.forEach(function (element) {
                              return rols.push(element.rol_u_r_fk);
                            });
                            res.status(200).json({
                              "name": fistName + ' ' + lastName,
                              "email": email,
                              "rols": rols
                            });

                          case 3:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x3, _x4) {
                    return _ref2.apply(this, arguments);
                  };
                }());
              } else {
                res.status(400).json({
                  "error": {
                    "message": 'id does not exist'
                  }
                });
              }

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
};