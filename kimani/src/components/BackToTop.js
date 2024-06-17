// src/components/BackToTop.tsx
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { FaArrowUp } from 'react-icons/fa';
import './styles/App.css';

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="back-to-top">
      {isVisible && (
        <Button onClick={scrollToTop} className="btn-back-to-top">
          <FaArrowUp />
        </Button>
      )}
    </div>
  );
};

export default BackToTop;
