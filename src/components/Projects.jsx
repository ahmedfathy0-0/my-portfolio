import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectsCards from "./ProjectsCards";
import ProjectDesc from "./ProjectDesc";
import PTKids from "../assets/images/Projects/PT-Kids.jpeg";
import AlNadaWeb from "../assets/images/Projects/Al-Nada-Web.jpg";
import AlNadaManager1 from "../assets/images/Projects/Al-Nada-Manager-V1.jpg";
import AES from "../assets/images/Projects/AES.jpg";
import BlogWeb from "../assets/images/Projects/BlogWeb.jpeg";
import Keeper from "../assets/images/Projects/Keeper.jpeg";
import dBank from "../assets/images/Projects/dBank.png";
import SolarTracker from "../assets/images/Projects/Solar-Tracker.jpeg";
import Guardians from "../assets/images/Projects/Guardians-of-the-Galaxy.jpeg";
import Calculator from "../assets/images/Projects/Calculator.jpg";
import AlNadaManager2 from "../assets/images/Projects/Al-Nada-Manager-V2.jpeg";

const projectsData = [
  {
    title: "Al-Nada-Manager-V2",
    image: AlNadaManager2,
    ComingSoon: false,
    types: ["VBA & .NET"],
    tools: ["React", "Redux", "Nodejs", "Expressjs"],
    link: "",
    github:
      "https://github.com/Al-Nada-Company-Manager-App/Al-Nada-Office-Manager.git",
  },
  {
    title: "Keeper App",
    image: Keeper,
    ComingSoon: false,
    types: ["React", "JavaScript", "HTML & CSS", "Node & Express"],
    tools: ["Reactjs", "Nodejs", "Expressjs", "Postgres"],
    link: "",
    github: "https://github.com/ahmedfathy0-0/keeper-app.git",
  },
  {
    title: "Blog-Web-App",
    image: BlogWeb,
    ComingSoon: false,
    types: ["HTML & CSS", "Node & Express"],
    tools: ["Nodejs", "Expressjs", "Postgres"],
    link: "",
    github: "https://github.com/ahmedfathy0-0/Blog-web-application.git",
  },
  {
    title: "Guardians-of-the-Galaxy",
    image: Guardians,
    ComingSoon: false,
    types: ["C++"],
    tools: ["C++"],
    link: "",
    github: "https://github.com/ahmedfathy0-0/DS-Guardians-of-the-Galaxy.git",
  },
  {
    title: "AES",
    image: AES,
    ComingSoon: false,
    types: ["Others"],
    tools: ["Verilog"],
    link: "",
    github: "https://github.com/ahmedfathy090/AES.git",
  },
  {
    title: "PT-Kids",
    image: PTKids,
    ComingSoon: false,
    types: ["C++"],
    tools: ["C++"],
    link: "",
    github: "https://github.com/ahmedfathy0-0/PT-Project.git",
  },
  {
    title: "Calculator",
    image: Calculator,
    ComingSoon: false,
    types: ["Others"],
    tools: ["Reactjs", "Nodejs", "Expressjs", "MongoDB"],
    link: "",
    github: "",
  },
  {
    title: "Al-Nada-Web",
    image: AlNadaWeb,
    ComingSoon: false,
    types: ["JavaScript", "HTML & CSS"],
    tools: ["JavaScript", "HTML", "CSS"],
    link: "http://alnadascientific.com/",
    github: "https://github.com/ahmedfathy0-0/Al-Nada-Web.git",
  },
  {
    title: "Al-Nada-Manager-V1",
    image: AlNadaManager1,
    ComingSoon: false,
    types: ["VBA & .NET"],
    tools: [],
    link: "https://youtu.be/pSUseo3pLeg?si=trZrVqJMSoEhaJ8g",
    github: "",
  },
  {
    title: "Solar-Tracker",
    image: SolarTracker,
    ComingSoon: false,
    types: ["Others"],
    tools: [],
    link: "",
    github: "",
  },
];

const Projects = () => {
  const [active, setActive] = useState("All Projects");
  const [selectedProject, setSelectedProject] = useState(null);

  const handleClick = (project) => {
    setSelectedProject(project);
  };

  const handleBack = () => {
    setSelectedProject(null);
  };

  return (
    <section className="projects" id="projects">
      <Container>
        <Row className="align-items-start">
          <Col xs={12} md={2} xl={2}>
            <div className="left-content">
              {[
                "All Projects",
                "React",
                "HTML & CSS",
                "JavaScript",
                "Node & Express",
                "VBA & .NET",
                "C++",
                "Others",
              ].map((category) => (
                <button
                  key={category}
                  className={active === category ? "btn-active btn" : "btn"}
                  onClick={() => {
                    setActive(category);
                    setSelectedProject(null);
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </Col>

          <Col xs={12} md={10} xl={10}>
            <div className="right-content">
              {selectedProject ? (
                <ProjectDesc project={selectedProject} onBack={handleBack} />
              ) : (
                <div className="card-container">
                  {projectsData
                    .filter(
                      (project) =>
                        active === "All Projects" ||
                        project.types.includes(active)
                    )
                    .map((project, index) => (
                      <ProjectsCards
                        key={index}
                        title={project.title}
                        image={project.image}
                        ComingSoon={project.ComingSoon}
                        link={project.link}
                        github={project.github}
                        onClick={() => handleClick(project)}
                      />
                    ))}
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
