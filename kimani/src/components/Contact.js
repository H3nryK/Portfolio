import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone, faEnvelope, faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';
import './styles/Contact.css';

function Contact() {
  return (
    <div id="contact" className="contact-section">
      <Container>
        <h2 className="animate__animated animate__fadeInDown">Contact Me</h2>
        <Row>
          <Col md={6} className="animate__animated animate__fadeInLeft contact-details">
            <h4>Contact Details</h4>
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> Limuru, Kenya
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} /> +254 705 618 424
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> kimanihenryn@gmail.com
            </p>
          </Col>
          <Col md={6} className="animate__animated animate__fadeInRight">
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
              </Form.Group>
              <Button variant="primary" type="submit" className="mt-3">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;