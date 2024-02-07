import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Context} from '../App.js'
import {Link,useNavigate} from "react-router-dom"
import { signOut } from 'firebase/auth';
import {auth} from '../config/firebase.js'
import { Button } from 'react-bootstrap';

export default function GarbageSnapNavbar() {
    const navigate=useNavigate()
    const signoutfunc=async()=>{
      try{
        signOut(auth)
      }
      catch(er){
        console.log(er)
        return;
      }
      setUser(false);
      setUserDB(false);
      navigate('/')
    }

    const [user,setUser,userDB,setUserDB]=useContext(Context);
    const AccountOrSignIn =()=>{
        if(user){
            return (
              <NavDropdown title="UserName" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="/Profile">Account</NavDropdown.Item>
              <NavDropdown.Item href="/Orders">Orders</NavDropdown.Item>
              <NavDropdown.Item href="/History">History</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={signoutfunc}>
                <Button>Sign Out</Button>
              </NavDropdown.Item>
            </NavDropdown>
            )
        }
        else{
            return (
                <Nav.Link>
                    <Link to="/Signin" style={{textDecoration: 'none',color: 'unset'}}>Sign In</Link>
                </Nav.Link>
            )
        }
    }
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link >
                <Link to="/" style={{textDecoration: 'none',color: 'unset'}}>Home</Link>
            </Nav.Link>
            <Nav.Link >
                <Link to="/SendSnap" style={{textDecoration: 'none',color: 'unset'}}>Send Snap</Link>
            </Nav.Link>
            <Nav.Link disabled>
                <Link to="/" style={{textDecoration: 'none',color: 'unset'}}>Clean Up</Link>
            </Nav.Link>
            <Nav.Link >
                <Link to="/Store" style={{textDecoration: 'none',color: 'unset'}}>Store</Link>
            </Nav.Link>
            <Nav.Link disabled>
                <Link to="/" style={{textDecoration: 'none',color: 'unset'}}>Contact Us</Link>
            </Nav.Link>
            {AccountOrSignIn()}
          </Nav>
          <Nav className="ms-auto">
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
