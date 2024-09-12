import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectsCards from './ProjectsCards';
import ProjectDesc from './ProjectDesc';
import PTKids from '../assets/images/Projects/PT-Kids.jpeg';
import AlNadaWeb from '../assets/images/Projects/Al-Nada-Web.jpg';
import AlNadaManager1 from '../assets/images/Projects/Al-Nada-Manager-V1.jpg';

const projectsData = [
    { title: "dBank", description: "This is a project", image: "https://via.placeholder.com/150", ComingSoon: true, types: ['React'],tools: ['Reactjs','Nodejs','Expressjs','MongoDB'] ,link:"",github:""},
    { title: "Keeper App", description: "This is a project", image: "https://via.placeholder.com/150", ComingSoon: true, types: ['JavaScript'],tools: ['Reactjs','Nodejs','Expressjs','MongoDB'],link:"",github:"" },
    { title: "Blog-Web-App", description: "This is a project", image: "https://via.placeholder.com/150", ComingSoon: true, types: ['HTML & CSS'],tools:  ['Reactjs','Nodejs','Expressjs','MongoDB'],link:"",github:"" },
    { title: "Al-Nada-Manager-V2", description: "This is a project", image: "https://via.placeholder.com/150", ComingSoon: true, types: ['React'],tools:  ['Reactjs','Nodejs','Expressjs','MongoDB'] ,link:"",github:""},
    { title: "Guardians-of-the-Galaxy", description: "This is a project", image: "https://via.placeholder.com/150", ComingSoon: false, types: ['JavaScript'],tools: ['Reactjs','Nodejs','Expressjs','MongoDB'],link:"",github:"" },
    { title: "AES", description: "This is a project", image: "https://via.placeholder.com/150", ComingSoon: false, types: ['C++'],tools:  ['Reactjs','Nodejs','Expressjs','MongoDB'],link:"",github:"" },
    { title: "PT-Kids", description: "This is a project", image: PTKids, ComingSoon: false, types: ['HTML & CSS'],tools: ['Reactjs','Nodejs','Expressjs','MongoDB'],link:"",github:"" },
    { title: "Calculator", description: "This is a project", image: "https://via.placeholder.com/150", ComingSoon: false, types: ['JavaScript'],tools:  ['Reactjs','Nodejs','Expressjs','MongoDB'],link:"",github:"" },
    { title: "Al-Nada-Web", description: "This is a project", image: AlNadaWeb, ComingSoon: false, types: ['React'],tools: ['Reactjs','Nodejs','Expressjs','MongoDB'],link:"http://alnadascientific.com/",github:"https://github.com/ahmedfathy0-0/Al-Nada-Web.git" },
    { title: "Al-Nada-Manager-V1", description: "This is a project", image: AlNadaManager1, ComingSoon: false, types: ['Node & Express','VBA & .NET'],tools:  ['Reactjs','Nodejs','Expressjs','MongoDB'] ,link:"https://youtu.be/pSUseo3pLeg?si=trZrVqJMSoEhaJ8g",github:""},
    { title: "Solar-Tracker", description: "This is a project", image: "https://via.placeholder.com/150", ComingSoon: false, types: ['C++'],tools: ['Reactjs','Nodejs','Expressjs','MongoDB'] ,link:"",github:""}
  ];
  
  
  

  const Projects = () => {
    const [active, setActive] = useState('All Projects');
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
                {['All Projects', 'HTML & CSS', 'JavaScript', 'React', 'Node & Express', 'VBA & .NET', 'C++'].map(category => (
                  <button
                    key={category}
                    className={active === category ? 'btn-active btn' : 'btn'}
                    onClick={() => {
                      setActive(category)
                      setSelectedProject(null)
                    }
                    }
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
                      .filter(project => active === 'All Projects' || project.types.includes(active))
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