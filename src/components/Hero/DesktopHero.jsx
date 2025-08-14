import React from 'react';
import { Link } from 'react-router-dom';
import getVisaPng from '../../assets/button_getvisa_desctop.png';
import aboutUsPng from '../../assets/button_aboutus_desctop.png';
import firstBanner from '../../assets/first-banner.png';

const DesktopHero = () => {
  return (
    <div className="w-full bg-[#F6F7FA] py-14 overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto flex items-center px-4">
        {/* Левая колонка (текст) */}
        <div className="w-1/2 pr-10 z-10">
          <h1
            className="text-5xl xl:text-6xl font-extrabold mb-5 leading-tight text-transparent bg-clip-text"
            style={{
              backgroundImage:
                'linear-gradient(90deg, #00BFA5 0%, #3B82F6 50%, #7C3AED 100%)',
            }}
          >
            Fast and<br />
            Reliable eVisas
          </h1>

          <p className="text-visa-gray-800 text-lg mb-6 leading-relaxed max-w-md">
            Apply for eVisa to your dream destinations in minutes.
          </p>

          <div className="flex flex-col gap-4 mt-4">
            <Link to="/visas" className="inline-block w-fit">
              <img src={getVisaPng} alt="Get Visa" className="block w-auto h-[56px] select-none" draggable="false" />
            </Link>
            <Link to="/about" className="inline-block w-fit">
              <img src={aboutUsPng} alt="About us" className="block w-auto h-[56px] select-none" draggable="false" />
            </Link>
          </div>
        </div>

        {/* Правая колонка (изображение) */}
        <div className="w-1/2 relative flex justify-end items-center h-[500px] pr-0">
          {/* Овальный фон */}
          <div className="absolute right-32 w-[80%] h-[90%] bg-[#E8F5FF] rounded-full z-0"></div>

          {/* Телефон */}
          <div className="relative z-10 transform -rotate-3 hover:rotate-0 transition-all duration-700 -translate-x-14">
            <img
              src={firstBanner}
              alt="GETVISAGO Mobile App"
              className="h-[480px] drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopHero; 