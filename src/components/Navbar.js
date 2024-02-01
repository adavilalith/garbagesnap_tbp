import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Context} from '../App.js'
import {Link} from "react-router-dom"


export default function GarbageSnapNavbar() {
    const [user,setUser]=useContext(Context);
    const AccountSignIn =()=>{
        if(user){
            return (
              <NavDropdown title="UserName" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="/Profile">Account</NavDropdown.Item>
              <NavDropdown.Item href="/Orders">Orders</NavDropdown.Item>
              <NavDropdown.Item href="/History">History</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/SignOut">
                Sign Out
              </NavDropdown.Item>
            </NavDropdown>
            )
        }
        else{
            return (
                <Nav.Link>
                    <Link to="/" style={{textDecoration: 'none',color: 'unset'}}>Sign In</Link>
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
            <Nav.Link >
                <Link to="/" style={{textDecoration: 'none',color: 'unset'}}>Clean Up</Link>
            </Nav.Link>
            <Nav.Link >
                <Link to="/" style={{textDecoration: 'none',color: 'unset'}}>Store</Link>
            </Nav.Link>
            <Nav.Link >
                <Link to="/" style={{textDecoration: 'none',color: 'unset'}}>Contact Us</Link>
            </Nav.Link>
            <Nav.Link >Clean Up</Nav.Link>
            {AccountSignIn()}
          </Nav>
          <Nav className="ms-auto">
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
