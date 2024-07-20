// src/App.tsx
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Contact from './components/Contact';
import About from './components/About';
import Projects from './components/Projects';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import { ThemeProvider } from 'next-themes';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <div className="App">
        {isLoading && <Preloader />}
        {!isLoading && (
          <>
            <Header />
            <Hero />
            <main>
              <About />
              <Projects />
              <Contact />
            </main>
            <Footer />
          </>
        )}
      </div>
    </ThemeProvider>
  );
};

export default App;
