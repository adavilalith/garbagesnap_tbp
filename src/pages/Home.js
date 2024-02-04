import React from 'react'
import GarbageSnapNavbar from '../components/Navbar'
import GarbageSnapCarousel from '../components/Carousel'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import { Col, Container, Card, Row, CardGroup, Button} from 'react-bootstrap'
import placeholderimg from '../res/ProductPlaceholder.jpg'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <>
        <GarbageSnapNavbar/>
        <Hero/>
        <div className='display-3 text-center mt-5'><strong>About Us</strong></div>
        <div className="text-center my-5 px-5">
            <p className='px-md-5 mx-md-5 fs-5'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam itaque quibusdam voluptas perferendis dignissimos, atque sed <br></br>rerum adipisci esse<br></br> omnis laudantium odit suscipit deserunt ducimus repudiandae nemo qui inventore excepturi unde nobis corrupti cumque praesentium doloremque?<br></br> Consequatur quidem quod iure ea, accusamus dolores blanditiis veniam. Possimus sapiente qui consequatur sint fugiat laborum cupiditate veritatis debitis corporis reiciendis non vel incidunt tempora, molestias aspernatur<br></br> rem dolore minima placeat modi quasi quidem sit ratione nulla veniam? Ipsam deserunt totam ipsum facilis est, dolor dolores adipisci rem quam et quo ad numquam accusantium aut in quibusdam optio blanditiis soluta, beatae autem mollitia quia!
            </p>
        </div>
        {/* <GarbageSnapCarousel/> */}
        <div className='display-3 text-center'><strong>Achivements</strong></div>
        <Container className='my-4 d-flex justify-content-center align-items-center h-100 text-center'>
            <Row >
                <Col className='my-5 d-flex justify-content-center align-items-center h-100 text-center'>
                    <Card style={{ width: '18rem', height: '15rem' } }>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                        <Card.Title ><p className='h3'>127,000 Kgs+<br></br>Collected</p></Card.Title>
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
                        <Card.Title ><p className='h3'>57000 Kgs+<br></br> Recycled</p></Card.Title>
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
                        <Card.Title><p className='h3'>14000+ Snaps<br></br> resolved</p></Card.Title>
                        <Card.Text>
                            Over 3000 Snaps submitted by citizen of Hyderabad have beem cleaned up in a timely and efficient manner. 
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
            
        </Container>
        <Container className='mt-5'>
            <Row className='my-5'>
                <Col className='display-3 text-center'><strong>Services</strong></Col>
            </Row>
            <Row>
            <CardGroup className='mb-5 text-center'>
      <Card >
        <Card.Body>
          <Card.Title className='display-5'><strong>Send Snap</strong></Card.Title>
          <Card.Text>
           This service allows citizens of Hyderabad to raise complaints about garbage pile up. The citizen just sends us a snap and we dispatch a clean up. This is a initiative to maintain a clean city.<br></br>
          <strong> Send Us a Snap by clicking the button below! </strong>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
                    <Link to="/SendSnap">
                            <Button className='btn-dark'>Send Snap</Button>
                    </Link>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title className='display-5'><strong>Clean Up</strong></Card.Title>
          <Card.Text>
            We offer affordable cleaning and garbage pick up services in both the commercial and industrial sectors. Need to dispose of some waste or get mess cleaned up?
            <strong>Book a Clean Up or Pick Up!</strong>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
                    <Link to="/Home">
                            <Button className='btn-dark'>Clean Up</Button>
                    </Link>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title className='display-5'><strong>Store</strong></Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
                <Link to="/Store">
                    <Button className='btn-dark'>Store</Button>
                </Link>
        </Card.Footer>
      </Card>
    </CardGroup>
            </Row>
        </Container>
        <Footer/>

    </>
  )
}