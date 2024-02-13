import React,{useRef,useState} from 'react'
import {Button} from 'react-bootstrap'
import { Col, Container, Row } from 'react-bootstrap'

export default function DragDropFile(props) {
    const [imgUpload,setImgUpload]=props.imgstate;
    const inputRef= useRef();
    
    const handleDrag=(e)=>{e.preventDefault()}

    const handleDrop=(e)=>{
        e.preventDefault();
        setImgUpload(e.dataTransfer.files[0]);
    }

        if(imgUpload){
            var url = URL.createObjectURL(imgUpload);
            return ( 
                <>
                <Container className='bg-light m-2 d-flex flex-col justify-content-center align-items-center text-center' style={{width:'',height:'300px', border: '2px dashed #111',borderRadius:'10px'}}>
                    <Row className="d-flex justify-content-center align-items-center text-center">
                        <img src={url} style={{height:'300px',width:'auto'}}></img>
                    </Row>
                    <Row>
                    </Row>
                </Container>
                <Col className=' m-2 d-flex flex-col justify-content-center align-items-center text-center ' onClick={()=>setImgUpload(false)}><Button className='btn-dark'>Cancel</Button></Col>
                </>
                
            )
        }
        else{
            return (
                <>
                <div className='bg-light m-2 d-flex flex-col justify-content-center align-items-center text-center' style={{width:'',height:'300px', border: '2px dashed #111',borderRadius:'10px'}}>
                <Container  onDragOver={handleDrag} onDrop={handleDrop}>
                <Row>
                    <Col className='col-12'><h1 className='text-center h3'>Drag and Drop<br></br> image here</h1></Col>
                </Row>
                        <input 
                        type="file"
                        onChange={(e)=>{setImgUpload(e.target.files[0])}}
                        hidden
                        ref={inputRef}
                        />
                <Row className='mt-3'>
                    <Col className='col-1'/>
                    <Col className='col-12'>
                            <Button className="btn-dark" onClick={()=>inputRef.current.click()}>Send Snap</Button>
                    </Col>
                    <Col className='col-1'/>
                </Row>
                </Container>
                </div>
                </>
            )
        }
        
        
    }
    
    
    // <>
    // <div className='bg-light m-2 d-flex flex-col justify-content-center align-items-center text-center' style={{width:'',height:'300px', border: '2px dashed #111',borderRadius:'10px'}} onDragOver={handleDrag} onDrop={handleDrop}>
    //   {imgorfile()} 
    // </div>
    
    // </>
  
