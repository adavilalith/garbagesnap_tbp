import React, { useContext, useEffect, useState } from 'react'
import GarbageSnapNavbar from '../components/Navbar'
import { db } from '../config/firebase'
import { collection, getDocs, query, where, orderBy} from 'firebase/firestore'
import { Context } from '../App'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
export default function UserBookings() {
    const [cardStyle,setCardStyle]=useState({fontSize:'16px'})
    const navigate=useNavigate()
    const [user]=useContext(Context)
    const [bookings,setBookings]=useState(null)
    const fetchBookings = async ()=>{
        if(user){
            const q=query(collection(db,'Bookings'),where("uid","==",user.uid),orderBy('status'),)
            const querySnapshot = await getDocs(q);
            console.log("qsnap",querySnapshot)
                setBookings(querySnapshot.docs.map((doc)=>({...doc.data(),id: doc.id})))
            console.log("booking set")
            }
            else{
                console.log("no user")
            }
    }

    useEffect(()=>{
        if(!user){
            navigate('/SignIn')
        }
        if(window.screen.width<600){
            console.log("small")
            setCardStyle({fontSize:'6px'})
        }
        fetchBookings();
    },[])
  return (
    <>
      <GarbageSnapNavbar/>
        <Container>
            <Row>
                <Col className="d-flex justify-content-left my-3 display-3 "><p><strong>Bookings</strong></p></Col>
            </Row>
            {bookings&&bookings.map((bookings,idx)=>(
                <Card className='my-5' >
                    <Card.Header className='' >
                    <Row className='mb-4 bg-light px-3 pt-3' style={cardStyle}>
                    <Col className='col-2'><strong>S.no</strong></Col>
                    <Col className='col-2'><strong>booking ID</strong></Col>
                    <Col className='col-2'><strong>Type</strong></Col>
                    <Col className='col-2'><strong>Date</strong></Col>
                    <Col className='col-2'><strong>Time</strong></Col>
                    <Col className='col-2'><strong>Status</strong></Col>
                    </Row>
                    </Card.Header>
                    <Card.Body style={cardStyle}>
                    <Row className='mx-2 d-flex align-items-center m-2'>
                    <Col className='col-2'>{idx+1}</Col>
                    <Col className='col-2'>{bookings.id}</Col>
                    <Col className='col-2'>{bookings.CleanUpTier}</Col>
                    <Col className='col-2'>{bookings.date}</Col>
                    <Col className='col-2'>{bookings.time}</Col>
                    <Col className='col-2'>{(bookings.status)?"Completed":"Pending"}</Col>
                    </Row>
                    </Card.Body>
                </Card>
            ))}
        </Container>
    </>
  )
}
