const express=require('express')
const adminRoute=express()
var mongoose=require('mongoose')
const multer=require('multer')
const cors=require('cors')
adminRoute.use(cors())
const productdb=require('../models/products_db')
const categorydb=require('../models/category')
const branddb=require('../models/brands')
const coupendb=require('../models/coupencode')




const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../client/public/images')
    },
    filename: function (req, file, cb) {
     
      cb(null, file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })


adminRoute.post('/upload',upload.any('file'),(req,res)=>{

console.log("image",req.upload_image)
return res.status(200).json({
    message:"image uploaded"
})



})

adminRoute.post('/productdatas',(req,res)=>{

  const items1={
    productname:req.body.product_name,
    description:req.body.description,
    categoryid:req.body.category,
    price:req.body.price,
    brand:req.body.brand,
    expirydate:req.body.expiry_date,
    image:req.body.upload_image
  }

  const productdata=productdb(items1)
  productdata.save().then(()=>{
    return res.status(200).json({
      message:"product added"
    })
  })

})


adminRoute.post('/categorydatas',(req,res)=>{
   console.log(req.body);
  const items2={
    categoryname:req.body.category_name,
    description:req.body.description,
    categoryimage:req.body.upload_image
  }
  const categorydata=categorydb(items2)
  categorydata.save().then(()=>{
    return res.status(200).json({
      message:"category added"
    })
  })

})


adminRoute.get('/getcatgory',(req,res)=>{
   categorydb.find().then((data)=>{
    return res.status(200).json({
      message:data
    })
   })

})



adminRoute.get('/viewproducts/:id',(req,res)=>{
  const id=req.params.id
  const check=mongoose.Types.ObjectId(id)
  productdb.find( {categoryid:check} ).then((details)=>{
    return res.status(200).json({
      messege:details,
      success:true   
    }) 
  })
})


adminRoute.post('/branddata',(req,res)=>{
  console.log(req.body);
 const items3={
   brandname:req.body.brand_name,
   categoryid:req.body.category,
   description:req.body.description,
   brandimage:req.body.upload_image
 }
 const branddata=branddb(items3)
 branddata.save().then(()=>{
   return res.status(200).json({
     message:"Brand added"
   })
 })

})





adminRoute.get('/getbrands/:id',(req,res)=>{
  const id=req.params.id
  const check=mongoose.Types.ObjectId(id)
  branddb.find({categoryid:check}).then((data)=>{
   return res.status(200).json({
     message:data
   })
  })

})

adminRoute.get('/getbrands1',(req,res)=>{
  branddb.find().then((data)=>{
   return res.status(200).json({
     message:data
   })
  })

})


adminRoute.get('/brandselect/:id',(req,res)=>{
  const id=req.params.id
  const check=mongoose.Types.ObjectId(id)

  branddb.find( {categoryid:check} ).then((details)=>{
    return res.status(200).json({
      message:details,
      success:true   
    }) 
  })
})


adminRoute.get('/filterproducts/:details',(req,res)=>{
  const id=req.params.details
  const checkid=mongoose.Types.ObjectId(id)
  productdb.find({brand:checkid}).then((details)=>{
    return res.status(200).json({
      message:details,
      success:true   
    }) 
  })



})


adminRoute.get('filterproducts/:id',(req,res)=>{
  const id=req.params.id
  const checkid=mongoose.Types.ObjectId(id)

})


adminRoute.post('/coupendata',(req,res)=>{
  console.log(req.body);
 const items4={
  coupen:req.body.coupen_code,
  dicount:req.body.discount
 }
 const coupendata=coupendb(items4)
 coupendata.save().then(()=>{
   return res.status(200).json({
     message:"Coupen added"
   })
 })

})


adminRoute.get('/getcoupendata',(req,res)=>{
  coupendb.find().then((data)=>{
    return res.status(200).json({
      message:data
    })
   })
})




module.exports=adminRoute