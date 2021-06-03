"use strict";

var mysql = require("mysql");

var jwt = require('jsonwebtoken');

var bcrypt = require('bcryptjs');

var db = mysql.createPool({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE
});

exports.index = function (req, res) {
  res.json({
    "status": 200,
    "message:": 'Welcome to my API'
  });
};