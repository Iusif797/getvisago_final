import React from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import DesktopWhyChooseUs from './DesktopWhyChooseUs';
// Импортируем иконки из библиотеки React Icons
import { BsLightningChargeFill } from 'react-icons/bs';
import { TbFileCheck } from 'react-icons/tb';
import { BiSolidBadgeCheck } from 'react-icons/bi';
import { FaHeadset } from 'react-icons/fa';

const WhyChooseUs = () => {
  const { width } = useWindowSize();
  
  if (width >= 1024) {
    return <DesktopWhyChooseUs />;
  }
  
  return (
    <section className="w-full py-10 bg-white">
      <div className="w-full max-w-[1400px] mx-auto px-4">
        <h2 className="text-[#00BFA5] text-3xl font-bold mb-10 text-center">
          Why Choose Us
        </h2>
        
        <div className="flex flex-col items-center gap-6">
          {/* Блок "Fast Processing" */}
          <div className="w-full max-w-sm bg-gradient-to-r from-[#8A3FEC] to-[#9B51E0] rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-2px]">
            <div className="flex items-center p-5">
              <div className="flex-shrink-0 w-11 h-11 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mr-4">
                <BsLightningChargeFill className="text-white text-2xl" />
              </div>
              <h3 className="text-white text-xl font-bold">Fast Processing</h3>
            </div>
          </div>
          
          {/* Блок "Simple Application" */}
          <div className="w-full max-w-sm bg-gradient-to-r from-[#00B399] to-[#00C6A2] rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-2px]">
            <div className="flex items-center p-5">
              <div className="flex-shrink-0 w-11 h-11 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mr-4">
                <TbFileCheck className="text-white text-2xl" />
              </div>
              <h3 className="text-white text-xl font-bold">Simple Application</h3>
            </div>
          </div>
          
          {/* Блок "Refund Guarantee" */}
          <div className="w-full max-w-sm bg-gradient-to-r from-[#8A3FEC] to-[#9B51E0] rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-2px]">
            <div className="flex items-center p-5">
              <div className="flex-shrink-0 w-11 h-11 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mr-4">
                <BiSolidBadgeCheck className="text-white text-2xl" />
              </div>
              <h3 className="text-white text-xl font-bold">Refund Guarantee</h3>
            </div>
          </div>
          
          {/* Блок "Customer Support" */}
          <div className="w-full max-w-sm bg-gradient-to-r from-[#00B399] to-[#00C6A2] rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-2px]">
            <div className="flex items-center p-5">
              <div className="flex-shrink-0 w-11 h-11 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mr-4">
                <FaHeadset className="text-white text-2xl" />
              </div>
              <h3 className="text-white text-xl font-bold">Customer Support</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 