"use strict";

var express = require("express");

var mysql = require("mysql");

var dotenv = require('dotenv');

var cors = require('cors');

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
var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
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
app.use('', require('./routes/index'));
app.use('/auth', require('./routes/auth'));
app.use('/rol', require('./routes/rol'));
app.use('/user', require('./routes/user'));
app.use('/payment', require('./routes/pay'));
app.listen(port, function () {
  console.log("Server started on Port ".concat(port));
});