import React from 'react'
import axios from 'axios'
import './viewproducts.css'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import Viewproducts1 from './Viewproducts1'
export default function Viewproducts() {
const [pro,changepro]=useState([])




useEffect(()=>{

          axios.get("http://localhost:3001/admin/getcatgory").then((det)=>{
             changepro(det.data.message)
      })

},[])


  return (
  <>
<div className='catitems'>
  {
       pro.map((details)=>
       <div className='list'>
       
       <div className="card " style={{ width: "18rem" }}>
       <img src={`./images/${details.categoryimage}`} className="card-img-top" alt="..." />
       <div className="card-body">
         <h5 className="card-title">{details.categoryname}</h5>
         <p className="card-text">
          {details.description}
         </p>
         <Link to={`/Viewproducts1/${details._id}`} class="btn btn-primary"> View Products</Link>
           
         
       </div>
     </div>
     </div>
       
       
       )

  }
  </div>
  
  
  
  
  
  
  
  
  </>
  )
}
