const mongoose=require('mongoose')
// mongoose.connect('mongodb+srv://Akshay:Akshay123@cluster0.vp22rus.mongodb.net/Ecommerce?retryWrites=true&w=majority')
mongoose.connect('mongodb+srv://Akshay:Akshay123@cluster0.vp22rus.mongodb.net/Ecommerce1')
const Schema=mongoose.Schema
const registrationSchema=new Schema({

      loginid:{type:Schema.Types.ObjectId,ref:"logindata"},
      name:{type:String},
      email:{type:String},
      address:{type:String},
      dob:{type:String},
      mobile:{type:String},


})



var registrationdata=mongoose.model('registrationdata',registrationSchema)
module.exports=registrationdata