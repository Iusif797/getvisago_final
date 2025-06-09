import React from 'react';

const VisaCard = ({ image, title, days, price }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="overflow-hidden rounded-t-xl">
        <img src={image} alt={title} className="w-full object-cover" />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-lg font-bold text-visa-gray-900 mb-1">{title}</h3>
        <p className="text-visa-gray-800 mb-4">{days} Days, {price}$</p>
        <button className="w-full py-3 rounded-full border border-visa-purple text-visa-purple font-semibold uppercase hover:bg-visa-purple hover:text-white transition-colors">BUY NOW</button>
      </div>
    </div>
  );
};

export default VisaCard; 