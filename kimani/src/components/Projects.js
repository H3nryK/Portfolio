import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './styles/Projects.css';
import 'animate.css/animate.min.css';

const projects = [
  {
    title: 'Event organizers',
    description: 'A demonstration for using the WAMP server to store and retrieve information as a form of database use.',
    link: 'https://github.com/H3nryK/Event-organizers-Wamp-Server'
  },
  {
    title: 'High School Management System',
    description: 'A software application designed to streamline and automate various student & administrative tasks.',
    link: 'https://github.com/H3nryK/Milimani_High-School-Management-System'
  },
  {
    title: 'Asset Management & Content Monetization',
    description: 'Asset management & Content Monetization web app built on the Internet Computer Protocol.',
    link: 'https://github.com/H3nryK/ICP_JKUAT'
  },
];

function Projects() {

  return (
    <div id="projects" className="projects-section">
      <Container>
        <h2 className="animate__animated animate__fadeInDown">My Projects</h2>
        <Row className="d-flex justify-content-center">
          {projects.map((project, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card className="project-card animate__animated animate__fadeInUp" style={{ animationDelay: `${index * 0.2}s` }}>
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    View Project
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
