import React from 'react'
import './Add_product.css'
import { useEffect,useState } from 'react'
import axios from 'axios'
export default function Product() {
 
const[data,changedata]=useState([])
const[file,changefile]=useState([])
const[category,getcatgory]=useState([])
const[brand,getbrand]=useState([])

useEffect(()=>{

  axios.get("http://localhost:3001/admin/getcatgory").then((details)=>{
         getcatgory(details.data.message)
              // console.log("asdfghhjjj",category)
  })
},[])


const click=()=>{
  
  const id=data?.category
 console.log("new",id);
  axios.get(`http://localhost:3001/admin/brandselect/${id}`).then((details)=>{
    getbrand(details.data.message)
    console.log("details",details)
  })

}





const productdata=(event)=>{
  const name=event.target.name
  const value=event.target.value
  changedata({...data,[name]:value})
}

// console.log("dataaa",data)
  
const add_button=(event)=>{
  event.preventDefault();

if(file){

    const data1=new FormData()
    const filename=file.name
    data1.append("name",filename)
    data1.append("file",file)
    axios.post("http://localhost:3001/admin/upload",data1).then((details)=>{
    console.log("append",details)
    })



   


}


axios.post("http://localhost:3001/admin/productdatas",data).then((details)=>{
  console.log("fulldata",details);
})






}


  return (

    
    <section
    className="vh-100 bg-image"
    style={{
      backgroundImage:
        'url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp")',
    }}
  >
    <div className="mask d-flex align-items-center h-100 gradient-custom-3">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-9 col-lg-7 col-xl-6">
            <div className="card" style={{ borderRadius: 15 }}>
              <div className="card-body p-5">
                <h2 className="text-uppercase text-center mb-5">
                  Add PRODUCT
                </h2>


                
                <form method='post' encType='multipart/form-data'>
                  <div className="form-outline mb-4">
                    <input name='product_name'
                      type="text"
                      id="form3Example1cg"
                      className="form-control form-control-lg"  onChange={productdata}
                    />
                    <label className="form-label" htmlFor="form3Example1cg">
                      Product name
                    </label>
                  </div>
                  <div className="form-outline mb-4">
                    <input name='description'
                      type="text"
                      id="form3Example3cg"
                      className="form-control form-control-lg" onChange={productdata}
                    />
                    <label className="form-label" htmlFor="form3Example3cg">
                     Description
                    </label>
                  </div>
                  <div className="form-outline mb-4">
                    {/* <input name='category'
                      type="text"
                      id="form3Example4cg"
                      className="form-control form-control-lg" onChange={productdata}
                    /> */}
                    <select name='category' onChange={productdata} onClick={click} className="form-control form-control-lg">
                    <option>Select one category</option>
                    {
                             category.map((details)=>
                             
                             <option value={details._id}>{details.categoryname  }</option>

                             
                             )
                       
                    }
                     

                    </select>


                    <label className="form-label" htmlFor="form3Example4cg">
                    Category
                    </label>
                  </div>
                  <div className="form-outline mb-4">
                    <input name='price'
                      type="text"
                      id="form3Example4cg"
                      className="form-control form-control-lg" onChange={productdata}
                    />
                    <label className="form-label" htmlFor="form3Example4cg">
                    Price
                    </label>
                  </div>


                  <div className="form-outline mb-4">
                    {/* <input name='category'
                      type="text"
                      id="form3Example4cg"
                      className="form-control form-control-lg" onChange={productdata}
                    /> */}
                    <select name='brand' onChange={productdata}  className="form-control form-control-lg">
                    <option>Select Brand</option>
                    {
                             brand.map((details)=>
                             
                             <option value={details._id}>{details.brandname  }</option>

                             
                             )
                       
                    }
                     

                    </select>


                    <label className="form-label" htmlFor="form3Example4cg">
                    Brand
                    </label>
                  </div>






                  <div className="form-outline mb-4">
                    <input name='expiry_date'
                      type="date"
                      id="form3Example4cdg" 
                      className="form-control form-control-lg" onChange={productdata}
                    />
                    <label className="form-label" htmlFor="form3Example4cdg">
                      Expiry Date
                    </label>
                  </div>
                  <div className="form-outline mb-4">
                    <input name='upload_image'
                      type="file"
                      id="form3Example4cdg"
                      className="form-control form-control-lg" onChange={(e)=>{changefile(e.target.files[0]); changedata({...data,upload_image:e.target.files[0].name})}}
                    />
                    <label className="form-label" htmlFor="form3Example4cdg">
                      
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
  
  )
}
