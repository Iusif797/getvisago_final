import React from 'react';
import { Link } from 'react-router-dom';

const VisaCard = ({ image, title, days, price, country }) => {
  // Определяем URL в зависимости от страны
  const getVisaUrl = () => {
    if (country === 'Saudi Arabia') {
      return '/visa/saudi-arabia';
    }
    return '/'; // По умолчанию - главная страница
  };

  return (
    <div className="visa-card">
      <Link to={getVisaUrl()}>
        <div className="overflow-hidden rounded-t-xl">
          <img src={image} alt={title} className="w-full h-auto object-cover" />
        </div>
      </Link>
      <div className="p-4 text-center">
        <h3 className="card-title mb-1">{title}</h3>
        <p className="price-text mb-4">{days} Days, {price}$</p>
        <Link 
          to={getVisaUrl()}
          className="block w-full py-2 sm:py-3 rounded-full border border-visa-purple text-visa-purple font-semibold text-sm sm:text-base uppercase hover:bg-visa-purple hover:text-white transition-colors tracking-wide text-center"
        >
          BUY NOW
        </Link>
      </div>
    </div>
  );
};

export default VisaCard; 