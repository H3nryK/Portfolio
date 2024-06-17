// src/components/NotFound.tsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles/App.css';

function NotFound() {
  return (
    <div className="not-found-section">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <h1>404</h1>
            <p>Oops! The page you are looking for does not exist.</p>
            <Link to="/" className="btn btn-primary">Go Home</Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NotFound;
