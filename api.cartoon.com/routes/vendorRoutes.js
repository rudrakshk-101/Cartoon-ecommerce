const express = require('express');
const router = express.Router();
const vendorController = require('../controllers/vendorController');

router.post('/register',vendorController.register);
router.post('/login',vendorController.login);

module.exports = router;