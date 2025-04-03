const productController ={
    product: function(req,res){
      res.render('product')
    },
    productAdd: function(req,res){
      res.render('product-add')
    },
    searchResults: function(req,res){
      res.render('search-results')
    }
  }
  module.exports = productController