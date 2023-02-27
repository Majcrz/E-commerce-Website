const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://Akshay:Akshay123@cluster0.vp22rus.mongodb.net/Ecommerce1")
const Schema=mongoose.Schema
const CategorySchema=new Schema({

     
categoryname:{type:String},
description:{type:String},
categoryimage:{type:String},


})

var Categorydata=mongoose.model('categorydata',CategorySchema)
module.exports=Categorydata