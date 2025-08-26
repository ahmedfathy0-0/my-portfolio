import React from "react";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import Motoko from "../assets/images/Motoko.png";
import JetBrainsimg from "../assets/images/JetBrains.png";
import Verilog from "../assets/images/Verilog.png";
import Csharp from "../assets/images/Csharp.png";
import ReactQuery from "../assets/images/ReactQuery.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { skillIcons } from "./skillsicons";

const Skillstools = () => {
  return (
    <div className="skills-bx additional-skills">
      <Container>
        <Row>
          <Col md={6}>
            <h3>Languages</h3>
            <ul>
              {[
                "JavaScript",
                "TypeScript",
                "C++",
                "Python",
                "C#",
                "Motoko",
                "Verilog",
                "php",
                "C",
                "EJS",
              ].map((skill) => (
                <li key={skill}>
                  <TrackVisibility>
                    {({ isVisible }) => (
                      <div
                        className={
                          isVisible
                            ? "animate__animated animate__rotateIn"
                            : "animate__animated animate__rotateOut"
                        }
                      >
                        <img
                          src={skillIcons[skill]}
                          alt={skill}
                          style={{
                            display: "block",
                            margin: "0 auto",
                          }}
                        />
                      </div>
                    )}
                  </TrackVisibility>
                  {skill}
                </li>
              ))}
            </ul>
          </Col>
          <Col md={6}>
            <h3>Frameworks & Libraries</h3>
            <ul>
              {[
                "Reactjs",
                "Nextjs",
                "Tailwind",
                "Redux",
                "ReactQuery",
                "Threejs",
                "Laravel",
                "jQuery",
                "Bootstrap",
                "Nodejs",
                "Expressjs",
              ].map((skill) => (
                <li key={skill}>
                  <TrackVisibility>
                    {({ isVisible }) => (
                      <div
                        className={
                          isVisible
                            ? "animate__animated animate__rotateIn"
                            : "animate__animated animate__rotateOut"
                        }
                      >
                        <img
                          src={skillIcons[skill]}
                          alt={skill}
                          style={{
                            display: "block",
                            margin: "0 auto",
                          }}
                        />
                      </div>
                    )}
                  </TrackVisibility>
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
              {["Postgres", "MongoDB", "mySQL", "Prisma"].map((skill) => (
                <li key={skill}>
                  <TrackVisibility>
                    {({ isVisible }) => (
                      <div
                        className={
                          isVisible
                            ? "animate__animated animate__rotateIn"
                            : "animate__animated animate__rotateOut"
                        }
                      >
                        <img
                          src={skillIcons[skill]}
                          alt={skill}
                          style={{
                            display: "block",
                            margin: "0 auto",
                          }}
                        />
                      </div>
                    )}
                  </TrackVisibility>
                  {skill}
                </li>
              ))}
            </ul>
          </Col>
          <Col md={6}>
            <h3>Tools</h3>
            <ul>
              {[
                "Adobe Illustrator",
                "Git",
                "VSCode",
                "Docker",
                "Jenkins",
                "Postman",
                "Arduino",
              ].map((skill) => (
                <li key={skill}>
                  <TrackVisibility>
                    {({ isVisible }) => (
                      <div
                        className={
                          isVisible
                            ? "animate__animated animate__rotateIn"
                            : "animate__animated animate__rotateOut"
                        }
                      >
                        <img
                          src={skillIcons[skill]}
                          alt={skill}
                          style={{
                            display: "block",
                            margin: "0 auto",
                          }}
                        />
                      </div>
                    )}
                  </TrackVisibility>
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
              {["CSS", "HTML", "Ubuntu", "JetBrains", "Linux"].map((skill) => (
                <li key={skill}>
                  <TrackVisibility>
                    {({ isVisible }) => (
                      <div
                        className={
                          isVisible
                            ? "animate__animated animate__rotateIn"
                            : "animate__animated animate__rotateOut"
                        }
                      >
                        <img
                          src={skillIcons[skill]}
                          alt={skill}
                          style={{
                            display: "block",
                            margin: "0 auto",
                          }}
                        />
                      </div>
                    )}
                  </TrackVisibility>
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
