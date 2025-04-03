const express = require("express");
const nombre = require("../db/usuarios");


const profileController ={
    profile: function(req,res){
      nombreUsu = nombre.usuario.Usuario
      emailUsu = nombre.usuario.Email
      fotoUsu = nombre.usuario.Foto
      res.render('profile', {
        nombreUsuario: nombreUsu,
        emailUsuario: emailUsu,
        fotoUsuario: fotoUsu
      })
    }
  };
  module.exports = profileController;