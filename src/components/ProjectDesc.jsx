import React from 'react';
import { BsArrowRightCircle } from "react-icons/bs";
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'; 

import Motoko from '../assets/images/Motoko.png';
import JetBrainsimg from '../assets/images/JetBrains.png';
import Verilog from '../assets/images/Verilog.png';
import Csharp from '../assets/images/Csharp.png';

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
    JetBrains: JetBrainsimg,
    Verilog: Verilog,
    'C#': Csharp
  }

  const ProjectDesc = ({ project, onBack }) => {
    return (
        <div className="project-desc">
            <BsArrowRightCircle
                size={35}
                className="back-button"
                onClick={onBack}
            />
            <img src={project.image} alt={project.title} />
            <div className="project-details">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tools">
                    <h4>Languages & Tools:</h4>
                    <div className="tools-icons">
                        {project.tools.map((type) => (
                            <img
                                key={type}
                                src={skillIcons[type]}
                                alt={type}
                                title={type}
                                className="tool-icon"
                            />
                        ))}
                    </div>
                </div>
                <div className="project-links">
                    {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="card-link">
                            <FaGithub />
                        </a>
                    )}
                    {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="card-link">
                            <FaExternalLinkAlt />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProjectDesc;
