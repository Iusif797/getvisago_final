import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaIdCard, FaUser, FaBriefcase, FaCreditCard, FaChevronLeft, FaChevronRight, FaArrowRight, FaClock, FaCalendarAlt, FaPlaneDeparture } from 'react-icons/fa';
import sriLankaImage from '../assets/Shrilanka.JPG'; // Изображение Шри-Ланки
import buttonGetVisa from '../assets/button_getvisa.png';
import handRightSideIcon from '../assets/hand_rightside.svg';
import touristIcon from '../assets/simple-3d-icon-of-a-tourist--blender-style--clean-.png';
import bannerSA1 from '../assets/bannerSA1.png'; // Placeholder
import bannerSA2 from '../assets/bannerSA2.png'; // Placeholder
import useWindowSize from '../hooks/useWindowSize';
import Reviews from '../components/Reviews/Reviews';
import FAQ from '../components/FAQ/FAQ';
import Footer from '../components/Footer/Footer';

const SriLankaVisa = () => {
  const { width } = useWindowSize();
  const isDesktop = width >= 1024;

  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      image: bannerSA1,
      title: "Discover the pearl of the Indian Ocean, Sri Lanka.",
      date: "27 May, 2025"
    },
    {
      id: 2,
      image: bannerSA2,
      title: "Ancient temples, lush tea plantations, and golden beaches await.",
      date: "27 May, 2025"
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="saudi-visa-page bg-gray-50">
      {/* Hero Section */}
      <div className="relative">
        <div className="h-80 lg:h-96">
          <img
            src={sriLankaImage}
            alt="Sri Lanka"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8 -mt-32 sm:-mt-40">
          <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md mx-auto flex flex-col">
            <h1 className="text-3xl lg:text-4xl font-bold mb-6 text-center">
              <span className="bg-gradient-to-r from-[#00B89F] to-[#00D6A9] bg-clip-text text-transparent">Visa to Sri Lanka </span>
              <span className="bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] bg-clip-text text-transparent">(ETA)</span>
            </h1>
            <div className="space-y-4 mb-6">
              <div className="flex space-x-4">
                <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-3 text-center flex-1">
                  <p className="text-gray-500 text-sm mb-1">Approval:</p>
                  <p className="text-gray-900 font-bold text-base">1-2 days</p>
                </div>
                <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-3 text-center flex-1">
                  <p className="text-gray-500 text-sm mb-1">Valid for:</p>
                  <p className="text-gray-900 font-bold text-base">180 days after issued</p>
                </div>
              </div>
              <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-3 text-center w-full">
                <p className="text-gray-500 text-sm mb-1">Cost:</p>
                <p className="text-gray-900 font-bold text-base">From 1 ₹</p>
              </div>
            </div>
            <Link
              to="/get-visa/sri-lanka"
              className="flex items-center justify-center w-full bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white font-bold text-base py-4 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              APPLY NOW <FaPlaneDeparture className="ml-2" size={18} />
            </Link>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-4 mt-8 w-full max-w-md mx-auto flex items-center gap-4" style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}>
            <img src={handRightSideIcon} alt="Hand pointing" className="w-10 h-10 flex-shrink-0" />
            <p className="text-gray-700 text-xs font-medium leading-relaxed">
              GetVisaGo Ltd — your independent private agency for fast and secure Sri Lanka e-Visa (ETA) processing. Apply fully online in minutes, without embassy visits or paperwork hassle. Our single transparent fee covers both our professional service (document check, secure submission, and 24/7 support) and the official government visa cost — no extra payments required. We are not affiliated with the Sri Lanka government; we assist you to get your visa easily and stress-free.
            </p>
          </div>
        </div>
      </div>

      {/* Visa Type Selection Section */}
      <div className="bg-gray-50 py-12">
        <div className="w-full max-w-md mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-[#00B89F] to-[#00D6A9] bg-clip-text text-transparent">Select visa </span>
            <span className="bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] bg-clip-text text-transparent">type</span>
          </h2>
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-purple-600">Tourist ETA Double entry</h3>
                <img src={touristIcon} alt="Tourist ETA" className="w-12 h-12 object-contain" />
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Validity:</span>
                  <span className="font-semibold text-gray-800">180 days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Stay per visit:</span>
                  <span className="font-semibold text-gray-800">30 days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Government fee:</span>
                  <span className="font-semibold text-gray-800">1 ₹</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Service fee:</span>
                  <span className="font-semibold text-gray-800">2290 ₹</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-800">Rush (6hours):</span>
                  <span className="font-semibold text-gray-800">+ 2000 ₹</span>
                </div>
              </div>
              <Link to="/get-visa/sri-lanka" className="block w-full mt-6 bg-white border-2 border-purple-600 text-purple-600 py-3 rounded-full font-bold text-center text-lg hover:bg-purple-50 transition-all duration-300">
                APPLY NOW
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Discover Section */}
      <div className="bg-white py-12 lg:py-16">
        <div className="w-full max-w-[1400px] mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#00BFA5] mb-10">
            Discover Sri Lanka
          </h2>
          {isDesktop && (
            <div className="flex justify-between items-center mb-8">
              <div className="flex space-x-2">
                {slides.map((_, index) => (
                  <button key={index} onClick={() => setCurrentSlide(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-[#7950ED]' : 'bg-[#D1C4E9]'}`} aria-label={`Go to slide ${index + 1}`} />
                ))}
              </div>
              <div className="flex space-x-3">
                <button onClick={prevSlide} className="w-10 h-10 bg-[#7950ED] rounded-full flex items-center justify-center text-white shadow-md hover:bg-[#6A40E3] transition-all duration-300" aria-label="Previous slide">
                  <FaChevronLeft size={18} />
                </button>
                <button onClick={nextSlide} className="w-10 h-10 bg-[#7950ED] rounded-full flex items-center justify-center text-white shadow-md hover:bg-[#6A40E3] transition-all duration-300" aria-label="Next slide">
                  <FaChevronRight size={18} />
                </button>
              </div>
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {slides.map((slide, index) => (
              <div key={slide.id} className={`transition-all duration-500 ${isDesktop || index === currentSlide ? 'block' : 'hidden'}`}>
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="relative">
                    <img src={slide.image} alt={`Sri Lanka - ${slide.id}`} className="w-full h-64 object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">{slide.title}</h3>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 text-sm">{slide.date}</span>
                      <a href="#" className="text-[#7950ED] font-semibold hover:underline">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {!isDesktop && (
            <div className="flex justify-center mt-8 space-x-3">
              <button onClick={prevSlide} className="w-10 h-10 bg-[#7950ED] rounded-full flex items-center justify-center text-white shadow-md" aria-label="Previous slide">
                <FaChevronLeft size={18} />
              </button>
              <button onClick={nextSlide} className="w-10 h-10 bg-[#7950ED] rounded-full flex items-center justify-center text-white shadow-md" aria-label="Next slide">
                <FaChevronRight size={18} />
              </button>
            </div>
          )}
        </div>
      </div>
      <Reviews />
      <FAQ />
      <Footer />
    </div>
  );
};

export default SriLankaVisa; 