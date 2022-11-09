// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('cake', { title: 'Search Results Cake' });
// });

// module.exports = router;
var express = require('express'); 
const cake_controlers= require('../controllers/cake'); 
var router = express.Router(); 
 /* GET costumes */ 
router.get('/', cake_controlers.cake_view_all_Page ); 
module.exports = router; 