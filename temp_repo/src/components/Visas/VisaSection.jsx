import React, { useState } from 'react';
import VisaCard from './VisaCard';
import { FaChevronDown } from 'react-icons/fa';
import visaUAE from '../../assets/Visa_Title.png';
import visaSaudiArabia from '../../assets/Visa_Title2.png';
import visaRussia from '../../assets/Visa_Title3.png';
import useWindowSize from '../../hooks/useWindowSize';
import DesktopVisaSection from './DesktopVisaSection';

const VisaSection = () => {
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
    }
  ];

  if (isDesktop) {
    return <DesktopVisaSection visas={visas} />;
  }

  return (
    <section className="mb-12 w-full">
      <h2 className="visas-title mb-8">
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
      
      <button className="premium-button flex items-center justify-center gap-2 mx-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-visa-green text-visa-green font-semibold text-sm sm:text-base transition-all duration-300 tracking-wide hover:bg-visa-green hover:text-white">
        SEE ALL COUNTRIES
        <FaChevronDown size={16} />
      </button>
    </section>
  );
};

export default VisaSection; 