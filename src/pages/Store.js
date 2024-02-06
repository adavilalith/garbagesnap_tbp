import React,{useRef,useState,useContext,createContext,Context} from 'react';
import GarbageSnapNavbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import ProductPage from './ProductPage'
import { ProductInfo } from '../App';
import { Link } from 'react-router-dom';
import { db } from '../config/firebase';
import { setDoc,doc } from 'firebase/firestore';

export default function Store() {

    const [currProduct,setCurrProduct,ListOfProductData]=useContext(ProductInfo)

    

  return (
    <>
        <ProductInfo.Provider value={[currProduct,setCurrProduct]}>
        <GarbageSnapNavbar/>
        <Container className='my-2'>
            <Row className='mt-3 d-xs-flex jusify-content-left'>
                <Col><p className='display-2'><strong>Products</strong></p></Col>
                <Col xs={6} lg={6}></Col>
                <Col>
                    <Link to="/Cart">
                        <Button className='btn-dark mt-4'># Cart</Button>
                    </Link>
                </Col>
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
