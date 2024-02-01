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

    const imgorfile=()=>{
        if(imgUpload){
            var url = URL.createObjectURL(imgUpload);
            return ( 
                <>
                <Container>
                    <Row className="d-flex justify-content-center align-items-center text-center">
                        <img src={url} style={{width:'300px',}}></img>
                    </Row>
                    <Row>
                        <Col></Col>
                        <Col className='col-12'></Col>
                
                    <Col></Col>

                    </Row>
                </Container>
                </>
            )
        }
        else{
            return (
                <>
                <Container>
                <Row>
                <h1 className='text-center h3'>Drap and Drop<br></br> image here</h1>
                </Row>
                <Row className='mt-3'>
                    <Col/>
                    <Col className='col-12'>
                        <input 
                        type="file"
                        onChange={(e)=>{setImgUpload(e.target.files[0])}}
                        hidden
                        ref={inputRef}
                        />
                        <Button className="btn-primary" onClick={()=>inputRef.current.click()}>Send Snap</Button></Col>
                    <Col/>
                </Row>
                <Row>
                </Row>
                </Container>
                
                
                </>
            )
        }
    }
    return (
    <>
    <div className='bg-light m-2 d-flex flex-col justify-content-center align-items-center text-center' style={{width:'',height:'300px', border: '2px dashed #111',borderRadius:'10px'}} onDragOver={handleDrag} onDrop={handleDrop}>
      {imgorfile()} 
    </div>
    <Col className='m-2 d-flex flex-col justify-content-center align-items-center '>
    {imgUpload&&<Button className="btn-primary my-auto" onClick={()=>setImgUpload(null)}>Cancel</Button>}
    </Col>
    </>
  )
}
