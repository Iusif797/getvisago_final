import React, { useState } from 'react';
import VisaCard from './VisaCard';
import { FaChevronDown, FaGlobeAsia } from 'react-icons/fa';
import saudiArabiaImage from '../../assets/saudi_arabia_visa.png';
import malaysiaImage from '../../assets/Malaasiya.JPG'; // Correct image
import sriLankaImage from '../../assets/Shrilanka.JPG';
import bahrainImage from '../../assets/Bahrein.JPG';
import cambodiaImage from '../../assets/CambodiaS.JPG';
import australiaImage from '../../assets/australia.jpg';
import turkeyImage from '../../assets/TurkeyS.JPG';
import azerbaijanImage from '../../assets/AzerbaijanS.JPG';
import southKoreaImage from '../../assets/SouthKoreaS.JPG';
import vietnamImage from '../../assets/Vietnam.JPG';
import omanImage from '../../assets/oman.jpg';
import israelImage from '../../assets/Israel_VisaPageBanner.JPG';
import dubaiImage from '../../assets/dubai_getvisago.jpg';
import useWindowSize from '../../hooks/useWindowSize';
import DesktopVisaSection from './DesktopVisaSection';

const VisaSection = () => {
  const { width } = useWindowSize();
  const isDesktop = width >= 1024;
  const [showAll, setShowAll] = useState(false);

  const allVisas = [
    { id: 1, image: saudiArabiaImage, country: 'Saudi Arabia', path: '/visa/saudi-arabia', price: 5500, processTime: '3' },
    { id: 2, image: malaysiaImage, country: 'Malaysia', path: '/malaysia-visa', price: 2290, processTime: '2' },
    { id: 3, image: sriLankaImage, country: 'Sri Lanka', path: '/sri-lanka-visa', price: 2290, processTime: '2' },
    { id: 4, image: bahrainImage, country: 'Bahrain', path: '/bahrain-visa', price: 4701, processTime: '7' },
    { id: 5, image: cambodiaImage, country: 'Cambodia', path: '/cambodia-visa', price: 49070.80, processTime: '2-5' },
    { id: 8, image: australiaImage, country: 'Australia', path: '/australia-visa', price: 11500, processTime: '21' },
    { id: 9, image: turkeyImage, country: 'Turkey', path: '/turkey-visa', price: 3200, processTime: '5' },
    { id: 10, image: azerbaijanImage, country: 'Azerbaijan', path: '/azerbaijan-visa', price: 2100, processTime: '3' },
    { id: 11, image: southKoreaImage, country: 'South Korea', path: '/south-korea-visa', price: 11252, processTime: '5' },
    { id: 12, image: vietnamImage, country: 'Vietnam', path: '/vietnam-visa', price: 4379, processTime: '2-12' },
    { id: 13, image: omanImage, country: 'Oman', path: '/oman-visa', price: 3500, processTime: '5' },
    { id: 14, image: israelImage, country: 'Israel', path: '/israel-visa', price: 4200, processTime: '7' },
    { id: 15, image: dubaiImage, country: 'Dubai', path: '/', price: 6605, processTime: '2' }, // Placeholder
  ];

  const mainVisas = allVisas.slice(0, 6);
  const additionalVisas = allVisas.slice(6);

  const visasToDisplay = showAll ? allVisas : mainVisas;

  if (isDesktop) {
    return <DesktopVisaSection visas={mainVisas} additionalVisas={additionalVisas} />;
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
          {visasToDisplay.map(visa => (
            <VisaCard
              key={visa.id}
              image={visa.image}
              country={visa.country}
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