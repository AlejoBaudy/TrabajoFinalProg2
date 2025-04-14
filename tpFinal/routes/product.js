const express = require("express");
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/detalle/:id?', productController.product);
router.get('/add', productController.productAdd);
router.get('/search', productController.searchResults);

module.exports = router;

