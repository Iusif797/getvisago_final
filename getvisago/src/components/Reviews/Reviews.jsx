import React, { useState, useEffect } from 'react';
import DesktopReviews from './DesktopReviews';
import MobileReviews from './MobileReviews';

const Reviews = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return isMobile ? <MobileReviews /> : <DesktopReviews />;
};

export default Reviews; 