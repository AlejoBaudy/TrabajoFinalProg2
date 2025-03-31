const express = require("express")
const router = express.Router();
const profileController = require('../controllers/profileControllers');

router.get('/', profileController.profile);


module.exports= router