const express = require("express");
const router = express.Router();
const comentarioController = require("../controllers/comentarioController");

router.post("/agregar", comentarioController.agregar);

module.exports = router;