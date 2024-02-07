import React,{useRef,useState,useContext} from 'react';
import { Col,Row,Card,Button } from 'react-bootstrap';
import './ProductCard.css'
import { Link } from 'react-router-dom';
import { db } from '../config/firebase';
import { addDoc,collection,doc } from 'firebase/firestore';
import { Context } from '../App';
import { ProductInfo } from '../App'
import LoginModel from './LoginModal';

export default function ProductCard(props) {

    const [currProduct,setCurrProduct,ListOfProductData]=useContext(ProductInfo)

    const [quantity,setQuantity]=useState(1);
    const product=props.product;
    const ProductPageRef = useRef()

    const modelRef=useRef()
    const [user,setUser,userDB,setUserDB,cart,setCart]=useContext(Context);
    const addToCart = async()=>{
      //  console.log(userDB,cart)
      //  console.log(`Users/${userDB.id}/cart/${cart.id}`)
        if(!user){
          modelRef.current.click()
          return;
        }
        if(userDB.id){
        console.log(`Users/${userDB.id}/cart`)

          await addDoc(collection(db,`Users/${userDB.id}/cart`),{
            productID : product.id,
            quantity: quantity 
        });
        alert("added to cart");
        return;
        }
        alert("please login")
    }

    
  return (
    <Card style={{ width: '20rem' }} className="mx-3 my-3 ProductCard" >
      <LoginModel buttonRef={modelRef} />
      <Card.Img variant="top" src={product.imgPath} onClick={()=>{setCurrProduct(product);ProductPageRef.current.click();}} />
      <Card.Body>
        <Card.Title onClick={()=>{setCurrProduct(product);ProductPageRef.current.click();}}>{product.title}</Card.Title>
        <Card.Text onClick={()=>{setCurrProduct(product);ProductPageRef.current.click();}}>
          {product.ShortDescription}
        </Card.Text>
        <Link to="/ProductPage" ref={ProductPageRef} hidden></Link> 
        {/* <Row className='my-3 mx-1'>
          <Col>
          <Button variant="dark mr-2" onClick={()=>{setCurrProduct(product);ProductPageRef.current.click();}} >
            <Link to="/ProductPage" ref={ProductPageRef} hidden></Link>
            Veiw Product
        </Button>
          </Col>
        </Row> */}
        <Row>
          <Col className='mb-3 mx-3'style={{fontSize:'22px'}}>INR {product.price}</Col>
        </Row>
        <Row>
        <Col className='col-7'>
          <Button variant="dark mx-3" onClick={addToCart}>Add to Cart</Button>
        </Col>
        <Col className='mt-1'>
          <button style={{backgroundColor:"#fff"}} onClick={()=>setQuantity((quantity>1)?quantity-1:quantity)}>-</button>
          <button style={{backgroundColor:"#fff"}} >{quantity}</button>
          <button style={{backgroundColor:"#fff"}} onClick={()=>{setQuantity(quantity+1)}}>+</button>
        </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
