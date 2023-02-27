import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react'
import axios from 'axios'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Registration from './Registration';
import Loginpage from './Loginpage';
import Fullpage from './pages/Fullpage';
import Fullpage2 from './pages/Fullpage2';
import Fullpage3 from './pages/Fullpage3';
import Category from './add_category/Category';
import Newloginpage from './Newloginpages';
import Fullpage4 from './pages/Fullpage4';
import Viewproducts1 from './Viewproducts/Viewproducts1';
import Fullpage5 from './pages/Fullpage5';
import Viewbrands from './add_brands/Viewbrands';
import Addbrands from './add_brands/Addbrands';
import Newloginpages from './Newloginpages';
import Userdetails from './user_details/Userdetails';
import Fullproducts from './user/category_full details/Fullproducts';
import Oneproduct from './oneProduct_desc/Oneproduct';
import Cartpro from './user/Cart_page/Cartpro';
import Buynow from './Buynow/Buynow';
import Addcoupen from './Add cuopen/Addcoupen';
import Buyone from './Buynow/Buyone';
import Loading from './Loading';


import {context} from './context/Context'

function App() {
 
const [contextstate,newcontextstate]=useState({
  id:2255
  
})
  return (

    <>
  <context.Provider value={{contextstate,newcontextstate}}>

  
   <BrowserRouter>
   <Routes>


<Route path='/' element={<Newloginpages/>}/>
<Route path='/registration' element={<Registration/>}></Route>
<Route path='/loading' element={<Loading/>}/>
<Route path='/adminpage' element={<Fullpage/>}/>
<Route path='/home' element={<Fullpage2/>}/>
<Route path='/viewcategory' element={<Fullpage3/>}/>
<Route path='/category' element={<Category/>}/>
<Route path='/new' element={<Newloginpage/>}/>
<Route path='/viewproducts' element={<Fullpage4/>}/>
<Route path={'/Viewproducts1/:id'} element={<Viewproducts1/>}/>
<Route path='/userpage' element={<Fullpage5/>}/>
<Route path='/viewbrands' element={<Viewbrands/>}/>
<Route path='/addbrands' element={<Addbrands/>}/>
<Route path='/profiledetails' element={<Userdetails/>}/>
<Route path='/userproducts/:id' element={<Fullproducts/>}/>
<Route path='/oneproduct/:id' element={<Oneproduct/>}/>
<Route path='/cartpro' element={<Cartpro/>}/>
<Route path='/buynow/:id'  element={<Buynow/>}/>
<Route path='/coupendata'  element={<Addcoupen/>}/>
<Route path='/buyone/:qty/:id'  element={<Buyone/>}/>

   </Routes>
   </BrowserRouter>
   </context.Provider>
    </>
  )
}

export default App;
