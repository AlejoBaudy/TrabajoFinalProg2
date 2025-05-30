const Usuarios = require("../db/usuarios");
const db = require("../database/models");
const op = db.sequelize.Op;

const indexController = {
    index: function(req, res) {

        db.Producto.findAll()
        .then(function(producto){
             res.render('index', {productos: producto });
        })
       .catch(function(error){
        console.log(error);
        })
    }
};

module.exports = indexController;
