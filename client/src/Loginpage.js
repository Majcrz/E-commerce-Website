import React from 'react'
import './Loginpage.css'
import { v4 as uuidv4 } from 'uuid';
import { useEffect,useState } from 'react'
export default function Loginpage() {

const [change,changeon]=useState([])
const [local,statelocal]=useState([JSON.parse(localStorage.getItem('details'))]||[])


const changedata=(event)=>{

    const name=event.target.name
    const value=event.target.value
   changeon({...change,[name]:value})


}

// console.log("dataa",change);

const loginbutton =()=>{


statelocal([...local,{...change,id:uuidv4()}])

}

useEffect(()=>{
localStorage.setItem("details",JSON.stringify(local),[local])

})

  





  return (
    <>
    
    <section className="vh-100">
  <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          className="img-fluid"
          alt="Sample image"
        />
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form>

          {/* Email input */}
          <div className="form-outline mb-4">
            <input
              type="username"
              name='username'
              id="form3Example3"
              className="form-control form-control-lg"
              placeholder="Enter username"
              onChange={changedata}
            />

          </div>
          {/* Password input */}
          <div className="form-outline mb-3">
            <input
              type="password"
              name='password'
              id="form3Example4"
              className="form-control form-control-lg"
              placeholder="Enter password"
              onChange={changedata}
            />

          </div>
          <div className="d-flex justify-content-between align-items-center">
            {/* Checkbox */}
            <div className="form-check mb-0">
              <input
                className="form-check-input me-2"
                type="checkbox"
                defaultValue
                id="form2Example3"
              />
              <label className="form-check-label" htmlFor="form2Example3">
                Remember me
              </label>
            </div>
            <a href="#!" className="text-body">
              Forgot password?
            </a>
          </div>
          <div className="text-center text-lg-start mt-4 pt-2">
            <button
              type="button"
              className="btn btn-primary btn-lg"
              style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
              onClick={loginbutton}
            >
              Login
            </button>
            <p className="small fw-bold mt-2 pt-1 mb-0">
              Don't have an account?{" "}
              <a href="/registration" className="link-danger">
                Register
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
    {/* Copyright */}
    <div className="text-white mb-3 mb-md-0">
      Copyright © 2022. All rights reserved.
    </div>

  </div>
</section>

    
    
    
    
    
    
    
    
    
    
    </>
  )
}
