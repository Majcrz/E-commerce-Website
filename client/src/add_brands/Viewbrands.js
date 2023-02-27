import React from 'react'
import Navbar from '../components/Navbar'
import './Viewbrands.css'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
export default function Viewbrands() {



    const[cat,changecat]=useState([])




    useEffect(()=>{
      axios.get("http://localhost:3001/admin/getbrands1").then((details)=>{
          // console.log("axios",details.data.message);
          changecat(details.data.message)
         
      })
    },[])
  
    console.log("axios",cat);



  return (
    <>
   <Navbar/>



   <div>
{
    cat.map((details)=>
        
<div className="categorymap">   
          {details.brandname} &nbsp;&nbsp;&nbsp;&nbsp;         
           <button ><i class="fa fa-trash" aria-hidden="true"></i></button>
           <br></br><br></br>
</div>


    
    )
  }
</div>




   <div className='addbutton'>

    <button type="button" class="btn btn-success"><Link to="/addbrands" style={{textDecoration:'none',color:'black'}}><span className='abc'>Add Brands</span></Link></button>
    </div>







   </>







   

  )
}
