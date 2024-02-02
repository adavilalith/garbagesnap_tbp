import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import GarbageSnapNavbar from "../components/Navbar";
import React,{useContext} from 'react'
import { Link } from "react-router-dom";
import {app, auth} from '../config/firebase'
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import {Context} from '../App.js'

export default function SignIn() {
  const [user,setUser]=useContext(Context);

   const signinfunc= async()=>{
     try{
       await signInWithEmailAndPassword(auth,email,password);
       }
       catch(err){
           console.log(err);
           alert("error\invalid");
       return;
      }
      setUser(true);
       alert(" Signed In");
       return;

   }
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

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
                  <p className=" mb-5">Please enter your login and password</p>
                  <div className="mb-3">
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onClick={(e)=>setEmail(e.target.value)}/>
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onClick={(e)=>setPassword(e.target.value)} />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <p className="small">
                          <a className="text-dark" href="#!">
                            Forgot password?
                          </a>
                        </p>
                      </Form.Group>
                      <div className="d-grid">
                        <Button variant="dark" onClick={signinfunc}>
                          Login
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Don't have an account?{" "}
                        <Link to="/Signup" style={{color:'#000'}}><strong>Sign Up</strong></Link>
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
  );
}