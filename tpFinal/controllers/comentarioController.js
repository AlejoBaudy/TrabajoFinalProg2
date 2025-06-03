const db = require("../database/models");
const comentarioController = {
  agregar: function(req, res) {
    if (!req.session.datosUsuario) {
      return res.redirect("/profile/login");
    }

    db.Comentario.create({
      idUsuario: req.session.datosUsuario.id,
      idProduct: req.body.idProduct,
      Comentario: req.body.comentario,
 
    })
    .then(function() {
      res.redirect("/product/detalle/" + req.body.idProduct);
    })
    .catch(function(error) {
      console.log(error);
      res.send("Error al guardar el comentario");
    });
  }
};

module.exports = comentarioController;