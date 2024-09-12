import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectsCards from './ProjectsCards';
import ProjectDesc from './ProjectDesc';
import PTKids from '../assets/images/Projects/PT-Kids.jpeg';
import AlNadaWeb from '../assets/images/Projects/Al-Nada-Web.jpg';
import AlNadaManager1 from '../assets/images/Projects/Al-Nada-Manager-V1.jpg';
import AES from '../assets/images/Projects/AES.jpg';
import BlogWeb from '../assets/images/Projects/BlogWeb.jpeg'
import Keeper from '../assets/images/Projects/Keeper.jpeg'
import dBank from '../assets/images/Projects/dBank.png'
import SolarTracker from '../assets/images/Projects/Solar-Tracker.jpeg'
import Guardians from '../assets/images/Projects/Guardians-of-the-Galaxy.jpeg'
import Calculator from '../assets/images/Projects/Calculator.jpg'
import AlNadaManager2 from '../assets/images/Projects/Al-Nada-Manager-V2.jpeg'

const projectsData = [
    { title: "dBank", description: "This is a project", image: dBank, ComingSoon: true, types: ['React','JavaScript','HTML & CSS'],tools: ['Reactjs','JavaScript','Motoko'] ,link:"",github:"https://github.com/ahmedfathy0-0/dBank.git"},
    { title: "Keeper App", description: "This is a project", image:Keeper , ComingSoon: true, types: ['React','JavaScript','HTML & CSS','Node & Express'],tools: ['Reactjs','Nodejs','Expressjs','Postgres'],link:"",github:"https://github.com/ahmedfathy0-0/keeper-app.git" },
    { title: "Blog-Web-App", description: "This is a project", image: BlogWeb, ComingSoon: true, types: ['HTML & CSS','Node & Express'],tools:  ['Nodejs','Expressjs','Postgres'],link:"",github:"https://github.com/ahmedfathy0-0/Blog-web-application.git" },
    { title: "Al-Nada-Manager-V2", description: "This is a project", image: AlNadaManager2, ComingSoon: true, types: ['VBA & .NET'],tools:  ['Postgres','C#'] ,link:"",github:"https://github.com/ahmedfathy0-0/Al-Nada-Manager-App.git"},
    { title: "Guardians-of-the-Galaxy", description: "This is a project", image: Guardians, ComingSoon: false, types: ['C++'],tools: ['C++'],link:"",github:"https://github.com/ahmedfathy0-0/DS-Guardians-of-the-Galaxy.git" },
    { title: "AES", description: "This is a project", image: AES, ComingSoon: false, types: ['Others'],tools:  ['Verilog'],link:"",github:"https://github.com/ahmedfathy090/AES.git" },
    { title: "PT-Kids", description: "This is a project", image: PTKids, ComingSoon: false, types: ['C++'],tools: ['C++'],link:"",github:"https://github.com/ahmedfathy0-0/PT-Project.git" },
    { title: "Calculator", description: "This is a project", image: Calculator, ComingSoon: false, types: ['Others'],tools:  ['Reactjs','Nodejs','Expressjs','MongoDB'],link:"",github:"" },
    { title: "Al-Nada-Web", description: "This is a project", image: AlNadaWeb, ComingSoon: false, types: ['JavaScript','HTML & CSS'],tools: ['JavaScript','HTML', 'CSS'],link:"http://alnadascientific.com/",github:"https://github.com/ahmedfathy0-0/Al-Nada-Web.git" },
    { title: "Al-Nada-Manager-V1", description: "This is a project", image: AlNadaManager1, ComingSoon: false, types: ['VBA & .NET'],tools:  [] ,link:"https://youtu.be/pSUseo3pLeg?si=trZrVqJMSoEhaJ8g",github:""},
    { title: "Solar-Tracker", description: "This is a project", image: SolarTracker, ComingSoon: false, types: ['Others'],tools: [] ,link:"",github:""}
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
                {['All Projects', 'HTML & CSS', 'JavaScript', 'React', 'Node & Express', 'VBA & .NET', 'C++','Others'].map(category => (
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