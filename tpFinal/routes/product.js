const express = require("express")
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.product);
router.get('/', productController.productAdd);
router.get('/', productController.searchResults);


module.exports= router