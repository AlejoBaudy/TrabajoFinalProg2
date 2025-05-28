const nombre = require("../db/usuarios");
const db = require("../database/models");
let bcrypt = require ('bcryptjs');
const profileController = {
    profile: function(req, res) {
        id= req.params.id
        db.Producto.findAll({
            where: {idUsuario:id}
        })
        .then(function(productosUsuario){
                 res.render('profile', {
                    total: productosUsuario.length,
                    usuario: id,
                    productos: productosUsuario
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


            console.log(password);
           


            let passwordEncriptada = bcrypt.hashSync(password, 10);


            console.log("encriptada:" + password);


            db.Usuario.create({
                name: nombre,
                email: email,
                contrasenia: passwordEncriptada,
                dni: dni,
                fecha: fecha,
                foto: foto
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