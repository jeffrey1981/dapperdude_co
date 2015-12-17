var Collection = require("../models/collection.js");
var index = function(req, res, next) {
  Collection.find({}, function(err, collections){
    res.json(collections);
  });
};

module.exports = {index: index};
