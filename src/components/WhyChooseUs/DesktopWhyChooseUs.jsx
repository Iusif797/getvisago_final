import React from 'react';
import simpleApplicationImg from '../../assets/simple_application.png';
import fastProcessingImg from '../../assets/fast_processing.png';
import customerSupportImg from '../../assets/customer_support.png';
import guaranteeImg from '../../assets/guarantee.png';

const DesktopWhyChooseUs = () => {
  return (
    <section className="w-full py-16 bg-[#F6F7FA]">
      <div className="w-full max-w-[1400px] mx-auto px-4 lg:px-8">
        <h2 className="text-[#00BFA5] text-4xl font-bold mb-12 text-center">
          Why Choose Us
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Первый ряд */}
          <div className="flex justify-center">
            <img 
              src={simpleApplicationImg} 
              alt="Simple Application" 
              className="w-full max-w-md transition-transform hover:scale-105 duration-300"
            />
          </div>
          
          <div className="flex justify-center">
            <img 
              src={fastProcessingImg} 
              alt="Fast Processing" 
              className="w-full max-w-md transition-transform hover:scale-105 duration-300"
            />
          </div>
          
          {/* Второй ряд */}
          <div className="flex justify-center">
            <img 
              src={customerSupportImg} 
              alt="Customer Support" 
              className="w-full max-w-md transition-transform hover:scale-105 duration-300"
            />
          </div>
          
          <div className="flex justify-center">
            <img 
              src={guaranteeImg} 
              alt="Refund Guarantee" 
              className="w-full max-w-md transition-transform hover:scale-105 duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesktopWhyChooseUs; 