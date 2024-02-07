import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
export default function LoginModal(props) {
    const modalRef=props.buttonRef
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} ref={modalRef} hidden>
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
          To access the cart you need to sign in.<br></br>
          Please Sign In to your account to access the cart.
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
    </>
  );
}

 