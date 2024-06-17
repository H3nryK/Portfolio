import React, { useEffect } from 'react';
import './styles/App.css';

const MouseAnimation: React.FC = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cursor = document.querySelector('.custom-cursor');
      if (cursor) {
        cursor.setAttribute('style', `top: ${e.pageY - 10}px; left: ${e.pageX - 10}px;`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div className="custom-cursor"></div>;
};

export default MouseAnimation;
