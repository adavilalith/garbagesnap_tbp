import React from 'react'
import GarbageSnapNavbar from '../components/Navbar'
import GarbageSnapCarousel from '../components/Carousel'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import { Col, Container, Card, Row, } from 'react-bootstrap'


export default function Home() {
  return (
    <>
        <GarbageSnapNavbar/>
        <Hero/>
        <div className="text-center my-5 px-5">
            <p className='px-md-5 mx-md-5 fs-5'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam itaque quibusdam voluptas perferendis dignissimos, atque sed <br></br>rerum adipisci esse<br></br> omnis laudantium odit suscipit deserunt ducimus repudiandae nemo qui inventore excepturi unde nobis corrupti cumque praesentium doloremque?<br></br> Consequatur quidem quod iure ea, accusamus dolores blanditiis veniam. Possimus sapiente qui consequatur sint fugiat laborum cupiditate veritatis debitis corporis reiciendis non vel incidunt tempora, molestias aspernatur<br></br> rem dolore minima placeat modi quasi quidem sit ratione nulla veniam? Ipsam deserunt totam ipsum facilis est, dolor dolores adipisci rem quam et quo ad numquam accusantium aut in quibusdam optio blanditiis soluta, beatae autem mollitia quia!
            </p>
        </div>
        {/* <GarbageSnapCarousel/> */}
        <Container className='my-5 d-flex justify-content-center align-items-center h-100 text-center'>
            <Row >
                <Col className='my-5 d-flex justify-content-center align-items-center h-100 text-center'>
                    <Card style={{ width: '18rem', height: '15rem' }}>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                        <Card.Title ><p className='h3'>12,000 Kgs+<br></br>Collected</p></Card.Title>
                        <Card.Text className='mt-4'>
                            over 12,000kg of garbage has been collected from all throughout Hyderabad. Making the city cleaner.
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col >
                <Col className='my-5 d-flex justify-content-center align-items-center h-100 text-center'>
                    <Card style={{ width: '18rem', height: '15rem' }}>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                        <Card.Title ><p className='h3'>5000 Kgs+<br></br> Recycled</p></Card.Title>
                        <Card.Text className='mt-4'>
                            over 5000kgs of garbage has been recycled in to useful products that can be bought at our store.
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                <Col className='my-5 d-flex justify-content-center align-items-center h-100 text-center'>
                    <Card style={{ width: '18rem', height: '15rem' }}>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                        <Card.Title><p className='h3'>3000+ Snaps<br></br> resolved</p></Card.Title>
                        <Card.Text>
                            Over 3000 Snaps submitted by citizen of Hyderabad have beem cleaned up in a timely and efficient manner. 
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        <Footer/>

    </>
  )
}