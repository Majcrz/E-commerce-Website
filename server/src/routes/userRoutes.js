const express = require('express')
var mongoose = require('mongoose')
const userRoute = express.Router()
const jwt=require('jsonwebtoken')
const logindb = require('../models/login_db')
const registrationdb = require('../models/registration_db')
const productdb = require('../models/products_db')
const categorydb = require('../models/category')
const branddb = require('../models/brands')
const cartdb = require('../models/cart')
const coupendb=require('../models/coupencode')
const bcrypt = require('bcrypt')
const { application } = require('express')
const cors = require('cors')
const jwtchecks =require('../middleware/check-auth')
userRoute.use(cors())
const { json } = require('body-parser')
const { exists } = require('../models/login_db')


userRoute.post('/register', (req, res) => {
    // console.log(req)
    bcrypt.hash(req.body.password, 8, function (err, hash) {
        if (err) {
            return res.status(404).json({
                error: true,
                success: false,
                message: "Hash error"
            })
        }

        const loginpassword = {
            username: req.body.username,
            password: hash,
            role: "user"


        }


        logindb.findOne({ username: loginpassword.username }).then((data) => {
            if (data) {
                return res.status(404).json({
                    message: "username Exists",
                    success: false,
                    error: true
                })
            }
            const checkedusername = logindb(loginpassword)
            console.log("emaaill",req.body)
            checkedusername.save().then((data) => {
                const register = {
                    loginid: data._id,
                    email: req.body.email,
                    address: req.body.address,
                    dob: req.body.dob,
                    mobile: req.body.mobile,

                }
                // registrationdb.findOne({mobile:register.mobile}).then((data)=>{
                //     if(data)
                //     {
                //         return res.status(404).json({
                //             message:"mobile Exists",
                //             success:false,
                //             error:true,
                //         })
                //     }

                //     const saveregister=registrationdb(register)
                //     saveregister.save().then((data)=>{
                //        return res.status(200).json({
                //         message:data
                //        })
                //     }).catch((err)=>{
                //         return res.status(401).json({
                //             message:err
                //            })
                //     })
                // })



                registrationdb.findOne({ mobile: register.mobile })
                    .then((dmobile) => {
                        if (!dmobile) {
                            const save_regist = registrationdb(register)
                            save_regist.save()
                                .then((regsave) => {
                                    return res.status(200).json({
                                        message: regsave,
                                        error: false,
                                        success: true
                                    })
                                }).catch((err) => {
                                    return res.status(404).json({
                                        message: "registration error",
                                        error: true,
                                    })
                                })
                        }
                        else {
                            logindb.deleteOne({ username: req.body.username })
                                .then((msg) => {
                                    return res.status(200).json({
                                        message: "number exists",
                                        error: false,
                                        success: true
                                    })
                                }).catch((err) => {
                                    return res.status(404).json({
                                        message: "login error",
                                        error: true
                                    })
                                })
                        }
                    })





            })
        })


    })

})



userRoute.post('/checkuser',(req, res) => {

    // console.log("checked",req.body.username);
    logindb.findOne({ username: req.body.username }).then((usrname) => {
        console.log(usrname);
        const value = usrname
        if (usrname == undefined) {
            return res.status(200).json({
                message: "incorrect username",
                error: true
            })
        }
        else {
            bcrypt.compare(req.body.password, usrname.password, function (err, resp) {
                if (resp === false) {
                    return res.status(200).json({
                        message: "incorrect password",
                        error: true
                    })
                }
                else {
                    console.log("asds", value._id);
                    const token=jwt.sign(
                        {
                            loginid:value._id,loginrole:value.role
                        },"akshay_secret_key",
                        
                    )
                    return res.status(200).json({

                        id: value._id,
                        role: value.role,
                        // message:"ahvdahda",
                        token:token,
                        status: true
                      
                    })
                    
                }
            });

        }

    })



})

userRoute.get('/getdetails/:id',jwtchecks,(req, res) => {

    const id = req.userData.id
    // console.log("userdata",req.userData);
    
    const check = mongoose.Types.ObjectId(id)
    registrationdb.find({ loginid: check }).then((details) => {
        return res.status(200).json({
            message: details,
            success: true
        })
    })

})

userRoute.get('/productdesc/:id', (req, res) => {
    const id = req.params.id
    const check = mongoose.Types.ObjectId(id)
    productdb.find({ _id: check }).then((details) => {
        return res.status(200).json({
            message: details,
            success: true
        })
    })
})

userRoute.post('/cart/:id/:id1', (req, res) => {
    const id = req.params.id
    const id1 = req.params.id1
    const check = mongoose.Types.ObjectId(id)
    const check1 = mongoose.Types.ObjectId(id1)
    var one=1
         
    cartdb.findOne({productid:check,loginid:check1}).then((data1)=>{
        if(data1)
        {

            return res.status(404).json({
                message: "data Exists",
                success: false,
                error: true
            })
            

         
        }
        else{

            const item5 = {
                loginid: id1,
                productid: id,
                quantity: one
            }
        
            cartdata = cartdb(item5)
            cartdata.save().then((data) => {
                return res.status(200).json({
                    message: "cart added"
                })
            })

           

        }
    })
 

})

userRoute.get('/cartitem/:id',jwtchecks ,(req, res) => {
    // console.log("cartidd",req.params)
    const id =req.userData.id
    const check = mongoose.Types.ObjectId(id)
    cartdb.aggregate([
        {
            '$lookup': {
                'from': 'productdatas',
                'localField': 'productid',
                'foreignField': '_id',
                'as': 'product'
            }
        }, {
            '$lookup': {
                'from': 'logindatas',
                'localField': 'loginid',
                'foreignField': '_id',
                'as': 'logindata'
            }
        }, 
        {
            '$unwind': '$product'
        },
        {
            '$unwind': '$logindata'
        },
        {
            '$match': {
                loginid : check
            }
        },
        {
            '$group': {
                '_id': '$_id',
                'product_name': { '$first': '$product.productname' },
                'description': { '$first': '$product.description' },
                'price': { '$first': '$product.price' },
                'image': { '$first': '$product.image' },
                'username': { '$first': '$logindata.username' },
                'quantity': { '$first': '$quantity' },
                'productid': { '$first': '$product._id' },
            }
        }
    ]).then((data) => {
        return res.status(200).json({
            message: data
        })
    })
})

userRoute.get('/cartitem1/:id', (req, res) => {
    const id = req.params.id
    const check = mongoose.Types.ObjectId(id)

    productdb.find({ _id: check }).then((details) => {
        return res.status(200).json({
            message: details,
            success: true
        })
    })
})



userRoute.get('/quantity/:id/:num/:id1',(req,res)=>{
   const id=req.params.id
   const num=req.params.num
   const id1=req.params.id1
     console.log("quantity1",num)
   const check=mongoose.Types.ObjectId(id)
   const check1=mongoose.Types.ObjectId(id1)
   cartdb.findOneAndUpdate({productid:check,loginid:check1},{$set:{quantity:num}}).then((data)=>{
    return res.status(200).json({
        message: "quantity added"
    })
   })

    //   cartdb.findOne({productid:check}).then((details)=>{
    //     details.findOneAndUpdate({productid:check},{$set:{quantity:num}}).then((data)=>{
    //             return res.status(200).json({
    //                 message: "quantity added"
    //             })
    //            })
    //   })

})


userRoute.get('/trashcart/:id',(req,res)=>{
    const id=req.params.id
    // console.log("trashid",req.params.id)
    const check=mongoose.Types.ObjectId(id)
    cartdb.findOneAndDelete({_id:check}).then(() => {
        return res.status(200).json({
            message: "delete succesfull",
            success: true
        })
    })
})





userRoute.get('/coupen/:coupen1',(req,res)=>{
    //  console.log("coupen",req.params)
    const coupen1 =req.params.coupen1
    coupendb.find({coupen:coupen1}).then((dta)=>{
  return res.status(200).json({
    message: dta,
    success: "failed"
  })
    })
})


userRoute.get('/cartitem20/:id/:qty',(req,res)=>{
     console.log("coupen",req.params)
     const id=req.params.id
     const qty=req.params.qty
     productdb.find({_id:qty}).then((dta)=>{
        return res.status(200).json({
            message:dta
        })
     })
})


module.exports = userRoute