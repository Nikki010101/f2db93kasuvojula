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
//exports.cake_detail = function(req, res) { 
//    res.send('NOT IMPLEMENTED: Cake detail: ' + req.params.id); 
//}; 
// for a specific Costume. 
exports.cake_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Cake.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
 
// Handle Costume create on POST. 
// Handle Costume create on POST. 
exports.cake_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Cake(); 
    document.flavour = req.body.flavour; 
    document.price = req.body.price; 
    document.shape = req.body.shape; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

 
// Handle Costume delete form on DELETE. 
exports.cake_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Cake delete DELETE ' + req.params.id); 
}; 
 
// Handle Costume update form on PUT. 
//exports.cake_update_put = function(req, res) { 
 //   res.send('NOT IMPLEMENTED: Cake update PUT' + req.params.id); 
//}; 
// Handle Costume update form on PUT. 
exports.cake_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Cake.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.flavour)  
               toUpdate.flavour = req.body.flavour; 
        if(req.body.price) toUpdate.price = req.body.price; 
        if(req.body.shape) toUpdate.shape = req.body.shape; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 