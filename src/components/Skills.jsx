import React from 'react';
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel'; 


const Skills = () => {
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

    return (
        <section className="skills" id="skills">
          <Container>
            <Row>
              <Col>
                <div className="skills-bx">
                  <h2>Skills</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.</p>
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
                    <div className="item">
                      <img src={'./assets/images/web-development.jpg'} alt="Web Development" />
                      <h5 className="skill-title">Web Development</h5>
                    </div>
                    <div className="item">
                      <img src={'./assets/images/game-development.png'} alt="Game Development" />
                      <h5 className="skill-title">Game Development</h5>
                    </div>
                    <div className="item">
                      <img src={'./assets/images/app-development.png'} alt="App Development" />
                      <h5 className="skill-title">App Development</h5>
                    </div>
                    <div className="item">
                      <img src={'./assets/images/logic&circuit-design.jpg'} alt="Logic & Circuit Design" />
                      <h5 className="skill-title">Logic & Circuit Design</h5>
                    </div>
                  </Carousel>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
    );
}

export default Skills;
