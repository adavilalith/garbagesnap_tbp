import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


export default function App() {
  return(
    <Container className='w-100 bg-dark mx-0 p-5' style={{maxWidth:"100%"}}>
      <Row>
        <Col className='text-white'>
          <Row>
            <Col><h2>Garbage Snap</h2></Col>
          </Row>
          <Row className='mt-2'>
            <Col>
              <p style={{fontSize: '.8rem'}}>Join us in the movement to clean up Hyderabad and promote sustainability.</p>
            </Col>
            <Col/>
          </Row>
        </Col>
        <Col className='text-white ms-5'>
          <Row className='mb-4'><p className='h4'>Links</p></Row>
          <Row className='mt-2 '>
            <a href='https://github.com/adavilalith/garbagesnap_tbp' target='_balnk' className='my-2' style={{textDecoration:'none',color:'white'}}>GitHub</a>
            <a href='https://docs.google.com/file/d/1HOsPy9zp4uzv8GsxdvbjhuUeHcds2GoO/edit?usp=docslist_api&filetype=msword' target='_balnk' className='my-2' style={{textDecoration:'none',color:'white'}}>Documentation</a>
            <a href='https://docs.google.com/file/d/1DRETiOq0_eC8D3ZsWIvpo8wuFQbU61do/edit?usp=docslist_api&filetype=mspresentation' target='_balnk' className='my-2' style={{textDecoration:'none',color:'white'}}>Presentation</a>
          </Row>
        </Col>
        <Col className='text-white'>
          <Row className='mb-4'><p className='h4'>Developers</p></Row>
          <Row className='mt-2 '>
            <a href='' className='my-2' style={{textDecoration:'none',color:'white'}}>K Karthik</a>
            <a href='' className='my-2' style={{textDecoration:'none',color:'white'}}>K Sai Akshith Reddy</a>
            <a href='' className='my-2' style={{textDecoration:'none',color:'white'}}>Adavi Lalith</a>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}