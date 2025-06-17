import React from 'react';
import { Link } from 'react-router-dom';

const VisaCard = ({ image, title, days, price, country }) => {
  // Определяем путь в зависимости от страны или изображения
  const getPath = () => {
    if (country === 'Saudi Arabia' || image.includes('Saudi') || title.includes('Saudi')) {
      return '/visa/saudi-arabia';
    }
    return '/get-visa';
  };

  return (
    <div className="visa-card">
      <div className="overflow-hidden rounded-t-xl">
        <img src={image} alt={title} className="w-full h-auto object-cover" />
      </div>
      <div className="p-4 text-center">
        <h3 className="card-title mb-1">{title}</h3>
        <p className="price-text mb-4">{days} Days, {price}$</p>
        <Link to={getPath()} className="block w-full py-2 sm:py-3 rounded-full border border-visa-purple text-visa-purple font-semibold text-sm sm:text-base uppercase hover:bg-visa-purple hover:text-white transition-colors tracking-wide text-center">
          BUY NOW
        </Link>
      </div>
    </div>
  );
};

export default VisaCard; 