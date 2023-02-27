import React from 'react'
import Navbar1 from '../Navbar1'
import { useState,useEffect } from 'react'
import axios from 'axios'
import './Fullproducts.css'
import { useNavigate, useParams } from 'react-router-dom'
export default function Fullproducts() {

const navigate=useNavigate()
const [state,changestate]=useState([])  
const [brand,changebrand]=useState([])
const [info,changeinfo]=useState([])
const {id}=useParams()



useEffect(()=>{
  axios.get(`http://localhost:3001/admin/getbrands/${id}`).then((details)=>{
    // console.log("brand",details)
    changebrand(details.data.message)

  })
 },[])


 useEffect(()=>{
  axios.get(`http://localhost:3001/admin/viewproducts/${id}`).then((details)=>{ 
  //  console.log("lkj",details);
     changestate(details.data.messege)
    
  })
  
},[])

const filter=(details)=>{
  // console.log("meee",details);
         axios.get(`http://localhost:3001/admin/filterproducts/${details}`).then((details)=>{
          
          changeinfo(details.data.message)
          console.log("akshay",info);
         })

    }




  const click=(details)=>{
    navigate(`/oneproduct/${details}`)
  }


  return (
 
 
<>
    <Navbar1/>

    <div className='background_image1'>

<div className='container1'>
{
   brand.map((details)=>
   <div className='button11'>
   <buttton className='button21' onClick={() => { filter(details._id) }} value={details._id}>
                  <img src={`/images/${details.brandimage}`}/> <br></br><span style={{marginLeft:'-30px',fontSize:'20px'}}>{details.brandname}</span>
    


   </buttton>
</div>
   
   )

}
</div>


</div>



<br></br>
<div className='mobiles'>Products Are Here..</div>

<div className='catitems'>
    {

      info[0]?.brand===undefined?
   
       state?.map((details)=>
       <div className='list aswin'>
       <div className="card man" style={{ width: "18rem" }}>
  <img src={`/images/${details.image}`} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{details.productname}</h5>
    <p className="card-text">
      {details.description}
    </p>
    <a href="#" className="btn btn-primary" onClick={() => { click(details._id) }} value={details._id} >
      Buy Now
    </a>
  </div>
</div>
       
</div>
       )
       :

       info.map((details)=>
       <div className='list'>
       <div className="card" style={{ width: "18rem" }}>
  <img src={`/images/${details.image}`} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{details.productname}</h5>
    <p className="card-text">
      {details.description}
    </p>
    <a href="#" className="btn btn-primary" onClick={() => { click(details._id) }} value={details._id} >
    Buy Now
    </a>
  </div>
</div>
       
</div>
       )




    }
    </div>


    </>
  )
}
