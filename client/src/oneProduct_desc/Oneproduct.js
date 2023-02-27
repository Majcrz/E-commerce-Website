import React from 'react'

import Navbar1 from '../user/Navbar1'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'
import './Oneproduct.css'
import { useNavigate } from 'react-router-dom'
import { event } from 'jquery'

export default function Oneproduct() {
const navigate=useNavigate()
const {id}=useParams()
const [pro,newpro]=useState([])
const [quan,newquan]=useState({
  quantity:1
})

const details1=JSON.parse(window.localStorage.getItem('details'))


useEffect(()=>{
  axios.get(`http://localhost:3001/user/productdesc/${id}`).then((details)=>{
    // console.log("oneproduct",details.data.message[0])
    newpro(details.data.message[0])
  })
},[])




// useEffect(()=>{

// })



const cart1 =()=>{
    
  const details1=JSON.parse(window.localStorage.getItem('details'))
  axios.get(`http://localhost:3001/user/quantity/${pro._id}/${quan.quantity}/${details1.id}`).then((response)=>{
                         console.log(response);                                           
  })
 
}

//  const largesize =()=>{
           
           
//  }

// useEffect(()=>{
//     newpro1(details)
    
// },[])

const cart =()=>{
    
    axios.post(`http://localhost:3001/user/cart/${pro._id}/${details1.id}`).then((alert)=>{
     
    alert(alert.data.message)
            
    })
   
}


const quantity =(event)=>{
  const name=event.target.name
  const value=event.target.value
  newquan({...quan,[name]:value})
}


console.log(quan);
console.log("product",pro)



// const play =(videoname)=>{
//       axios.post
// }

  return (
    <>
    
    <Navbar1/>
    {/* <a onClick={largesize}> */}
    <div className='main' >
    
        
    </div>
    {/* </a> */}
    <div className='cartbuy'>
            
    <button type="button" class="btn btn-warning" onClick={()=>{cart();cart1()}} ><i class="fa fa-cart-arrow-down" aria-hidden="true" style={{fontSize:"30px", color:"white"}}></i>&nbsp;&nbsp;&nbsp;<span>ADD TO CART</span></button>
    <button type="button" class="btn btn-warning"><i class="fa fa-bolt" aria-hidden="true"style={{fontSize:"30px", color:"white"}}></i>&nbsp;&nbsp;&nbsp;<span>BUY NOW</span></button>
    <div className='quantity'>


</div>
    </div>
    <div className='fulldetails'>
             <img src={`/images/${pro.image}`} ></img> 
             <div className='fulldetails1'>
       <span> {pro.productname}</span>
       
        <div className='proprice'>
        ₹{pro.price}

        </div>
        <div className='prodesc' style={{marginTop:"50px"}}>
      <span style={{fontSize:"20px"}}>Description:&nbsp;&nbsp;&nbsp;{pro.description}</span> </div>
      
    </div>

    <div className='quantity' style={{marginTop:"50px"}}>
      Quantity <input type="number" onChange={quantity} name='quantity'></input>
    </div>
    </div>

      
      

    </>
  )
    
   

}
