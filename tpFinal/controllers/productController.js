const Usuarios = require("../db/usuarios");

const productController = {
    product: function(req, res) {
        res.render('productDetalle', {
            producto: Usuarios.productos[1],
            nombreUsuario: Usuarios.usuario.Usuario
        });
    },
    productAdd: function(req, res) {
        res.render('product-add', {
            nombreUsuario: Usuarios.usuario.Usuario
        });
    },
    searchResults: function(req, res) {


        res.render('search-results', {
            productos: Usuarios.productos,
            nombreUsuario: Usuarios.usuario.Usuario
        });
    }
};

module.exports = productController;

