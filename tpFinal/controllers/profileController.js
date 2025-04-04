const nombre = require("../db/usuarios");

const profileController = {
    profile: function(req, res) {
        nombreUsu = nombre.usuario.Usuario;
        emailUsu = nombre.usuario.Email;
        fotoUsu = nombre.usuario.Foto;
        producto1 = nombre.productos;
        res.render('profile', {
            nombreUsuario: nombreUsu,
            emailUsuario: emailUsu,
            fotoUsuario: fotoUsu,
            productos: producto1
        });
    },
    login: function(req, res) {
        res.render('login', {
            nombreUsuario: nombre.usuario.Usuario
        });
    },
    register: function(req, res) {
        res.render('register', {
            nombreUsuario: nombre.usuario.Usuario
        });
    },
    headerLogueado: function(req, res) {
        res.render('headerLogueado', {
            nombreUsuario: nombre.usuario.Usuario
        });
    }
};

module.exports = profileController;
