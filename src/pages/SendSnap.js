import React,{ useState, useEffect } from 'react'
import GarbageSnapNavbar from '../components/Navbar'
import { Button, Col, Container, Row, Form } from 'react-bootstrap'
import DragDropFile from '../components/DragDropFile'
import Footer from '../components/Footer'
import {
    getFirestore, collection, getDocs, addDoc
} from 'firebase/firestore'
import {
    getDownloadURL,
    getStorage, ref, uploadBytes
} from 'firebase/storage'
import app from '../config/firebase'
export default function SendSnap() {
    const date = new Date();
    const getGeolocation = ()=>{
        if(navigator.geolocation){
            navigator.geolocation.watchPosition((position)=>{
                setLocation(`${position.coords.latitude},${position.coords.longitude}`);
            })
        }
        else{
            console.log("enable geolocation")
        }
    }

    const [imgUpload,setImgUpload]=useState(null);
    
    const [imgURL,setImgURL]=useState(null);
    const [location,setLocation]=useState("");
    const [desc,setDesc] = useState("");


    const db = getFirestore()
    const colRef = collection(db,'Complaints')
    const storage= getStorage()

    // useEffect(()=>{
    //     const getComplaints = async()=>{
    //         try{
    //             const data=await getDocs(colRef);
    //             console.log(data.docs);
    //         }
    //         catch(err){
    //             console.log(err);
    //         }
    //     }
    //     getComplaints();
    // },[])

    const uploadImage= async()=>{
        return new Promise(
            (resolve,reject)=>{
                if(imgUpload===null){reject();alert("invalid url try again");return;}
                else{
                    const imgRef = ref(storage,`images/${location}_${date.getHours()}_${date.getMinutes()}_${date.getSeconds()}`);
                    uploadBytes(imgRef,imgUpload)
                        .then((snapshot)=>[
                            getDownloadURL(snapshot.ref)
                                .then((url)=>{
                                    setImgURL(url);
                                    resolve();
                                })
                        ]

                        )
                }
            }
        )
    }

    const uploadComplaint= ()=>{
        if(location===""){
            alert("please allow location access");
            return;
        }
        else{
            uploadImage()
                .then(()=>{
                    addDoc(colRef,{
                        imgURL: imgURL,
                        location: location,
                        description: desc
                        });
                        console.log("DONE");
                        return;
                    })
                .catch(()=>{
                    if(imgURL){
                        
                    }
                    else{
                        alert("url invalid")
                    }
                })
        }


    }


    return (
        <>
        <GarbageSnapNavbar/>
        <Container >
            <Row className='d-flex justify-content-center align-items-center text-center mt-3'><h1><strong>Send Snap</strong></h1></Row>
            <Row>
                <Col className='col-xxl-1 '></Col>
                <Col className='col-10'>
                    <Row style={{marginTop:'5rem'}}>
                        <Col className=''>
                            <DragDropFile imgstate={[imgUpload,setImgUpload]}/>
                        </Col>
                    </Row>
                    <Row className='mt-5'>
                        <Col className='d-flex justify-content-center align-items-center text-center'>
                            <Button className='btn-primary' onClick={getGeolocation}>Get Geolocation</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='d-flex justify-content-center align-items-center text-center'>
                            <p>{(location)?location:"Enable Location Acess"}</p>
                        </Col>              
                    </Row>
                    <Row className='mt-5'>
                        <Col>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Describe:</Form.Label>
                                <Form.Control as="textarea" rows={3} onChange={(e)=>setDesc(e.target.value)}/>
                            </Form.Group>
                        </Form>
                        </Col>
                    </Row>
                    <Row className='my-5'>
                        <Col className='d-flex justify-content-center align-items-center text-center'>
                            <Button className='btn-primary' onClick={uploadComplaint}>Submit Snap</Button>
                        </Col>
                    </Row>
                </Col>
                <Col className=''></Col>
            </Row>
        </Container>
        </>
    )
}
