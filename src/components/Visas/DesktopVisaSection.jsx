import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';

const DesktopVisaSection = ({ visas, additionalVisas = [] }) => {
  const [showAllCountries, setShowAllCountries] = useState(false);

  // Функция для определения маршрута по стране
  const getPathByCountry = (country) => {
    if (country === 'Saudi Arabia') {
      return '/visa/saudi-arabia';
    }
    return '/get-visa';
  };

  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="w-full px-4 lg:px-8 max-w-[1400px] mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-[#00BFA5] text-3xl font-bold">
            OUR eVISAS:
          </h2>
          
          <button 
            onClick={() => setShowAllCountries(!showAllCountries)}
            className="flex items-center justify-center gap-2 px-8 py-3 rounded-full border-2 border-[#00BFA5] text-[#00BFA5] font-semibold transition-all duration-300 hover:bg-[#00BFA5] hover:text-white"
          >
            {showAllCountries ? 'SHOW LESS' : 'SEE ALL COUNTRIES'}
            <FaChevronDown className={`transform transition-transform ${showAllCountries ? 'rotate-180' : ''}`} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visas.map((visa) => (
            <div 
              key={visa.id} 
              className="rounded-2xl overflow-hidden shadow-[0px_4px_16px_rgba(0,0,0,0.05)] bg-white transition-all duration-150 hover:scale-[1.02] hover:shadow-lg"
            >
              {/* Изображение */}
              <div className="relative w-full overflow-hidden">
                <img 
                  src={visa.image} 
                  alt={`${visa.country} Visa`} 
                  className="w-full h-auto object-contain"
                />
              </div>
              
              {/* Информация о визе */}
              <div className="p-6 text-center">
                <h3 className="text-[#7C3AED] font-semibold text-lg mb-2">
                  {visa.title}
                </h3>
                <p className="text-gray-800 text-base mb-4">
                  {visa.days} Days, {visa.price}$
                </p>
                <Link 
                  to={getPathByCountry(visa.country)}
                  className="block w-full py-3 rounded-full border-2 border-[#7C3AED] text-[#7C3AED] font-semibold uppercase transition-all duration-200 hover:bg-[#7C3AED]/[0.08] text-center"
                >
                  BUY NOW
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {showAllCountries && additionalVisas && additionalVisas.length > 0 && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalVisas.map((visa) => (
              <div 
                key={visa.id} 
                className="rounded-2xl overflow-hidden shadow-[0px_4px_16px_rgba(0,0,0,0.05)] bg-white transition-all duration-150 hover:scale-[1.02] hover:shadow-lg"
              >
                {/* Изображение */}
                <div className="relative w-full overflow-hidden">
                  <img 
                    src={visa.image} 
                    alt={`${visa.country} Visa`} 
                    className="w-full h-auto object-contain"
                  />
                </div>
                
                {/* Информация о визе */}
                <div className="p-6 text-center">
                  <h3 className="text-[#7C3AED] font-semibold text-lg mb-2">
                    {visa.title}
                  </h3>
                  <p className="text-gray-800 text-base mb-4">
                    {visa.days} Days, {visa.price}$
                  </p>
                  <Link 
                    to={getPathByCountry(visa.country)}
                    className="block w-full py-3 rounded-full border-2 border-[#7C3AED] text-[#7C3AED] font-semibold uppercase transition-all duration-200 hover:bg-[#7C3AED]/[0.08] text-center"
                  >
                    BUY NOW
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default DesktopVisaSection; 