const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://Akshay:Akshay123@cluster0.vp22rus.mongodb.net/Ecommerce1")
const Schema=mongoose.Schema
const BrandSchema=new Schema({

     
brandname:{type:String},
categoryid:{type:Schema.Types.ObjectId,ref:"categorydata"},
description:{type:String},
brandimage:{type:String},


})

var Branddata=mongoose.model('branddata',BrandSchema)
module.exports=Branddata