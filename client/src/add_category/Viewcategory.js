import React from 'react'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'
import './Viewcategory.css'

export default function Viewcategory() {
  const[cat,changecat]=useState([])




  useEffect(()=>{
    axios.get("http://localhost:3001/admin/getcatgory").then((details)=>{
        // console.log("axios",details.data.message);
        changecat(details.data.message)
       
    })
  },[])

  console.log("axios",cat);
  return (
    <>


<div>
{
    cat.map((details)=>
        
<div className="categorymap">   
          {details.categoryname} &nbsp;&nbsp;&nbsp;&nbsp;         
           <button ><i class="fa fa-trash" aria-hidden="true"></i></button>
           <br></br><br></br>
</div>


    
    )
  }
</div>

<div className='addbutton'>

    <button type="button" class="btn btn-success"><Link to="/Category" style={{textDecoration:'none',color:'black'}}><span className='abc'>Add Category</span></Link></button>
    </div>

    </>




  )
}
