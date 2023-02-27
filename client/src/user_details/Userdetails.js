
import React, { Profiler, useEffect } from 'react'
import Navbar1 from '../user/Navbar1'
import axios from 'axios'
import { useState } from 'react'
export default function Userdetails() {

    const [deta,changedeta]=useState([])

    const details=JSON.parse(window.localStorage.getItem('details'))
    
    console.log("detils",details)


    useEffect(()=>{

        axios.get(`http://localhost:3001/user/getdetails/${details.id}`,
        
        {
          headers:{
                          'Authorization':details?.token,
          }
        }).then((details)=>{
         console.log("get_details",details.data.message[0])
         changedeta(details.data.message[0])
        })
     
     },[])




  return (
   <>
   <Navbar1/>
   
   
   
 <font color="red"> <p>Email:{deta.email}</p></font> 
   
   
   
   
   
   
   
   
   </>
  )
}
