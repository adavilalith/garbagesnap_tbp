import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Context } from '../App.js';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase.js';
import { Button } from 'react-bootstrap';
export default function GarbageSnapNavbar() {
  const navigate = useNavigate();

  const handleContactUs= async ()=>{
    await navigate('/');
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  const signoutfunc = async () => {
    console.log("why?")
    try {
      await signOut(auth);
      setUser(false);
      setUserDB(false);
      navigate('/');
    } catch (err) {
      console.log(err);
      return;
    }
  };

  const [user, setUser, userDB, setUserDB] = useContext(Context);

  const AccountOrSignIn = () => {
    if (user) {
      return (
        <>
        <NavDropdown title="Account" id="collapsible-nav-dropdown">
          <NavDropdown.Item><Link to="/Snaps" style={{textDecoration:'none',color:'black'}}>Snaps</Link></NavDropdown.Item>
          <NavDropdown.Item ><Link to="/Bookings" style={{textDecoration:'none',color:'black'}}>Bookings</Link></NavDropdown.Item>
          <NavDropdown.Item ><Link to="/Orders" style={{textDecoration:'none',color:'black'}}>Orders</Link></NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item >
            <Button variant="outline-danger" onClick={signoutfunc}>Sign Out</Button>
          </NavDropdown.Item>
        </NavDropdown>
        </>
      );
    } else {
      return (
        <Nav.Link>
          <Link to="/Signin" style={{ textDecoration: 'none', color: '#fff' }}>
            <Button variant="outline-light">Sign In</Button>
          </Link>
        </Nav.Link>
      );
    }
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>
            Garbage Snap
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/SendSnap" className="nav-link">Send Snap</Link>
            <Link to="/CleanUp" className="nav-link" >Clean Up</Link>
            <Link to="/Store" className="nav-link">Store</Link>
            <p className="nav-link my-0 " role="button" onClick={handleContactUs} >Contact Us</p>
          </Nav>
          <Nav>{AccountOrSignIn()}</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}