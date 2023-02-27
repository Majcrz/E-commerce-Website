import React from 'react'
import './Body.css'
import $ from "jquery";
import axios from 'axios'
import { useState,useEffect } from 'react'
import bgImage  from'../videos/backgroundvideo.mp4'
import { useNavigate } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useContext } from 'react';
import { context } from '../context/Context'
export default function Body() {
  const {contextstate,newcontextstate}=useContext(context)
   console.log("context",contextstate);
const navigate=useNavigate()
const [info,newinfo]=useState([])

const clickcategory =(details)=>{

       navigate(`/userproducts/${details}`)

}

useEffect(()=>{
   axios.get("http://localhost:3001/admin/getcatgory").then((details)=>{
      console.log("new form",details.data.message)
       newinfo(details.data.message)
       
   })
},[])


useEffect(() => {
   if($){
     

      
   }
   }, [$])



  return (
   <>
   <div className='video'>
   <video autoPlay loop muted>

<source src={bgImage} type="video/mp4"/>

</video>

<div className='background_image'>

<div className='container123'>
{
   info.map((details)=>
   <div className='button1'>
   <buttton className='button2' onClick={() => { clickcategory(details._id) }} value={details._id}>
                  <img src={`./images/${details.categoryimage}`}/> <br></br><span style={{marginLeft:'-45px',fontSize:'20px'}}>{details.categoryname}</span>
    


   </buttton>
</div>
   
   )

}
</div>
</div>







</div>









{/* <div>
  <meta charSet="UTF-8" />
  <title> Perspective Scrolling in CSS | Nothing4us </title>
  <link rel="stylesheet" href="./style.css" />
 
  <section className="wrap-3d">
    <div className="item-3d">
      <span className="ground" />
      <figure className="item-content group">
        <div className="item-img">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/46992/aw-white.png"
            alt
          />
        </div>
        <figcaption className="item-caption">
          <p>
            <strong>38mm and 42mm Case</strong>
            <br />
            Series 7 - Silver Aluminum
            <br />
            Ion-X Glass
            <br />
            Retina Display
            <br />
            Composite Back
          </p>
          <p>
            <strong>Sport Band</strong>
            <br />
            White Fluoroelastomer
            <br />
            Stainless Steel Pin
          </p>
          <p>
            <a href="#">View 38mm in the store</a>
            <br />
            <a href="#">View 42mm in the store</a>
          </p>
        </figcaption>
      </figure>
    </div>
  </section>
 
</div> */}















   
   </>
  )
}
