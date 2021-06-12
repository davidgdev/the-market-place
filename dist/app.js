"use strict";

var express = require("express");

var mysql = require("mysql");

var dotenv = require('dotenv');

var cookieParser = require('cookie-parser');

dotenv.config({
  path: './.env'
});
var app = express();
var port = process.env.PORT || 3000;
var db = mysql.createPool({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE
});
app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());
app.use(cookieParser());
db.getConnection(function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log("MYSQL Connected...");
  }
});
app.use('/auth', require('./routes/auth'));
app.listen(port, function () {
  console.log("Server started on Port ".concat(port));
});