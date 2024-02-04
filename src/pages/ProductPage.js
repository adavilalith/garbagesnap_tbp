import React, { useContext,useState } from 'react'
import GarbageSnapNavbar from '../components/Navbar'
import { Container, Row, Col,Button } from 'react-bootstrap'
import { useLocation, useParams } from 'react-router'
import { ProductInfo } from '../App'
import { Link } from 'react-router-dom'
import { Query } from '@firebase/firestore'

export default function ProductPage() {
    const [currProduct,setCurrProduct,ListOfProductData]=useContext(ProductInfo);
    console.log("#",currProduct)
    const [quantity,setQuantity]=useState(0);

    if(!(currProduct)){return (<Link to="/Store">Store</Link>)}

  return (
    <>
        <GarbageSnapNavbar></GarbageSnapNavbar>
        <Container style={{margin:'10px'}}>
            
            <Row className='my-2'>
                <Col className='d-flex justify-context-left align-items-left'>
                    <Link to='/store'>
                    <Button className='btn-dark'>Back</Button>
                    </Link>
                </Col>
            </Row>
            <Row>
                <Col></Col>
                <Col className='display-3'>{currProduct.title}</Col>
            </Row>
            <Row>
                <Col><img src={currProduct.imgPath} alt="" /></Col>
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
                                <Button className="btn-dark" >Add to Cart</Button>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    </>
  )
}
