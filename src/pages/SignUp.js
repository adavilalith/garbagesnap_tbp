import React,{useState,useContext,useEffect, useRef} from 'react'
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import GarbageSnapNavbar from "../components/Navbar";
import { Link,useNavigate } from "react-router-dom";
import {app, auth} from '../config/firebase'
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'
import {Context} from '../App.js'
import { getDocs, addDoc, collection } from 'firebase/firestore';
import { db } from '../config/firebase';
export default function SignUp() {

    const navigate=useNavigate()
    const [user,setUser,userDB,setUserDB,cart,setCart]=useContext(Context);
    const createUser = async ()=>{
        if(email===""||password===""||confirmPassword===""){
            return;
        }
        if(password!==confirmPassword){
            alert("passwords do not match! try again.")
            return;
        }
        else{
            try{
            const temp =await createUserWithEmailAndPassword(auth,email,password)
            setUser(temp.user);
            }
            catch(err){
                console.log(err);
                return;
            }
            navigate(-1)
            return;
        }

    }

    useEffect(()=>{
      const handleSignUpDB=async()=>{
        if(user){
            const userRef=collection(db,'Users')
            addDoc(userRef,{
              email:email,
              password:password,
              uid: user.uid,
            }).then((userData)=>{
              userData.forEach((doc)=>{setUserDB({...doc.data(), id : doc.id})})
            })

        }
      }
      handleSignUpDB();
    },[user,setUser])

    useEffect(()=>{
      if(userDB){
      getDocs(collection(db,`Users/${userDB.id}/cart`)).then((temp)=>setCart(temp.map((doc)=>({...doc.data(), id : doc.id}))))
      }
    },[userDB])


    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
  return (
    <div>
    <GarbageSnapNavbar></GarbageSnapNavbar>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-3 border-dark"></div>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-uppercase ">Garbage Snap</h2>
                  <p className=" mb-5">Please create your login and password</p>
                  <div className="mb-3">
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control type="email" placeholder="Enter email"  onChange={(e)=>setEmail(e.target.value)}/>
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword1"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword2"
                      >
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(e)=>setConfirmPassword(e.target.value)}/>
                      </Form.Group>
                    </Form>
                        
                      <div className="d-grid">
                        <Button variant="dark" onClick={(createUser)}>
                          Sign Up
                        </Button>
                      </div>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Already have an account?{" "}
                        <Link to="/SignIn" style={{color: '#000'}}><strong>Sign In</strong></Link>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>  
    </div>
  )
}
