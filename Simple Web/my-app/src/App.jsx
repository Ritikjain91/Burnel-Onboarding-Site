import React from 'react';
import './App.css'
import { Button } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import amera from './components/Union.png'



import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import Picture from './components/Girl.png'
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';
import WhiteBackground from './components/WhiteBackground.jpg'


function TextLinkExample() {
  const navigate = useNavigate();

  const userClick = () => {
    navigate('./form');
  };

  return (
    <div>
    <Navbar className="bg-body-tertiary ">
      <Container className='border rounded-pill border-light-subtle'>
        <Navbar.Brand style={{ fontFamily: "Jaro, sans-serif" }} className='fs-2' href="#">Brunel</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Button  variant="dark rounded-pill fw-bold" style={{ padding: "0.85em", width: "100%" }}>
              Onboard Talent 
            </Button>
          </Navbar.Text>
          <Navbar.Text>
            <Button  onClick={userClick} variant="outline-secondary rounded-pill " style={{ padding: "0.75em", width: "100%", position: "relative", top: "0px", left: "10px" }} type="button">
              Get Projects
            </Button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>

     <Container  >
     <p className='fs-2 text-center mt-5' style={{ fontWeight: "400", fontFamily: "Briem Hand, cursive", color: "#2DA950" }}>Success stories</p>
     <p className='fs-1 text-center mb-5' style={{ fontWeight: "600", fontFamily: "Manrope" }}> Every success journey<br/> we’ve encountered.</p>

     </Container>

     <div class="container text-center ">
  <div class="row">
    <div class="col">

    
    <Image className='rounded-4' src={Picture} width="320rem"  rounded />
    <div class="container text-center mt-5">
  <div class="row">
    <div class="col">
    <div className='container  text-start bg-white shadow-lg p-3  bg-body-tertiary rounded' style={{position:"relative",bottom:"130%",right:"16%",width:"90%", height:"65%"}}> 
    
      <p className='fs-1 Text-black fw-bold '>40%</p>
      <p className='mb-4' style={{color:"#828282"}}>Achieved reduction in project execution time by optimising team availability</p>
      

    </div>
    <div>
    <Button  variant=" bg-white shadow-lg  rounded-pill " style={{ padding: "0.75em", width: "11.5em", position: "relative",bottom:"22em",  right: "15%" }} type="button">
    <div class="container text-center">
  <div class="row">
    
    <div class="position-absolute top-40 start-40 mx-2  translate-middle-x" >
    <h3 class="bi bi-rocket-takeoff-fill" style={{color: "green",}}></h3>

    </div>
    <div class="col">
      <span class="fw-bold">10 DAYS</span> <br/>
      <span style={{color:"#828282"}}>Staff Deployment</span>
    </div>
  </div>
  
</div>

            </Button>
            

            </div>
            
            

    </div>

    <div class="col ">
    <div className='container text-white text-start shadow-lg p-3 rounded-4 ' style={{ position: "relative", bottom: "60%", right: "0%", width: "110%", height: "70%",backgroundColor:"#002E18" }}>
    <p className='fs-1 fw-bold'>40%</p>
    <p className='mb-4 fs-6 ' >Achieved reduction in project execution time by optimizing team availability</p>
</div>

    </div>
  </div>
</div>

      
    </div>
    <div class="col">
    <Carousel fade  >
  <Carousel.Item>
    <img
      className="d-block w-100 "
      src={WhiteBackground}  
      alt="First slide"
    />
    <Carousel.Caption>
    <p className='fs-2 text-black'>Enhance fortune 50 company’s insights teams research capabilities</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 "
      src={WhiteBackground}  
      alt="Second slide"
    />
    <Carousel.Caption>
    <p className='fs-2 text-black'>"Empower Fortune 50 insights team for strategic success.."</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 "
      src={WhiteBackground}  
      alt="Third slide"
    />
    <Carousel.Caption>
    <p className='fs-2 text-black'>""Elevate Fortune 50 team, ignite innovation path."

</p>

    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


 
 <Button  variant="dark rounded-pill fw-bold  " style={{ padding: "0.85em", width: "50%" }}>
             Explore More  <i style={{ marginLeft: "15px" }} className="bi bi-arrow-right"></i>
            </Button>
    </div>
    
  </div>
</div>

<div className='container'>
<div className='container text-white text-start shadow-lg p-3 rounded-4 ' style={{ position: "relative", bottom: "70%", right: "0%", width: "100%", height: "100%",backgroundColor:"#E8EEE7"}}>
<div class="container text-start">
<div class="row">
    <div class="col">
    <p className='fs-5 mx-5 mt-5' style={{  fontFamily: "Briem Hand, cursive", color: "#9E9D9D" }} >Whats On Your Mind </p>
    
   
    <p className='mb-4 mx-5  fs-1 fs-bold text-dark' >Ask Questions</p>
    <Image width="80%" src={amera}></Image>
    </div>
    <div class="col mt-5">

    <Accordion defaultActiveKey="0" className="custom-accordion">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Do you offer freelancers?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>What’s the guarantee that I will be satisfied
with the hired talent?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Can I hire multiple talents at once?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Why should I not go to an agency directly?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Who can help me pick a right skillset
and duration for me?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    </div>
  </div>
</div>

</div>
</div>

<div>

<div className='container mt-5 mb-5 text-white text-start shadow-lg p-3 rounded-4 ' style={{ position: "relative", bottom: "70%", right: "0%", width: "100%", height: "100%",backgroundColor:"#E8EEE7"}}>
<Navbar >
      <Container>
        <Navbar.Text > <i class="bi bi-c-circle"></i>Talup 2023. All rights reserved</Navbar.Text>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            
          Terms & Conditions
          </Navbar.Text>
          <Navbar.Text className='mx-3'>
         Privacy Policy 
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>

</div>

</div>
     </div>
  );
}

export default TextLinkExample;
