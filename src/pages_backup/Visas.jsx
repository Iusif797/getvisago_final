import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaGlobeAsia, FaPlane, FaRupeeSign, FaArrowRight } from 'react-icons/fa';
import saudiArabiaImage from '../assets/saudi_arabia_visa.png';
import dubaiImage from '../assets/dubai_getvisago.jpg';
import australiaImage from '../assets/australia.jpg';
import omanImage from '../assets/oman.jpg';
import visaIsrael from '../assets/israel.png';
import visaEgypt from '../assets/egypt.png';
import visaTurkey from '../assets/turkey.png';
import visaAzerbaijan from '../assets/azerbaijan.png';
import visaGeorgia from '../assets/georgia.png';
import visaBahrain from '../assets/bahrain.png';
import visaIndonesia from '../assets/indonesia.png';
import visaCambodia from '../assets/cambodia.png';
import visaSouthKorea from '../assets/southkorea.png';
import visaMalaysia from '../assets/malaysia.png';
import useWindowSize from '../hooks/useWindowSize';
import Footer from '../components/Footer/Footer';

const Visas = () => {
  const { width } = useWindowSize();
  const isDesktop = width >= 1024;
  const isMobile = width < 768;
  const [showAllCountries, setShowAllCountries] = useState(false);

  const mainVisas = [
    {
      id: 0,
      image: saudiArabiaImage,
      country: 'Saudi Arabia',
      title: 'Tourist Visa',
      days: 30,
      price: 5500,
      processTime: '3'
    },
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
      image: visaIsrael,
      country: 'Israel',
      title: 'Tourist Visa',
      days: 30,
      price: 4200,
      processTime: '7'
    },
    {
      id: 6,
      image: visaEgypt,
      country: 'Egypt',
      title: 'Tourist Visa',
      days: 30,
      price: 2800,
      processTime: '3'
    },
    {
      id: 7,
      image: visaTurkey,
      country: 'Turkey',
      title: 'Tourist Visa',
      days: 30,
      price: 3200,
      processTime: '5'
    },
    {
      id: 8,
      image: visaAzerbaijan,
      country: 'Azerbaijan',
      title: 'Tourist Visa',
      days: 30,
      price: 2500,
      processTime: '6'
    },
    {
      id: 9,
      image: visaGeorgia,
      country: 'Georgia',
      title: 'Tourist Visa',
      days: 30,
      price: 2200,
      processTime: '4'
    },
    {
      id: 10,
      image: visaBahrain,
      country: 'Bahrain',
      title: 'Tourist Visa',
      days: 30,
      price: 3800,
      processTime: '3'
    },
    {
      id: 11,
      image: visaIndonesia,
      country: 'Indonesia',
      title: 'Tourist Visa',
      days: 30,
      price: 2900,
      processTime: '5'
    },
    {
      id: 12,
      image: visaCambodia,
      country: 'Cambodia',
      title: 'Tourist Visa',
      days: 30,
      price: 2600,
      processTime: '4'
    },
    {
      id: 13,
      image: visaSouthKorea,
      country: 'South Korea',
      title: 'Tourist Visa',
      days: 30,
      price: 5200,
      processTime: '7'
    },
    {
      id: 14,
      image: visaMalaysia,
      country: 'Malaysia',
      title: 'Tourist Visa',
      days: 30,
      price: 1800,
      processTime: '3'
    }
  ];

  const visasToShow = [...mainVisas, ...(showAllCountries ? additionalVisas : [])];

  const generateSlug = (countryName) => {
    return countryName.toLowerCase().replace(/\s+/g, '-');
  };

  // Компонент карточки визы в стиле главной страницы
  const VisaCard = ({ visa }) => {
    return (
      <div className="relative overflow-hidden rounded-3xl bg-white shadow-[0px_15px_35px_rgba(0,0,0,0.1)] transition-all duration-500 hover:shadow-[0px_20px_40px_rgba(0,0,0,0.18)] hover:translate-y-[-5px] group">
        {/* Изображение БЕЗ оверлея */}
        <div className="relative h-52 overflow-hidden">
          <img
            src={visa.image}
            alt={visa.country}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Страна поверх изображения */}
          <div className="absolute bottom-0 left-0 p-5 z-20">
            <h3 className="text-2xl font-bold text-white tracking-wide drop-shadow-lg">{visa.country}</h3>
          </div>
        </div>

        {/* Информация о визе */}
        <div className="p-5 relative">
          {/* Сроки оформления */}
          <div className="flex items-center justify-between mb-5">
            <span className="text-gray-600 text-sm font-medium">Get Visas in</span>
            <span className="text-gray-800 text-xl font-bold">{visa.processTime} Days</span>
          </div>

          {/* Цена и кнопка действия в одной строке */}
          <div className="flex items-center justify-between">
            {/* Цена */}
            <div className="bg-gradient-to-r from-[#00D6A9] to-[#00BFA5] text-white py-2 px-4 rounded-full font-bold flex items-center shadow-lg">
              <FaRupeeSign className="mr-1" />
              <span>{visa.price}</span>
            </div>

            {/* Кнопка действия */}
            <Link
              to={`/visa/${generateSlug(visa.country)}`}
              className="flex items-center justify-between bg-gradient-to-r from-[#8A3FEC] to-[#9B51E0] text-white py-3 px-5 rounded-full font-semibold transition-all duration-300 hover:shadow-[0_5px_15px_rgba(155,81,224,0.5)] overflow-hidden group-hover:from-[#9B51E0] group-hover:to-[#8A3FEC]"
            >
              <span>APPLY NOW</span>
              <FaArrowRight className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    );
  };

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
                <VisaCard key={visa.id} visa={visa} />
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