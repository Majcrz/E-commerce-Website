import React, { useEffect } from 'react'
import './Navbar1.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
export default function Navbar1() {
  const [deta,changedeta]=useState([])
  const navigate=useNavigate()

  const details=JSON.parse(window.localStorage.getItem('details'))
      

 const logout = ()=>{
         localStorage.removeItem('details')
         navigate('/')
 }

// useEffect(()=>{

//    axios.get(`http://localhost:3001/user/getdetails/${details.id}`).then((details)=>{
//     console.log("get_details",details.data.message[0])
//     changedeta(details.data.message[0])
//    })

// },[])


const detail = ()=>{
          navigate('/profiledetails')

}

  return (
    <>
    
    
    <nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor:"#FF4136"}}>
    


                    

  <div className="container-fluid">
    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarTogglerDemo01"
      aria-controls="navbarTogglerDemo01"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars" />
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a className="navbar-brand " href="#">
       <img src={'https://th.bing.com/th/id/R.344db311e0f07ec18a0ed7b91cf80a7c?rik=PGU2%2fy8Mk7sadA&riu=http%3a%2f%2flofrev.net%2fwp-content%2fphotos%2f2016%2f07%2fabstract_logo_vector.png&ehk=xYJrZj0hUhiC0SAsUz3Ysi6sGH%2f2Atuk3wLWPSfBwB8%3d&risl=&pid=ImgRaw&r=0'}></img>
      </a>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/userpage" style={{fontWeight: 'bold',fontFamily: 'Georgia-BoldItalic',fontSize:'20px'}}>
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/cartpro" style={{fontWeight: 'bold',fontFamily: 'Georgia-BoldItalic',fontSize:'20px'}}>
          <i class="fa fa-shopping-cart" aria-hidden="true"></i> Cart
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" style={{fontWeight: 'bold',fontFamily: 'Georgia-BoldItalic',fontSize:'20px'}}>
          <div class="dropdown">
      <i class="fa fa-user" aria-hidden="true"></i>&nbsp;&nbsp;Profile
  <div class="dropdown-content">
    <a onClick={logout}>Log out<i class="fa fa-sign-in bca" aria-hidden="true"></i></a>
    <a href="#" onClick={detail}>Details<i class="fa fa-info-circle bca" aria-hidden="true"></i></a>
    <a href="#">Settings<i class="fa fa-cogs bca" aria-hidden="true"></i></a>
  </div>
</div>
          </a>
        </li>
      </ul>
      <form className="d-flex input-group w-auto abc ">
        <input 
          type="search" style={{width:'500px'}}
          className="form-control size"
          placeholder="Search Here For Products"
          aria-label="Search"
        />
        <button
          className="btn btn-light bc" 
          type="button"
          data-mdb-ripple-color="dark"
        >
          <i class="fa fa-search" aria-hidden="true"></i>
        </button>
      </form>
    </div>
  </div>
</nav>

    
    </>
  )
}
