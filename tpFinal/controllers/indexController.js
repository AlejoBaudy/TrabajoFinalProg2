const Usuarios = require("../db/usuarios")
const indexController ={
    index: function(req,res){
      res.render('header', {productos: Usuarios.productos});
    }
  }
  module.exports = indexController