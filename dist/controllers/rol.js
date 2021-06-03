"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var mysql = require("mysql");

var jwt = require('jsonwebtoken');

var bcrypt = require('bcryptjs');

var db = mysql.createPool({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE
});

exports.all = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            db.query("SELECT * FROM rols", function (err, result, fields) {
              if (err) throw err;
              res.json(result);
            });

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.create = function (req, res) {
  console.log(req.body);
  var _req$body = req.body,
      name = _req$body.name,
      description = _req$body.description;
  db.query('SELECT name_r FROM rols WHERE name_r = ?', [name], /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(error, results) {
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (error) {
                console.log(error);
              }

              if (!(results.length > 0)) {
                _context2.next = 3;
                break;
              }

              return _context2.abrupt("return", res.json({
                "error": {
                  "message": 'That rol is already in use'
                }
              }));

            case 3:
              db.query('INSERT INTO rols SET ?', {
                name_r: name,
                description_r: description
              }, function (error, results) {
                if (error) {
                  console.log(error);
                } else {
                  console.log(results);
                  return res.json({
                    "status": 200,
                    "message:": 'Rol registered'
                  });
                }
              });

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }());
};