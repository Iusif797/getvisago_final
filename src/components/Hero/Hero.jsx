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
      <p className="text-visa-gray-800 text-base mb-6">
        Apply for eVisa to your dream destinations in minutes.
      </p>

      <div className="relative flex justify-center items-center mb-8 animate-fade-in-up">
        <img src={firstBanner} alt="Visa Application" className="w-full object-contain" />
      </div>

      <CTAButtons />
      
      <VisaSection />
    </main>
  );
};

export default Hero; 