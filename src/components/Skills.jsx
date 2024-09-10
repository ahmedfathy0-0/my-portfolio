import React from 'react';
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel'; 
import SkillInfo from './Skill-Info';
import SkillDesc from './Skills-Desc';
import Webimg from '../assets/images/web-development.jpg';
import Gameimg from '../assets/images/game-development.png';
import Appimg from '../assets/images/app-development.png';
import Logicimg from '../assets/images/logic&circuit-design.jpg';
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

const Skills = () => {
    const [isReadMore, setIsReadMore] = React.useState(false);
    const [IMG, setIMG] = React.useState('');
    const [TITLE, setTITLE] = React.useState('');
     
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      const handleSkillClick = (title) => {
        setTITLE(title);
        switch (title) {
            case 'Web Development':
                setIMG(Webimg);
                break;
            case 'Game Development':
                setIMG(Gameimg);
                break;
            case 'App Development':
                setIMG(Appimg);
                break;
            case 'Logic & Circuit Design':
                setIMG(Logicimg);
                break;
            default:
                setIMG(Logicimg);
        }
        setIsReadMore(true);
    };

    return (
        <section className="skills" id="skills">
          <Container>
            <Row>
              <Col>
                <div className="skills-bx">
                    {isReadMore ? (
                        <SkillDesc 
                        img={IMG} 
                        title={TITLE}
                        onReturn = {() => setIsReadMore(false)}
                        />
                    ) : (
                        <>
                        <h2>Skills</h2>
                        <Carousel 
                            responsive={responsive} 
                            infinite={true} 
                            autoPlay={true} 
                            autoPlaySpeed={5000} 
                            keyBoardControl={true} 
                            customTransition="all .5" 
                            transitionDuration={500} 
                            className="skill-slider"
                        >
                            <SkillInfo
                            img={Webimg} 
                            title={'Web Development'}
                            onClick={handleSkillClick} 
                            />
                            <SkillInfo 
                            img={Gameimg} 
                            title={'Game Development'} 
                            onClick={handleSkillClick} 
                            />
                            <SkillInfo 
                            img={Appimg} 
                            title={'App Development'} 
                            onClick={handleSkillClick} 
                            />
                            <SkillInfo 
                            img={Logicimg} 
                            title={'Logic & Circuit Design'} 
                            onClick={handleSkillClick} 
                            />
                        </Carousel>
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
                        </>
                    )}
                </div>
              </Col>
            </Row>
          </Container>
          
        </section>
    );
}

export default Skills;
