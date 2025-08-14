import React from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import DesktopWhyChooseUs from './DesktopWhyChooseUs';

// Импортируем PNG иконки высокого качества
import icon1 from '../../assets/icon1_4х.png';
import icon2 from '../../assets/icon2_newformat.png';
import icon3 from '../../assets/icon3_newformat.png';
import icon4 from '../../assets/icon4_newformat.png';

const WhyChooseUs = () => {
  const { width } = useWindowSize();

  if (width >= 1024) {
    return <DesktopWhyChooseUs />;
  }

  // Данные для мобильных карточек с PNG иконками, как на втором скриншоте
  const mobileFeatures = [
    {
      icon: icon1,
      title: "Fast Processing",
      bgColor: "bg-white",
      textColor: "text-black",
      shadowColor: "shadow-md",
      borderColor: "border border-[#8A3FFC]",
      hoverEffect: "hover:shadow-lg hover:border-[#A56EFF]"
    },
    {
      icon: icon2,
      title: "Simple Application",
      bgColor: "bg-[#00BFA5]",
      textColor: "text-white",
      shadowColor: "shadow-md",
      hoverEffect: "hover:shadow-lg hover:bg-[#00D9BC]"
    },
    {
      icon: icon3,
      title: "Refund Guarantee",
      bgColor: "bg-white",
      textColor: "text-black",
      shadowColor: "shadow-md",
      borderColor: "border border-[#8A3FFC]",
      hoverEffect: "hover:shadow-lg hover:border-[#A56EFF]"
    },
    {
      icon: icon4,
      title: "Customer Support",
      bgColor: "bg-[#00BFA5]",
      textColor: "text-white",
      shadowColor: "shadow-md",
      hoverEffect: "hover:shadow-lg hover:bg-[#00D9BC]"
    }
  ];

  return (
    <section className="w-full py-12 bg-[#F6F7FA]">
      <div className="w-full max-w-6xl mx-auto px-5 lg:px-12 xl:px-16">
        <h2 className="text-[#00BFA5] text-3xl font-bold mb-8 text-center">
          Why Choose Us
        </h2>

        <div className="flex flex-col items-center gap-4">
          {mobileFeatures.map((feature, index) => (
            <div
              key={index}
              className={`w-full flex items-center rounded-full py-3 px-5 ${feature.bgColor} ${feature.shadowColor} ${feature.borderColor || ''} ${feature.hoverEffect} transition-all duration-300 hover:translate-y-[-2px]`}
            >
              <div className="w-10 h-10 flex-shrink-0 mr-4 flex items-center justify-center">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-10 h-10 object-contain hover:scale-110 transition-transform duration-300"
                  loading="lazy"
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