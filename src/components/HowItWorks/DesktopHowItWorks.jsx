import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaWpforms, FaCreditCard, FaCheckCircle, FaPassport } from 'react-icons/fa';

const steps = [
  {
    title: "Fill Application",
    description: "Complete our simple online application form with your details.",
    icon: <FaWpforms className="text-[#7C3AED] text-4xl group-hover:text-5xl transition-all duration-300" />,
  },
  {
    title: "Make Payment",
    description: "Pay securely using your preferred payment method.",
    icon: <FaCreditCard className="text-[#7C3AED] text-4xl group-hover:text-5xl transition-all duration-300" />,
  },
  {
    title: "Verification",
    description: "Our team verifies your information and processes your application.",
    icon: <FaCheckCircle className="text-[#7C3AED] text-4xl group-hover:text-5xl transition-all duration-300" />,
  },
  {
    title: "Get eVisa",
    description: "Receive your eVisa directly to your email within 24-72 hours.",
    icon: <FaPassport className="text-[#7C3AED] text-4xl group-hover:text-5xl transition-all duration-300" />,
  },
];

const DesktopHowItWorks = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
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
        
        <div className="grid grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="w-40 h-40 bg-[#C4B5FD] rounded-full flex items-center justify-center mb-6 shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:bg-[#DDD6FE]">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-base text-gray-700 text-center max-w-xs">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesktopHowItWorks; 