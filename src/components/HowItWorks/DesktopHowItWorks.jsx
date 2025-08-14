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
  // Показываем 3 шага в ряд и листаем на один шаг за нажатие
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((currentIndex - 1 + steps.length) % steps.length);
  };

  const next = () => {
    setCurrentIndex((currentIndex + 1) % steps.length);
  };

  const visibleSteps = [
    steps[currentIndex],
    steps[(currentIndex + 1) % steps.length],
    steps[(currentIndex + 2) % steps.length],
  ];

  return (
    <section className="w-full py-16 bg-[#F6F7FA]">
      <div className="w-full max-w-[1400px] mx-auto px-4 relative">
        <div className="flex justify-between items-start mb-10">
          <h2
            className="text-4xl font-extrabold text-left bg-clip-text text-transparent leading-none tracking-tight"
            style={{ backgroundImage: 'linear-gradient(90deg, #00BFA5 0%, #00BFA5 100%)' }}
          >
            How It Works
          </h2>

          <div className="flex space-x-3">
            <button
              onClick={prev}
              className="w-10 h-10 bg-[#7C3AED] rounded-xl flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:bg-[#9061F9] hover:scale-110"
              aria-label="Previous"
            >
              <FaChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 bg-[#7C3AED] rounded-xl flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:bg-[#9061F9] hover:scale-110"
              aria-label="Next"
            >
              <FaChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-24">
          {visibleSteps.map((step, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="w-72 h-72 bg-[#C4B5FD] rounded-full flex items-center justify-center mb-8 shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:bg-[#DDD6FE]">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-base text-gray-700 text-center max-w-sm">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Dots pagination */}
        <div className="flex justify-center mt-8 space-x-3">
          {steps.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to step ${i + 1}`}
              onClick={() => setCurrentIndex(i)}
              className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${currentIndex === i ? 'bg-[#7C3AED] scale-110' : 'bg-[#E9D5FF]'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesktopHowItWorks; 