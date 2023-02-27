const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://Akshay:Akshay123@cluster0.vp22rus.mongodb.net/Ecommerce1")
const Schema=mongoose.Schema
const ProductSchema=new Schema({

     
productname:{type:String},
description:{type:String},
categoryid:{type:Schema.Types.ObjectId,ref:"categorydata"},
price:{type:Number},
brand:{type:Schema.Types.ObjectId,ref:"branddata"},
expirydate:{type:String},
image:{type:String},


})

var Productdata=mongoose.model('productdata',ProductSchema)
module.exports=Productdata







