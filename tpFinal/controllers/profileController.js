const nombre = require("../db/usuarios");
const db = require("")
const profileController = {
    profile: function(req, res) {
        nombreUsu = nombre.usuario.Usuario;
        emailUsu = nombre.usuario.Email;
        fotoUsu = nombre.usuario.Foto;
        producto1 = nombre.productos;
        res.render('profile', {
            nombreUsuario: nombreUsu,
            emailUsuario: emailUsu,
            fotoUsuario: fotoUsu,
            productos: producto1
        });
    },
    login: function(req, res){
       res.render('login')
    },
    loginVerificado: function(req, res){


        for (let i=0; i < Usuarios[i].Email.length; i++){
            if (req.body.emailusuario != db.Usuarios[i].email){
                res.send("El email no fue encontrado en la base de datos. Por favor, intente de nuevo.")
            } else{
                if(req.body.contraseñausuario != db.Usuarios[i].password){
                    res.send("Contraseña incorrecta. Por favor, intente de nuevo.")
                } else{
                    res.redirect('index')
                }
            }
        }
    },
    register: function(req, res) {
        res.render('register', {
            nombreUsuario: nombre.usuario.Usuario
        });
    },
    headerLogueado: function(req, res) {
        res.render('headerLogueado', {
            nombreUsuario: nombre.usuario.Usuario
        });
    }
};

module.exports = profileController;
