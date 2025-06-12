import React from 'react';

const MobileAboutUsBanner = () => {
  return (
    <section className="w-full py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-violet-600 opacity-90 z-0"></div>
      <div className="absolute inset-0 bg-[url('/src/assets/office-bg.jpg')] bg-cover bg-center mix-blend-overlay z-0"></div>
      
      <div className="relative z-10 w-full px-4 flex flex-col items-center justify-center text-center">
        <h2 className="text-white text-3xl font-bold mb-6 leading-tight">
          Мы понимаем сложности и разочарования, связанные с оформлением визовых документов.
        </h2>
        
        <button className="bg-white text-purple-600 font-medium py-3 px-6 rounded-full hover:shadow-xl transform transition-all duration-300 hover:scale-105 text-sm">
          УЗНАТЬ БОЛЬШЕ О НАС
        </button>
      </div>
    </section>
  );
};

export default MobileAboutUsBanner; 