const Usuarios = require("../db/usuarios");

const indexController = {
    index: function(req, res) {
        res.render('index', {
            productos: Usuarios.productos,
            nombreUsuario: Usuarios.usuario.Usuario,
        });
    }
};

module.exports = indexController;
