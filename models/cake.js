const mongoose = require("mongoose") 
const cakeSchema = mongoose.Schema({ 
 flavour: String,
 price: Number, 
 shape: String
 
}) 
 
module.exports = mongoose.model("Cake", 
cakeSchema) 