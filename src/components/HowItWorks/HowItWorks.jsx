import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaBolt, FaClipboardList, FaMoneyBillWave, FaHeadset } from 'react-icons/fa';

const steps = [
  {
    title: "Fast Processing",
    description: "We've made the form super simple to ensure a smooth and stress-free experience.",
    icon: <FaBolt className="text-visa-green text-7xl" />,
  },
  {
    title: "Simple Application",
    description: "Apply in minutes with our easy-to-use application process.",
    icon: <FaClipboardList className="text-visa-green text-7xl" />,
  },
  {
    title: "Refund Guarantee",
    description: "Get your money back if you don't get your visa as promised.",
    icon: <FaMoneyBillWave className="text-visa-green text-7xl" />,
  },
  {
    title: "Customer Support",
    description: "We're here 24/7 to help you with any questions or concerns.",
    icon: <FaHeadset className="text-visa-green text-7xl" />,
  },
];

const HowItWorks = () => {
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

  return (
    <section className="w-full px-6 py-12 -mt-4 bg-visa-gray-50">
      <div className="flex flex-col items-center mb-12">
        <h2 className="how-it-works-title mb-8">How It Works</h2>
        
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${(current + 1) / steps.length * 100}%` }}
          ></div>
        </div>
      </div>
      
      <div className="relative flex flex-col items-center">
        <div className="how-it-works-circle mb-16">
          {steps[current].icon}
        </div>
        
        <h3 className="how-it-works-step-title mt-6">{steps[current].title}</h3>
        <p className="text-lg text-visa-gray-800 text-center max-w-md font-medium mb-10">{steps[current].description}</p>
        
        <div className="flex gap-6 mt-4">
          <button onClick={prev} className="nav-button">
            <FaChevronLeft size={24} />
          </button>
          <button onClick={next} className="nav-button">
            <FaChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 