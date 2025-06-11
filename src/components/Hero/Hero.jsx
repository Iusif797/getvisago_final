import React from 'react';
import firstBanner from '../../assets/first-banner.png';
import { FaIdCard, FaUsers } from 'react-icons/fa';
import VisaSection from '../Visas/VisaSection';

const Hero = () => {
  return (
    <>
      <section className="px-6 pt-6 pb-8 bg-visa-gray-50 w-full sm:px-8 sm:py-12 lg:px-20 lg:py-16 mx-auto max-w-screen-xl flex flex-col lg:flex-row lg:items-center lg:justify-between">
        {/* Левая колонка с текстом и кнопками */}
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:pr-10">
          <h1 className="hero-title mb-2 sm:text-4xl lg:text-5xl">
            Fast and<br />
            <span className="text-visa-purple">Reliable</span> eVisas
          </h1>
          
          <p className="subtitle mt-4 text-visa-gray-800 sm:text-lg lg:text-xl">
            Apply for eVisa to your dream destinations in minutes.
          </p>
          
          {/* Кнопки CTA */}
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <button className="button-primary sm:w-auto">
              GET VISA
              <div className="bg-white w-8 h-8 rounded-full flex justify-center items-center">
                <FaIdCard className="text-visa-purple" size={18} />
              </div>
            </button>
            
            <button className="button-outline sm:w-auto">
              ABOUT US
              <div className="bg-visa-green w-8 h-8 rounded-full flex justify-center items-center">
                <FaUsers className="text-white" size={18} />
              </div>
            </button>
          </div>
        </div>
        
        {/* Правая колонка с изображением */}
        <div className="w-full mt-8 lg:mt-0 lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative flex justify-center items-center animate-fade-in-up">
            <img 
              src={firstBanner} 
              alt="eVisa App Preview" 
              className="w-full h-auto object-contain sm:w-80 md:w-96 lg:w-auto"
            />
          </div>
        </div>
      </section>
      
      {/* Секция с визами */}
      <VisaSection />
    </>
  );
};

export default Hero; 