const express = require('express');
const payController = require('../controllers/pay');

const router = express.Router();
          
router.post('/process', payController.process);


module.exports = router;