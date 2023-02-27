const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://Akshay:Akshay123@cluster0.vp22rus.mongodb.net/Ecommerce1")
const Schema=mongoose.Schema
const LoginSchema=new Schema({

     
      username:String,
      password:String,
      role:String,



})



var logindata=mongoose.model('logindata',LoginSchema)
module.exports=logindata