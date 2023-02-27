const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://Akshay:Akshay123@cluster0.vp22rus.mongodb.net/Ecommerce1")
const Schema=mongoose.Schema
const CartSchema=new Schema({

     
loginid:{type:Schema.Types.ObjectId,ref:"logindata"},
productid:{type:Schema.Types.ObjectId,ref:"productdata"},
quantity:{type:Number}

})

var Cartdata=mongoose.model('cartdata',CartSchema)
module.exports=Cartdata