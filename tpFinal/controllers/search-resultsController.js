const express = require("express")
const router = express.Router();
const searchResultsController = require('../controllers/search-resultsControllers');

router.get('/', searchResultsController.searchResults);


module.exports= router