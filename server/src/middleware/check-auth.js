const jwt =require("jsonwebtoken")
const jwtcheck =(req,res,next)=>{
   
    try {
       
    const token=req.headers.authorization; 
    const decodedToken=jwt.verify(token,"akshay_secret_key");
  

    req.userData={ id:decodedToken.loginid,role:decodedToken.loginrole}
    next()
    } catch(error){
        res.status(401).json({message:"Auth failed ok"})
    }
}   

module.exports=jwtcheck