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
const skillIcons = {
  JavaScript: "https://skillicons.dev/icons?i=javascript",
  Python: "https://skillicons.dev/icons?i=python",
  "C++": "https://img.icons8.com/?size=100&id=40669&format=png&color=000000",
  C: "https://skillicons.dev/icons?i=c",
  Motoko: Motoko,
  Reactjs: "https://skillicons.dev/icons?i=react",
  React: "https://skillicons.dev/icons?i=react",
  jQuery: "https://skillicons.dev/icons?i=jquery",
  Bootstrap: "https://skillicons.dev/icons?i=bootstrap",
  Nodejs: "https://skillicons.dev/icons?i=nodejs",
  "Node.js": "https://skillicons.dev/icons?i=nodejs",
  Expressjs: "https://skillicons.dev/icons?i=express",
  Express: "https://skillicons.dev/icons?i=express",
  Postgres: "https://skillicons.dev/icons?i=postgresql",
  Postgres: "https://skillicons.dev/icons?i=postgresql",
  MongoDB: "https://skillicons.dev/icons?i=mongodb",
  "Adobe Illustrator":
    "https://img.icons8.com/?size=100&id=13631&format=png&color=000000",
  Git: "https://skillicons.dev/icons?i=git",
  VSCode: "https://skillicons.dev/icons?i=vscode",
  Docker: "https://skillicons.dev/icons?i=docker",
  Jenkins: "https://skillicons.dev/icons?i=jenkins",
  CSS: "https://skillicons.dev/icons?i=css",
  HTML: "https://skillicons.dev/icons?i=html",
  Ubuntu: "https://skillicons.dev/icons?i=ubuntu",
  JetBrains: JetBrainsimg,
  Verilog: Verilog,
  "C#": Csharp,
  Arduino: "https://skillicons.dev/icons?i=arduino",
  Postman: "https://skillicons.dev/icons?i=postman",
  Prisma: "https://skillicons.dev/icons?i=prisma",
  TypeScript: "https://skillicons.dev/icons?i=ts",
  Nextjs: "https://skillicons.dev/icons?i=nextjs",
  "Next.js": "https://skillicons.dev/icons?i=nextjs",
  Tailwind: "https://skillicons.dev/icons?i=tailwind",
  "Tailwind CSS": "https://skillicons.dev/icons?i=tailwind",
  Threejs: "https://skillicons.dev/icons?i=threejs",
  "Three.js": "https://skillicons.dev/icons?i=threejs",
  mySQL: "https://skillicons.dev/icons?i=mysql",
  MySQL: "https://skillicons.dev/icons?i=mysql",
  php: "https://skillicons.dev/icons?i=php",
  PHP: "https://skillicons.dev/icons?i=php",
  Laravel: "https://skillicons.dev/icons?i=laravel",
  Linux: "https://skillicons.dev/icons?i=linux",
  Java: "https://skillicons.dev/icons?i=java",
  Dart: "https://skillicons.dev/icons?i=dart",
  Flutter: "https://skillicons.dev/icons?i=flutter",
  Vue: "https://skillicons.dev/icons?i=vue",
  Angular: "https://skillicons.dev/icons?i=angular",
  Svelte: "https://skillicons.dev/icons?i=svelte",
  EJS: "https://img.icons8.com/?size=100&id=puL87ypQPxxr&format=png&color=000000",
  Redux: "https://skillicons.dev/icons?i=redux",
  ReactQuery: ReactQuery,
};

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
