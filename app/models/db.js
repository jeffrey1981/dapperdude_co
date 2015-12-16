var mongoose = require('mongoose');
var variantSchema = new mongoose.Schema({
  size: String
});

var productSchema = new mongoose.Schema({
  title:    String,
  price:   Number,
  variants: [variantSchema]
});

var collectionSchema = new mongoose.Schema({
  title: String,
  titlePermalink: String,
  categoryPermalink: String,
  category: String,
  products: [productSchema]
});

var Collection = mongoose.model('Collection', collectionSchema);

module.exports = Collection;
