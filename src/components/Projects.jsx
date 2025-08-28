import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectsCards from "./ProjectsCards";
import ProjectDesc from "./ProjectDesc";

import projectsData from "./myprojects";

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
                "Nextjs",
                "TypeScript",
                "JavaScript",
                "Threejs",
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
