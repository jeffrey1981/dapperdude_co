var mongoose = require('../config/db.js');
var Collection = require('../models/db.js');
// console.log('wtf');
Collection.create({
  title: "Tops",
  titlePermalink: "tops",
  categoryPermalink: " men",
  category: "men",
  products: [{
    imageUrl: "",
    title: "blue shirt",
    price: 35.99,
    variants: [{ size: "M" }]
  }]
}, function(err, record) {

console.log('record created');

});
