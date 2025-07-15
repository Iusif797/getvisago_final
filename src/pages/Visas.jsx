import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaGlobeAsia, FaPlane } from 'react-icons/fa';
import saudiArabiaImage from '../assets/saudi_arabia_visa.png';
import malaysiaImage from '../assets/Malaasiya.JPG';
import sriLankaImage from '../assets/Shrilanka.JPG';
import bahrainImage from '../assets/Bahrein.JPG';
import cambodiaImage from '../assets/CambodiaS.JPG';
import australiaImage from '../assets/australia.jpg';
import turkeyImage from '../assets/TurkeyS.JPG';
import azerbaijanImage from '../assets/AzerbaijanS.JPG';
import southKoreaImage from '../assets/SouthKoreaS.JPG';
import vietnamImage from '../assets/Vietnam.JPG';
import omanImage from '../assets/oman.jpg';
import israelImage from '../assets/israel.png';
import dubaiImage from '../assets/dubai_getvisago.jpg';
import useWindowSize from '../hooks/useWindowSize';
import Footer from '../components/Footer/Footer';
import VisaCard from '../components/Visas/VisaCard';

const Visas = () => {
  const { width } = useWindowSize();
  const isDesktop = width >= 1024;
  const isMobile = width < 768;

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
              {allVisas.map((visa) => (
                <VisaCard
                  key={visa.id}
                  image={visa.image}
                  country={visa.country}
                  processTime={visa.processTime}
                  price={visa.price}
                />
              ))}
            </div>
            {/* Button is removed here as all visas are shown by default on this page */}
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