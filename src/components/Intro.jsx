import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsArrowRightCircle } from "react-icons/bs";
import Typed from "typed.js";

function Intro() {
  // Create a reference to the element where Typed.js will insert the typing effect
  const typedElement = useRef(null);

  useEffect(() => {
    // Initialize Typed.js
    const typed = new Typed(typedElement.current, {
      strings: ["Web Developer", "Software Engineer", "Freelancer"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true, // Enables looping
    });

    // Clean up the Typed.js instance when component unmounts
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="intro" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="intro-sub">Hello, I am</span>
            <h1 ><span className="wrap">Ahmed Fathy</span></h1>
            <h2 className="intro-job">and I'm a{" "}
              <span ref={typedElement}></span>
            </h2>
            <p className="intro-desc">
              I'm a full stack developer crafting modern, responsive web solutions. Let's collaborate to bring your vision to life!
            </p>
            <div className="social-media social-icon">
              <a href="#"><i className="bi bi-facebook"></i></a>
              <a href="#"><i className="bi bi-github"></i></a>
              <a href="#"><i className="bi bi-instagram"></i></a>
              <a href="#"><i className="bi bi-whatsapp"></i></a>
            </div>
            <button className="navbar-btn" onClick={() => console.log("Hello")}>
              Let's connect <BsArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img
              style={{ transform: 'scaleX(-1)' }}
              src="./assets/images/ahmed.png"
              alt="intro"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Intro;
