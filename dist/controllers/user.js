"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

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
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(error, results) {
      var fistName, lastName, email;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (results.length > 0) {
                fistName = results[0].first_name;
                lastName = results[0].last_name;
                email = results[0].email;
                db.query('SELECT * FROM users_rols WHERE user_r_fk= ?', [id], /*#__PURE__*/function () {
                  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(error, results) {
                    var rols;
                    return _regenerator["default"].wrap(function _callee$(_context) {
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