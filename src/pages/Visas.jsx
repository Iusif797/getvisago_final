import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaGlobeAsia, FaPlane, FaRupeeSign, FaArrowRight } from 'react-icons/fa';
import visaUAE from '../assets/Visa_Title.png';
import visaSaudiArabia from '../assets/Visa_Title2.png';
import visaRussia from '../assets/Visa_Title3.png';
import visaOman from '../assets/oman.jpg';
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
      id: 1,
      image: visaUAE,
      country: 'UAE',
      title: 'Tourist Visa',
      days: 30,
      price: 50,
      processTime: '2'
    },
    {
      id: 2,
      image: visaSaudiArabia,
      country: 'Saudi Arabia',
      title: 'Tourist Visa',
      days: 30,
      price: 50,
      processTime: '3'
    },
    {
      id: 3,
      image: visaRussia,
      country: 'Russia',
      title: 'Tourist Visa',
      days: 30,
      price: 50,
      processTime: '5'
    }
  ];

  const additionalVisas = [
    {
      id: 4,
      image: visaOman,
      country: 'Oman',
      title: 'Tourist Visa',
      days: 30,
      price: 50,
      processTime: '4'
    },
    {
      id: 5,
      image: visaIsrael,
      country: 'Israel',
      title: 'Tourist Visa',
      days: 30,
      price: 50,
      processTime: '7'
    },
    {
      id: 6,
      image: visaEgypt,
      country: 'Egypt',
      title: 'Tourist Visa',
      days: 30,
      price: 50,
      processTime: '3'
    },
    {
      id: 7,
      image: visaTurkey,
      country: 'Turkey',
      title: 'Tourist Visa',
      days: 30,
      price: 50,
      processTime: '5'
    },
    {
      id: 8,
      image: visaAzerbaijan,
      country: 'Azerbaijan',
      title: 'Tourist Visa',
      days: 30,
      price: 50,
      processTime: '6'
    },
    {
      id: 9,
      image: visaGeorgia,
      country: 'Georgia',
      title: 'Tourist Visa',
      days: 30,
      price: 50,
      processTime: '4'
    },
    {
      id: 10,
      image: visaBahrain,
      country: 'Bahrain',
      title: 'Tourist Visa',
      days: 30,
      price: 50,
      processTime: '3'
    },
    {
      id: 11,
      image: visaIndonesia,
      country: 'Indonesia',
      title: 'Tourist Visa',
      days: 30,
      price: 50,
      processTime: '5'
    },
    {
      id: 12,
      image: visaCambodia,
      country: 'Cambodia',
      title: 'Tourist Visa',
      days: 30,
      price: 50,
      processTime: '4'
    },
    {
      id: 13,
      image: visaSouthKorea,
      country: 'South Korea',
      title: 'Tourist Visa',
      days: 30,
      price: 50,
      processTime: '7'
    },
    {
      id: 14,
      image: visaMalaysia,
      country: 'Malaysia',
      title: 'Tourist Visa',
      days: 30,
      price: 50,
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
        {/* Изображение с градиентным оверлеем */}
        <div className="relative h-52 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
          <img
            src={visa.image}
            alt={visa.country}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Страна поверх изображения */}
          <div className="absolute bottom-0 left-0 p-5 z-20">
            <h3 className="text-2xl font-bold text-white tracking-wide">{visa.country}</h3>
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
              <span className="mr-1">$</span>
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
      <div className="min-h-screen bg-[#F6F7FA]">
        <section className="relative py-24 px-8 overflow-hidden">
          {/* Фоновые декоративные элементы */}
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#00BFA5]/5 -translate-x-1/3 -translate-y-1/3 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] rounded-full bg-[#9B51E0]/5 translate-x-1/4 translate-y-1/4 blur-3xl"></div>
          <div className="absolute top-1/2 right-1/4 w-60 h-60 rounded-full bg-[#FFD700]/5 -translate-y-1/2 blur-2xl"></div>

          {/* Анимированный самолет */}
          <div className="absolute top-[15%] left-[5%] animate-[float_15s_ease-in-out_infinite]">
            <FaPlane className="text-[#9B51E0]/20 text-5xl transform rotate-[30deg]" />
          </div>

          <div className="relative max-w-7xl mx-auto">
            {/* Заголовок секции */}
            <div className="flex flex-col items-center mb-20">
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#00BFA5] to-[#00D6A9] shadow-xl mb-6">
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
    </>
  );
};

export default Visas; 