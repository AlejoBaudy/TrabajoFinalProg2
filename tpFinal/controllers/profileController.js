const nombre = require("../db/usuarios");
const db = require("../database/models");
let bcrypt = require ('bcryptjs');
const profileController = {
    profile: function(req, res) {
        if (req.session.datosUsuario == undefined) {
            return res.redirect("/");
        }
    
        let id = req.params.id;
    
        db.Producto.findAll({
            where: { idUsuario: id },
            include: [
                {
                    association: "Comentario",
                    include: [{ association: "autor" }]
                }
            ]
        })
        .then(function(productosUsuario) {
            db.Usuario.findByPk(id)
            .then(function(datosUsuario) {
                res.render('profile', {
                    total: productosUsuario.length,
                    productos: productosUsuario,
                    Usuario: datosUsuario
                });
            });
        });
    },
    
    
    register: function(req, res) {
        if(req.session.datosUsuario != undefined){
        return res.redirect("/")
       } else {
        return res.render('register');
       }
       
    },
    create: function(req, res) {
    let nombre = req.body.nombre;
    let email = req.body.email;
    let password = req.body.password;
    let dni = req.body.Dni;
    let fecha = req.body.fecha;
    let foto = req.body.FotoPerfil
    if (password === "") {
        return res.send("La contraseña no puede estar vacía");
    }
    if (password.length < 3) {
        return res.send("La contraseña debe tener mínimo 3 caracteres");
    }
    db.Usuario.findOne({ where: { email: email } })
        .then(function(usuarioExistente) {
            if (usuarioExistente) {
                return res.send("El email ya está registrado");
            }
            db.Usuario.findOne({ where: { Dni: dni } })
            .then(function(dniExistente){
                if(dniExistente){
                    return res.send("El dni ya está registrado");
                }
            })
            let passwordEncriptada = bcrypt.hashSync(password, 10);
            db.Usuario.create({
                nombre: nombre,
                email: email,
                contrasenia: passwordEncriptada,
                dni: dni,
                fecha: fecha,
                FotoPerfil: foto,
            })
            .then(function() {
                return res.redirect("/");
            });
        });
},
    login: function(req, res){
       if(req.session.datosUsuario != undefined){
        return res.redirect("/")
       } else {
        return res.render("login")
       }
    },


loginVerificado: function(req, res){
    let email = req.body.emailusuario;
    let password = req.body.passwordusuario;


    db.Usuario.findOne({
        where: { email: email }
    })
    .then(function(usuarioEncontrado){
        console.log(usuarioEncontrado);
       
        if(!usuarioEncontrado){
            return res.send("Email no encontrado");
        }


        let passwordCorrecta = bcrypt.compareSync(password, usuarioEncontrado.contrasenia);
        if(!passwordCorrecta){
            return res.send("Contraseña incorrecta");
        }


        req.session.datosUsuario = usuarioEncontrado;


        if(req.body.recordarmeUsuario != undefined){
            res.cookie("datos", usuarioEncontrado, { maxAge: 1000 * 60 * 15 });
        }


        return res.redirect("/");
    });
},
 
    logout: function(req,res){
        req.session.destroy()
        res.clearCookie("datos")


        res.redirect("/profile/login")
    }
};


module.exports = profileController;