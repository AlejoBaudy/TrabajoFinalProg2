const express = require("express")
const router = express.Router();
const productAddController = require('../controllers/product-addControllers');

router.get('/', productAddController.productAdd);


module.exports= router