var express = require('express');
var router = express.Router();
var collectionsController = require("../controllers/collections_controller");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ title: 'Express' });
});

router.get('/collections/:permalink', collectionsController.getCategory);
router.get('/collections', collectionsController.index);

module.exports = router;
