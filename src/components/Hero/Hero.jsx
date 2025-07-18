import React from 'react';
import firstBanner from '../../assets/first-banner.png';
import CTAButtons from './CTAButtons';
import DesktopHero from './DesktopHero';
import useWindowSize from '../../hooks/useWindowSize';

const Hero = () => {
  const { width } = useWindowSize();
  const isDesktop = width >= 1024;

  if (isDesktop) {
    return <DesktopHero />;
  }

  return (
    <main className="hero-container">
      <h1 className="hero-title">
        Fast and<br />
        Reliable eVisas
      </h1>
      <p className="subtitle">
        Apply for eVisa to your dream destinations in minutes.
      </p>

      <div className="relative flex justify-center items-center mb-8 w-full animate-fade-in-up">
        <img src={firstBanner} alt="Visa Application" className="w-full h-auto object-contain" />
      </div>

      <CTAButtons />
    </main>
  );
};

export default Hero; 