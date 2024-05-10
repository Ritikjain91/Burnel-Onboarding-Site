import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Tick from './components/Tick + round.png'
import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image';



import {  useNavigate , useLocation} from 'react-router-dom';

import  { useEffect,useState } from 'react';

function LastPage() {
  const location = useLocation();
  const [countdown, setCountdown] = useState(5);
const navigate=useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (location.pathname === '/form/lastpage' && countdown > 1) {
        setCountdown(prevCountdown => prevCountdown - 1); 
      } else if (location.pathname === '/form/lastpage') {
        navigate("/"); 
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, location.pathname]);



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

  <div className='mt-5' >
  <Stack gap={2} className="col-md-5 mx-auto">
  <div className="text-center ">
    <Image src={Tick} width="100px" className="mx-auto" /> 
  </div>
  <p className='fs-2 text-center mt-3' style={{ fontWeight: "400", fontFamily: "Briem Hand, cursive", color: "#2DA950" }}>Registration Form</p>
  <p className='fs-2 text-center'>Congratulations</p>
  <p className='fs-4 text-center'>Your request has been successfully submitted to us. We will validate your information and reach out to you shortly with updates</p>
</Stack>

  
  </div>
  <div className='position-absolute mb-5 top-100 start-50 translate-middle'>
  <h5>Redirecting you to Homepage in {countdown} Seconds</h5>
  </div>
  <div>
      

  </div>
  </div>
  )
}

export default LastPage