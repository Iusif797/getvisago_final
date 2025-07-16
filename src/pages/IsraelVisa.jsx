import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight, FaArrowRight, FaCreditCard } from 'react-icons/fa';
import israelImage from '../assets/Israel_VisaPageBanner.JPG';
import touristIcon from '../assets/tourist--blender-style.svg';
import bannerSA1 from '../assets/bannerSA1.png';
import bannerSA2 from '../assets/bannerSA2.png';
import useWindowSize from '../hooks/useWindowSize';
import Reviews from '../components/Reviews/Reviews';
import FAQ from '../components/FAQ/FAQ';
import Footer from '../components/Footer/Footer';

const IsraelVisa = () => {
  const { width } = useWindowSize();
  const isDesktop = width >= 1024;

  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { id: 1, image: bannerSA1, title: "Discover the vibrant culture and history of Israel.", date: "28 May, 2025" },
    { id: 2, image: bannerSA2, title: "Explore ancient sites and modern cities.", date: "29 May, 2025" }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="pt-8 pb-12">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="w-full lg:w-1/2">
              <img
                src={israelImage}
                alt="Israel Skyline"
                className="w-full h-auto rounded-2xl shadow-lg object-cover aspect-[4/3]"
              />
            </div>

            <div className="w-full lg:w-1/2">
              <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
                <span className="bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">Visa to Israel</span>
                <span className="text-gray-400 block sm:inline text-3xl sm:text-4xl font-medium mt-1"> e-Visa-B2</span>
              </h1>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="bg-white p-4 rounded-xl shadow-md text-center border">
                  <p className="text-gray-500 text-sm">Cost:</p>
                  <p className="text-gray-800 font-bold text-lg">₹ 5112</p>
                </div>

                <div className="bg-white p-4 rounded-xl shadow-md text-center border">
                  <p className="text-gray-500 text-sm">Approval:</p>
                  <p className="text-gray-800 font-bold text-lg">3-10 days</p>
                </div>

                <div className="bg-white p-4 rounded-xl shadow-md text-center border">
                  <p className="text-gray-500 text-sm">Valid for:</p>
                  <p className="text-gray-800 font-bold text-lg">from 90 days</p>
                </div>
              </div>

              <p className="text-gray-600 text-base mb-8">
                GetVisaGo Ltd — your independent private agency for fast and secure Israel e-Visa-B2 processing. Apply fully online in minutes, without embassy visits or paperwork hassle. Our single transparent fee covers both our professional service (document check, secure submission, and 24/7 support) and the official government visa cost — no extra payments required. We are not affiliated with the Israel government; we assist you to get your visa easily and stress-free.
              </p>

              <Link to="/client-data" className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-3 px-10 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 self-start">
                APPLY NOW
                <FaCreditCard size={20} />
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Visa Type Selection Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-10 text-gray-800">
            Select Visa Type
          </h2>

          <div className="flex justify-center">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-full max-w-md border border-gray-200 transform hover:scale-105 transition-transform duration-300">
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">e-Visa-B2</h3>
                  <img src={touristIcon} alt="tourist icon" className="w-14 h-14" />
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-600">Validity:</span>
                    <span className="font-semibold text-gray-800">90 days</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-600">Stay per visit:</span>
                    <span className="font-semibold text-gray-800">90 days</span>
                  </div>
                  <div className="pt-2">
                    <span className="text-gray-600">Government fees: <span className="font-semibold text-gray-800">2 530 ₹</span> <br /> Service fee: <span className="font-semibold text-gray-800">2 582 ₹</span></span>
                  </div>
                </div>

                <Link to="/client-data" className="block w-full bg-white border-2 border-purple-600 text-purple-600 py-3 rounded-full font-bold text-lg hover:bg-purple-50 transition-all duration-300 text-center">
                  APPLY NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discover Israel Section */}
      <section className="bg-white py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
              Discover Israel
            </h2>
            <div className="hidden sm:flex space-x-3">
              <button onClick={prevSlide} className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white shadow-md hover:bg-purple-700 transition-all duration-300" aria-label="Previous slide">
                <FaChevronLeft size={18} />
              </button>
              <button onClick={nextSlide} className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white shadow-md hover:bg-purple-700 transition-all duration-300" aria-label="Next slide">
                <FaChevronRight size={18} />
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * (100 / (isDesktop ? 2 : 1))}%)` }}>
              {slides.map((slide) => (
                <div key={slide.id} className="w-full lg:w-1/2 flex-shrink-0 px-2">
                  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                    <img src={slide.image} alt={`Israel - ${slide.id}`} className="w-full h-64 object-cover" />
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4 flex-grow">{slide.title}</h3>
                      <div className="flex justify-between items-center mt-auto">
                        <span className="text-gray-500 text-sm">{slide.date}</span>
                        <a href="#" className="text-purple-600 font-medium flex items-center hover:text-purple-700 transition-colors">
                          Read more <FaArrowRight className="ml-2" size={12} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/* Cloned slides for seamless loop on mobile */}
              {!isDesktop && slides.map((slide) => (
                <div key={`${slide.id}-clone`} className="w-full lg:w-1/2 flex-shrink-0 px-2">
                  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                    <img src={slide.image} alt={`Israel - ${slide.id}`} className="w-full h-64 object-cover" />
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4 flex-grow">{slide.title}</h3>
                      <div className="flex justify-between items-center mt-auto">
                        <span className="text-gray-500 text-sm">{slide.date}</span>
                        <a href="#" className="text-purple-600 font-medium flex items-center hover:text-purple-700 transition-colors">
                          Read more <FaArrowRight className="ml-2" size={12} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex sm:hidden justify-center mt-6 space-x-2">
            {slides.map((_, index) => (
              <button key={index} onClick={() => setCurrentSlide(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide % slides.length === index ? 'bg-purple-600' : 'bg-gray-300'}`} aria-label={`Go to slide ${index + 1}`} />
            ))}
          </div>
        </div>
      </section>

      <Reviews />
      <FAQ />
      <Footer />
    </div>
  );
};

export default IsraelVisa; 