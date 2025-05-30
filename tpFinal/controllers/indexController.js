const { Association } = require("sequelize");
const Usuarios = require("../db/usuarios");

const indexController = {
    index: function(req, res) {
      
               db.Producto.findAll({
                include:[{Association: Usuarios}]
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
