const Usu = require("../db/usuarios");
const db = require("../database/models");

const indexController = {
    index: function(req, res) {
      
               db.Producto.findAll({
                include:[{association: 'usuarios'},
                {association: 'Comentarios'}
                ]
               })
                .then(function(producto){
                    res.render('index', {productos: producto });
                })
                .catch(function(error){
                    console.log(error);
                })
            }
    };

module.exports = indexController;
