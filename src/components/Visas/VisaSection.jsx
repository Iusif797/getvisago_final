import React, { useState } from 'react';
import VisaCard from './VisaCard';
import { FaChevronDown } from 'react-icons/fa';
import visaUAE from '../../assets/Visa_Title.png';
import visaSaudiArabia from '../../assets/Visa_Title2.png';
import visaRussia from '../../assets/Visa_Title3.png';
import visaOman from '../../assets/oman.png';
import visaIsrael from '../../assets/israel.png';
import visaEgypt from '../../assets/egypt.png';
import visaTurkey from '../../assets/turkey.png';
import visaAzerbaijan from '../../assets/azerbaijan.png';
import visaGeorgia from '../../assets/georgia.png';
import visaBahrain from '../../assets/bahrain.png';
import visaIndonesia from '../../assets/indonesia.png';
import visaCambodia from '../../assets/cambodia.png';
import visaSouthKorea from '../../assets/southkorea.png';
import visaMalaysia from '../../assets/malaysia.png';
import useWindowSize from '../../hooks/useWindowSize';
import DesktopVisaSection from './DesktopVisaSection';

const VisaSection = () => {
  const { width } = useWindowSize();
  const isDesktop = width >= 1024;
  const [showAll, setShowAll] = useState(false);

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
      country: 'Russia',
      title: 'Tourist Visa',
      days: 30,
      price: 50
    }
  ];

  const additionalVisas = [
    {
      id: 4,
      image: visaOman,
      country: 'Oman',
      title: 'Tourist Visa',
      days: 30,
      price: 50
    },
    {
      id: 5,
      image: visaIsrael,
      country: 'Israel',
      title: 'Tourist Visa',
      days: 30,
      price: 50
    },
    {
      id: 6,
      image: visaEgypt,
      country: 'Egypt',
      title: 'Tourist Visa',
      days: 30,
      price: 50
    },
    {
      id: 7,
      image: visaTurkey,
      country: 'Turkey',
      title: 'Tourist Visa',
      days: 30,
      price: 50
    },
    {
      id: 8,
      image: visaAzerbaijan,
      country: 'Azerbaijan',
      title: 'Tourist Visa',
      days: 30,
      price: 50
    },
    {
      id: 9,
      image: visaGeorgia,
      country: 'Georgia',
      title: 'Tourist Visa',
      days: 30,
      price: 50
    },
    {
      id: 10,
      image: visaBahrain,
      country: 'Bahrain',
      title: 'Tourist Visa',
      days: 30,
      price: 50
    },
    {
      id: 11,
      image: visaIndonesia,
      country: 'Indonesia',
      title: 'Tourist Visa',
      days: 30,
      price: 50
    },
    {
      id: 12,
      image: visaCambodia,
      country: 'Cambodia',
      title: 'Tourist Visa',
      days: 30,
      price: 50
    },
    {
      id: 13,
      image: visaSouthKorea,
      country: 'South Korea',
      title: 'Tourist Visa',
      days: 30,
      price: 50
    },
    {
      id: 14,
      image: visaMalaysia,
      country: 'Malaysia',
      title: 'Tourist Visa',
      days: 30,
      price: 50
    }
  ];

  const allVisas = [...visas, ...(showAll ? additionalVisas : [])];

  if (isDesktop) {
    return <DesktopVisaSection visas={visas} additionalVisas={additionalVisas} />;
  }

  return (
    <section className="mb-12 w-full">
      <h2 className="visas-title mb-8">
        OUR eVISAS:
      </h2>
      
      <div className="flex flex-col gap-6 mb-8 w-full">
        {allVisas.map(visa => (
          <VisaCard 
            key={visa.id}
            image={visa.image}
            title={visa.title}
            country={visa.country}
            days={visa.days}
            price={visa.price}
          />
        ))}
      </div>
      
      <button 
        onClick={() => setShowAll(!showAll)}
        className="premium-button flex items-center justify-center gap-2 mx-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-visa-green text-visa-green font-semibold text-sm sm:text-base transition-all duration-300 tracking-wide hover:bg-visa-green hover:text-white"
      >
        {showAll ? 'SHOW LESS' : 'SEE ALL COUNTRIES'}
        <FaChevronDown className={`transform transition-transform ${showAll ? 'rotate-180' : ''}`} />
      </button>
    </section>
  );
};

export default VisaSection; 