import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaGlobeAsia, FaPlane } from 'react-icons/fa';
import saudiArabiaImage from '../assets/saudi_arabia_visa.png';
import malaysiaImage from '../assets/malaysia.png';
import sriLankaImage from '../assets/Shrilanka.JPG';
import bahrainImage from '../assets/Bahrein.JPG';
import cambodiaImage from '../assets/CambodiaS.JPG';
import australiaImage from '../assets/australia.jpg';
import turkeyImage from '../assets/TurkeyS.JPG';
import azerbaijanImage from '../assets/AzerbaijanS.JPG';
import dubaiImage from '../assets/dubai_getvisago.jpg';
import omanImage from '../assets/oman.jpg';
import visaIsrael from '../assets/israel.png';
import visaEgypt from '../assets/egypt.png';
import visaAzerbaijan from '../assets/azerbaijan.png';
import visaGeorgia from '../assets/georgia.png';
import visaIndonesia from '../assets/indonesia.png';
import visaSouthKorea from '../assets/southkorea.png';
import useWindowSize from '../hooks/useWindowSize';
import Footer from '../components/Footer/Footer';
import VisaCard from '../components/Visas/VisaCard';

const Visas = () => {
  const { width } = useWindowSize();
  const isDesktop = width >= 1024;
  const isMobile = width < 768;
  const [showAllCountries, setShowAllCountries] = useState(false);

  const mainVisas = [
    { id: 0, image: saudiArabiaImage, country: 'Saudi Arabia', title: 'Tourist Visa', days: 30, price: 5500, processTime: '3' },
    { id: 1, image: malaysiaImage, country: 'Malaysia', title: 'Digital Arrival Card', days: 30, price: 2290, processTime: '2' },
    { id: 2, image: sriLankaImage, country: 'Sri Lanka', title: 'Tourist ETA Double entry', days: 180, price: 2290, processTime: '2' },
    { id: 3, image: bahrainImage, country: 'Bahrain', title: 'e-Visa', days: 90, price: 4701, processTime: '7' },
    { id: 4, image: cambodiaImage, country: 'Cambodia', title: 'Tourist Visa', days: 30, price: 49070.80, processTime: '2-5' },
    { id: 7, image: australiaImage, country: 'Australia', title: 'Tourist Visa', days: 30, price: 11500, processTime: '21' },
    { id: 8, image: turkeyImage, country: 'Turkey', title: 'Tourist Visa', days: 30, price: 3200, processTime: '5' },
    { id: 9, image: azerbaijanImage, country: 'Azerbaijan', title: 'e-Visa', days: 30, price: 2500, processTime: '6' },
    { id: 5, image: dubaiImage, country: 'Dubai', title: 'Tourist Visa', days: 30, price: 6605, processTime: '2' },
    { id: 6, image: dubaiImage, country: 'Singapore', title: 'Tourist Visa', days: 30, price: 1900, processTime: '6' }
  ];

  const additionalVisas = [
    { id: 10, image: omanImage, country: 'Oman', title: 'Tourist Visa', days: 30, price: 3500, processTime: '5' },
    { id: 11, image: visaIsrael, country: 'Israel', title: 'Tourist Visa', days: 30, price: 4200, processTime: '7' },
    { id: 12, image: visaEgypt, country: 'Egypt', title: 'Tourist Visa', days: 30, price: 2800, processTime: '3' },
    { id: 13, image: visaGeorgia, country: 'Georgia', title: 'Tourist Visa', days: 30, price: 2200, processTime: '4' },
    { id: 14, image: visaIndonesia, country: 'Indonesia', title: 'Tourist Visa', days: 30, price: 2900, processTime: '5' },
    { id: 15, image: visaSouthKorea, country: 'South Korea', title: 'Tourist Visa', days: 30, price: 5200, processTime: '7' }
  ];

  const visasToShow = [...mainVisas, ...(showAllCountries ? additionalVisas : [])];

  return (
    <>
      <div className="min-h-screen bg-[#F6F7FA] relative">
        <section className="relative py-24 px-8 overflow-hidden">
          {/* Фоновые декоративные элементы */}
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#00BFA5]/5 -translate-x-1/3 -translate-y-1/3 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] rounded-full bg-[#9B51E0]/5 translate-x-1/4 translate-y-1/4 blur-3xl"></div>
          <div className="absolute top-1/2 right-1/4 w-60 h-60 rounded-full bg-[#FFD700]/5 -translate-y-1/2 blur-2xl"></div>

          <div className="relative max-w-7xl mx-auto">
            {/* Заголовок секции с самолетиком */}
            <div className="flex flex-col items-center mb-20 relative">
              {/* Самолетик летает слева от заголовка */}
              <div className={`absolute ${isMobile ? 'left-[-50px] top-[50px]' : 'left-[-100px] top-[60px]'} pointer-events-none z-10`}>
                <div className="relative">
                  <FaPlane className="text-[#9B51E0]/30 text-2xl animate-[fly-horizontal_12s_linear_infinite] transform" />
                </div>
              </div>

              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#00BFA5] to-[#00D6A9] shadow-xl mb-6 animate-pulse">
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

            {/* Сетка карточек */}
            <div className={`grid grid-cols-1 ${isDesktop ? 'md:grid-cols-2 lg:grid-cols-3' : isMobile ? 'gap-8' : 'md:grid-cols-2'} gap-10 mb-16`}>
              {visasToShow.map((visa) => (
                <VisaCard
                  key={visa.id}
                  image={visa.image}
                  country={visa.country}
                  processTime={visa.processTime}
                  price={visa.price}
                />
              ))}
            </div>

            {/* Кнопка "Показать все" */}
            {additionalVisas.length > 0 && (
              <div className="flex justify-center">
                <button
                  onClick={() => setShowAllCountries(!showAllCountries)}
                  className="flex items-center justify-center gap-3 px-10 py-4 rounded-full bg-[#F6F7FA] border-2 border-[#9B51E0] text-[#9B51E0] font-bold tracking-wider transition-all duration-300 hover:bg-[#9B51E0] hover:text-white shadow-lg hover:shadow-[0_8px_20px_rgba(155,81,224,0.3)]"
                >
                  {showAllCountries ? 'SHOW LESS' : 'SEE ALL COUNTRIES'}
                  <FaChevronDown className={`transform transition-transform duration-300 ${showAllCountries ? 'rotate-180' : ''}`} />
                </button>
              </div>
            )}
          </div>
        </section>
      </div>
      <Footer />

      {/* Стили для анимации самолетика */}
      <style jsx>{`
        @keyframes fly-horizontal {
          0% {
            transform: translateX(-50px) translateY(0px) rotate(15deg);
            opacity: 0.3;
          }
          50% {
            transform: translateX(300px) translateY(-10px) rotate(15deg);
            opacity: 0.6;
          }
          100% {
            transform: translateX(600px) translateY(0px) rotate(15deg);
            opacity: 0.3;
          }
        }
        
        @media (max-width: 768px) {
          @keyframes fly-horizontal {
            0% {
              transform: translateX(-30px) translateY(0px) rotate(15deg);
              opacity: 0.3;
            }
            50% {
              transform: translateX(150px) translateY(-8px) rotate(15deg);
              opacity: 0.6;
            }
            100% {
              transform: translateX(300px) translateY(0px) rotate(15deg);
              opacity: 0.3;
            }
          }
        }
      `}</style>
    </>
  );
};

export default Visas; 