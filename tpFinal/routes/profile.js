
const express = require("express")
const router = express.Router();
const profileController = require('../controllers/profileController');


router.get('/perfil/:id', profileController.profile);
router.get('/header', profileController.headerLogueado);
router.get('/login', profileController.login);
router.post('/login', profileController.loginVerificado)
router.get('/register', profileController.register);
router.post('/newuser',profileController.create)
router.get("/logout", profileController.logout)




module.exports= router