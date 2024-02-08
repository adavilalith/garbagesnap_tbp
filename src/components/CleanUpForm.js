import React, { useContext, useState } from 'react';
import { Context } from '../App';
import LoginModal from './LoginModal';
import { Modal,Button, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { db } from '../config/firebase';
import { addDoc,collection } from 'firebase/firestore';

export default function CleanUpForm(props) {

   const [user]=useContext(Context)

   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

  const [FirstName, setFirstName] = useState('')
  const [LastName, setLastName] = useState('')
  const [PhoneNumber, setPhoneNumber] = useState('')
  const [test4,setText4]=useState('')
  const [email, setEmail] = useState('')
  const [quantity, setQuantity] = useState(0);
  const [CleanUpTier, setCleanUpTier] = useState('');
  const [time, setTime] = useState('')
  const [date, setDate] = useState('')

  const getLocation=()=>{

  }

  const submitBooking = async ()=>{
    if(user){
  console.log(FirstName,LastName,PhoneNumber,email,quantity,CleanUpTier,time,date)
      const BookingsRef = collection(db,'Bookings');
      addDoc(BookingsRef,{
          uid:user.uid,
          firstName: FirstName,
          lastName: LastName,
          PhoneNumber: PhoneNumber,
          bookingEmail: email,
          quantity: quantity,
          CleanUpTier: CleanUpTier,
          time: time,
          date: date,
          status: 0 
      })
      alert("Booking Placed")
    }
    else{
        handleShow();
    }

  }

  return (
    <>
        <button onClick={handleShow} hidden>
      </button >

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Sign In to Continue</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Please Sign In to access the clean up booking facilities.
        </Modal.Body>
        <Modal.Footer className='d-flex justify-content-center'>
          <Button variant="danger" onClick={handleClose}>
            Continue
          </Button>
          <Link to="/SignIn">
          <Button variant="dark">Sign In</Button>
          </Link>
        </Modal.Footer>
      </Modal>
      <div>
        <div className="container my-4">
          <h1><b>User Details</b></h1>
        </div>

        <div className="container text-center my-4">
          <div className="row d-xs-flex">
            <div className="col">
              <div className="form-floating mb-3">
                <input type="email" onChange={(e)=>setFirstName(e.target.value)} className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label htmlFor="floatingInput">First Name</label>
              </div>
            </div>
            <div className="col">
              <div className="form-floating mb-3">
                <input type="email" onChange={(e)=>setLastName(e.target.value)} className="form-control" id="floatingPassword" placeholder="name@example.com" />
                <label htmlFor="floatingPassword">Last Name</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-floating mb-3">
                <input type="email" onChange={(e)=>setPhoneNumber(e.target.value)} className="form-control" id="floatingPassword" placeholder="name@example.com" />
                <label htmlFor="floatingPassword">Mobile number</label>
              </div>
            </div>
            <div className="col">
              <div className="form-floating mb-3">
                <input type="email" onChange={(e)=>setEmail(e.target.value)} className="form-control" id="floatingPassword" placeholder="name@example.com" />
                <label htmlFor="floatingPassword">email address</label>
              </div>

            </div>

          </div>


        </div>


      </div>

      <div className="container">
        <h1><b>CleanUp Details</b></h1>
        <div className="row mt-4">
          <div className="col">
            <div className="form-floating mb-3">
              <input type="number" value={quantity} onChange={(e)=>setQuantity((e.target.value>-1)?e.target.value:0)} className="form-control" id="quantityInput" placeholder="Quantity" required
              />
              <label htmlFor="quantityInput">Quantity in kg</label>
            </div>
          </div>
          <div className="col">
            <div className="form-floating mb-3">
              <select value={CleanUpTier} onChange={(e)=>setCleanUpTier(e.target.value)} className="form-control" id="CleanUpTier" required
              >
                <option value=""></option>
                <option value="Budget">Budget</option>
                <option value="Basic">Basic</option>
                <option value="Deep Clean">Deep Clean</option>
                <option value="Express">Express</option>
                <option value="Deluxe">Deluxe</option>
                <option value="Custom">Custom</option>
              </select>
              <label htmlFor="CleanUpTier">Garbage Tier</label>


            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <h1><b>Booking Details</b></h1>
        <div className="row mt-4">
            <div className="col d-flex justify-content-start ">
            <button type="button" onClick={getLocation} className="btn btn-dark">Get Location</button>
            </div>
          </div>
        <div className="row">
          <div className="col">
            <label htmlFor="timePicker" className='mx-2'>Time</label>
            <div className="cs-form">
              <input type="time" className="form-control" value={time} id="timePicker" onChange={(e)=>setTime(e.target.value)} />
            </div>
          </div>
          <div className="col">
            <label htmlFor="datePicker" className='mx-2'>Date</label>
            <div className="cs-form">
              <input type="date" className='form-control' onChange={(e)=>setDate(e.target.value)} id="datePicker" />
            </div>    
          </div>
        </div>
        <div className="row mt-4">
            <div className="col d-flex justify-content-center mt-4">
               <button type="button" onClick={submitBooking} className="btn btn-dark mt-5"><p className='h3'>Book Clean Up</p></button>
            </div>
          </div>
        </div>

    </>
  );
}