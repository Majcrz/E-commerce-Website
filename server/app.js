const express=require('express')
const app = express()
const userRoutes=require('./src/routes/userRoutes')
const adminRoutes=require('./src/routes/adminRoutes')
const bodyparser=require('body-parser')
const cors=require('cors')

app.use(express.urlencoded({extended:true}))
app.use(bodyparser.json())


// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader(
//       "Access-Control-Allow-Headers",
//       "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//     );
//     res.setHeader( 
//       "Access-Control-Allow-Methods",
//       "GET, POST, PATCH, PUT, DELETE, OPTIONS"
//     );
//      next();
//     });

app.use('/user',userRoutes)
app.use('/admin',adminRoutes)

app.use(cors());

  app.listen(3001, () => {
    console.log("server started at http://localhost:3001")
  })