import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={6} className="contact-info">
            <h5>Contact Information</h5>
            <p><FaPhoneAlt /> +20 1552 851 443</p>
            <p><FaEnvelope /> ahmedfathi20044002@gmail.com</p>
          </Col>
          <Col md={6} className="follow-me">
            <h5>Follow Me</h5>
            <div className="social-links">
              <a href="https://web.facebook.com/ahmed.fathi.1973/" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
              <a href="https://github.com/ahmedfathy0-0" aria-label="GitHub"><i className="bi bi-github"></i></a>
              <a href="https://www.instagram.com/ahmedfathy0_0/" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
              <a href="https://wa.me/+201552851443" aria-label="WhatsApp"><i className="bi bi-whatsapp"></i></a>
              <a href="https://www.linkedin.com/in/ahmedfathy-x1/" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-4">
            <p>&copy; {new Date().getFullYear()} Ahmed Fathy. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
