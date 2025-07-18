import React from 'react';
import { FaIdCard, FaUsers } from 'react-icons/fa';

const CTAButtons = () => {
  return (
    <div className="flex flex-col gap-4 mb-12">
      <button className="button-primary">
        GET VISA
        <div className="bg-white w-8 h-8 rounded-full flex justify-center items-center">
          <FaIdCard className="text-visa-purple" size={18} />
        </div>
      </button>
      <button className="button-outline">
        ABOUT US
        <div className="bg-visa-green w-8 h-8 rounded-full flex justify-center items-center">
          <FaUsers className="text-white" size={18} />
        </div>
      </button>
    </div>
  );
};

export default CTAButtons; 