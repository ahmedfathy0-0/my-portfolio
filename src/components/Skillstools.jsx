import React from "react";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from 'react-bootstrap';
import Motoko from '../assets/images/Motoko.png';
import JetBrainsimg from '../assets/images/JetBrains.png';


const skillIcons = {
    JavaScript: "https://skillicons.dev/icons?i=javascript",
    Python: "https://skillicons.dev/icons?i=python",
    "C++": "https://img.icons8.com/?size=100&id=40669&format=png&color=000000",
    Motoko: Motoko,
    Reactjs: "https://skillicons.dev/icons?i=react",
    jQuery: "https://skillicons.dev/icons?i=jquery",
    Bootstrap: "https://skillicons.dev/icons?i=bootstrap",
    Nodejs: "https://skillicons.dev/icons?i=nodejs",
    Expressjs: "https://skillicons.dev/icons?i=express",
    Postgres: "https://skillicons.dev/icons?i=postgresql",
    MongoDB: "https://skillicons.dev/icons?i=mongodb",
    "Adobe Illustrator": "https://img.icons8.com/?size=100&id=13631&format=png&color=000000", 
    Git: "https://skillicons.dev/icons?i=git",
    VSCode: "https://skillicons.dev/icons?i=vscode",
    Docker: "https://skillicons.dev/icons?i=docker",
    Jenkins: "https://skillicons.dev/icons?i=jenkins",
    CSS: "https://skillicons.dev/icons?i=css",
    HTML: "https://skillicons.dev/icons?i=html",
    Ubuntu: "https://skillicons.dev/icons?i=ubuntu",
    JetBrains: JetBrainsimg
  }
const Skillstools = () => {
    return (

        <div className="skills-bx additional-skills">
        <Container>
          <Row>
            <Col md={6}>
              <h3>Languages</h3>
              <ul>
                {['JavaScript', 'Python', 'C++', 'Motoko'].map(skill => (
                  <li key={skill}>
                    <img src={skillIcons[skill]} alt={skill} style={{ width: '50px', height: '50px', display: 'block', margin: '0 auto' }} />
                    {skill}
                  </li>
                ))}
              </ul>
            </Col>
            <Col md={6}>
              <h3>Frameworks & Libraries</h3>
              <ul>
                {['Reactjs', 'jQuery', 'Bootstrap', 'Nodejs', 'Expressjs'].map(skill => (
                  <li key={skill}>
                    <img src={skillIcons[skill]} alt={skill} style={{ width: '50px', height: '50px', display: 'block', margin: '0 auto' }} />
                    {skill}
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <h3>Databases</h3>
              <ul>
                {['Postgres', 'MongoDB'].map(skill => (
                  <li key={skill}>
                    <img src={skillIcons[skill]} alt={skill} style={{ width: '50px', height: '50px', display: 'block', margin: '0 auto' }} />
                    {skill}
                  </li>
                ))}
              </ul>
            </Col>
            <Col md={6}>
              <h3>Tools</h3>
              <ul>
                {['Adobe Illustrator', 'Git', 'VSCode', 'Docker', 'Jenkins'].map(skill => (
                  <li key={skill}>
                    <img src={skillIcons[skill]} alt={skill} style={{ width: '50px', height: '50px', display: 'block', margin: '0 auto' }} />
                    {skill}
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <h3>Other Technologies</h3>
              <ul>
                {['CSS', 'HTML', 'Ubuntu', 'JetBrains'].map(skill => (
                  <li key={skill}>
                    <img src={skillIcons[skill]} alt={skill} style={{ width: '50px', height: '50px', display: 'block', margin: '0 auto' }} />
                    {skill}
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </Container>
      </div>

    );

};

export default Skillstools;