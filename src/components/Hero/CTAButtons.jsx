import React from 'react';
import { FaIdCard, FaUsers } from 'react-icons/fa';

const CTAButtons = () => {
  return (
    <div className="flex flex-col gap-4 mb-12">
      <button className="flex justify-between items-center px-6 py-4 rounded-full bg-visa-purple text-white font-semibold text-base uppercase shadow-md hover:shadow-lg transition-shadow duration-300">
        GET VISA
        <div className="bg-white w-8 h-8 rounded-full flex justify-center items-center">
          <FaIdCard className="text-visa-purple" size={18} />
        </div>
      </button>
      <button className="flex justify-between items-center px-6 py-4 rounded-full bg-white text-visa-green border-2 border-visa-green font-semibold text-base uppercase shadow-md hover:shadow-lg transition-shadow duration-300">
        ABOUT US
        <div className="bg-visa-green w-8 h-8 rounded-full flex justify-center items-center">
          <FaUsers className="text-white" size={18} />
        </div>
      </button>
    </div>
  );
};

export default CTAButtons; 