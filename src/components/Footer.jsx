// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-sm" style={{ backgroundColor: '#212121' }}>
        <div className="container">
          <div className="row py-4 text-center text-white">
            <div className="col-lg-5 col-md-6 mb-4 mb-md-0">
              Connect with me on social media
            </div>
            <div className="col-lg-7 col-md-6">
              <a href="#"><i className="bx bxl-facebook"></i></a>
              <a href="#"><i className="bx bxl-twitter"></i></a>
              <a href="#"><i className="bx bxl-github"></i></a>
              <a href="#"><i className="bx bxl-linkedin"></i></a>
              <a href="#"><i className="bx bxl-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom pt-5 pb-5">
        <div className="container">
          <div className="row text-center text-white">
            <div className="col-12">
              <div className="footer-bottom__copyright">
                 Copyright 2024 <a href="#">Ahmed Fathy</a>, All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
