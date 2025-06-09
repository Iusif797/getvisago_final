import React from 'react';
import VisaCard from './VisaCard';
import { FaChevronDown } from 'react-icons/fa';
import visaUAE from '../../assets/Visa_Title.png';
import visaSaudiArabia from '../../assets/Visa_Title2.png';
import visaRussia from '../../assets/Visa_Title3.png';

const VisaSection = () => {
  const visas = [
    {
      id: 1,
      image: visaUAE,
      title: 'Tourist Visa',
      days: 30,
      price: 50
    },
    {
      id: 2,
      image: visaSaudiArabia,
      title: 'Tourist Visa',
      days: 30,
      price: 50
    },
    {
      id: 3,
      image: visaRussia,
      title: 'Tourist Visa',
      days: 30,
      price: 50
    }
  ];

  return (
    <section className="mb-12 w-full">
      <h2 className="section-title text-center text-visa-green uppercase">
        OUR eVISAS:
      </h2>
      
      <div className="flex flex-col gap-6 mb-8 w-full">
        {visas.map(visa => (
          <VisaCard 
            key={visa.id}
            image={visa.image}
            title={visa.title}
            days={visa.days}
            price={visa.price}
          />
        ))}
      </div>
      
      <button className="flex items-center justify-center gap-2 mx-auto px-6 sm:px-8 py-2 sm:py-3 rounded-full border-2 border-visa-green text-visa-green font-semibold text-sm sm:text-base transition-all duration-300 tracking-wide hover:bg-visa-green hover:text-white">
        SEE ALL COUNTRIES
        <FaChevronDown size={16} />
      </button>
    </section>
  );
};

export default VisaSection; 