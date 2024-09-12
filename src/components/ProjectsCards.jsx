import { Card } from 'react-bootstrap';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const ProjectsCards = (props) => {
  return (
    <Card 
  className={props.ComingSoon ? "card-coming-soon" : "card"}
>
  <Card.Img variant="top" src={props.image} />
  <Card.Body>
    <Card.Title>{props.title}</Card.Title>
    <Card.Text></Card.Text>
  </Card.Body>
  <Card.Footer className="card-footer">
  <div className="footer-content">
    {props.link && (
      <a href={props.link} target="_blank" rel="noopener noreferrer" className="card-link">
        <FaExternalLinkAlt /> 
      </a>
    )}
    {props.github && (
      <a href={props.github} target="_blank" rel="noopener noreferrer" className="card-link">
        <FaGithub /> 
      </a>
    )}
    <a href='#projects' className="read-more" onClick={props.onClick}>
      Read More
    </a>
  </div>
</Card.Footer>

</Card>
  );
};

export default ProjectsCards;
