import React, { useEffect } from 'react';

const ScrollToSectionOnWheel = () => {
  const handleScroll = (e) => {
    const deltaY = e.deltaY;
    if (deltaY > 0) {
      window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    } else {
      window.scrollBy({ top: -window.innerHeight, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', handleScroll);
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return null;
};

export default ScrollToSectionOnWheel;