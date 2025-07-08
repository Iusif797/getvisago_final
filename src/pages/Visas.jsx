import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import visaUAE from '../assets/Visa_Title.png';
import visaSaudiArabia from '../assets/Visa_Title2.png';
import visaRussia from '../assets/Visa_Title3.png';
import visaOman from '../assets/oman.png';
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
import ourEvisasSvg from '../assets/OUR eVISAS_.svg';
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
      price: 50
    },
    {
      id: 2,
      image: visaSaudiArabia,
      country: 'Saudi Arabia',
      title: 'Tourist Visa',
      days: 30,
      price: 50
    },
    {
      id: 3,
      image: visaRussia,
      country: 'Russia',
      title: 'Tourist Visa',
      days: 30,
      price: 50
    }
  ];

  const additionalVisas = [
    {
      id: 4,
      image: visaOman,
      country: 'Oman',
      title: 'Tourist Visa',
      days: 30,
      price: 50
    },
    {
      id: 5,
      image: visaIsrael,
      country: 'Israel',
      title: 'Tourist Visa',
      days: 30,
      price: 50
    },
    {
      id: 6,
      image: visaEgypt,
      country: 'Egypt',
      title: 'Tourist Visa',
      days: 30,
      price: 50
    },
    {
      id: 7,
      image: visaTurkey,
      country: 'Turkey',
      title: 'Tourist Visa',
      days: 30,
      price: 50
    },
    {
      id: 8,
      image: visaAzerbaijan,
      country: 'Azerbaijan',
      title: 'Tourist Visa',
      days: 30,
      price: 50
    },
    {
      id: 9,
      image: visaGeorgia,
      country: 'Georgia',
      title: 'Tourist Visa',
      days: 30,
      price: 50
    },
    {
      id: 10,
      image: visaBahrain,
      country: 'Bahrain',
      title: 'Tourist Visa',
      days: 30,
      price: 50
    },
    {
      id: 11,
      image: visaIndonesia,
      country: 'Indonesia',
      title: 'Tourist Visa',
      days: 30,
      price: 50
    },
    {
      id: 12,
      image: visaCambodia,
      country: 'Cambodia',
      title: 'Tourist Visa',
      days: 30,
      price: 50
    },
    {
      id: 13,
      image: visaSouthKorea,
      country: 'South Korea',
      title: 'Tourist Visa',
      days: 30,
      price: 50
    },
    {
      id: 14,
      image: visaMalaysia,
      country: 'Malaysia',
      title: 'Tourist Visa',
      days: 30,
      price: 50
    }
  ];

  const visasToShow = [...mainVisas, ...(showAllCountries ? additionalVisas : [])];

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <div className={isMobile ? "section-container section-spacing" : "container mx-auto px-4 py-8"}>
          <div className="flex justify-start mb-8 mt-16">
            {isMobile ? (
              <h1 className="mobile-gradient-heading">OUR eVISAS:</h1>
            ) : (
              <img src={ourEvisasSvg} alt="OUR eVISAS:" className="h-8 md:h-10" />
            )}
          </div>
          
          <div className={`grid grid-cols-1 ${isDesktop ? 'md:grid-cols-3' : ''} gap-6 mb-12 mt-4`}>
            {visasToShow.map((visa) => (
              <Link 
                key={visa.id} 
                to="/visa/saudi-arabia" 
                className={`rounded-2xl overflow-hidden shadow-[0px_4px_16px_rgba(0,0,0,0.05)] bg-white transition-all duration-150 hover:scale-[1.02] hover:shadow-lg ${isMobile ? 'card-spacing' : ''}`}
              >
                {/* Изображение */}
                <div className="relative w-full overflow-hidden flex justify-center p-4">
                  <img 
                    src={visa.image} 
                    alt={`${visa.country} Visa`} 
                    className="w-full h-auto object-contain max-h-48"
                  />
                </div>
                
                {/* Информация о визе */}
                <div className="p-6 text-center">
                  <h3 className="text-[#7C3AED] font-semibold text-lg mb-2">
                    {visa.country} {visa.title}
                  </h3>
                  <p className="text-gray-800 text-base mb-4">
                    {visa.days} Days, {visa.price}$
                  </p>
                  <div 
                    className="block w-full py-3 rounded-full border-2 border-[#7C3AED] text-[#7C3AED] font-semibold uppercase transition-all duration-200 hover:bg-[#7C3AED]/[0.08] text-center"
                  >
                    BUY NOW
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mb-12">
            <button 
              onClick={() => setShowAllCountries(!showAllCountries)}
              className="premium-button flex items-center justify-center gap-2 mx-auto px-8 py-4 rounded-full border-2 border-[#00BFA5] text-[#00BFA5] font-semibold text-base transition-all duration-300 tracking-wide hover:bg-[#00BFA5] hover:text-white"
            >
              {showAllCountries ? 'SHOW LESS' : 'SEE ALL COUNTRIES'}
              <FaChevronDown className={`transform transition-transform ${showAllCountries ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Visas; 