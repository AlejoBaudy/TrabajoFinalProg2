const express = require("express")
const router = express.Router();
const profileController = require('../controllers/profileController');

router.get('/', profileController.profile);
router.get('/header', profileController.headerLogueado);
router.get('/login', profileController.login);
router.post('/login'. profileController.loginVerificado)
router.get('/register', profileController.register);
router.get("/logout", usersController.logout)


module.exports= router