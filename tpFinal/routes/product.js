const express = require("express");
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.product);
router.get('/add', productController.productAdd);
router.get('/search', productController.searchResults);

module.exports = router;

