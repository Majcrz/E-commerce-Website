import React from 'react'
import './Newloginpage.css'
import { v4 as uuidv4 } from 'uuid';
import { useEffect,useState } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Loading from './Loading';
import { useContext } from 'react';
import {context} from './context/Context'
export default function Newloginpages() {

  const {contextstate,newcontextstate}=useContext(context)
  
const navigate =useNavigate()
const [change,changeon]=useState([])
const [local,statelocal]=useState([JSON.parse(localStorage.getItem('details'))]||[])
// const [loading,setloading]=useState(false)


const changedata=(event)=>{

    const name=event.target.name
    const value=event.target.value
   changeon({...change,[name]:value})


}

// console.log("dataa",change);


const loginbutton =()=>{

       axios.post("http://localhost:3001/user/checkuser",change).then((details)=>{
        console.log("checked",details.data)
        if(details.data.status==true){
          localStorage.setItem('details',JSON.stringify(details.data))
          // setloading(true)
          newcontextstate(details.data)
          console.log("context",contextstate);
          navigate('/userpage')
        }
        else{
            toast.error('Incorect User and pass!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
});
        }
       })




    
}
const signup =()=>{
  navigate('/registration')
}


  return (
    <>
              <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>

    <div class="example-box">

  <div class="background-shapes"></div>
  <h1>

  <div>
  <meta charSet="UTF-8" />
  <title> Login Form with light button</title>
  <link rel="stylesheet" href="./style.css" />
  {/* partial:index.partial.html */}
  <div className="login-box">
    <h2>Login</h2>
    <form >
      <div className="user-box">
        <input name='username' type="text" onChange={changedata} />
        <label>Username</label>
      </div>
      <div className="user-box">
        <input type="password" name='password' onChange={changedata} />
        <label>Password</label>
      </div>
      <a onClick={loginbutton} style={{cursor:"pointer",marginLeft:"80px"}}>
        <span />
        <span />
        <span />
        <span />
         Submit

      </a>
     
    </form>
    <div className='signup'><a onClick={signup}>Sign up?</a></div>
  </div>
  {/* partial */}

</div>




  </h1>


</div>







    








    
    
    
    </>
  )
}
