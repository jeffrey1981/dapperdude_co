var Collection = require("../models/db.js");

var getCategory = function(req, res, next) {
  Collection.find({categoryPermalink: req.params.permalink},
   function(err, collections) {
    res.json(collections);
   });
};

module.exports = {getCategory: getCategory};