import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Hero: React.FC = () => {
  return (
    <div className="hero-section text-center text-white d-flex align-items-center">
      <div className="overlay"></div>
      <Container>
        <Row>
          <Col className="hero-content">
            <h1 className="animated fadeInDown">Welcome to My Portfolio</h1>
            <p className="animated fadeInUp delay-1s">Discover my projects and skills</p>
            <Button className="animated fadeInUp delay-2s" variant="primary" href="#projects">View Projects</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
