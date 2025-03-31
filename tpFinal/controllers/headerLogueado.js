const express = require("express")
const router = express.Router();
const headerLogueadoController = require('../controllers/headerLogueado');

router.get('/', headerLogueadoController.headerLogueado);

module.exports= router