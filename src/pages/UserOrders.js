import React, { useContext, useEffect, useState } from 'react'
import GarbageSnapNavbar from '../components/Navbar'
import { db } from '../config/firebase'
import { collection, getDocs, query, where,doc, orderBy} from 'firebase/firestore'
import { Context } from '../App'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
export default function UserOrders() {
    const navigate=useNavigate()
    const [cardStyle,setCardStyle]=useState({fontSize:'16px'})
    
    const [user]=useContext(Context)
    const [Orders,setOrders]=useState([])
    const [products,setProducts]=useState([])

    useEffect(()=>{
        if(!user){
            navigate('/SignIn')
        }
        const fetchProducts= async ()=>{
            const data = await getDocs(collection(db,'Products'))
            setProducts(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
        }
        const fetchOrders = async ()=>{
            try{
                await fetchProducts();
                const ordersSnapshot =await  getDocs(query(collection(db,'Orders'),where("uid","==",user.uid),orderBy('status')))
                console.log("order snap", ordersSnapshot.docs)
                let ordersData=[]
                ordersSnapshot.forEach(orderDoc => {
                    const order = orderDoc.data();
                    order.id = orderDoc.id;
                    ordersData.push(order);
                  });
                  
                  await Promise.all(ordersData.map(async order => {
                    const orderedProductsSnapshot = await getDocs(collection(doc(db, 'Orders', order.id), 'orderedProducts'));
          
                    const orderedProducts = [];
          
                    orderedProductsSnapshot.forEach(productDoc => {
                      const product = productDoc.data();
                      orderedProducts.push(product);
                    });
          
                    order.orderedProducts = orderedProducts;
                  }));
                  console.log("end",ordersData)
                  setOrders(ordersData)
            }
            catch (err){
                console.log(err)
            }
        }
        fetchOrders()
    },[])
   
  const matchProduct=(product)=>{
        for(const i in products){
            if(products[i].id==product.productID){
                return products[i]
            }
        }
  }
  return (
    <>
      <GarbageSnapNavbar/>
        <Container>
            <Row>
                <Col className="d-flex justify-content-left my-3 display-3 "><p><strong>Orders</strong></p></Col>
            </Row>
            {Orders.map((order,idx)=>(
                <Card className='my-3' >
                    <Card.Header className='' >
                        <Row>
                            <Col>
                            <p className='h4'>Order {idx+1}</p>
                            </Col>
                            <Col className='d-flex justify-content-end'><strong>Order Status:</strong> {(order.status)?"Delivered":"Pending"}</Col>
                            <Col className='d-flex justify-content-end'><strong>Order ID:</strong> {order.id}</Col>
                        </Row>
                    </Card.Header>
                    <Card.Body style={cardStyle}>
                     {order.orderedProducts.map((product)=>{
                        const currProduct = (matchProduct(product))
                        console.log(currProduct,product)

                        return (
                            <Card >
                                <Card.Body className=''>
                                    <Row>
                                    <Col className='mt-2'>{currProduct.title}</Col>
                                    <Col className='my-2'>Qnt: {product.quantity}</Col>
                                    <Col>Price: INR {currProduct.price*product.quantity}</Col>
                                    <Col className='d-flex justify-content-center'><img src={currProduct.imgPath} style={{width:"100px",height:"100px"}}></img></Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        )
                    })}
                    </Card.Body>
                </Card>
            ))}
        </Container>
    </>
  )
}
