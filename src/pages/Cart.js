import React,{useContext, useEffect, useState} from 'react'
import GarbageSnapNavbar from '../components/Navbar'
import { Context } from '../App';
import { db } from '../config/firebase';
import { getDocs,collection, query, where,getDoc,doc, deleteDoc } from 'firebase/firestore';
import { Button, Container,Row,Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
export default function Cart() {
    const navigate=useNavigate()
    const [user,setUser,userDB,setUserDB,cart,setCart]=useContext(Context);
    const [cartProducts,setCartProducts]=useState([])


    const fetchCart=async()=>{
        console.log(cart)

        if(!user){
            alert("please login");
            return;
        }
        await getDocs(collection(db,`Users/${userDB.id}/cart`)).then((temp)=>setCart(temp.docs.map((doc)=>({...doc.data(), id : doc.id}))))
        console.log(cart)
    }
    const updateCartProducts=async()=>{
        const ids=cart.map((p)=>p.productID)
        if(ids==0){return;}
        const q = query(collection(db,'Products'),where("__name__",'in',ids))
        const querySnapshot = await getDocs(q)
        const documentsData = querySnapshot.docs.map((doc) => ({
            productID: doc.id,
            ...doc.data()
        }))
        setCartProducts(cart.map((p)=>{
            for(const i in documentsData){
                if(documentsData[i].productID==p.productID){
                    return {...documentsData[i],...p}
                }
            } 
        }))
        console.log(cartProducts)
    }
    
    useEffect(()=>{
        if(!user){
            navigate("/Store")
            return;
        }
        if(userDB){
            fetchCart();
        }
    },[])
    useEffect(()=>{
        if(!user){
            navigate("/Store")
            return;
        }
        if(cart && Object.keys(cart).length!=0){
        updateCartProducts();
        }
    },[cart])

    const removeProductFromCart= async (p)=>{
        await deleteDoc(doc(db,'Users',userDB.id,'cart',p.id))
        await fetchCart();
        await updateCartProducts();
        console.log("removed")
    }

    return (
        <div>
        <GarbageSnapNavbar/>
        <Container className='mt-5'>
        <Row >
            <Col className='col-1' style={{border:'1px solid black'}}><strong>S.No</strong></Col >
            <Col className='col-6' style={{border:'1px solid black'}}><strong>Product Name</strong></Col>
            <Col className='col-1' style={{border:'1px solid black'}}><strong>Quantity</strong></Col>
            <Col className='col-2' style={{border:'1px solid black'}}><strong>Price</strong></Col>
            <Col style={{border:'1px solid black'}}><strong>Remove</strong></Col>
        </Row>
        {cartProducts&&cartProducts.map((product,idx)=>{
          return (<Row  className='py-4'>
                    <Col className='col-1' style={{border:'1px solid black'}}>{idx+1}</Col>
                    <Col className='col-6' style={{border:'1px solid black'}}>{product.title}</Col>
                    <Col className='col-1' style={{border:'1px solid black'}}>{product.quantity}</Col>
                    <Col className='col-2' style={{border:'1px solid black'}}>{product.price*product.quantity}</Col>
                    <Col className='d-flex justify-content-center'style={{border:'1px solid black'}} onClick={()=>removeProductFromCart(product)}><Button>Remove</Button></Col>
                  </Row>
                )
            }
        )
        }
        </Container>    
        </div>
    )
}
