const express = require('express');
const rolController = require('../controllers/rol');

const router = express.Router();
          
router.post('/create', rolController.create );

router.get('', rolController.all );

module.exports = router;