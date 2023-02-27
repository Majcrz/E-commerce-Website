import React from 'react'
import './Navbar.css'
export default function Navbar() {
  return (
<>


<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">
    <img src='https://th.bing.com/th/id/R.824bf63dd4dc1a7064ac358248374886?rik=s1ekmoDSGnRvFw&riu=http%3a%2f%2fclipart-library.com%2fimg%2f1860396.png&ehk=34OXwdGM0LnpyfqCacLnmYAtGKQrNP5Bz46fLxot1Ug%3d&risl=&pid=ImgRaw&r=0'  height={'50px'} width={'50px'} ></img> 
  </a>
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarNavAltMarkup"
    aria-controls="navbarNavAltMarkup"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-link active" href="/home">
        Home 
      </a>
      <a className="nav-link " href="/adminpage">
        Add Product 
      </a>
      <a className="nav-link " href="/coupendata">
        Add Coupen 
      </a>
      <a className="nav-link" href="/viewproducts">
        View Product
      </a>
      <a className="nav-link" href="/viewcategory">
        View Category
      </a>
      <a className="nav-link" href="/viewbrands">
        View Brands
      </a>
    </div>
  </div>
</nav>








</>
  )
}
