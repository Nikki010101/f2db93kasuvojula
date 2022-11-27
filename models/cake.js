const mongoose = require("mongoose") 
const cakeSchema = mongoose.Schema({ 
 flavour:{
    type:String,
    maxlength:13
 } ,
 price: Number, 
 shape:{
    type:String,
    minlength:3
 }
 
}) 
 
module.exports = mongoose.model("Cake", 
cakeSchema) 