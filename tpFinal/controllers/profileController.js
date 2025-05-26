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
      register: function(req, res) {
        res.render('register', {
            nombreUsuario: nombre.usuario.Usuario
        });
    },
    create: function(req,res){
        let passenctriptada = bcrypt.hashSync((req.body.password,10))
        db.usuario.findeOne({
            where: [{email: req.body.email}]
        })
        .then(function(response){
            if(response== true){
                res.send("email ya regristado")
            }else if(response == undefined){
                res.send("campo vacio")
            }else{
                if(req.body.password == undefined){
                    res.send("campo vacio")
                }else if(req.body.password.length<3){
                    res.send("la contraseña debe tener minimo 3 caracteres")
                }else{
                    db.usuario.create({
                        name: req.body.name,
                        email: req.body.email,
                        password: passenctriptada
                    })
                }
            }
        })
    },
    login: function(req, res){
       if(req.session.datosUsuario != undefined){
        return res.redirect("/")
       } else {
        return res.render("login")
       }
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
        if(req.session.datosUsuario != undefined){
        return res.redirect("/")
       } else {
        return res.render('register', {
            nombreUsuario: nombre.usuario.Usuario
        });
       }
        
    },
    headerLogueado: function(req, res) {
        res.render('headerLogueado', {
            nombreUsuario: nombre.usuario.Usuario
        });
    },
    logout: function(req,res){
        req.session.destroy()
        res.clearCookie("datos")

        res.redirect("/profile/login")
    }
};

module.exports = profileController;
