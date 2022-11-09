var Cake = require('../models/cake'); 
 
// List of all Costumes 
exports.cake_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Cake list'); 
}; 
 
// for a specific Costume. 
exports.cake_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Cake detail: ' + req.params.id); 
}; 
 
// Handle Costume create on POST. 
exports.cake_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Cake create POST'); 
}; 
 
// Handle Costume delete form on DELETE. 
exports.cake_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Cake delete DELETE ' + req.params.id); 
}; 
 
// Handle Costume update form on PUT. 
exports.cake_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Cake update PUT' + req.params.id); 
}; 