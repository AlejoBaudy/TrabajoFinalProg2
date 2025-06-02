const Usuarios = require("../db/usuarios");
let db = require("../database/models");
let op = db.Sequelize.Op;

const productController = {
    product: function(req, res) {
        let id = req.params.id;
        db.Producto.findByPk(id, {
            include: [
                { association: "usuarios" },
                {
                    association: "Comentario",
                    include: [{ association: "autor" }]
                }
            ]
        })
        .then(function(resultados) {
            return res.render("productDetalle", {
                producto: resultados,
                datosUsuario: req.session.datosusuario
            });
        });
    },

    productAdd: function(req, res) {
        res.render('product-add', {
            nombreUsuario: Usuarios.usuario.Usuario
        });
    },

    process: function(req, res) {
        db.Producto.create({
            Archivo: req.body.Imagenusuario,
            Producto: req.body.Productousuario,
            descripcion: req.body.DescripcionUsuario,
            idUsuario: req.session.datosUsuario.id
        })
        .then(() => {
            if (req.body.boton !== undefined) {
                return res.redirect("/");
            }
        })
        .catch(err => res.send("Error al crear el producto: " + err));
    },

    searchResults: function(req, res) {
        db.Producto.findAll({
            where: {
                Producto: { [op.like]: `%${req.query.search}%` }
            },
            include: [
                { association: "usuarios" },
                {
                    association: "Comentario",
                    include: [{ association: "autor" }]
                }
            ]
        })
        .then(function(resultado) {
            if (resultado.length === 0) {
                return res.send("No se encontraron resultados");
            }

            res.render("search-results", {
                dato: resultado
            });
        });
    }
};

module.exports = productController;
