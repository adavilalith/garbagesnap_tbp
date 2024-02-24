import React,{ useState, useEffect, useContext,useRef } from 'react'
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
import DummyModal from '../components/DummyModal'
import CurrentLocMap from '../components/CurrentLocMap'

export default function SendSnap() {
    const [user,setUser]=useContext(Context)
    const date = new Date();

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
            location: `${location[0]},${location[1]}`,
            description: desc,
            status: 0,
            userID : (user===false)?"":user.uid
            });
        btnRef.current.click();
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
    const btnRef=useRef()
    return (
        <>
        <GarbageSnapNavbar/>
        <Container >
            <DummyModal title="Image Uploaded" desc="We will reach out to you as soon as we clean up the garbage" btnRef={btnRef}/>
            <Row className='d-flex justify-content-center align-items-center text-center mt-3'><h1 className='display-3 mt-2'><strong>Send Snap</strong></h1></Row>
            <Row>
                <Col className='col-xxl-1 '></Col>
                <Col className='col-10'>
                    <Row style={{marginTop:'5rem'}}>
                        <Col className=''>
                            <DragDropFile imgstate={[imgUpload,setImgUpload]}/>
                        </Col>
                    </Row>
                    <Row>
                        <CurrentLocMap loc={[location,setLocation]}/>
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
                            <Button className='btn-dark' onClick={uploadComplaint} ><h3>Send Snap</h3></Button>
                        </Col>
                    </Row>
                </Col>
                <Col className='mb-5'></Col>
            </Row>
        </Container>
        </>
    )
}
