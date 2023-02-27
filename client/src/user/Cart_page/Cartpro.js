import React from 'react'
import Navbar1 from '../Navbar1'
import axios from 'axios'
import { useEffect,useState } from 'react'
import { get } from 'jquery'
import './Cartpro.css'
import { useNavigate } from 'react-router-dom'
import Popup from './Popup'
import Loading from '../../Loading'
export default function Cartpro() {
    // const [id,]
    const [loading, setloading] = useState(true)
    const [cart,usecart]=useState([])
    const [cost,newcost]=useState([])
    const [popup,setpopup]=useState(false)
    const navigate=useNavigate()
    // const [loading,newloading]=useState({
    //   loading:false,
    //   error:false
    // })

     const userid =JSON.parse(window.localStorage.getItem('details'))

 useEffect(()=>{

 
    axios.get(`http://localhost:3001/user/cartitem/${userid.id}`,
    {
      headers:{
                     Authorization:userid?.token,
      }
    }).then((data)=>{
        console.log("cartitems",data.data.message)
        usecart(data.data.message)
        setloading(false)
        var cost1=0
        
          data.data.message.map((pros)=>
          {
            console.log("cost",cost1);

         cost1+=(pros.price)*(pros.quantity)
         newcost(cost1)
               
              
          })
          

         
        
    })

 },[])
  
 console.log("cost",cart);


const trash =(details)=>{
  axios.get(`http://localhost:3001/user/trashcart/${details}`).then((main)=>{
    console.log("trash",main.data.message)
    window.location.reload()
  })

}


const buynow =(details)=>{
  navigate(`/buynow/${details}`)
}


const buyone =(details,que)=>{
  const det=[
    {
      id:details,
      quantity:que
    }
  ]
  navigate(`/buyone/${details}/${que}`)
}





  return (
    
   <> <Navbar1/> 
   
   {
    loading==true?
    <p><Loading/></p>:
    <>{
      cart!=""?
      <>
      
    <div className='button123'><button type="button" class="btn btn-warning" onClick={()=>setpopup(true)}>Show in Detail</button>
    
     
     <br></br><br></br><span style={{fontSize:"19px",fontFamily:"serif",backgroundColor:"black",color:"white"}}>Total Amount&nbsp;&nbsp;&nbsp;{cost}</span></div>
     <Popup trigger={popup} setTrigger={setpopup}>
    
    
    <div className='total'>
                   TOTAL COST<hr></hr>
                   <center>
                   <div className='totallist'>
                    <table>
                      
                      <tr>
                      <th style={{padding: "15px"}}>Name</th>
                      <th style={{padding: "15px"}}>Price</th>
                      <th style={{padding: "15px"}}> Quantity</th>
                      </tr>
                      {
                        cart.map((dta)=>
                                   <>
                                   <tr>
                                    <td style={{padding: "15px"}}>{dta.product_name}</td>
                                    <td style={{padding: "15px"}}>{dta.price}</td>
                                    <td style={{padding: "15px"}}> {dta.quantity}</td>
                                    </tr>
                                   
                        {/* // <div className='productname' style={{fontSize:"17px",textAlign:"justify"}}> {dta.product_name} <span style={{marginLeft:"30px"}}>{dta.price}</span> <span style={{marginLeft:"50px"}}>{dta.quantity}</span></div> */}
                       
                     
                        </>
                        )
                      
                      }
                      
                      </table>
                   </div>
                   </center>
                   <hr></hr>
                   <div className='amount' style={{fontSize:"30px"}}>Amount:&nbsp;&nbsp;&nbsp;{cost}</div>
    
    </div>
    
    </Popup>
    <div className='button1234'><buton class="btn btn-warning" style={{width:"150px",height:"50px"}}><i class="fa fa-bolt" aria-hidden="true"style={{fontSize:"25px", color:"white"}}></i>&nbsp;&nbsp;&nbsp;<span style={{fontSize:"25px",color:"white"}} onClick={buynow}>BUY ALL</span></buton></div>
    
    
    {
        cart.map((pro)=>
         <>   
        <div className='main1' >
        
            
        </div>
    
        <div className='cartbuy1'>
        
        <button type="button" class="btn btn-warning"><i class="fa fa-bolt" aria-hidden="true"style={{fontSize:"30px", color:"white"}}></i>&nbsp;&nbsp;&nbsp;<span onClick={() => { buyone(pro.productid,pro.quantity) }}>BUY NOW</span></button>
       
        </div>
        <div className='fulldetails1'>
                 <img src={`/images/${pro.image}`}></img> 
                 <div className='fulldetails1'>
           <span> {pro.product_name}</span>
           <br></br>
            <div className='proprice1'>
            ₹{pro.price}
    
            </div>
            <div className='prodesc1' style={{marginTop:"50px"}}>
          <span style={{fontSize:"20px"}} >Description:&nbsp;&nbsp;&nbsp;{pro.description}</span> </div>
          <div >Quantity:{pro.quantity}</div>
          <div className='trash'> <i class="fa fa-trash abcdd" aria-hidden="true" style={{fontSize:"40px",marginLeft:"30px",marginTop:"70px"}} onClick={() => { trash(pro._id) }}></i></div>
        </div>
        </div>
       
        </>
        )
    }
    
    
      </>
        
      :<>
      <div className='emptycarttext'>The Cart is empty</div>
      <div className='emptycart'>;<lord-icon
      src="https://cdn.lordicon.com/cllunfud.json"
      trigger="loop"
      delay={700}
      colors="outline:#121331,primary:#646e78,secondary:#ebe6ef"
      stroke={40}
      scale={65}
      style={{ width: 750, height: 350 }}
    ></lord-icon></div>
    
    
      </>
    }</>
   }
  

   
   

      


   
   
   </>
  )
}
