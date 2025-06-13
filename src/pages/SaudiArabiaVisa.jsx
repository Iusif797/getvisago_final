import React, { useState, useEffect } from 'react';
import { FaIdCard, FaUser, FaBriefcase, FaCreditCard, FaChevronLeft, FaChevronRight, FaArrowRight } from 'react-icons/fa';
import saudiArabia from '../assets/saudi-arabia.png';
import bannerSA1 from '../assets/bannerSA1.png';
import bannerSA2 from '../assets/bannerSA2.png';
import useWindowSize from '../hooks/useWindowSize';

const SaudiArabiaVisa = () => {
  const { width } = useWindowSize();
  const isDesktop = width >= 1024;
  
  // Состояние для карусели
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      image: bannerSA1,
      title: "Saudi Arabia defines itself as a sovereign Arab Islamic state.",
      date: "27 May, 2025"
    },
    {
      id: 2,
      image: bannerSA2,
      title: "Saudi Arabia defines itself as a sovereign Arab Islamic state.",
      date: "27 May, 2025"
    }
  ];
  
  // Функция для перехода к следующему слайду
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };
  
  // Функция для перехода к предыдущему слайду
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };
  
  // Автоматическая смена слайдов каждые 5 секунд
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="saudi-visa-page">
      {/* Desktop Version */}
      {isDesktop ? (
        <div className="pt-8 pb-16">
          <div className="w-full max-w-[1400px] mx-auto px-4 lg:px-8">
            <div className="flex flex-wrap items-center">
              {/* Left Column - Image */}
              <div className="w-full lg:w-1/2 pr-0 lg:pr-12">
                <img 
                  src={saudiArabia} 
                  alt="Saudi Arabia Skyline" 
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
              
              {/* Right Column - Content */}
              <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex flex-col justify-center">
                <h1 className="text-5xl font-bold bg-gradient-to-r from-[#00BFA5] to-[#7950ED] bg-clip-text text-transparent mb-6">
                  Visa to Saudi Arabia
                </h1>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <p className="text-gray-600 text-sm">Cost:</p>
                    <p className="text-gray-900 font-bold text-xl">from $500</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <p className="text-gray-600 text-sm">Approval:</p>
                    <p className="text-gray-900 font-bold text-xl">1-3 days</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <p className="text-gray-600 text-sm">Valid for:</p>
                    <p className="text-gray-900 font-bold text-xl">180 days</p>
                  </div>
                </div>
                
                <p className="text-gray-700 text-lg mb-8">
                  Obtaining an official visa to Saudi Arabia online in a matter of minutes—without visiting the embassy and unnecessary bureaucracy. 24/7 support and guaranteed results will make your journey smooth.
                </p>
                
                <button className="bg-[#7950ED] text-white py-4 px-12 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#6A40E3] flex items-center justify-center gap-2">
                  GET VISA
                  <FaCreditCard size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Mobile Version */
        <div className="pt-6 pb-12">
          <div className="w-full px-4">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-[#00BFA5] to-[#7950ED] bg-clip-text text-transparent mb-4 text-center">
              Visa to Saudi Arabia
            </h1>
            
            <div className="mb-6">
              <img 
                src={saudiArabia} 
                alt="Saudi Arabia Skyline" 
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <p className="text-gray-600 text-xs">Cost:</p>
                <p className="text-gray-900 font-bold text-sm">from $500</p>
              </div>
              
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <p className="text-gray-600 text-xs">Approval:</p>
                <p className="text-gray-900 font-bold text-sm">1-3 days</p>
              </div>
              
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <p className="text-gray-600 text-xs">Valid for:</p>
                <p className="text-gray-900 font-bold text-sm">180 days</p>
              </div>
            </div>
            
            <p className="text-gray-700 text-base mb-6">
              Obtaining an official visa to Saudi Arabia online in a matter of minutes—without visiting the embassy and unnecessary bureaucracy. 24/7 support and guaranteed results will make your journey smooth.
            </p>
            
            <button className="w-full bg-[#7950ED] text-white py-3 px-6 rounded-full font-bold text-base shadow-md hover:shadow-lg transition-all duration-300 hover:bg-[#6A40E3] flex items-center justify-center gap-2">
              GET VISA
              <FaCreditCard size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Visa Type Selection Section - Both Desktop and Mobile */}
      <div className="bg-gray-50 py-12">
        <div className="w-full max-w-[1400px] mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#00BFA5] mb-10 text-center">
            Select visa type
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Tourist Visa Card */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-[#7950ED]">Tourist visa</h3>
                  <div className="bg-[#E0F2F1] p-3 rounded-lg">
                    <FaUser className="text-[#00BFA5] text-2xl" />
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Validity:</span>
                    <span className="font-semibold">1 year, multiple entry</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Stay per visit:</span>
                    <span className="font-semibold">up to 90 days</span>
                  </div>
                </div>
                
                <button className="w-full bg-white border-2 border-[#7950ED] text-[#7950ED] py-3 rounded-full font-bold text-lg hover:bg-[#7950ED]/[0.05] transition-all duration-300">
                  BUY NOW
                </button>
              </div>
            </div>
            
            {/* Business Visa Card */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-[#7950ED]">Business Visa</h3>
                  <div className="bg-[#E0F2F1] p-3 rounded-lg">
                    <FaBriefcase className="text-[#00BFA5] text-2xl" />
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Validity:</span>
                    <span className="font-semibold">1 year, multiple entry</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Stay per visit:</span>
                    <span className="font-semibold">up to 90 days</span>
                  </div>
                </div>
                
                <button className="w-full bg-white border-2 border-[#7950ED] text-[#7950ED] py-3 rounded-full font-bold text-lg hover:bg-[#7950ED]/[0.05] transition-all duration-300">
                  BUY NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Discover Saudi Arabia Section - Both Desktop and Mobile */}
      <div className="bg-white py-12 lg:py-16">
        <div className="w-full max-w-[1400px] mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#00BFA5] mb-10">
            Discover Saudi Arabia
          </h2>
          
          {/* Carousel Navigation - Desktop */}
          {isDesktop && (
            <div className="flex justify-between items-center mb-8">
              <div className="flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentSlide === index ? 'bg-[#7950ED]' : 'bg-[#D1C4E9]'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              
              <div className="flex space-x-3">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 bg-[#7950ED] rounded-full flex items-center justify-center text-white shadow-md hover:bg-[#6A40E3] transition-all duration-300"
                  aria-label="Previous slide"
                >
                  <FaChevronLeft size={18} />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 bg-[#7950ED] rounded-full flex items-center justify-center text-white shadow-md hover:bg-[#6A40E3] transition-all duration-300"
                  aria-label="Next slide"
                >
                  <FaChevronRight size={18} />
                </button>
              </div>
            </div>
          )}
          
          {/* Carousel Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`transition-all duration-500 ${
                  isDesktop || index === currentSlide ? 'block' : 'hidden'
                }`}
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="relative">
                    <img
                      src={slide.image}
                      alt={`Saudi Arabia - ${slide.id}`}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      {slide.title}
                    </h3>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 text-sm">{slide.date}</span>
                      <a
                        href="#"
                        className="text-[#7950ED] font-medium flex items-center hover:text-[#6A40E3] transition-colors"
                      >
                        Read more <FaArrowRight className="ml-2" size={12} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Carousel Navigation - Mobile */}
          {!isDesktop && (
            <div className="flex justify-center mt-6">
              <div className="flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentSlide === index ? 'bg-[#7950ED]' : 'bg-[#D1C4E9]'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          )}
          
          {/* Blog Link Button */}
          <div className="flex justify-center mt-10">
            <a
              href="#"
              className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#00BFA5] text-[#00BFA5] rounded-full font-medium hover:bg-[#00BFA5] hover:text-white transition-all duration-300"
            >
              CHECK OUT OUR BLOG
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM7 10H9V17H7V10ZM11 7H13V17H11V7ZM15 13H17V17H15V13Z" fill="currentColor"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaudiArabiaVisa; 