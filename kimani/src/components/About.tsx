import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub, faInstagram, faLinkedin, faTelegram,
  faWhatsapp, faXTwitter
} from '@fortawesome/free-brands-svg-icons';
import './styles/About.css';
import profilePhoto from './assets/profile.png';
//hey there 

const About: React.FC = () => {
  return (
    <div id="about" className="about-section">
      <Container>
        <Row className="align-items-center">
          <Col md={4} className="about-photo animate__animated animate__fadeInLeft">
            <img src={profilePhoto} alt="Henry Kimani" className="profile-photo" />
          </Col>
          <Col md={4} className="about-text animate__animated animate__fadeInUp">
            <h2>About Me</h2>
            <p>
              Hello! I'm Henry Kimani, a passionate software developer with a love for creating amazing web applications.
              I have experience in various technologies including Python, React, and Bootstrap.
              In my free time, I enjoy contributing to open source projects and sharing my knowledge with the community.
            </p>
          </Col>
          <Col md={4} className="about-social animate__animated animate__fadeInRight">
            <h2>Connect with Me</h2>
            <div className="social-icons">
              <a href="https://github.com/H3nryK" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a href="https://www.instagram.com/_.h3nry_k" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a href="https://www.linkedin.com/in/kimani-henry-19a1b6305" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a href="https://t.me/Kimani_henry" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTelegram} size="2x" />
              </a>
              <a href="https://wa.me/+254705618424" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} size="2x" />
              </a>
              <a href="https://x.com/H3nryKim" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faXTwitter} size="2x" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;