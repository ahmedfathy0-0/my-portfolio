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
