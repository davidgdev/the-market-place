"use strict";

var express = require('express');

var payController = require('../controllers/pay');

var router = express.Router();
router.post('/process', payController.process);
module.exports = router;