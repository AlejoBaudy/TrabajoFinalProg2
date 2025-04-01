const express = require("express")
const router = express.Router();
const headerLogueadoController = require('../controllers/headerLogueadoController');

router.get('/', headerLogueadoController.headerLogueado);

module.exports= router