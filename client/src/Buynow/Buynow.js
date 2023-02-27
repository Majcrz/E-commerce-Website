import React from 'react'
import './Buynow.css'
import { useParams} from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Navbar1 from '../user/Navbar1'
import { useContext } from 'react'
import {context} from '../context/Context'
export default function Buynow() {

    const {contextstate,newcontextstate}=useContext(context)
    console.log("contextstatae",contextstate);


     const {id}=useParams()
     const [buy,newbuy]=useState([])
     const [cost,newcost]=useState([])
     const [coup,newcoup]=useState([])
     const [discount,newdiscount]=useState([])
     const [getcoup,newgetcoup]=useState([])
     const userid =JSON.parse(window.localStorage.getItem('details'))


     useEffect(()=>{
        axios.get(`http://localhost:3001/user/cartitem/${id}`,
        {
          headers:{
                         Authorization:userid?.token,
          }
        }).then((data)=>{
            console.log("buynow",data.data.message)
            newbuy(data.data.message)   
            var cost1=0
        
          data.data.message.map((pros)=>
          {
            console.log("cost",cost1);

         cost1+=(pros.price)*(pros.quantity)
         newcost(cost1)
               
              
          })
            

        })
    
     },[])


     const coupen =(event)=>{
      const name=event.target.name
      const value=event.target.value
      newcoup({...coup,[name]:value})

    }





    console.log("coupendsdsdsd",discount?.dicount)




const coupenpass =()=>{
  const coupendata=
  getcoup.filter((details)=>{
     return details?.coupen==coup.code

    })
    newdiscount(coupendata[0])
    console.log("coupendata",discount);
// axios.get(`http://localhost:3001/user/coupen/${coup.code}`).then((det)=>{
//     console.log(("coupen ready",det.data.message[0]))
//     newdiscount(det.data.message[0])
// })
}

useEffect(()=>{
  axios.get("http://localhost:3001/admin/getcoupendata").then((data)=>{
    console.log("getcoupendata",data.data.message);
    newgetcoup(data.data.message)
  })
 },[])

console.log("coupen",getcoup)
  return (
    <>
    
    
    <Navbar1/>
    
    <div className='payment_1'>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  {/* custom css file link  */}
  
  <div className="container">
    <form action>
      <div className="row">
        
        <div className="col">
          <h3 className="title">payment</h3>
          <div className="inputBox">
            <span>cards accepted :</span>
            <img src="/images/card_img.png" alt  style={{width:"280px",marginLeft:"5px"}}/>
          </div>
          <div className="inputBox">
            <span>name on card :</span>
            <input type="text" placeholder="mr. john deo" />
          </div>
          <div className="inputBox">
            <span>credit card number :</span>
            <input type="text" placeholder="1111-2222-3333-4444" />
          </div>
  
          <div className="flex">
            <div className="inputBox">
              <span>exp year :</span>
              <input type="date" placeholder={2022} />
            </div>
            <div className="inputBox">
              <span>CVV :</span>
              <input type="text" placeholder={1234} />
            </div>
          </div>
        </div>
      </div>
      <input
        type="submit"
        defaultValue="proceed to checkout"
        className="submit-btn"
      />
    </form>
  </div>
</div>






<div className="container mt-4 p-0 payment_2" >
  <nav className="navbar navbar-expand-lg navbar-light bg-white pt-3 px-md-4 px-2">

  </nav>
  <div className="row px-md-4 px-2 pt-4" style={{marginTop:"-2100px"}}>
    <div className="col-lg-8">
      <p className="pb-2 fw-bold">Order</p>


{
    buy?.map((pro)=>(
        <>
              <div className="card">
        <div>
          <div className="table-responsive px-md-4 px-2 pt-3">
            <table className="table table-borderless">
              <tbody>
                <tr className="border-bottom">
                  <td>
                    <div className="d-flex align-items-center">
                      <div>
                        {" "}
                       &nbsp; &nbsp;&nbsp;<img
                          className="pic"
                          src={`/images/${pro.image}`}
                          alt
                        />{" "}
                      </div>
                      <div className="ps-3 d-flex flex-column justify-content">
                        <p className="fw-bold">
                        {pro.product_name}
                         
                        </p>{" "}
               
          
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex">
                      <p className="pe-3">
                        <span className="red"> ₹{pro.price}</span>
                      </p>
                    
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      {" "}
                      <span className="pe-3 text-muted">Quantity</span>{" "}
                      <span className="pe-3">
                        {" "}
                        &nbsp;&nbsp;{pro.quantity}
                      </span>
                    </div>
                  </td>
                </tr>
   
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
        
        
        </>
    )
    )
}





    </div>
    







   {
       discount?.dicount!=undefined?
       <>
       
       
       
    <div className="col-lg-4 payment-summary">
      <p className="fw-bold pt-lg-0 pt-4 pb-2">Payment Summary</p>
      <div className="card px-md-3 px-2 pt-4">
        <div className="unregistered mb-4">
          {" "}
          <span className="py-1">unregistered account</span>{" "}
        </div>
        <div className="d-flex justify-content-between pb-3">
          {" "}
          <small className="text-muted">Transaction code</small>
          <p className>VC115665</p>
        </div>
        <div className="d-flex justify-content-between b-bottom">
          {" "}
          <input type="text" onChange={coupen} className="ps-2" placeholder="COUPON CODE" name='code'></input>
          <div className="btn btn-primary" onClick={coupenpass}>Apply</div>
        </div>
        <div className="d-flex flex-column b-bottom">
          <div className="d-flex justify-content-between py-3">
            {" "}
            <small className="text-muted">Total Amount</small>
            <p>₹{cost}</p>
          </div>

          
          <div className="d-flex justify-content-between pb-3">
            {" "}
            <small className="text-muted">Discount</small>
            <p>₹{discount?.dicount}</p>
          </div>
          <div className="d-flex justify-content-between">
            {" "}
            <small className="text-muted">Reduced price</small>
        
            <p>{(cost)-(discount?.dicount)}</p>
            
           
          </div>
        </div>
      </div>
    </div>
       
     
       
       </>
       :<>
        <div className="col-lg-4 payment-summary">
      <p className="fw-bold pt-lg-0 pt-4 pb-2">Payment Summary</p>
      <div className="card px-md-3 px-2 pt-4">
        <div className="unregistered mb-4">
          {" "}
          <span className="py-1">unregistered account</span>{" "}
        </div>
        <div className="d-flex justify-content-between pb-3">
          {" "}
          <small className="text-muted">Transaction code</small>
          <p className>VC115665</p>
        </div>
        <div className="d-flex justify-content-between b-bottom">
          {" "}
          <input type="text" onChange={coupen} className="ps-2" placeholder="COUPON CODE" name='code' />
          <div className="btn btn-primary" onClick={coupenpass}>Apply</div>
        </div>
        <div className="d-flex flex-column b-bottom">
          <div className="d-flex justify-content-between py-3">
            {" "}
            <small className="text-muted">Order Summary</small>
            <p>₹{cost}</p>
          </div>
          <div className="d-flex justify-content-between pb-3">
            {" "}
            <small className="text-muted">Discount</small>
            <p>₹0</p>
          </div>
          <div className="d-flex justify-content-between">
            {" "}
            <small className="text-muted">Total Amount</small>
            <p>₹0</p>
          </div>
        </div>
      </div>
    </div>


       
             
       </>
  
   }

   
    
    
    
    
    
    
    
    
    
    </div>
    </div>
    
  </>
  )
}
