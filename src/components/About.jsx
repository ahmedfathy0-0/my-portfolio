import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myphoto from "../assets/images/ahmed2.png";
import myphotobg from "../assets/images/ahmed2bg.png";
import 'animate.css';
import TrackVisibility from "react-on-screen";

const About = () => {
    const [age, setAge] = React.useState(0);
    const [Experience, setExperience] = React.useState(0);
    useEffect(() => {
        const birthDate = new Date("2004-4-19");
        const today = new Date();
        const diff = today - birthDate;
        const ageDate = new Date(diff);
        setAge(Math.abs(ageDate.getUTCFullYear() - 1970));
        const startDate = new Date("2022-8-1");
        const diff2 = today - startDate;
        const experienceDate = new Date(diff2);
        setExperience(Math.abs(experienceDate.getUTCFullYear() - 1970));
    }, []);

    return (
        <section className="about" id="about">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
            <TrackVisibility once>
            {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__bounceIn" : ""}>
              <div className="img-about">
                <img className="photo" src={myphoto} alt="" />
                <img className="photo-bg" src={myphotobg} alt="" />
                <div className="info-about1"> 
                  <span>+{Experience}</span>
                  <p>Years of Experience</p>
                </div>
                <div className="info-about2"> 
                  <span>+15</span>
                  <p>Projects Completed</p>
                </div>
              </div>
              </div>
            }
            </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <div className="about-content">
                <h2 className="about-title">Let me introduce myself</h2>
                <p className="about-desc">
                  I'm Ahmed Fathy, a passionate full-stack developer and software engineering student at Cairo University. I specialize in creating modern, responsive web solutions and love taking on new challenges in the software development world.
                </p>
                <div className="about-details">
                  <div className="details-item">
                    <p className="details-title">Name:</p>
                    <p className="details-info">Ahmed Fathy</p>
                  </div>
                  <div className="details-item">
                    <p className="details-title">Age:</p>
                    <p className="details-info">{age} Years</p>
                  </div>
                  <div className="details-item">
                    <p className="details-title">Email:</p>
                    <p className="details-info">ahmedfathi20044002@gmail.com</p>
                  </div>
                  <div className="details-item">
                    <p className="details-title">Location:</p>
                    <p className="details-info">Cairo, Egypt</p>
                  </div>
                  <div className="details-item">
                    <p className="details-title">Languages:</p>
                    <p className="details-info">Arabic, English</p>
                  </div>
                </div>
                <div className="about-desc1">
                  I'm currently working on improving my skills in software development, with a focus on advanced algorithms and data structures. I aim to contribute to open-source projects in 2024 and enhance my expertise in cloud technologies. Let's collaborate on interesting software projects or discuss best coding practices and software architecture!
                </div>
                <p className="about-desc2">
                  Feel free to connect with me on LinkedIn, and let's push the boundaries of what's possible in software engineering together.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
};

export default About;