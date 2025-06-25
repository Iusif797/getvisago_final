import React from 'react';
import { Link } from 'react-router-dom';
import { FaRupeeSign, FaArrowRight } from 'react-icons/fa';

const VisaCard = ({ image, title, days, price, country, processTime, successVisas }) => {
  // Определяем путь в зависимости от страны или изображения
  const getPath = () => {
    if (country === 'Saudi Arabia' || image.includes('Saudi') || title.includes('Saudi')) {
      return '/visa/saudi-arabia';
    }
    return '/get-visa';
  };

  return (
    <div className="relative overflow-hidden rounded-3xl bg-white shadow-[0px_15px_35px_rgba(0,0,0,0.1)] transition-all duration-500 hover:shadow-[0px_20px_40px_rgba(0,0,0,0.18)] hover:translate-y-[-5px] group">
      {/* Изображение с градиентным оверлеем */}
      <div className="relative h-52 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
        <img 
          src={image} 
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