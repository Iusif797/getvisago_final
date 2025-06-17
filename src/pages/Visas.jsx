import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import visaUAE from '../assets/Visa_Title.png';
import visaSaudiArabia from '../assets/Visa_Title2.png';
import visaRussia from '../assets/Visa_Title3.png';
import useWindowSize from '../hooks/useWindowSize';
import Contact from '../components/Contact/Contact';

const Visas = () => {
  const { width } = useWindowSize();
  const isDesktop = width >= 1024;

  const visas = [
    {
      id: 1,
      image: visaUAE,
      country: 'UAE',
      title: 'Tourist Visa',
      days: 30,
      price: 50
    },
    {
      id: 2,
      image: visaSaudiArabia,
      country: 'Saudi Arabia',
      title: 'Tourist Visa',
      days: 30,
      price: 50
    },
    {
      id: 3,
      image: visaRussia,
      country: 'Russian Federation',
      subTitle: 'Underground',
      title: 'Tourist Visa',
      days: 30,
      price: 50
    },
    {
      id: 4,
      image: visaUAE,
      country: 'UAE',
      title: 'Tourist Visa',
      days: 30,
      price: 50
    },
    {
      id: 5,
      image: visaSaudiArabia,
      country: 'Saudi Arabia',
      title: 'Tourist Visa',
      days: 30,
      price: 50
    },
    {
      id: 6,
      image: visaRussia,
      country: 'Russian Federation',
      title: 'Tourist Visa',
      days: 30,
      price: 50
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className={`grid grid-cols-1 ${isDesktop ? 'md:grid-cols-3' : ''} gap-6 mb-12 mt-4`}>
          {visas.map((visa) => (
            <Link 
              key={visa.id} 
              to="/visa/saudi-arabia" 
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
                <div 
                  className="block w-full py-3 rounded-full border-2 border-[#7C3AED] text-[#7C3AED] font-semibold uppercase transition-all duration-200 hover:bg-[#7C3AED]/[0.08] text-center"
                >
                  BUY NOW
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mb-12">
          <button className="premium-button flex items-center justify-center gap-2 mx-auto px-8 py-4 rounded-full border-2 border-[#00BFA5] text-[#00BFA5] font-semibold text-base transition-all duration-300 tracking-wide hover:bg-[#00BFA5] hover:text-white">
            SEE ALL COUNTRIES
            <FaChevronDown size={16} />
          </button>
        </div>
      </div>
      
      {isDesktop && <Contact />}
    </div>
  );
};

export default Visas; 