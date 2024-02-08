import React, { useContext, useEffect, useState } from 'react'
import GarbageSnapNavbar from '../components/Navbar'
import { db } from '../config/firebase'
import { collection, getDocs, query, where, orderBy} from 'firebase/firestore'
import { Context } from '../App'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'

export default function UserSnaps() {
    
    const [user]=useContext(Context)
    const [Snaps,setSnaps]=useState(null)
   
    const fetchSnaps = async ()=>{
        if(user){
        const q=query(collection(db,'Complaints'),where("userID","==",user.uid),orderBy('status'),)
        const querySnapshot = await getDocs(q);
        setSnaps(querySnapshot.docs.map((doc)=>({...doc.data(),id: doc.id})))
        }
        else{
            console.log("no user")
        }
    }
    useEffect(()=>{
        fetchSnaps();
    },[])
    console.log(Snaps)
    return (
        <>
        <GarbageSnapNavbar/>
        <Container>
            <Row>
                <Col className="d-flex justify-content-left my-3 display-3 "><p><strong>User Snaps</strong></p></Col>
            </Row>
            {Snaps&&Snaps.map((snap,idx)=>(
                <Card className='my-5'>
                    <Card.Header>
                    <Row className='mb-4 bg-light px-3 pt-3'>
                    <Col className='col-1'><strong>S.no</strong></Col>
                    <Col className='col-2'><strong>Snap ID</strong></Col>
                    <Col className='col-2'><strong>GeoLocation</strong></Col>
                    <Col className='col-3'><strong>Description</strong></Col>
                    <Col className='col-1'><strong>status</strong></Col>
                    <Col className=' d-flex justify-content-center'><strong>Image</strong></Col>
                    </Row>
                    </Card.Header>
                    <Row className='mx-2 d-flex align-items-center m-2'>
                    <Col className='col-1'>{idx+1}</Col>
                    <Col className='col-2'>{snap.id}</Col>
                    <Col className='col-2'>{snap.location}</Col>
                    <Col className='col-3'>{snap.description}</Col>
                    <Col className='col-1'>{(snap.status)?"Completed":"Pending"}</Col>
                    <Col className='d-flex justify-content-center'><img src={snap.imgURL} style={{width:"100px",height:"100px"}}></img></Col>
                    </Row>
                </Card>
            ))}
        </Container>
        
        </>
    )
}
