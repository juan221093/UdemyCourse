const express = require('express');
const router = express.Router();
const {time} =require('../controllers/utilitiesApp');

router.get('/', time); 

module.exports = router;