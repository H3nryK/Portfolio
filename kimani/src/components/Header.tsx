import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './styles/Header.css';

const Header: React.FC = () => {
  const [navbarColor, setNavbarColor] = useState('navbar-transparent');

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setNavbarColor('navbar-colored');
    } else {
      setNavbarColor('navbar-transparent');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNavbarColor);
    return () => {
      window.removeEventListener('scroll', changeNavbarColor);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar className={`fixed-top ${navbarColor}`} expand="lg">
        <Container>
          <Navbar.Brand href="#home" onClick={() => scrollToSection('home')}>
            Henry Kimani
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link href="#home" onClick={() => scrollToSection('home')}>Home</Nav.Link>
              <Nav.Link href="#about" onClick={() => scrollToSection('about')}>About</Nav.Link>
              <Nav.Link href="#projects" onClick={() => scrollToSection('projects')}>Projects</Nav.Link>
              <Nav.Link href="#contact" onClick={() => scrollToSection('contact')}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
