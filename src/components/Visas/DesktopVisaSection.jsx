import React, { useState } from 'react';
import { FaChevronDown, FaGlobeAsia, FaPlane } from 'react-icons/fa';
import VisaCard from './VisaCard';

const DesktopVisaSection = ({ visas, additionalVisas = [] }) => {
  const [showAll, setShowAll] = useState(false);

  // Функция для определения маршрута по стране
  const getPathByCountry = (country) => {
    if (country === 'Saudi Arabia') {
      return '/visa/saudi-arabia';
    }
    return '/get-visa';
  };

  const allVisas = [...visas, ...(showAll ? additionalVisas : [])];

  return (
    <section className="relative py-24 px-8 overflow-hidden bg-[#F6F7FA]">
      {/* Фоновые декоративные элементы */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#00BFA5]/5 -translate-x-1/3 -translate-y-1/3 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] rounded-full bg-[#9B51E0]/5 translate-x-1/4 translate-y-1/4 blur-3xl"></div>
      <div className="absolute top-1/2 right-1/4 w-60 h-60 rounded-full bg-[#FFD700]/5 -translate-y-1/2 blur-2xl"></div>
      
      {/* Анимированный самолет */}
      <div className="absolute top-[15%] left-[5%] animate-[float_15s_ease-in-out_infinite]">
        <FaPlane className="text-[#9B51E0]/20 text-5xl transform rotate-[30deg]" />
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-20">
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#00BFA5] to-[#00D6A9] shadow-xl mb-6">
            <FaGlobeAsia className="text-white text-3xl" />
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-extrabold text-center bg-gradient-to-r from-[#00BFA5] to-[#9B51E0] bg-clip-text text-transparent mb-4">
            OUR eVISAS
          </h2>
          
          <div className="w-20 h-1.5 bg-gradient-to-r from-[#00BFA5] to-[#9B51E0] rounded-full mb-6"></div>
          
          <p className="text-gray-600 text-center text-lg max-w-2xl">
            Fast and reliable visa services for your global travel needs with secure processing and expert support
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {allVisas.map(visa => (
            <VisaCard 
              key={visa.id}
              image={visa.image}
              title={visa.title}
              country={visa.country}
              days={visa.days}
              price={visa.price}
              processTime={visa.processTime}
            />
          ))}
        </div>
        
        {additionalVisas.length > 0 && (
          <div className="flex justify-center">
            <button 
              onClick={() => setShowAll(!showAll)}
              className="flex items-center justify-center gap-3 px-10 py-4 rounded-full bg-[#F6F7FA] border-2 border-[#9B51E0] text-[#9B51E0] font-bold tracking-wider transition-all duration-300 hover:bg-[#9B51E0] hover:text-white shadow-lg hover:shadow-[0_8px_20px_rgba(155,81,224,0.3)]"
            >
              {showAll ? 'SHOW LESS' : 'SEE ALL COUNTRIES'}
              <FaChevronDown className={`transform transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default DesktopVisaSection; 