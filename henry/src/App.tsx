// src/App.tsx
import React from 'react';
import Header from './components/Header';
import Contact from './components/Contact';
import About from './components/About';
import Projects from './components/Projects';
import Hero from './components/Hero';
import Footer from './components/Footer';
import { ThemeProvider } from 'next-themes'

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <Hero />
        <main>
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;