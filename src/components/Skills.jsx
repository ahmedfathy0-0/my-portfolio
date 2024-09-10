import React from 'react';
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel'; 
import SkillInfo from './Skill-Info';
import SkillDesc from './Skills-Desc';


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
                setIMG('./assets/images/web-development.jpg');
                break;
            case 'Game Development':
                setIMG('./assets/images/game-development.png');
                break;
            case 'App Development':
                setIMG('./assets/images/app-development.png');
                break;
            case 'Logic & Circuit Design':
                setIMG('./assets/images/logic&circuit-design.jpg');
                break;
            default:
                setIMG('./assets/images/logic&circuit-design.jpg');
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
                            img={'./assets/images/web-development.jpg'} 
                            title={'Web Development'}
                            onClick={handleSkillClick} 
                            />
                            <SkillInfo 
                            img={'./assets/images/game-development.png'} 
                            title={'Game Development'} 
                            onClick={handleSkillClick} 
                            />
                            <SkillInfo 
                            img={'./assets/images/app-development.png'} 
                            title={'App Development'} 
                            onClick={handleSkillClick} 
                            />
                            <SkillInfo 
                            img={'./assets/images/logic&circuit-design.jpg'} 
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
