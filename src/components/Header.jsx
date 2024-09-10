import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useSpring, animated } from '@react-spring/web';
import logo from '../assets/images/logo.png';

const NavbarComponent = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scroll, setScroll] = useState(false);

  const sectionBackgrounds = {
    home: 'repeating-radial-gradient(circle, #0044ff 0%, #002288 50%, #000033 100%)',
    about: 'repeating-radial-gradient(circle, #0088b3 0%, #006666 50%, #003d4d 100%)', 
    skills: 'repeating-radial-gradient(circle, #0033cc 0%, #001a66 50%, #000033 100%)',
    projects: 'repeating-radial-gradient(circle, #6600cc 0%, #330066 50%, #000033 100%)'
  };
  

  const [bgStyle, setBgStyle] = useSpring(() => ({
    backgroundImage: sectionBackgrounds.home,
    config: { duration: 1000 } 
  }));

  const updateCanvasBackground = (sectionId) => {
    const newBackground = sectionBackgrounds[sectionId] || sectionBackgrounds.home;
    setBgStyle({ backgroundImage: newBackground });
  };

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const options = {
      threshold: 0.3 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('id');
          setActiveLink(sectionId);
          updateCanvasBackground(sectionId);
        }
      });
    }, options);

    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <Navbar expand="lg" className={scroll ? 'navbar scrolled' : 'navbar'}>
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" className="img-logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#home"
                className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#about"
                className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'}
              >
                About Me
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
              >
                Projects
              </Nav.Link>
            </Nav>
            <button className="navbar-btn">
              <span>Let's Connect</span>
            </button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <animated.canvas id="canvas" style={bgStyle}></animated.canvas>
    </>
  );
};

export default NavbarComponent;
