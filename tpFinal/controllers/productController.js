const Usuarios = require("../db/usuarios");
let db = require("../database/models")
let op = db.Sequelize.Op
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
    process:function(req,res){
        db.Producto.create({
            Archivo: req.body.Imagenusuario,
            Producto: req.body.Productousuario,
            descripcion: req.body.DescripcionUsuario,
            idUsuario: req.session.datosUsuario.id
        })
        if(req.body.boton != undefined){
                return res.redirect("/")
            }
    },
    searchResults: function(req, res) {
        db.Producto.findAll({
            where: {
                Producto: {[op.like]: `%${req.query.search}`}
            }
        }
        )
        .then(function(resultado) { 
            if (resultado.length === 0) {
                res.render("search-results", {
                    dato: [],
                    mensaje: "No se encontró ningún resultado."
                });
            } else {
                res.render("search-results", {
                    dato: resultado,
                    mensaje: null
                });
            }
        })
    },        

   
};

module.exports = productController;

