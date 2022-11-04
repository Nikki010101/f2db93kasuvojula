var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('cake', { title: 'Search Results Cake' });
});

module.exports = router;
