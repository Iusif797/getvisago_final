import React from 'react';
import { FaClipboardCheck, FaBolt, FaHeadset, FaMoneyBillWave } from 'react-icons/fa';

const DesktopWhyChooseUs = () => {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="w-full px-4 lg:px-8 max-w-[1400px] mx-auto">
        <h2 className="text-[#00BFA5] text-4xl font-bold mb-12 text-center">
          Why Choose Us
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Simple Application */}
          <div className="rounded-full bg-gradient-to-r from-[#00BFA5] to-[#00D8B8] py-5 px-8 flex items-center justify-between shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] hover:translate-y-[-4px] group">
            <div className="flex items-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mr-6 shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                <FaClipboardCheck className="text-[#00BFA5] text-2xl group-hover:text-3xl transition-all duration-300" />
              </div>
              <span className="text-white text-xl font-semibold tracking-wide">Simple Application</span>
            </div>
          </div>
          
          {/* Fast Processing */}
          <div className="rounded-full bg-gradient-to-r from-[#7C3AED] to-[#9061F9] py-5 px-8 flex items-center justify-between shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] hover:translate-y-[-4px] group">
            <div className="flex items-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mr-6 shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                <FaBolt className="text-[#7C3AED] text-2xl group-hover:text-3xl transition-all duration-300" />
              </div>
              <span className="text-white text-xl font-semibold tracking-wide">Fast Processing</span>
            </div>
          </div>
          
          {/* Customer Support */}
          <div className="rounded-full bg-gradient-to-r from-[#00BFA5] to-[#00D8B8] py-5 px-8 flex items-center justify-between shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] hover:translate-y-[-4px] group">
            <div className="flex items-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mr-6 shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                <FaHeadset className="text-[#00BFA5] text-2xl group-hover:text-3xl transition-all duration-300" />
              </div>
              <span className="text-white text-xl font-semibold tracking-wide">Customer Support</span>
            </div>
          </div>
          
          {/* Refund Guarantee */}
          <div className="rounded-full bg-gradient-to-r from-[#7C3AED] to-[#9061F9] py-5 px-8 flex items-center justify-between shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] hover:translate-y-[-4px] group">
            <div className="flex items-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mr-6 shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                <FaMoneyBillWave className="text-[#7C3AED] text-2xl group-hover:text-3xl transition-all duration-300" />
              </div>
              <span className="text-white text-xl font-semibold tracking-wide">Refund Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesktopWhyChooseUs; 