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
              <p>Join us in the movement to clean up Hyderabad and promote sustainability. Report garbage, book clean-ups, and shop eco-friendly products made from recycled materials. Let's make Hyderabad a cleaner, greener place for all!</p>
            </Col>
            <Col/>
          </Row>
        </Col>
        <Col className='text-white ms-5'>
          <Row className='mb-4'><p className='h4'>Links</p></Row>
          <Row className='mt-2 '>
            <a href='' className='my-2' style={{textDecoration:'none',color:'white'}}>GitHub</a>
            <a href='' className='my-2' style={{textDecoration:'none',color:'white'}}>Documentation</a>
            <a href='' className='my-2' style={{textDecoration:'none',color:'white'}}>Presentation</a>
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