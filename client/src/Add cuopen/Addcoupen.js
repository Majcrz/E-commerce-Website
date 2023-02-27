import React from 'react'
import Navbar from '../components/Navbar';
import { useEffect,useState } from 'react'
import axios from 'axios'
export default function Addcoupen() {
    const[data,changedata]=useState([])


    const coupendata=(event)=>{
        const name=event.target.name
        const value=event.target.value
        changedata({...data,[name]:value})
      }
console.log("coupencode",data);

      const add_button=(event)=>{
        event.preventDefault();
      axios.post("http://localhost:3001/admin/coupendata",data).then((details)=>{
        console.log("fulldata",details);
      })
      
      
      
      
      
      
      }







  return (
 <>
 <Navbar/>
 
 
 <section
    className="vh-100 bg-image"
    style={{
      backgroundImage:
        'url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp")',
    }}
  >
    <div className="mask d-flex align-items-center h-100 gradient-custom-3" style={{marginLeft:"-400px"}}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-9 col-lg-7 col-xl-6">
            <div className="card" style={{ borderRadius: 15,width:"800px"}}>
              <div className="card-body p-5">
                <h2 className="text-uppercase text-center mb-5">
                  Add Coupen Code
                </h2>


                
                <form method='post' encType='multipart/form-data'>
                  <div className="form-outline mb-4">
                    <input name='coupen_code'
                      type="text"
                      id="form3Example1cg"
                      className="form-control form-control-lg"  onChange={coupendata}
                    />
                    <label className="form-label" htmlFor="form3Example1cg">
                     Coupen Code
                    </label>
                  </div>
                  <div className="form-outline mb-4">
                    <input name='discount'
                      type="number"
                      id="form3Example3cg"
                      className="form-control form-control-lg" onChange={coupendata}
                    />
                    <label className="form-label" htmlFor="form3Example3cg">
                     Discount
                    </label>
                  </div>
                 
      
                  <div className="d-flex justify-content-center">
                    <button
                      type="button"
                      className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" 
                      onClick={add_button} 
                      >
                     Add
                    </button>
                  </div>
                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    
 
 
 
 
 
 
 
 
 
 </>
  )
}
