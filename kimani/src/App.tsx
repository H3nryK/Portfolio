import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import './components/styles/App.css';
import MouseAnimation from './components/MouseAnimation';
import BackToTop from './components/BackToTop';
import NotFound from './components/NotFound';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const App: React.FC = () => {
  return (
    <Router>
      <Helmet>
        <title>Henry Kimani || Portfolio</title>
        <meta name="description" content="Welcome to my personal portfolio. I am a software developer." />
        <meta name="keywords" content="portfolio, software developer, TypeScript, React, Bootstrap" />
        <meta name="author" content="Henry Kimani" />
      </Helmet>
      <div className="App">
        <MouseAnimation />
        <Header />
        <Routes>
          <Route path="/" element={<React.Fragment> {/* Wrap content inside React.Fragment */}
            <Hero />
            <div className="container">
              <About />
              <Projects />
              <Contact />
            </div>
          </React.Fragment>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
};

export default App;