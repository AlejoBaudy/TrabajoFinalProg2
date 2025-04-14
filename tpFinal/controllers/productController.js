const Usuarios = require("../db/usuarios");

const productController = {
    product: function(req, res) {
        res.render('product', {
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
        const productos1 = [
            {
                id: 1,
                Imagen: "/images/products/img-tv-samsung-smart.jpg",
                Producto: "Television Samsung Smart",
                Descripcion: "70 pulgadas"
            },
            {
                Imagen: "/images/products/img-samsung-galaxy-s10.jpg",
                id: 2,
                Producto: "Telefono Samsung Galaxy S10",
                Descripcion: "Telefono de ultima generacion"
            },
            {
                Imagen: "/images/products/img-macbook-pro-2019.jpg",
                id: 3,
                Producto: "Macbook Pro",
                Descripcion: "Año 2019, usada, bateria en muy buen estado"
            }
        ];

        res.render('search-results', {
            productos1: productos1,
            nombreUsuario: Usuarios.usuario.Usuario
        });
    }
};

module.exports = productController;

