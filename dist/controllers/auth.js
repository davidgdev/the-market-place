"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, email, password;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _req$body = req.body, email = _req$body.email, password = _req$body.password;

            if (!(!email || !password)) {
              _context2.next = 4;
              break;
            }

            return _context2.abrupt("return", res.status(400).res.send("Please provide an email and password"));

          case 4:
            db.query('SELECT * FROM users WHERE email = ?', [email], /*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(error, results) {
                var id, token, cookieOptions;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        console.log(results);
                        _context.t0 = !results;

                        if (_context.t0) {
                          _context.next = 6;
                          break;
                        }

                        _context.next = 5;
                        return bcrypt.compare(password, results[0].password);

                      case 5:
                        _context.t0 = !_context.sent;

                      case 6:
                        if (!_context.t0) {
                          _context.next = 10;
                          break;
                        }

                        res.status(401).send('Email or Password is incorrect');
                        _context.next = 16;
                        break;

                      case 10:
                        id = results[0].id;
                        token = jwt.sign({
                          id: id
                        }, process.env.JWT_SECRET, {
                          expiresIn: process.env.JWT_EXPIRES_IN
                        });
                        console.log("The token is: " + token);
                        cookieOptions = {
                          expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
                          httpOnly: true
                        };
                        res.cookie('jwt', token, cookieOptions); //res.status(200).redirect("/");

                        res.status(401).json({
                          "status": 200,
                          "message:": 'User Login',
                          "token": token
                        });

                      case 16:
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
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.register = function (req, res) {
  console.log(req.body);
  var _req$body2 = req.body,
      first_name = _req$body2.first_name,
      last_name = _req$body2.last_name,
      email = _req$body2.email,
      password = _req$body2.password,
      passwordConfirm = _req$body2.passwordConfirm;
  db.query('SELECT email FROM users WHERE email = ?', [email], /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(error, results) {
      var hashedPassword;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (error) {
                console.log(error);
              }

              if (!(results.length > 0)) {
                _context3.next = 5;
                break;
              }

              return _context3.abrupt("return", res.json({
                "error": {
                  "message": 'That email is already in use'
                }
              }));

            case 5:
              if (!(password !== passwordConfirm)) {
                _context3.next = 7;
                break;
              }

              return _context3.abrupt("return", res.send('Passwords do not match'));

            case 7:
              _context3.next = 9;
              return bcrypt.hash(password, 8);

            case 9:
              hashedPassword = _context3.sent;
              console.log(hashedPassword);
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
                  return res.json({
                    "status": 200,
                    "message:": 'User registered'
                  });
                }
              });

            case 12:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }());
};