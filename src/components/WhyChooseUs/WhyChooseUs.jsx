import React from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import DesktopWhyChooseUs from './DesktopWhyChooseUs';

// Импортируем иконки из ассетов
import icon1 from '../../assets/icon1.png';
import icon2 from '../../assets/icon2.png';
import icon3 from '../../assets/icon3.png';
import icon4 from '../../assets/icon4.png';

const WhyChooseUs = () => {
  const { width } = useWindowSize();
  
  if (width >= 1024) {
    return <DesktopWhyChooseUs />;
  }
  
  // Данные для мобильных карточек точно по макету
  const mobileFeatures = [
    { 
      icon: icon1, 
      title: "Fast Processing", 
      bgColor: "bg-white", 
      textColor: "text-black",
      shadowColor: "shadow-[0_4px_12px_rgba(0,191,165,0.15)]"
    },
    { 
      icon: icon2, 
      title: "Simple Application", 
      bgColor: "bg-[#00BFA5]", 
      textColor: "text-white",
      shadowColor: "shadow-[0_4px_12px_rgba(0,191,165,0.3)]"
    },
    { 
      icon: icon3, 
      title: "Refund Guarantee", 
      bgColor: "bg-white", 
      textColor: "text-black",
      shadowColor: "shadow-[0_4px_12px_rgba(0,191,165,0.15)]"
    },
    { 
      icon: icon4, 
      title: "Customer Support", 
      bgColor: "bg-[#00BFA5]", 
      textColor: "text-white",
      shadowColor: "shadow-[0_4px_12px_rgba(0,191,165,0.3)]"
    }
  ];
  
  return (
    <section className="w-full py-12 bg-[#f5f5f5] relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-[#00BFA5] opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#00BFA5] opacity-5 rounded-full translate-x-1/2 translate-y-1/2"></div>
      
      <div className="w-full max-w-[1400px] mx-auto px-5 relative z-10">
        <h2 className="text-[#00BFA5] text-3xl font-bold mb-8 text-center">
          Why Choose Us
        </h2>
        
        <div className="flex flex-col items-center gap-4">
          {mobileFeatures.map((feature, index) => (
            <div 
              key={index} 
              className={`w-full flex items-center rounded-full py-3.5 px-5 ${feature.bgColor} ${feature.shadowColor} transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg`}
            >
              <div className="w-12 h-12 flex-shrink-0 mr-4 flex items-center justify-center">
                <img 
                  src={feature.icon} 
                  alt={feature.title} 
                  className="w-full h-full object-contain" 
                  style={{ imageRendering: 'crisp-edges' }}
                />
              </div>
              <span className={`font-bold text-lg ${feature.textColor}`}>{feature.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 