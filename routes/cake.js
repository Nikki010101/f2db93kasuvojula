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
//router.get('/', cake_controlers.cake_view_all_Page ); 
//module.exports = router; 
// GET request for one costume. 
//router.get('/cake/:id', cake_controlers.cake_detail); 
router.get('/detail', cake_controlers.cake_view_one_Page);
//router.get('/update', cake_controlers.cake_update_Page); 
//router.get('/delete', cake_controlers.cake_delete_Page); 
//router.get('/create', cake_controlers.cake_create_Page);  
module.exports = router;
/* GET detail costume page */ 
