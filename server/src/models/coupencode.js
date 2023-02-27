const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://Akshay:Akshay123@cluster0.vp22rus.mongodb.net/Ecommerce1")
const Schema=mongoose.Schema
const CoupenSchema=new Schema({

     
  coupen:{type:String},
  dicount:{type:Number}


})



var Coupendata=mongoose.model('Coupendata',CoupenSchema)
module.exports=Coupendata