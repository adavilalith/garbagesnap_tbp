import React,{useContext, useEffect, useState} from 'react'
import GarbageSnapNavbar from '../components/Navbar'
import { Context } from '../App';
import { db } from '../config/firebase';
import { getDocs,addDoc,collection, query, where,getDoc,doc, deleteDoc } from 'firebase/firestore';
import { Button, Container,Row,Col,Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import dummyimg from '../res/ProductPlaceholder.jpg'

export default function Cart() {
    const navigate=useNavigate()
    const [user,setUser,userDB,setUserDB,cart,setCart]=useContext(Context);
    const [cartProducts,setCartProducts]=useState([])


    const fetchCart=async()=>{
        console.log("fetch start",cart)
        if(!user){
            alert("please login");
            return;
        }
        await getDocs(collection(db,`Users/${userDB.id}/cart`)).then((temp)=>setCart(temp.docs.map((doc)=>({...doc.data(), id : doc.id}))))
        console.log("fetch end",cart)
    }
    const updateCartProducts=async()=>{
        const ids=cart.map((p)=>p.productID)
        if(ids==0){
            setCartProducts([])
            return;
        }
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
        if(cart){
        updateCartProducts();
        console.log("update cartproducts",cartProducts)
        console.log(cart,cartProducts)
        }
    },[cart])

    const removeProductFromCart= async (p)=>{
        if(cartProducts.length==1){
        await deleteDoc(doc(db,'Users',userDB.id,'cart',p.id))
        setCart([]);
        setCartProducts([]);
        return;
        }
        console.log("delete start")
        await deleteDoc(doc(db,'Users',userDB.id,'cart',p.id))
        await fetchCart();
        await updateCartProducts();
        console.log("removed")
        console.log("remove",cart,cartProducts)
    }

    const handlePlaceOrder= async()=>{
        console.log("placing order")
        const OrderRef = collection(db,'Orders')
        const DocSnapshot = await addDoc(OrderRef,{
            uid: user.uid,
            NumberOfItems: cartProducts.length,
            status :0 

        })
        const OrderItemsRef = collection(db,'Orders',DocSnapshot.id,'orderedProducts')
        cartProducts.map((product,idx)=>{
            addDoc(OrderItemsRef,{
                productID: product.productID,
                quantity: product.quantity, 
            })
        })
        cartProducts.map((product)=>
            removeProductFromCart(product)
        )
        setCartProducts([])
        setCart(null)
        console.log("placed order")
        alert("order placed")
        navigate("/Store")
    }
    return (
        <>        
        <GarbageSnapNavbar/>
        <Container className='mt-5'>
                <h1 className='display-2 my-3'><strong>Cart</strong></h1>
                {!cartProducts.length &&<h3>No Items in Cart</h3>}

                {cartProducts && cartProducts.map((product, idx) => (
                    <Row key={idx} className="mb-4 ">
                        <Card className="w-100 my-2 h-100 rounded-0 border p-3 mb-2 bg-light bg-gradient rounded-5">
                            <Card.Body className="d-flex flex-column">
                                <Card.Title style={{ textAlign: 'start' }}><h4>{product.title}</h4></Card.Title>
                                <hr />
                                <Row>
                                    <Col>
                                    <Col>
                                        <p>
                                            Spiral-bound notebook made from recycled paper.                                               
                                            </p>
                                            </Col>
                                        <Card.Text><b>Quantity :</b> {product.price}</Card.Text>
                                        <Card.Text><b>Price :</b> {product.price*product.quantity}</Card.Text>
                                    </Col>
                                    <Col>
                                        <Row>
                                            
                                        </Row>
                                        <Row>
                                        <Col className='d-flex justify-content-center'><img src={product.imgPath} style={{width:"200px",height:"200px"}}></img></Col>
                                        </Row>
                                    </Col>

                                </Row>
                                <hr />  
                                <Col xs="auto" className="mx-auto">
                                    <Button variant="danger" className='mt-auto' onClick={() => removeProductFromCart(product)}>Remove</Button>
                                </Col>
                            </Card.Body>
                        </Card>
                    </Row>
                ))}
                {cartProducts.length  &&
                    <Row>
                        <Col className='d-flex justify-content-center my-5'>
                            <Button className='btn-dark px-4'><p className='h3' onClick={handlePlaceOrder}>Place Order</p></Button>
                        </Col>
                    </Row>
                }
            </Container>
            </>

    )
}
