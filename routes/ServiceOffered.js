var express = require('express');
var router = express.Router();

/* GET package3 page. */
router.get('/', function(req, res, next) {
  res.render('ServiceOffered');
});

module.exports = router;