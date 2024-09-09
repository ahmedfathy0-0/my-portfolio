import React, { useState,useEffect } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const NavbarComponent = () => {
  const [activelink, setActiveLink] = useState('home');
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const onScroll = () => {  
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    }

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  }, []);


  return (
    <Navbar expand="lg" className={scroll ? 'navbar active' : 'navbar'}>
      <Container>
        <Navbar.Brand href="#home">
          <img src="./assets/images/logo.png" alt="Logo" className="img-logo"  />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"
             className = {activelink === 'home' ? 'active navbar-link' : 'navbar-link'}
             onClick = {() => setActiveLink('home')}
            >Home</Nav.Link>
            <Nav.Link href="#skills"
              className = {activelink === 'skills' ? 'active navbar-link' : 'navbar-link'}
              onClick = {() => setActiveLink('skills')}
            >Skills</Nav.Link>
            <Nav.Link href="#projects"
              className = {activelink === 'projects' ? 'active navbar-link' : 'navbar-link'}
              onClick = {() => setActiveLink('projects')}
            >Projects</Nav.Link>
          </Nav>  
          <button 
          className="navbar-btn"
          onClick={() => console.log('clicked')}><span>Let's Connect</span></button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
