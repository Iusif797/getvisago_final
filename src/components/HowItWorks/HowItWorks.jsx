import React, { useState, useEffect } from 'react';
import { FaWpforms, FaCreditCard, FaCheckCircle, FaPassport } from 'react-icons/fa';
import arrowLeft from '../../assets/arrow-left.svg';
import arrowRight from '../../assets/arrow-right.svg';
import useWindowSize from '../../hooks/useWindowSize';
import DesktopHowItWorks from './DesktopHowItWorks';

const steps = [
  {
    title: "Fill Application",
    description: "Complete our simple online application form with your details.",
    icon: <FaWpforms className="text-visa-green text-4xl" />,
  },
  {
    title: "Make Payment",
    description: "Pay securely using your preferred payment method.",
    icon: <FaCreditCard className="text-visa-green text-4xl" />,
  },
  {
    title: "Verification",
    description: "Our team verifies your information and processes your application.",
    icon: <FaCheckCircle className="text-visa-green text-4xl" />,
  },
  {
    title: "Get eVisa",
    description: "Receive your eVisa directly to your email within 24-72 hours.",
    icon: <FaPassport className="text-visa-green text-4xl" />,
  },
];

const HowItWorks = () => {
  const { width } = useWindowSize();
  const isDesktop = width >= 1024;
  
  // Инициализация хуков до условного рендеринга
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const prev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrent((current - 1 + steps.length) % steps.length);
    }
  };
  
  const next = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrent((current + 1) % steps.length);
    }
  };
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [current]);
  
  // Если десктоп, рендерим DesktopHowItWorks
  if (isDesktop) {
    return <DesktopHowItWorks />;
  }
  
  // Мобильная версия
  return (
    <section className="w-full px-6 py-4 bg-[#F6F7FA]">
      {/* Header and arrows */}
      <div className="flex justify-between items-start mb-8">
        <h2 className="text-3xl font-extrabold bg-gradient-to-r from-[#00C6A2] to-[#9B51E0] bg-clip-text text-transparent leading-none">
          How It<br />Works
        </h2>
        <div className="flex space-x-4 mt-1">
          <button onClick={prev} aria-label="Previous" className="w-10 h-10 flex items-center justify-center active:scale-95 transition-transform">
            <img src={arrowLeft} alt="Prev" className="w-full h-full" />
          </button>
          <button onClick={next} aria-label="Next" className="w-10 h-10 flex items-center justify-center active:scale-95 transition-transform">
            <img src={arrowRight} alt="Next" className="w-full h-full" />
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="how-it-works-circle mb-6">
          {steps[current].icon}
        </div>

        <h3 className="how-it-works-step-title mb-2">{steps[current].title}</h3>
        <p className="text-center text-sm max-w-xs mb-8">{steps[current].description}</p>

        {/* Dots indicator */}
        <div className="flex space-x-2">
          {steps.map((_, idx) => (
            <span
              key={idx}
              className={`w-3 h-3 rounded-full ${idx === current ? 'bg-[#9B51E0]' : 'bg-[#E4D9FF]'}`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 