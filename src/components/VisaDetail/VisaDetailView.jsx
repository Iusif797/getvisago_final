import React, { useState, useEffect } from 'react';
import { FaShieldAlt, FaPassport, FaMoneyBillWave, FaCalendarAlt, FaPlane, FaCheck, FaInfoCircle, FaClock, FaMapMarkerAlt, FaRegClock, FaRegCalendarAlt, FaUsers } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { MdOutlineVerified, MdStar } from 'react-icons/md';

// Import images
import image1 from '../../assets/IMG_6426.JPG';
import image2 from '../../assets/IMG_6427.JPG';
import image3 from '../../assets/IMG_6428.JPG';
import dubaiImage from '../../assets/dubai_getvisago.JPG';

// Import feature icons
import icon1 from '../../assets/icon1.png';
import icon2 from '../../assets/icon2.png';
import icon3 from '../../assets/icon3.png';
import icon4 from '../../assets/icon4.png';

const VisaDetailView = () => {
  const images = [image1, image2, image3, dubaiImage];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  const goToPrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const goToSlide = (slideIndex) => {
    if (isTransitioning || slideIndex === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(slideIndex);
  };

  // Reset transition flag after animation completes
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Auto-slide images
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const visaFeatures = [
    { icon: <FaPassport className="text-[#00BFA5]" />, title: "E-Visa", description: "Get your visa online without visiting consulate" },
    { icon: <FaClock className="text-[#00BFA5]" />, title: "Fast Processing", description: "Processing within 24-72 hours" },
    { icon: <FaCheck className="text-[#00BFA5]" />, title: "Simple Application", description: "Minimal documents and easy form" },
    { icon: <FaMoneyBillWave className="text-[#00BFA5]" />, title: "Money-Back Guarantee", description: "Full refund if visa is rejected" }
  ];

  return (
    <div className="flex flex-col bg-white">
      {/* Image slider area */}
      <div className="relative w-full h-[45vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
        {/* Slider */}
        <div className="relative w-full h-full">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <img
                src={image}
                alt={`Dubai Visa Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient for better text visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
            </div>
          ))}
        </div>

        {/* Navigation buttons - more elegant and subtle */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/30 transition-all z-20 shadow-lg"
          aria-label="Previous image"
        >
          <IoIosArrowBack size={24} />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/30 transition-all z-20 shadow-lg"
          aria-label="Next image"
        >
          <IoIosArrowForward size={24} />
        </button>

        {/* Slide indicators - more elegant */}
        <div className="absolute bottom-4 left-0 right-0 z-30">
          <div className="flex justify-center space-x-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentIndex 
                    ? 'bg-white w-8 shadow-lg' 
                    : 'bg-white/40 hover:bg-white/70'
                }`}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Image counter */}
        <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-medium z-20">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Title section - more elegant with gradient */}
      <div className="bg-gradient-to-r from-[#00BFA5] to-[#009688] text-white p-6 shadow-md">
        <div className="max-w-4xl mx-auto w-full">
          <div className="flex items-center">
            <img 
              src="https://flagcdn.com/w40/ae.png" 
              alt="UAE Flag" 
              className="h-8 mr-3 rounded shadow-md border-2 border-white/30" 
            />
            <h1 className="text-2xl md:text-3xl font-bold">Dubai Visa For Indians</h1>
            <div className="ml-auto bg-[#9B51E0] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg flex items-center">
              <MdStar className="mr-1" /> POPULAR
            </div>
          </div>
          <p className="text-white/90 text-sm mt-2 max-w-2xl">Explore magnificent Dubai with our tourist visa - fast processing and hassle-free application</p>
          
          {/* Quick info badges */}
          <div className="flex flex-wrap gap-3 mt-4">
            <div className="bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium flex items-center">
              <FaRegCalendarAlt className="mr-1.5" /> 30 Days Validity
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium flex items-center">
              <FaRegClock className="mr-1.5" /> 2-3 Days Processing
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium flex items-center">
              <FaUsers className="mr-1.5" /> 95% Approval Rate
            </div>
          </div>
        </div>
      </div>

      {/* Content section with tabs and info */}
      <div className="bg-white z-20 p-4 md:p-8 max-w-4xl mx-auto w-full">
        {/* Tabs - more elegant */}
        <div className="flex mb-8 gap-2 justify-center">
          <button 
            className={`py-2 px-8 rounded-full text-sm font-medium transition-all ${
              activeTab === 'all' 
                ? 'bg-[#00BFA5] text-white shadow-md' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setActiveTab('all')}
          >
            All
          </button>
          <button 
            className={`py-2 px-8 rounded-full text-sm font-medium transition-all ${
              activeTab === 'transit' 
                ? 'bg-[#00BFA5] text-white shadow-md' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setActiveTab('transit')}
          >
            Transit
          </button>
          <button 
            className={`py-2 px-8 rounded-full text-sm font-medium transition-all ${
              activeTab === 'business' 
                ? 'bg-[#00BFA5] text-white shadow-md' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setActiveTab('business')}
          >
            Business
          </button>
        </div>

        {/* Visa status banner - more elegant */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-[#00BFA5] to-[#009688] rounded-xl p-5 flex items-center text-white shadow-lg">
            <div className="bg-white/20 p-3 rounded-full mr-4">
              <FaShieldAlt className="text-white" size={24} />
            </div>
            <div>
              <div className="text-sm font-medium">Get Visa On</div>
              <div className="text-xl font-bold">30-06-2025 20:09</div>
            </div>
            <div className="ml-auto bg-[#9B51E0] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md flex items-center">
              <MdStar className="mr-1" /> POPULAR
            </div>
          </div>
        </div>

        {/* Visa features - desktop version */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          {visaFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="flex items-start p-5 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-all hover:bg-white border border-gray-100"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#00BFA5]/10 flex items-center justify-center mr-4 shadow-sm">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg">{feature.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Visa details - more elegant */}
        <div className="space-y-8">
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-5 flex items-center text-gray-800">
              <FaInfoCircle className="text-[#00BFA5] mr-3" />
              Visa Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-600">Type:</span>
                  <span className="font-medium text-gray-900">Tourist Visa</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-600">Processing Time:</span>
                  <span className="font-medium text-gray-900">2-3 Business Days</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-medium text-gray-900">30 Days</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-600">Entry:</span>
                  <span className="font-medium text-gray-900">Single</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-5 flex items-center text-gray-800">
              <FaPassport className="text-[#00BFA5] mr-3" />
              Required Documents
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#00BFA5] flex items-center justify-center mr-3 shadow-sm">
                  <MdOutlineVerified className="text-white" />
                </div>
                <span className="text-gray-700">Valid passport with at least 6 months validity</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#00BFA5] flex items-center justify-center mr-3 shadow-sm">
                  <MdOutlineVerified className="text-white" />
                </div>
                <span className="text-gray-700">Passport size photograph with white background</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#00BFA5] flex items-center justify-center mr-3 shadow-sm">
                  <MdOutlineVerified className="text-white" />
                </div>
                <span className="text-gray-700">Confirmed return flight tickets</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#00BFA5] flex items-center justify-center mr-3 shadow-sm">
                  <MdOutlineVerified className="text-white" />
                </div>
                <span className="text-gray-700">Hotel reservation or invitation letter</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-5 flex items-center text-gray-800">
              <FaPlane className="text-[#00BFA5] mr-3" />
              Travel Information
            </h3>
            <p className="text-gray-700 mb-5 leading-relaxed">
              Dubai is one of the world's most popular tourist destinations, known for its impressive skyscrapers, luxury shopping malls, and beautiful beaches. This visa allows you to visit all emirates of the UAE.
            </p>
            
            {/* Popular attractions */}
            <div className="mb-5">
              <h4 className="font-medium text-gray-800 mb-3">Popular Attractions:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-center bg-white p-3 rounded-lg border border-gray-100">
                  <FaMapMarkerAlt className="text-[#00BFA5] mr-2" />
                  <span className="text-sm text-gray-700">Burj Khalifa</span>
                </div>
                <div className="flex items-center bg-white p-3 rounded-lg border border-gray-100">
                  <FaMapMarkerAlt className="text-[#00BFA5] mr-2" />
                  <span className="text-sm text-gray-700">Dubai Mall</span>
                </div>
                <div className="flex items-center bg-white p-3 rounded-lg border border-gray-100">
                  <FaMapMarkerAlt className="text-[#00BFA5] mr-2" />
                  <span className="text-sm text-gray-700">Palm Jumeirah</span>
                </div>
                <div className="flex items-center bg-white p-3 rounded-lg border border-gray-100">
                  <FaMapMarkerAlt className="text-[#00BFA5] mr-2" />
                  <span className="text-sm text-gray-700">Dubai Marina</span>
                </div>
              </div>
            </div>
            
            <div className="bg-[#00BFA5]/10 p-4 rounded-lg border border-[#00BFA5]/20">
              <p className="text-sm text-gray-700 flex items-start">
                <FaInfoCircle className="text-[#00BFA5] mr-3 mt-0.5 flex-shrink-0" size={18} />
                <span>Visa is valid from the date of issue. We recommend applying 1-2 weeks before your planned trip.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Action buttons - more elegant with gradient */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
          <button className="w-full bg-gradient-to-r from-[#00BFA5] to-[#009688] text-white py-4 rounded-xl font-medium text-lg hover:shadow-lg transition-all flex items-center justify-center">
            <FaCheck className="mr-2" /> Apply Now
          </button>
          <button className="w-full bg-white border-2 border-[#00BFA5] text-[#00BFA5] py-4 rounded-xl font-medium text-lg hover:bg-[#00BFA5]/5 transition-all flex items-center justify-center">
            <FaInfoCircle className="mr-2" /> Check Requirements
          </button>
        </div>
      </div>
    </div>
  );
};

export default VisaDetailView; 