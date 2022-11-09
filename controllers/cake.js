var Cake = require('../models/cake'); 
// List of all Costumes 
exports.cake_list = async function(req, res) { 
    try{ 
        theCakes = await Cake.find(); 
        res.send(theCakes); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
//VIEWS 
// Handle a show all view 
exports.cake_view_all_Page = async function(req, res) { 
    try{ 
        theCakes = await Cake.find(); 
        res.render('cake', { title: 'Cake Search Results', results: theCakes }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
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