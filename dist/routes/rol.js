"use strict";

var express = require('express');

var rolController = require('../controllers/rol');

var router = express.Router();
router.post('/create', rolController.create);
router.get('', rolController.all);
module.exports = router;