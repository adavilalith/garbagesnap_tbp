import React from 'react'
import GarbageSnapNavbar from '../components/Navbar'
import GarbageSnapCarousel from '../components/Carousel'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import { Col, Container, Card, Row, CardGroup, Button} from 'react-bootstrap'
import placeholderimg from '../res/ProductPlaceholder.jpg'
import { Link, resolvePath } from 'react-router-dom'
import trashIcon from '../res/trashbinIcon.png'
import recycleIcon from '../res/recycleIcon.png'
import resolvedIcon from '../res/resolvedIcon.png'

export default function Home() {
  return (
    <>
        <GarbageSnapNavbar/>
        <Hero/>
        <div className='display-3 text-center mt-5'><strong>About Us</strong></div>
        <div className="text-center my-5 px-5">
            <p className='px-md-5 mx-md-5 fs-5'>
                
Welcome to <b>Garbage Snap</b>, your central hub for making Hyderabad cleaner and greener. We believe in the power of community action to tackle the city's waste management challenges head-on.
<br></br>
<br></br>
Through our platform, citizens like you can easily report garbage collection complaints, enabling us to identify problem areas and take targeted action. But we don't stop there. We also provide a hassle-free clean-up booking service, empowering individuals and groups to organize and participate in neighborhood clean-up efforts.
<br></br>
<br></br>
In addition to our cleanup initiatives, we're excited to introduce our online store, showcasing a diverse range of products crafted from recycled materials. Each purchase not only promotes sustainability but also supports local artisans and entrepreneurs dedicated to environmental conservation.
<br></br>
<br></br>

Join us in our mission to transform Hyderabad into a cleaner, healthier, and more vibrant city. Together, we can turn waste into opportunity and create a brighter future for all.
<br></br>

Let's make Hyderabad shine brighter than ever before!
            </p>
        </div>
        {/* <GarbageSnapCarousel/> */}
        <div className='display-3 text-center'><strong>Achivements</strong></div>
        <Container className='my-4 d-flex justify-content-center align-items-center h-100 text-center'>
            <Row >
                <Col className='my-5 d-flex justify-content-center align-items-center h-100 text-center'>
                    <Card style={{ width: '18rem', height: '20rem' } }>
                    <Row className='mt-5'>
                        <Col/>
                          <Col><img src={trashIcon} width={50}/></Col>
                        <Col/>
                      </Row>
                    <Card.Body>
                        <Card.Title ><p className='h3'>127,000 Kgs+<br></br>Collected</p></Card.Title>
                        <Card.Text className='mt-4'>
                            over 12,000kg of garbage has been collected from all throughout Hyderabad. Making the city cleaner.
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col >
                <Col className='my-5 d-flex justify-content-center align-items-center h-100 text-center'>
                    <Card style={{ width: '18rem', height: '20rem' }}>
                      <Row className='mt-5'>
                        <Col/>
                        <Col><img src={recycleIcon} width={50}/></Col>
                        <Col/>
                      </Row>
                    <Card.Body>
                        <Card.Title ><p className='h3'>57,000 Kgs+<br></br> Recycled</p></Card.Title>
                        <Card.Text className='mt-4'>
                            over 5000kgs of garbage has been recycled in to useful products that can be bought at our store.
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                <Col className='my-5 d-flex justify-content-center align-items-center h-100 text-center'>
                    <Card style={{ width: '18rem', height: '20rem' }}>
                    <Row   className='mt-5'>
                        <Col/>
                        <Col><img src={resolvedIcon} width={50}/></Col>
                        <Col/>
                      </Row>
                    <Card.Body>
                        <Card.Title><p className='h3'>14,000+ Snaps<br></br> Resolved</p></Card.Title>
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
      <Row className='mb-5'>
      <Col>
      <Card className='text-center my-4'style={{ width: '25rem', height: '20rem' }}>
        <Card.Body>
          <Card.Title className='display-5 '><strong>Send Snap</strong></Card.Title>
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
      </Col>
      <Col>
      <Card className='text-center my-4'style={{ width: '25rem', height: '20rem' }}>
        <Card.Body>
          <Card.Title className='display-5'><strong>Clean Up</strong></Card.Title>
          <Card.Text>
            We offer affordable cleaning and garbage pick up services in both the commercial and industrial sectors. Need to dispose of some waste or get mess cleaned up?<br />
            <strong>Book a Clean Up or Pick Up!</strong>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
                    <Link to="/CleanUp">
                            <Button className='btn-dark'>Clean Up</Button>
                    </Link>
        </Card.Footer>
      </Card>
      </Col>
      <Col>
      <Card className='text-center my-4'style={{ width: '25rem', height: '20rem' }}>
        <Card.Body>
          <Card.Title className='display-5'><strong>Store</strong></Card.Title>
          <Card.Text>
          Step into our store for a world of sustainable treasures. From stylish fashion to unique home decor, discover eco-conscious products that make a difference. Join us in promoting sustainability with every purchase! <br /><strong>Visit Our Store!</strong>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
                <Link to="/Store">
                    <Button className='btn-dark'>Store</Button>
                </Link>
        </Card.Footer>
      </Card>
      </Col>
    </Row>
            </Row>
        </Container>
        <Footer/>

    </>
  )
}