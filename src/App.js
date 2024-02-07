import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GarbageSnapNavbar from './components/Navbar';
import Navbar from './components/Navbar';
import React,{ useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import SendSnap from './pages/SendSnap';
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Store from './pages/Store'
import ProductPage from './pages/ProductPage'
import placeholderimg from './res/ProductPlaceholder.jpg'
import { collection, doc ,getDocs, setDoc} from 'firebase/firestore';
import { db } from './config/firebase';
import Cart from './pages/Cart';

export const Context = React.createContext()

let ProductData={title:"Product Name",
                 ShortDescription:"Some quick example text to build on the card title and make up the bulk of the card's content.",
                 LongDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque modi recusandae explicabo eaque, est autem dolorum magni quibusdam dolores ullam quis voluptatibus quo ratione exercitationem delectus atque ex quisquam. Fugiat eaque inventore nulla aliquid dolor dolore quidem, velit alias doloremque perspiciatis? Cumque quas explicabo sint sunt aperiam ad quis cum.",
                 imgPath: placeholderimg
                }



export const ProductInfo=React.createContext()

function App() {

  const [ListOfProductData,setListOfProductData]=useState([ProductData,ProductData,ProductData,ProductData,ProductData,ProductData,ProductData,ProductData,ProductData,])
  const getProducts = async () =>{
    const prodctRef = collection(db,'Products')
    const temp = await getDocs(prodctRef)
    setListOfProductData(temp.docs.map((doc)=>({...doc.data(),id:doc.id})))
  }
  useEffect(()=>{
    getProducts();
  },[])
  const [currProduct,setCurrProduct]=useState(null)
  const [user,setUser] = useState(false)
  const [userDB,setUserDB]=useState(null);
  const [cart,setCart]=useState(null)

  
  return (
    <>
    
    <Context.Provider value={[user,setUser,userDB,setUserDB,cart,setCart]}>
      <ProductInfo.Provider value={[currProduct,setCurrProduct,ListOfProductData]}>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/SendSnap" element={<SendSnap/>}></Route>
        <Route path="/SignIn" element={<SignIn/>}></Route>
        <Route path="/SignUp" element={<SignUp/>}></Route>
        <Route path="/Store" element={<Store/>}></Route>
        <Route path="/ProductPage" element={<ProductPage/>}></Route>
        <Route path="/Cart" element={<Cart/>}></Route>
      </Routes>
      </ProductInfo.Provider > 
    </Context.Provider>
    </>
  );
}

export default App;
