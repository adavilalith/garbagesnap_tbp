import React, { useContext,useState} from 'react'
import GarbageSnapNavbar from '../components/Navbar'
import { Container, Row, Col,Button } from 'react-bootstrap'
import { ProductInfo } from '../App'
import { Link } from 'react-router-dom'
import { Context } from '../App'
import { db } from '../config/firebase'
import { collection,addDoc } from 'firebase/firestore'

export default function ProductPage() {
    const [currProduct,setCurrProduct,ListOfProductData]=useContext(ProductInfo);
    const [quantity,setQuantity]=useState(0);


    const [user,setUser,userDB,setUserDB,cart,setCart]=useContext(Context);
    const addToCart = async()=>{
      //  console.log(userDB,cart)
      //  console.log(`Users/${userDB.id}/cart/${cart.id}`)
        if(!user){
          alert("Please Login");
          return;
        }
        if(userDB.id){
        console.log(`Users/${userDB.id}/cart`)

          await addDoc(collection(db,`Users/${userDB.id}/cart`),{
            productID : currProduct.id,
            quantity: quantity 
        });
        alert("added to cart");
        return;
        }
        alert("please login")
    }

  if(!(currProduct)){return (<Link to="/Store">Store</Link>)}
 

  return (
    <>
        <GarbageSnapNavbar></GarbageSnapNavbar>
        <Container>
            <Row>
                <Col>
                <Container style={{margin:'10px' ,width: '80vw'}} >
            <Row className='my-1'>
                <Col className='d-flex justify-context-left align-items-left'>
                    <Link to='/store'>
                    <Button className='btn-dark'>Back</Button>
                    </Link>
                </Col>
                <Col xs={6} lg={8}></Col>
                <Col>
                    <Link to="/Cart">
                        <Button className='btn-dark ms-right'># Cart</Button>
                    </Link>
                </Col>
            </Row>
            <Row className='d-sm-flex flex-column'>
                <Col className=''>{""}</Col>
                <Col className='display-3 '>{currProduct.title}</Col>
            </Row>
            <Row>
                <Col className='my-0'><img src={currProduct.imgPath} alt=""/></Col>
                <Col>
                    <Container style={{margin:0}}>
                        <Row className='mt-5' style={{fontSize:'20px'}}>
                            {currProduct.ShortDescription}
                        </Row>
                        <Row className='my-4'>
                            {currProduct.LongDescription}
                        </Row>
                        <Row>
                            <Col>
                                <button style={{backgroundColor:"#fff"}} onClick={()=>setQuantity((quantity>0)?quantity-1:quantity)}>-</button>
                                <button style={{backgroundColor:"#fff"}}>{quantity}</button>
                                <button style={{backgroundColor:"#fff"}} onClick={()=>{setQuantity(quantity+1)}}>+</button>
                            </Col>
                            <Col style={{marginLeft:'auto',marginRight:0}}>
                                <Button className="btn-dark"onClick={addToCart} >Add to Cart</Button>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
                </Col>
            </Row>
        </Container>
    </>
  )
}
