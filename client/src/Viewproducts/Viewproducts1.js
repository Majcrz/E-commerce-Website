import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
import './viewproducts.css'
export default function Viewproducts1() {
 const { id }=useParams()
 const [state,changestate]=useState([])
 const [brand,changebrand]=useState([])
 const [info,changeinfo]=useState([])

console.log(info);


    useEffect(()=>{
         axios.get(`http://localhost:3001/admin/viewproducts/${id}`).then((details)=>{ 
          // console.log("lkj",details);
            changestate(details.data.messege)
            console.log("adasda",state)
             
         })
         
    },[])


    const filter=(details)=>{
  // console.log("meee",details);
         axios.get(`http://localhost:3001/admin/filterproducts/${details}`).then((details)=>{
          
          changeinfo(details.data.message)
          console.log("akshay",info);
         })

    }


       useEffect(()=>{
        axios.get(`http://localhost:3001/admin/getbrands/${id}`).then((details)=>{
          // console.log("brand",details)
          changebrand(details.data.message)

        })
       },[])



  return (
    <>
    
    <Navbar/>


    <h5 className="section-title position-relative text-uppercase mb-3">
              <span className="bg-secondary pr-3">Filter by Brand</span>
            </h5>
            <div className="bg-light p-4 mb-30">
              <form>


{
            brand.map((details)=>
            
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox" onClick={() => { filter(details._id) }}
                    className="custom-control-input"
                    id={details._id}
                    value={details._id}
                  />
                  <label className="custom-control-label" htmlFor={details._id}>
                    {details.brandname}
                  </label>  
                </div>
            
            )    

}


              </form>
            </div>



<br></br>


{/* <div className='catitems'>
    {
        
       info.map((details)=>
       <div className='list'>
       <div className="card" style={{ width: "18rem" }}>
  <img src={`/images/${details.image}`} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{details.productname}</h5>
    <p className="card-text">
      {details.description}
    </p>
    <a href="#" className="btn btn-primary">
      Go somewhere
    </a>
  </div>
</div>
       
</div>
       )




    }
    </div> */}




    <div className='catitems'>
    {

      info[0]?.brand===undefined?
   
       state?.map((details)=>
       <div className='list'>
       <div className="card" style={{ width: "18rem" }}>
  <img src={`/images/${details.image}`} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{details.productname}</h5>
    <p className="card-text">
      {details.description}
    </p>
    <a href="#" className="btn btn-primary">
      Go somewhere
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
    <a href="#" className="btn btn-primary">
      Go somewhere
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
