// src/App.tsx
import React, { useState, useEffect } from 'react';
import HomePage from './pages/Home';
import Preloader from './components/Preloader';

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
    <div className="App">
      {isLoading && <Preloader />}
      {!isLoading && (
        <>
        <HomePage />
        </>
      )}
    </div>
  );
};

export default App;
