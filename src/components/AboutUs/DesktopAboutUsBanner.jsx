import React from 'react';
import { Link } from 'react-router-dom';

const DesktopAboutUsBanner = () => {
  return (
    <section className="w-full py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-violet-600 opacity-90 z-0"></div>
      <div className="absolute inset-0 bg-[url('/src/assets/first-banner.png')] bg-cover bg-center mix-blend-overlay z-0"></div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 lg:px-8 flex flex-col items-center justify-center text-center">
        <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-8 max-w-3xl mx-auto leading-tight">
          We understand the frustration of dealing with complicated visa application processes.
        </h2>

        <Link to="/about" className="bg-white text-purple-600 font-medium py-3 px-8 rounded-full hover:shadow-xl transform transition-all duration-300 hover:scale-105 mx-auto">
          READ MORE ABOUT US
        </Link>
      </div>
    </section>
  );
};

export default DesktopAboutUsBanner; 