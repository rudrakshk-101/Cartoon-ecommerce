const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.post('/addProduct',productController.addProduct);
router.post('/findByVendor',productController.findByVendor);

module.exports = router;