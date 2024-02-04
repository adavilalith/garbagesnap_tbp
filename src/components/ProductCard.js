import React,{useRef,useState,useContext} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ProductCard.css'
import { Link } from 'react-router-dom';


import { ProductInfo } from '../App'

export default function ProductCard(props) {

    const [currProduct,setCurrProduct,ListOfProductData]=useContext(ProductInfo)

    const product=props.product;
    const ProductPageRef = useRef()
  return (
    <Card style={{ width: '20rem' }} className="mx-3 my-3 ProductCard" >
      <Card.Img variant="top" src={product.imgPath} onClick={()=>{setCurrProduct(product);ProductPageRef.current.click();}} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text onClick={()=>{setCurrProduct(product);ProductPageRef.current.click();}}>
          {product.ShortDescription}
        </Card.Text>
        <Button variant="dark mr-2" onClick={()=>{setCurrProduct(product);ProductPageRef.current.click();}} >
            <Link to="/ProductPage" ref={ProductPageRef} hidden></Link>
            more info
        </Button>
        <Button variant="dark mx-3" onClick={()=>alert("hi")}>Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}
