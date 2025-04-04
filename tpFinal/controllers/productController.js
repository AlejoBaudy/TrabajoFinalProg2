const Usuarios = require("../db/usuarios")

const productController ={
    product: function(req,res){
      const productoEstatico = {
        Imagen: "/images/products/lillard.jpg",
        Producto: "Camiseta Damian Lillard",
        Descripcion: "Oficial, año 2021",
        Comentarios: [
         {
            usuario: "Francisco Martini",
            texto: "Jugadorazo y excelente remera!",
            imagenPerfil: "/images/users/Foto1.jpg"
         }
        ]}
      res.render('product', {producto: productoEstatico})
    },
    productAdd: function(req,res){
      res.render('product-add')
    },
    searchResults: function(req,res){
      const productos1 = [
        {
          id: 1,
          Imagen: "/images/products/img-tv-samsung-smart.jpg",
          Producto: "Television Samsung Smart",
          Descripcion: "70 pulgadas",
          
      },{
          Imagen: "/images/products/img-samsung-galaxy-s10.jpg",
          id: 2,
          Producto: "Telefono Samsung Galaxy S10",
          Descripcion: "Telefono de ultima generacion",
          
       },{
          Imagen: "/images/products/img-macbook-pro-2019.jpg",
          id: 3,
          Producto: "Macbook Pro",
          Descripcion: "Año 2019, usada, bateria en muy buen estado",
          
       }
      ];

      res.render('search-results', {productos1: productos1})
    }
  }
  module.exports = productController