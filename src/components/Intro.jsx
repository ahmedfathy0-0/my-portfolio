import React, { useState, useEffect, useRef } from "react"; // This is enough
import { Container, Row, Col } from "react-bootstrap";
import { BsArrowRightCircle } from "react-icons/bs";
import Typed from "typed.js";
import AnimatedBlob from "./AnimationBlob";
import myphoto from "../assets/images/ahmed.png";
import 'animate.css';
import TrackVisibility from "react-on-screen";


function Intro() {
  const typedElement = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const introRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ["Web Developer", "Software Engineer", "Freelancer"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true, 
    });

    return () => {
      typed.destroy();
    };
  }, []);
  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.5 } 
    );

    if (introRef.current) {
      observer.observe(introRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="intro" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
          <div ref={introRef} className={isVisible ? "animate__animated animate__fadeInLeft" : "animate__animated animate__fadeOutLeft"}>
            <span className="intro-sub">Hello, I am</span>
            <h1 ><span className="wrap">Ahmed Fathy</span></h1>
            <h2 className="intro-job">and I'm a{" "}
              <span ref={typedElement}></span>
            </h2>
            <p className="intro-desc">
              I'm a full stack developer crafting modern, responsive web solutions. Let's collaborate to bring your vision to life!
            </p>
            <div className="social-media social-icon">
              <a href="https://web.facebook.com/ahmed.fathi.1973/"><i className="bi bi-facebook"></i></a>
              <a href="https://github.com/ahmedfathy0-0"><i className="bi bi-github"></i></a>
              <a href="https://www.instagram.com/ahmedfathy0_0/"><i className="bi bi-instagram"></i></a>
              <a href="https://wa.me/+201552851443"><i className="bi bi-whatsapp"></i></a>
              <a href="https://www.linkedin.com/in/ahmedfathy-x1/"><i className="bi bi-linkedin"></i></a>
            </div>
            <button className="navbar-btn" 
                 onClick={() => scrollToSection('#contact')} 
              >
              Let's connect <BsArrowRightCircle size={25} />
            </button>
          </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
          <div ref={introRef} className={isVisible ? "animate__animated animate__fadeInRight" : "animate__animated animate__fadeOutRight"}>
            <div className="img-box">
              <img src={myphoto} alt="intro" />
            </div>
            <AnimatedBlob />
            <AnimatedBlob />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Intro;
