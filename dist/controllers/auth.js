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

exports.login = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _req$body, email, password;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _req$body = req.body, email = _req$body.email, password = _req$body.password;

            if (!(!email || !password)) {
              _context3.next = 4;
              break;
            }

            return _context3.abrupt("return", res.status(400).res.json({
              "error": {
                "message": 'Please provide an email and password'
              }
            }));

          case 4:
            db.query('SELECT * FROM users WHERE email = ?', [email], /*#__PURE__*/function () {
              var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(error, results) {
                var id;
                return _regenerator["default"].wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.t0 = !results;

                        if (_context2.t0) {
                          _context2.next = 5;
                          break;
                        }

                        _context2.next = 4;
                        return bcrypt.compare(password, results[0].password);

                      case 4:
                        _context2.t0 = !_context2.sent;

                      case 5:
                        if (!_context2.t0) {
                          _context2.next = 9;
                          break;
                        }

                        res.status(401).json({
                          "error": {
                            "message": 'Email or Password is incorrect'
                          }
                        });
                        _context2.next = 11;
                        break;

                      case 9:
                        id = results[0].id_u;
                        db.query('SELECT * FROM users_rols WHERE user_r_fk= ?', [id], /*#__PURE__*/function () {
                          var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(error, results) {
                            var rols, token, cookieOptions;
                            return _regenerator["default"].wrap(function _callee$(_context) {
                              while (1) {
                                switch (_context.prev = _context.next) {
                                  case 0:
                                    rols = [];
                                    results.forEach(function (element) {
                                      return rols.push(element.rol_u_r_fk);
                                    });
                                    token = jwt.sign({
                                      id: id,
                                      rols: rols
                                    }, process.env.JWT_SECRET, {
                                      expiresIn: process.env.JWT_EXPIRES_IN
                                    });
                                    cookieOptions = {
                                      expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
                                      httpOnly: true
                                    };
                                    res.cookie('jwt', token, cookieOptions);
                                    res.status(200).json({
                                      "status": 200,
                                      "message:": 'User Login',
                                      "id": id,
                                      "token": token
                                    });

                                  case 6:
                                  case "end":
                                    return _context.stop();
                                }
                              }
                            }, _callee);
                          }));

                          return function (_x5, _x6) {
                            return _ref3.apply(this, arguments);
                          };
                        }());

                      case 11:
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
            _context3.next = 10;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.register = function (req, res) {
  var _req$body2 = req.body,
      first_name = _req$body2.first_name,
      last_name = _req$body2.last_name,
      email = _req$body2.email,
      password = _req$body2.password,
      passwordConfirm = _req$body2.passwordConfirm,
      rol_id = _req$body2.rol_id;
  db.query('SELECT email FROM users WHERE email = ?', [email], /*#__PURE__*/function () {
    var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(error, results) {
      var hashedPassword;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (error) {
                console.log(error);
              }

              if (!(results.length > 0)) {
                _context4.next = 5;
                break;
              }

              return _context4.abrupt("return", res.json({
                "error": {
                  "message": 'That email is already in use'
                }
              }));

            case 5:
              if (!(password !== passwordConfirm)) {
                _context4.next = 7;
                break;
              }

              return _context4.abrupt("return", res.json({
                "error": {
                  "message": 'Passwords do not match'
                }
              }));

            case 7:
              _context4.next = 9;
              return bcrypt.hash(password, 8);

            case 9:
              hashedPassword = _context4.sent;
              console.log(hashedPassword);

              if (!(Array.isArray(rol_id) != false)) {
                _context4.next = 15;
                break;
              }

              db.query('INSERT INTO users SET ?', {
                first_name: first_name,
                last_name: last_name,
                email: email,
                password: hashedPassword
              }, function (error, results) {
                if (error) {
                  console.log(error);
                } else {
                  console.log(results);
                  var newRol = [];
                  var id_user = results.insertId;

                  var _rol_id = rol_id.forEach(function (rol_id) {
                    db.query('INSERT INTO users_rols SET ?', {
                      rol_u_r_fk: rol_id,
                      user_r_fk: id_user
                    }, function (error, results) {
                      if (error) {
                        console.log(error);
                      } else {
                        console.log("dato insertado tabla users_rols");
                      }
                    });
                  });

                  return res.json({
                    "status": 200,
                    "message:": 'User registered'
                  });
                }
              });
              _context4.next = 16;
              break;

            case 15:
              return _context4.abrupt("return", res.json({
                "error": {
                  "message": 'Error de ID'
                }
              }));

            case 16:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function (_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  }());
};