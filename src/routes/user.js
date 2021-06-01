const express = require('express');
const userController = require('../controllers/user');

const router = express.Router();
          

router.get('/:id',userController.infouser);

module.exports = router;