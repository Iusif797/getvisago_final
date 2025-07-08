import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaRupeeSign, FaArrowRight } from 'react-icons/fa';
import useWindowSize from '../../hooks/useWindowSize';
import dubaiImage from '../../assets/dubai_getvisago.JPG';
import image1 from '../../assets/IMG_6426.JPG';

const VisaCard = ({ image, title, days, price, country, processTime, successVisas }) => {
  const navigate = useNavigate();
  const { width } = useWindowSize();
  const isMobile = width < 1024;

  // Преобразуем название страны для URL
  const getCountrySlug = () => {
    return country.toLowerCase().replace(/\s+/g, '-');
  };

  // Определяем путь в зависимости от страны
  const getPath = () => {
    const slug = getCountrySlug();
    if (slug === 'saudi-arabia') {
      return '/visa/saudi-arabia';
    }
    if (slug === 'israel') {
      return '/visa/israel';
    }
    return `/visa-detail/${slug}`;
  };

  // Обработчик клика по карточке для мобильных устройств
  const handleCardClick = () => {
    if (isMobile) {
      navigate(getPath());
    }
  };

  // Определяем изображение для карточки
  const getCardImage = () => {
    if (country === 'Dubai' || country === 'UAE' || country.includes('Dubai') || country.includes('UAE')) {
      return country.includes('Transit') ? image1 : dubaiImage;
    }
    return image;
  };

  return (
    <div 
      className="relative overflow-hidden rounded-3xl bg-white shadow-[0px_15px_35px_rgba(0,0,0,0.1)] transition-all duration-500 hover:shadow-[0px_20px_40px_rgba(0,0,0,0.18)] hover:translate-y-[-5px] group"
      onClick={isMobile ? handleCardClick : undefined}
    >
      {/* Изображение с градиентным оверлеем */}
      <div className="relative h-52 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
        <img 
          src={getCardImage()} 
          alt={country} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        {/* Страна поверх изображения */}
        <div className="absolute bottom-0 left-0 p-5 z-20">
          <h3 className="text-2xl font-bold text-white tracking-wide">{country}</h3>
        </div>
      </div>
      
      {/* Информация о визе */}
      <div className="p-5 relative">
        {/* Сроки оформления */}
        <div className="flex items-center justify-between mb-5">
          <span className="text-gray-600 text-sm font-medium">Get Visas in</span>
          <span className="text-gray-800 text-xl font-bold">{processTime} Days</span>
        </div>

        {/* Цена и кнопка действия в одной строке */}
        <div className="flex items-center justify-between">
          {/* Цена */}
          <div className="bg-gradient-to-r from-[#00D6A9] to-[#00BFA5] text-white py-2 px-4 rounded-full font-bold flex items-center shadow-lg">
            <FaRupeeSign className="mr-1" />
            <span>{price}</span>
          </div>
          
          {/* Кнопка действия */}
          <Link 
            to={getPath()} 
            className="flex items-center justify-between bg-gradient-to-r from-[#8A3FEC] to-[#9B51E0] text-white py-3 px-5 rounded-full font-semibold transition-all duration-300 hover:shadow-[0_5px_15px_rgba(155,81,224,0.5)] overflow-hidden group-hover:from-[#9B51E0] group-hover:to-[#8A3FEC]"
            onClick={(e) => isMobile && e.stopPropagation()} // Предотвращаем всплытие события для мобильных устройств
          >
            <span>Apply Now</span>
            <FaArrowRight className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VisaCard; 