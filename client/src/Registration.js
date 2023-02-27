import React from 'react'
import axios from 'axios'
import {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
export default function Registration() {


  const navigate=useNavigate()

    const[info,setinfo]=useState([])

  const onchange = (event)=>{
  
 const name=event.target.name
 const value=event.target.value
 setinfo({...info,[name]:value})

//  console.log("dataas",info);


console.log("emaaaa",info);






}

const register=()=>{

  axios.post('http://localhost:3001/user/register',info
  // mode: 'no-cors',
  // header: {
  //   'Access-Control-Allow-Origin':'*',
  // },
).then((data)=>{
  console.log("data",data)
  })
//  fetch('http://localhost:3001/user/register', {
//   method: 'POST',
//   mode: 'no-cors',
//   header: {
//     'Access-Control-Allow-Origin':'*',
//   },
//   body: info
// }).then((data)=>{
//   console.log("data",data)
//   })




  }



  
  return (

<>


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
                Sign up
                </h2>


                
                 <form method='post' encType='multipart/form-data'>
                 
                 <div className="form-outline mb-4">
                   <input name='name' 
               
                     type="text"
                     id="form3Example1cg"
                     className="form-control form-control-lg"  onChange={onchange}
                   />
                   <label className="form-label" htmlFor="form3Example1cg">
                   Name
                   </label>
                 </div>
                 
                <div className="form-outline mb-4" >
                <input name='address' 
                     type="text"
                     id="form3Example1cg"
                     className="form-control form-control-lg"  onChange={onchange}
                   />
                                    <label className="form-label" htmlFor="form3Example1cg">
                   Address
                   </label>

                </div>
                <div className="form-outline mb-4">

                <input name='mobile' 
                     type="text"
                     id="form3Example1cg"
                     className="form-control form-control-lg"  onChange={onchange}
                   />
                   <label className="form-label" htmlFor="form3Example1cg">
                   Mobile Number
                   </label>
                </div>
                
                <div className="form-outline mb-4">
                <input name='email' 
                     type="text"
                     id="form3Example1cg"
                     className="form-control form-control-lg"  onChange={onchange}
                   />
                   <label className="form-label" htmlFor="form3Example1cg">
                   Email
                   </label>
                </div>
                <div className="form-outline mb-4">
                <input name='dob' 
                     type="date"
                     id="form3Example1cg"
                     className="form-control form-control-lg"  onChange={onchange}
                   />
                   <label className="form-label" htmlFor="form3Example1cg">
                   DOB
                   </label>

                </div>
                   <div className="form-outline mb-4">

                   <input name='username' 
                     type="text"
                     id="form3Example1cg"
                     className="form-control form-control-lg"  onChange={onchange}
                   />
                   <label className="form-label" htmlFor="form3Example1cg">
                   Username
                   </label>

                   </div>

                   <div className="form-outline mb-4">
                   <input name='password' 
                     type="text"
                     id="form3Example1cg"
                     className="form-control form-control-lg"  onChange={onchange}
                   />
                   <label className="form-label" htmlFor="form3Example1cg">
                   Password
                   </label>

                   </div>

                   <div className="d-flex justify-content-center">

                   <button
                     type="button"
                     className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" 
                     onClick={register}
                     >
                    Register
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






  );
  
}
