import React,{useRef,useState,useContext,createContext,Context} from 'react';
import GarbageSnapNavbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import ProductPage from './ProductPage'
import { ProductInfo } from '../App';




export default function Store() {

    const [currProduct,setCurrProduct,ListOfProductData]=useContext(ProductInfo)

  return (
    <>
        <ProductInfo.Provider value={[currProduct,setCurrProduct]}>
        <GarbageSnapNavbar/>
        <Container className='my-2'>
            <Row className='mt-3'>
                <Col><h1>Products</h1></Col>
                <Col xs={6} lg={6}></Col>
                <Col><Button className='btn-dark'># Cart</Button></Col>
            </Row>
            <Row >
                <Col className=' col-12 d-flex flex-wrap' style={{width:'100%'}}>
                    <Container className='d-flex flex-wrap'>
                        {
                            ListOfProductData.map((Product)=>{
                                                        return (<ProductCard
                                                                    product={Product}
                                                                >
                                                                </ProductCard>
                                                        )
                                                    })
                        }
                    </Container>
                </Col>
            </Row>
        </Container>
        </ProductInfo.Provider>
    </>
  )
}
