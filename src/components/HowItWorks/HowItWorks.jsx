import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaWpforms, FaCreditCard, FaCheckCircle, FaPassport } from 'react-icons/fa';
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
    <section className="w-full px-6 py-4 bg-visa-gray-50">
      <div className="flex flex-col items-center mb-4">
        <h2 className="how-it-works-title mb-4">How It Works:</h2>
        
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${(current + 1) / steps.length * 100}%` }}
          ></div>
        </div>
      </div>
      
      <div className="relative flex flex-col items-center">
        <div className="how-it-works-circle mb-6">
          {steps[current].icon}
        </div>
        
        <div className="flex flex-col items-center">
          <h3 className="how-it-works-step-title mb-2">{steps[current].title}</h3>
          <p className="text-center text-sm max-w-xs mb-4">{steps[current].description}</p>
        </div>
        
        <div className="flex gap-4 mt-2">
          <button onClick={prev} className="nav-button">
            <FaChevronLeft size={20} />
          </button>
          <button onClick={next} className="nav-button">
            <FaChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 