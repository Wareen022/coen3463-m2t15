var express = require('express');
var router = express.Router();

/* GET package3 page. */
router.get('/', function(req, res, next) {
  res.render('package3');
});

module.exports = router;