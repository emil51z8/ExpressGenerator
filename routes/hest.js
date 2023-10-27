var express = require('express');
var router = express.Router();

/*Get hest page*/
router.get('/', function(req, res, next) {
  res.render('hest', { title: 'Hest', name: 'Emil' }); // her rendere vi hest.jade
});

module.exports = router;