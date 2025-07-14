import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaIdCard, FaUser, FaBriefcase, FaCreditCard, FaChevronLeft, FaChevronRight, FaArrowRight, FaClock, FaCalendarAlt, FaPlaneDeparture } from 'react-icons/fa';
import saudiArabiaImage from '../assets/saudi_arabia_visa.png';
import buttonGetVisa from '../assets/button_getvisa.png';
import handRightSideIcon from '../assets/hand_rightside.svg'; // Новая иконка
import bannerSA1 from '../assets/bannerSA1.png';
import bannerSA2 from '../assets/bannerSA2.png';
import useWindowSize from '../hooks/useWindowSize';
import Reviews from '../components/Reviews/Reviews';
import FAQ from '../components/FAQ/FAQ';
import Footer from '../components/Footer/Footer';

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
    <div className="saudi-visa-page bg-gray-50">
      {/* Hero Section - СТРОГО ПО МАКЕТУ */}
      <div className="relative">
        {/* Background Image */}
        <div className="h-80 lg:h-96">
          <img
            src={saudiArabiaImage}
            alt="Saudi Arabia"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="relative px-4 sm:px-6 lg:px-8 -mt-32 sm:-mt-40">
          {/* Main Info Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md mx-auto flex flex-col">
            <h1 className="text-3xl lg:text-4xl font-bold mb-6 text-center">
              <span className="bg-gradient-to-r from-[#00B89F] to-[#00D6A9] bg-clip-text text-transparent">Visa to </span>
              <span className="bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] bg-clip-text text-transparent">Saudi Arabia</span>
            </h1>

            <div className="space-y-4 mb-6">
              <div className="flex space-x-4">
                <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-3 text-center flex-1">
                  <p className="text-gray-500 text-sm mb-1">Approval:</p>
                  <p className="text-gray-900 font-bold text-base">1–10 days</p>
                </div>
                <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-3 text-center flex-1">
                  <p className="text-gray-500 text-sm mb-1">Valid for:</p>
                  <p className="text-gray-900 font-bold text-base">from 90 days</p>
                </div>
              </div>
              <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-3 text-center w-full">
                <p className="text-gray-500 text-sm mb-1">Cost:</p>
                <p className="text-gray-900 font-bold text-base">From 14 270 ₹</p>
              </div>
            </div>

            <Link
              to="/visa-application/saudi-arabia"
              className="flex items-center justify-center w-full bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white font-bold text-base py-4 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              APPLY VISA <FaPlaneDeparture className="ml-2" size={18} />
            </Link>
          </div>

          {/* Disclaimer Card */}
          <div className="bg-white rounded-2xl shadow-lg p-4 mt-8 w-full max-w-md mx-auto flex items-center gap-4" style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}>
            <img
              src={handRightSideIcon}
              alt="Hand pointing"
              className="w-10 h-10 flex-shrink-0"
            />
            <p className="text-gray-700 text-xs font-medium leading-relaxed">
              GetVisaGo Ltd is an independent agency offering fast and secure Saudi Arabia e-Visa processing. Apply fully online — no embassy visits or paperwork. One clear fee includes the official visa cost and our services: document check, secure submission, and 24/7 support. We are not a government body but help you get your visa easily and hassle-free.
            </p>
          </div>
        </div>
      </div>

      {/* Visa Type Selection Section - Both Desktop and Mobile */}
      <div className="bg-gray-50 pt-12 pb-12">
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

                <Link to="/visa-application/saudi-arabia" className="block w-full bg-white border-2 border-[#7950ED] text-[#7950ED] py-3 rounded-full font-bold text-lg hover:bg-[#7950ED]/[0.05] transition-all duration-300 text-center">
                  BUY NOW
                </Link>
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

                <Link to="/visa-application/saudi-arabia" className="block w-full bg-white border-2 border-[#7950ED] text-[#7950ED] py-3 rounded-full font-bold text-lg hover:bg-[#7950ED]/[0.05] transition-all duration-300 text-center">
                  BUY NOW
                </Link>
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
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-[#7950ED]' : 'bg-[#D1C4E9]'
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
                className={`transition-all duration-500 ${isDesktop || index === currentSlide ? 'block' : 'hidden'
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
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-[#7950ED]' : 'bg-[#D1C4E9]'
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
                <path d="M19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM7 10H9V17H7V10ZM11 7H13V17H11V7ZM15 13H17V17H15V13Z" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <Reviews />

      {/* FAQ Section */}
      <FAQ />

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default SaudiArabiaVisa; 