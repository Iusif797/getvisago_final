import React from 'react';
import firstBanner from '../../assets/first-banner.png';
import CTAButtons from './CTAButtons';
import VisaSection from '../Visas/VisaSection';

const Hero = () => {
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
      
      <VisaSection />
    </main>
  );
};

export default Hero; 