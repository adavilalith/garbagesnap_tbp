import React,{useRef,useState,useContext} from 'react';
import GarbageSnapNavbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import ProductPage from './ProductPage'
import { Context, ProductInfo } from '../App';
import { Link, useNavigate } from 'react-router-dom';
import { db } from '../config/firebase';
import { setDoc,doc } from 'firebase/firestore';
import LoginModal from '../components/LoginModal';


export default function Store() {
    const navigate = useNavigate()
    const [user]=useContext(Context)
    const [currProduct,setCurrProduct,ListOfProductData]=useContext(ProductInfo)
    const modalRef=useRef()
    const handleCartBtnClick=()=>{
        if(user===false){
            modalRef.current.click()
        }
        else{
            navigate('/Cart');
        }
    }

  return (
    <>
        <LoginModal buttonRef={modalRef}/>
        <ProductInfo.Provider value={[currProduct,setCurrProduct]}>
        <GarbageSnapNavbar/>
        <Container className='my-2'>
            <Row className='mt-3 d-xs-flex jusify-content-left'>
                <Col><p className='display-2'><strong>Products</strong></p></Col>
                <Col xs={6} lg={6}></Col>
                <Col>
                    <Button className='btn-dark mt-4' onClick={handleCartBtnClick}># Cart</Button>
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
