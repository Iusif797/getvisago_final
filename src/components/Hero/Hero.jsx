import React from 'react';
import mobileVisa from '../../assets/mobile-visa.png';
import firstBanner from '../../assets/first-banner.png';
import CTAButtons from './CTAButtons';
import VisaSection from '../Visas/VisaSection';

const Hero = () => {
  return (
    <main className="px-6 pt-6 pb-8 bg-visa-gray-50">
      <h1 className="text-4xl font-bold leading-tight mb-2 bg-gradient-to-r from-visa-green to-visa-purple bg-clip-text text-transparent">
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