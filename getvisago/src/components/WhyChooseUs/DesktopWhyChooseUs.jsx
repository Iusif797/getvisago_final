import React from 'react';

// Импортируем PNG иконки высокого качества
import icon1 from '../../assets/icon1_4х.png';
import icon2 from '../../assets/icon2_newformat.png';
import icon3 from '../../assets/icon3_newformat.png';
import icon4 from '../../assets/icon4_newformat.png';

const DesktopWhyChooseUs = () => {
  return (
    <section className="w-full py-16 bg-[#F6F7FA]">
      <div className="w-full max-w-[1400px] mx-auto px-4 lg:px-8">
        <h2 className="text-[#00BFA5] text-4xl font-bold mb-12 text-center">
          Why Choose Us
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Первый ряд - левая колонка */}
          <div className="flex justify-center">
            <div className="w-full">
              <div className="w-full flex items-center rounded-full py-4 px-6 bg-[#00BFA5] shadow-md hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300">
                <div className="w-12 h-12 flex-shrink-0 mr-5 flex items-center justify-center">
                  <img 
                    src={icon2} 
                    alt="Simple Application" 
                    className="w-12 h-12 object-contain hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <span className="font-bold text-xl text-white">Simple Application</span>
              </div>
            </div>
          </div>
          
          {/* Первый ряд - правая колонка */}
          <div className="flex justify-center">
            <div className="w-full">
              <div className="w-full flex items-center rounded-full py-4 px-6 bg-[#8A3FFC] shadow-md hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300">
                <div className="w-12 h-12 flex-shrink-0 mr-5 flex items-center justify-center">
                  <img 
                    src={icon1} 
                    alt="Fast Processing" 
                    className="w-12 h-12 object-contain hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <span className="font-bold text-xl text-white">Fast Processing</span>
              </div>
            </div>
          </div>
          
          {/* Второй ряд - левая колонка */}
          <div className="flex justify-center">
            <div className="w-full">
              <div className="w-full flex items-center rounded-full py-4 px-6 bg-[#00BFA5] shadow-md hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300">
                <div className="w-12 h-12 flex-shrink-0 mr-5 flex items-center justify-center">
                  <img 
                    src={icon4} 
                    alt="Customer Support" 
                    className="w-12 h-12 object-contain hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <span className="font-bold text-xl text-white">Customer Support</span>
              </div>
            </div>
          </div>
          
          {/* Второй ряд - правая колонка */}
          <div className="flex justify-center">
            <div className="w-full">
              <div className="w-full flex items-center rounded-full py-4 px-6 bg-[#8A3FFC] shadow-md hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300">
                <div className="w-12 h-12 flex-shrink-0 mr-5 flex items-center justify-center">
                  <img 
                    src={icon3} 
                    alt="Refund Guarantee" 
                    className="w-12 h-12 object-contain hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <span className="font-bold text-xl text-white">Refund Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesktopWhyChooseUs; 