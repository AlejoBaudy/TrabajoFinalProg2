const express = require("express")
const router = express.Router();
const profileController = require('../controllers/profileController');

router.get('/', profileController.profile);
router.get('/', profileController.headerLogueado);
router.get('/', profileController.login);
router.get('/', profileController.register);


module.exports= router