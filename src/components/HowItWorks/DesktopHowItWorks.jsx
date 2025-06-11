import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaBolt, FaClipboardList, FaMoneyBillWave, FaHeadset } from 'react-icons/fa';

const steps = [
  {
    title: "Fast Processing",
    description: "We've made the form super simple to ensure a smooth and stress-free experience.",
    icon: <FaBolt className="text-[#7C3AED] text-4xl group-hover:text-5xl transition-all duration-300" />,
  },
  {
    title: "Simple Application",
    description: "Apply in minutes with our easy-to-use application process.",
    icon: <FaClipboardList className="text-[#7C3AED] text-4xl group-hover:text-5xl transition-all duration-300" />,
  },
  {
    title: "Refund Guarantee",
    description: "Get your money back if you don't get your visa as promised.",
    icon: <FaMoneyBillWave className="text-[#7C3AED] text-4xl group-hover:text-5xl transition-all duration-300" />,
  },
  {
    title: "Customer Support",
    description: "We're here 24/7 to help you with any questions or concerns.",
    icon: <FaHeadset className="text-[#7C3AED] text-4xl group-hover:text-5xl transition-all duration-300" />,
  },
];

const DesktopHowItWorks = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(steps.length / itemsPerPage);
  
  const prev = () => {
    setCurrentPage((currentPage - 1 + totalPages) % totalPages);
  };
  
  const next = () => {
    setCurrentPage((currentPage + 1) % totalPages);
  };
  
  // Получаем текущие элементы для отображения
  const currentItems = () => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, steps.length);
    return steps.slice(startIndex, endIndex);
  };
  
  return (
    <section className="w-full py-8 bg-gray-50">
      <div className="w-full px-4 lg:px-8 max-w-[1400px] mx-auto relative">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-[#00BFA5] text-4xl font-bold">How It Works</h2>
          
          <div className="flex space-x-3">
            <button 
              onClick={prev} 
              className="w-12 h-12 bg-[#7C3AED] rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:bg-[#9061F9] hover:scale-110"
              aria-label="Previous"
            >
              <FaChevronLeft size={20} />
            </button>
            <button 
              onClick={next} 
              className="w-12 h-12 bg-[#7C3AED] rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:bg-[#9061F9] hover:scale-110"
              aria-label="Next"
            >
              <FaChevronRight size={20} />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-8">
          {currentItems().map((step, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="w-48 h-48 bg-[#C4B5FD] rounded-full flex items-center justify-center mb-6 shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:bg-[#DDD6FE]">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-base text-gray-700 text-center max-w-xs">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12 space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentPage === index ? 'bg-[#7C3AED] transform scale-125' : 'bg-[#DDD6FE]'
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesktopHowItWorks; 