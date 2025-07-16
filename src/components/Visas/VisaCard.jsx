import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaRupeeSign, FaArrowRight } from 'react-icons/fa';
import useWindowSize from '../../hooks/useWindowSize';
import dubaiImage from '../../assets/dubai_getvisago.jpg';
import image1 from '../../assets/IMG_6426.JPG';

const VisaCard = ({ image, title, days, price, country, processTime, successVisas }) => {
  const navigate = useNavigate();
  const { width } = useWindowSize();
  const isMobile = width < 1024;

  const getCountrySlug = () => {
    return country.toLowerCase().replace(/\s+/g, '-');
  };

  const getPath = () => {
    let path;
    if (country.toLowerCase() === 'saudi-arabia') {
      path = '/visa/saudi-arabia';
    } else if (country.toLowerCase() === 'israel') {
      path = '/visa/israel';
    } else if (country.toLowerCase() === 'malaysia') {
      path = '/visa/malaysia';
    } else if (country.toLowerCase() === 'sri lanka') {
      path = '/visa/sri-lanka';
    } else if (country.toLowerCase() === 'bahrain') {
      path = '/visa/bahrain';
    } else if (country.toLowerCase() === 'cambodia') {
      path = '/visa/cambodia';
    } else if (country.toLowerCase() === 'australia') {
      path = '/visa/australia';
    } else if (country.toLowerCase() === 'turkey') {
      path = '/visa/turkey';
    } else if (country.toLowerCase() === 'azerbaijan') {
      path = '/visa/azerbaijan';
    } else if (country.toLowerCase() === 'south korea') {
      path = '/visa/south-korea';
    } else if (country.toLowerCase() === 'vietnam') {
      path = '/vietnam-visa';
    } else {
      path = `/visa/${country.toLowerCase().replace(/\s+/g, '-')}`;
    }
    return path;
  };

  const handleCardClick = () => {
    if (isMobile) {
      navigate(getPath());
    }
  };

  const getCardImage = () => {
    if (country === 'Dubai' || country === 'UAE' || country.includes('Dubai') || country.includes('UAE')) {
      return country.includes('Transit') ? image1 : dubaiImage;
    }
    return image;
  };

  const linkPath = getPath();
  const applyNowPath = `/get-visa/${getCountrySlug()}`;

  return (
    <div
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
      onClick={handleCardClick}
      style={{ cursor: isMobile ? 'pointer' : 'default' }}
    >
      <Link to={linkPath} className="pointer-events-none">
        <div className="relative h-52">
          <img
            src={getCardImage()}
            alt={country}
            className="w-full h-full object-cover rounded-t-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-t-2xl"></div>
          <div className="absolute bottom-4 left-5">
            <h3 className="text-white text-2xl font-bold">{country}</h3>
          </div>
        </div>
      </Link>
      <div className="p-5">
        <div className="flex items-center justify-between mb-4">
          <span className="text-gray-500 text-sm">Get Visas in</span>
          <span className="text-gray-900 text-lg font-bold">{processTime} Days</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-left p-2 rounded-lg border border-gray-200">
            <div className="flex items-center text-lg font-bold text-gray-900">
              {price} <FaRupeeSign className="ml-1 text-sm" />
            </div>
          </div>

          <Link
            to={linkPath}
            className="flex items-center justify-center bg-gradient-to-r from-[#8A3FEC] to-[#9B51E0] text-white py-3 px-5 rounded-full font-semibold transition-all duration-300 hover:shadow-[0_5px_15px_rgba(155,81,224,0.5)] group-hover:from-[#9B51E0] group-hover:to-[#8A3FEC]"
          >
            <span>APPLY NOW</span>
            <FaArrowRight className="ml-2 text-sm transform transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VisaCard; 