import React from 'react';
import { FaIdCard, FaUsers } from 'react-icons/fa';
import firstBanner from '../../assets/first-banner.png';

const DesktopHero = () => {
  return (
    <div className="w-full flex items-center py-14 bg-[#F6F7FA] px-8 lg:px-16 xl:px-24 overflow-hidden">
      {/* Левая колонка (текст) */}
      <div className="w-1/2 pl-2 pr-8 z-10">
        <h1 className="text-5xl xl:text-6xl font-bold mb-5 leading-tight">
          <span className="text-[#00BFA5]">Fast and</span> <br />
          <span className="text-[#7950ED]">Reliable eVisas</span>
        </h1>
        
        <p className="text-visa-gray-800 text-lg mb-8 leading-relaxed">
          Apply for eVisa to your dream destinations in minutes.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="flex items-center bg-[#7950ED] text-white font-semibold px-7 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
            <span className="uppercase">Get Visa</span>
            <span className="ml-3 bg-white rounded-full w-8 h-8 flex items-center justify-center">
              <FaIdCard className="text-[#7950ED]" size={16} />
            </span>
          </button>
          
          <button className="flex items-center bg-white text-[#00BFA5] border-2 border-[#00BFA5] font-semibold px-7 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
            <span className="uppercase">About Us</span>
            <span className="ml-3 bg-[#00BFA5] rounded-full w-8 h-8 flex items-center justify-center">
              <FaUsers className="text-white" size={16} />
            </span>
          </button>
        </div>
      </div>
      
      {/* Правая колонка (изображение) */}
      <div className="w-1/2 relative flex justify-center items-center h-[500px] pl-8">
        {/* Овальный фон */}
        <div className="absolute right-8 w-[80%] h-[90%] bg-[#E8F5FF] rounded-full z-0"></div>
        
        {/* Телефон */}
        <div className="relative z-10 transform -rotate-3 hover:rotate-0 transition-all duration-700">
          <img 
            src={firstBanner} 
            alt="GETVISAGO Mobile App" 
            className="h-[480px] drop-shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default DesktopHero; 