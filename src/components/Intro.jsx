import React from "react";

function Intro() {
    return (
        <section id="home" className="intro-section">
      <div className="container">
        <div className="row align-items-center text-white flex-row-reverse">
          <div className="col-md-6 intros text-end">
            <div className="image-container">
              <img src="./assets/images/ahmed.jpg" alt="video illustration" className="profile-img" />
            </div>
          </div>
          {/* START THE CONTENT FOR THE INTRO */}
          <div className="col-md-6 intros text-start">
            <div className="intro-content">
              <h3>Hello, It's Me</h3>
              <h1>Ahmed Fathy</h1>
              <h3>And I'm a <span>Computer Engineer</span></h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              </p>
              <div className="social-media">
                <a href="#"><i className='bx bxl-facebook'></i></a>
                <a href="#"><i className='bx bxl-github'></i></a>
                <a href="#"><i className='bx bxl-instagram-alt'></i></a>
                <a href="#"><i className='bx bxl-whatsapp'></i></a>
              </div>
              <button type="button" className="btn">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#ffffff" fillOpacity="1" d="M0,160L48,176C96,192,192,224,288,208C384,192,480,128,576,133.3C672,139,768,213,864,202.7C960,192,1056,96,1152,74.7C1248,53,1344,107,1392,133.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </section>
    );
}

export default Intro;