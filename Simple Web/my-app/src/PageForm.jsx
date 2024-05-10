import React from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function FormTextExample() {
  const navigate = useNavigate();


  const formRef = React.useRef();

  const userClick = (event) => {
    event.preventDefault();
    if (formRef.current.checkValidity() === false) {
      event.stopPropagation();
    } else {
      navigate('./lastpage');
    }
    formRef.current.classList.add('was-validated');
  
    
  };

  return (
    <div>
      <div>
       
        <Navbar className="bg-body-tertiary">
      <Container  className='border rounded-pill border-light-subtle'>
      <Navbar.Brand style={{ fontFamily: "Jaro, sans-serif"  }} className='fs-2' href="#">Brunel</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <a href="/"> <h1 className="bi bi-x-circle" ></h1></a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>

      <div className="d-flex justify-content-center align-items-center position-absolute top-50 start-50 translate-middle" style={{ height: '100vh' }}>
      <Form  ref={formRef} className='needs-validation' style={{ width: '350px' }} noValidate>
  <p className='fs-2 text-center' style={{ fontWeight: "400", fontFamily: "Briem Hand, cursive", color: "#2DA950" }}>Registration Form</p>
  <p className='fs-1 text-center' style={{ fontWeight: "600", fontFamily: "Manrope" }}>Start your success Journey here!</p>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label htmlFor="validationTooltip01" className="form-label">Email address</Form.Label>
    <Form.Control id="validationTooltip01" required type="email" placeholder="name@example.com" style={{ borderRadius: '20px', fontSize: '16px', padding: "1em", backgroundColor: "#EFEFEF" }} />
    <Form.Control.Feedback type="invalid">
      Please fill in your email address.
    </Form.Control.Feedback>
  </Form.Group>
  <Form.Group className="mb-3" controlId="inputPassword5">
    <Form.Label>Password</Form.Label>
    <Form.Control
      type="password"
      aria-describedby="passwordHelpBlock"
      placeholder="Password"
      style={{ borderRadius: '20px', fontSize: '16px', padding: "1em", backgroundColor: "#EFEFEF" }}
      required
    />
    <Form.Control.Feedback type="invalid">
      Please enter your password.
    </Form.Control.Feedback>
  </Form.Group>
  <Button onClick={userClick} type='submit' variant="dark rounded-pill my-5 position-absolute fw-bold start-50 translate-middle" style={{ padding: "1em", width: "20vw" }}>
    Submit <i style={{ marginLeft: "15px" }} className="bi bi-arrow-right"></i>
  </Button>
</Form>

      </div>
     
    </div>
  );
}

export default FormTextExample;
