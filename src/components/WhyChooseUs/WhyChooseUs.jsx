import React from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import DesktopWhyChooseUs from './DesktopWhyChooseUs';
import simpleApplicationMobile from '../../assets/simpleapplication_mobile.png';
import fastProcessingMobile from '../../assets/fast_processing_mobile.png';
import customerSupportMobile from '../../assets/customer_support_mobile.png';
import guaranteeMobile from '../../assets/guarantee_mobile.png';

const WhyChooseUs = () => {
  const { width } = useWindowSize();
  
  if (width >= 1024) {
    return <DesktopWhyChooseUs />;
  }
  
  return (
    <section className="w-full py-8 bg-white">
      <div className="w-full max-w-[1400px] mx-auto px-4">
        <h2 className="text-[#00BFA5] text-3xl font-bold mb-8 text-center">
          Why Choose Us
        </h2>
        
        <div className="flex flex-col items-center gap-6">
          {/* Мобильные изображения */}
          <img 
            src={simpleApplicationMobile} 
            alt="Simple Application" 
            className="w-full max-w-sm transition-transform hover:scale-105 duration-300"
          />
          
          <img 
            src={fastProcessingMobile} 
            alt="Fast Processing" 
            className="w-full max-w-sm transition-transform hover:scale-105 duration-300"
          />
          
          <img 
            src={customerSupportMobile} 
            alt="Customer Support" 
            className="w-full max-w-sm transition-transform hover:scale-105 duration-300"
          />
          
          <img 
            src={guaranteeMobile} 
            alt="Refund Guarantee" 
            className="w-full max-w-sm transition-transform hover:scale-105 duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 