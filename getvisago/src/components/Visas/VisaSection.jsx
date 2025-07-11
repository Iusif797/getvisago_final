import React, { useState } from 'react';
import VisaCard from './VisaCard';
import { FaChevronDown, FaGlobeAsia } from 'react-icons/fa';
import dubaiImage from '../../assets/dubai_getvisago.jpg';
import omanImage from '../../assets/oman.jpg';
import australiaImage from '../../assets/australia.jpg';
import useWindowSize from '../../hooks/useWindowSize';
import DesktopVisaSection from './DesktopVisaSection';

const VisaSection = () => {
  const { width } = useWindowSize();
  const isDesktop = width >= 1024;
  const [showAll, setShowAll] = useState(false);

  const visas = [
    {
      id: 1,
      image: dubaiImage,
      country: 'Dubai',
      title: 'Tourist Visa',
      days: 30,
      price: 6605,
      processTime: '2'
    },
    {
      id: 2,
      image: dubaiImage,
      country: 'Singapore',
      title: 'Tourist Visa',
      days: 30,
      price: 1900,
      processTime: '6'
    },
    {
      id: 3,
      image: australiaImage,
      country: 'Australia',
      title: 'Tourist Visa',
      days: 30,
      price: 11500,
      processTime: '21'
    }
  ];

  const additionalVisas = [
    {
      id: 4,
      image: omanImage,
      country: 'Oman',
      title: 'Tourist Visa',
      days: 30,
      price: 3500,
      processTime: '5'
    },
    {
      id: 5,
      image: dubaiImage,
      country: 'Israel',
      title: 'Tourist Visa',
      days: 30,
      price: 4200,
      processTime: '7'
    },
    {
      id: 6,
      image: dubaiImage,
      country: 'Egypt',
      title: 'Tourist Visa',
      days: 30,
      price: 2800,
      processTime: '3'
    }
  ];

  const allVisas = [...visas, ...(showAll ? additionalVisas : [])];

  if (isDesktop) {
    return <DesktopVisaSection visas={visas} additionalVisas={additionalVisas} />;
  }

  return (
    <section className="relative py-14 px-4 overflow-hidden bg-[#F6F7FA]">
      {/* Фоновые декоративные элементы */}
      <div className="absolute top-0 left-0 w-40 h-40 rounded-full bg-[#00BFA5]/10 -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 rounded-full bg-[#9B51E0]/10 translate-x-1/3 translate-y-1/3 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 w-20 h-20 rounded-full bg-[#FFD700]/10 -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>

      <div className="relative max-w-md mx-auto">
        <div className="flex flex-col items-center mb-10">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#00BFA5] to-[#00D6A9] shadow-lg mb-5">
            <FaGlobeAsia className="text-white text-2xl" />
          </div>

          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-[#00BFA5] to-[#9B51E0] bg-clip-text text-transparent mb-2">
            OUR eVISAS
          </h2>

          <p className="text-gray-600 text-center max-w-xs">
            Fast and reliable visa services for your travel needs
          </p>
        </div>

        <div className="flex flex-col gap-8 mb-12">
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
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#F6F7FA] border-2 border-[#9B51E0] text-[#9B51E0] font-bold text-sm transition-all duration-300 tracking-wide hover:bg-[#9B51E0] hover:text-white shadow-md hover:shadow-[0_5px_15px_rgba(155,81,224,0.3)]"
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

export default VisaSection; 