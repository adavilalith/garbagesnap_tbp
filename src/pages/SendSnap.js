import React,{ useState, useEffect, useContext } from 'react'
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
import {app,db} from '../config/firebase'
import { Context } from '../App'


export default function SendSnap() {
    const [user,setUser]=useContext(Context)
    const date = new Date();
    const getGeolocation = ()=>{
        setLocation(location)
        if(navigator.geolocation){
            navigator.geolocation.watchPosition((position)=>{
                console.log("hi")
                setLocation(`${position.coords.latitude},${position.coords.longitude}`);
            })
        }
        else{
            console.log("enable geolocation")
        }
    }

    const [imgUpload,setImgUpload]=useState(null);
    
    const [imgURL,setImgURL]=useState("");
    const [location,setLocation]=useState("");
    const [desc,setDesc] = useState("");

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
    const imgURLEffect = useEffect(()=>{
        if(imgURL===""){return;}
        addDoc(colRef,{
            imgURL: imgURL,
            location: location,
            description: desc,
            status: 0,
            userID : (user===false)?"":user.uid
            });
        alert("uploaded")
        return;
    },[imgURL])
    const uploadComplaint= async()=>{
        if(location===""){
            alert("please allow location access");
            return;
        }
        else{
            uploadImage()
        }


    }

    return (
        <>
        <GarbageSnapNavbar/>
        <Container >
            <Row className='d-flex justify-content-center align-items-center text-center mt-3'><h1 className='display-3 mt-2'><strong>Send Snap</strong></h1></Row>
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
                            <Button className='btn-dark' onClick={getGeolocation}>Get Geolocation</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='d-flex justify-content-center align-items-center text-center'>
                            <p>{(location.length)?location:"Enable Location Access"}</p>
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
                            <Button className='btn-dark' onClick={uploadComplaint}><h3>Send Snap</h3></Button>
                        </Col>
                    </Row>
                </Col>
                <Col className='mb-5'></Col>
            </Row>
        </Container>
        </>
    )
}
