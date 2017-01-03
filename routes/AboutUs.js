var express = require('express');
var router = express.Router();

/* GET AboutUs page. */
router.get('/', function(req, res, next) {
  res.render('AboutUs');
});

module.exports = router;