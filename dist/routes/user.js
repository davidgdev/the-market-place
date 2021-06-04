"use strict";

var express = require('express');

var userController = require('../controllers/user');

var router = express.Router();
router.get('/:id', userController.infouser);
module.exports = router;