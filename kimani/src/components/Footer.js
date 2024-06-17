import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './styles/App.css';

function Footer() {
  return (
    <footer className="footer-section">
      <Container>
        <Row>
          <Col md={6} className="text-center text-md-left">
            <p>&copy; {new Date().getFullYear()} Henry Kimani || All Rights Reserved.</p>
          </Col>
          <Col md={6} className="text-center text-md-right">
            <ul className="social-icons">
              <li><a href="https://github.com/H3nryK" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://instagram.com/_.h3nry_k" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://linkedin.com/in/kimani-henry-19a1b6305" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
