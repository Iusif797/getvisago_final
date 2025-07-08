import React, { useState, useEffect } from 'react';
import DesktopAboutUsBanner from './DesktopAboutUsBanner';
import MobileAboutUsBanner from './MobileAboutUsBanner';

const AboutUsBanner = () => {
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

  return isMobile ? <MobileAboutUsBanner /> : <DesktopAboutUsBanner />;
};

export default AboutUsBanner; 