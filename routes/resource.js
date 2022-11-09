var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var cake_controller = require('../controllers/cake'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a Costume.  
router.post('/cake', cake_controller.cake_create_post); 
 
// DELETE request to delete Costume. 
router.delete('/cake/:id', cake_controller.cake_delete); 
 
// PUT request to update Costume. 
router.put('/cake/:id', cake_controller.cake_update_put); 
 
// GET request for one Costume. 
router.get('/cake/:id', cake_controller.cake_detail); 
 
// GET request for list of all Costume items. 
router.get('/cake', cake_controller.cake_list); 
 
module.exports = router; 