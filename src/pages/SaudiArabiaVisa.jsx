import React, { useState, useEffect } from 'react';
import { FaIdCard, FaUser, FaBriefcase, FaCreditCard, FaChevronLeft, FaChevronRight, FaArrowRight, FaPlus, FaMinus, FaPhone, FaEnvelope, FaComments, FaFacebook, FaTwitter, FaInstagram, FaCcVisa } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { BiUser } from 'react-icons/bi';
import saudiArabia from '../assets/saudi-arabia.png';
import bannerSA1 from '../assets/bannerSA1.png';
import bannerSA2 from '../assets/bannerSA2.png';
import useWindowSize from '../hooks/useWindowSize';
import mastercardSvg from '../assets/mastercard.svg';

// Данные для отзывов
const reviewsData = [
  {
    id: 1,
    name: 'Abdula',
    rating: 5,
    text: 'Amazing service! Got my Saudi Arabia visa quickly without any hassle. The support team was very responsive and helpful throughout the process.',
    date: '01.12.24',
    source: 'google',
  },
  {
    id: 2,
    name: 'Maria',
    rating: 5,
    text: 'Very satisfied with the Saudi Arabia visa service. Everything was clear and straightforward. Will definitely use again for my next trip!',
    date: '03.12.24',
    source: 'google',
    avatar: 'M',
  },
  {
    id: 3,
    name: 'John',
    rating: 4,
    text: 'Very good experience overall. The process for getting Saudi Arabia visa was straightforward and the customer service was excellent.',
    date: '05.12.24',
    source: 'google',
    avatar: 'J',
  },
  {
    id: 4,
    name: 'Elena',
    rating: 5,
    text: 'Fantastic service! Got my Saudi Arabia visa in record time. The website is so easy to navigate and the instructions were crystal clear.',
    date: '10.12.24',
    source: 'google',
  },
];

// Данные для FAQ
const faqItems = [
  {
    question: "How does the Saudi Arabia visa purchase process work?",
    answer: "Our Saudi Arabia visa purchase process is simple and user-friendly. First, select your visa type (Tourist or Business). Then, fill out the required information and upload necessary documents. After reviewing your application, proceed to payment. Once approved, you'll receive your visa electronically. Our customer support team is available throughout the process to assist you with any questions."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit and debit cards including Visa, Mastercard, and American Express. We also support PayPal, Apple Pay, and Google Pay for your convenience. All payments are processed through secure encrypted channels to ensure your financial information remains protected."
  },
  {
    question: "How long does it take to process Saudi Arabia visa application?",
    answer: "Processing times for Saudi Arabia visas typically takes 1-3 business days for standard processing, while expedited service can be completed within 24 hours in most cases. Specific processing times are displayed during the application process for each visa type."
  },
  {
    question: "What documents do I need for a Saudi Arabia visa?",
    answer: "For a Saudi Arabia visa, you'll need a valid passport with at least 6 months validity, a digital passport-sized photo with white background, confirmed hotel reservation, and a return flight ticket. For business visas, additional documents like invitation letters may be required."
  },
];

const SaudiArabiaVisa = () => {
  const { width } = useWindowSize();
  const isDesktop = width >= 1024;
  const isMobile = width < 1024;
  
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
  
  // Состояние для отзывов
  const [currentReviewPage, setCurrentReviewPage] = useState(0);
  const reviewsPerPage = isDesktop ? 3 : 1;
  const totalReviewPages = Math.ceil(reviewsData.length / reviewsPerPage);
  
  // Состояние для FAQ
  const [openQuestion, setOpenQuestion] = useState(null);
  
  // Функция для перехода к следующему слайду
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };
  
  // Функция для перехода к предыдущему слайду
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };
  
  // Функции для отзывов
  const prevReview = () => {
    setCurrentReviewPage((prev) => (prev - 1 + totalReviewPages) % totalReviewPages);
  };
  
  const nextReview = () => {
    setCurrentReviewPage((prev) => (prev + 1) % totalReviewPages);
  };
  
  const currentReviews = () => {
    const startIndex = currentReviewPage * reviewsPerPage;
    const endIndex = Math.min(startIndex + reviewsPerPage, reviewsData.length);
    return reviewsData.slice(startIndex, endIndex);
  };
  
  // Функция для переключения FAQ
  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };
  
  // Функция для рендеринга звезд рейтинга
  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <svg 
        key={index} 
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
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

      {/* Reviews Section */}
      <section className="w-full py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="w-full px-4 lg:px-8 max-w-[1400px] mx-auto relative">
          <div className="flex justify-between items-center mb-12">
            <h2 className={`text-4xl font-bold ${isDesktop ? 'mx-auto' : ''} bg-gradient-to-r from-emerald-500 to-violet-600 bg-clip-text text-transparent`}>
              Customer Reviews
            </h2>
            
            <div className={`flex space-x-4 ${isDesktop ? 'absolute right-4 lg:right-8' : 'ml-4'}`}>
              <button 
                onClick={prevReview} 
                className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center text-violet-600 shadow-md transition-all duration-300 hover:bg-violet-200 hover:scale-110"
                aria-label="Previous"
              >
                <FaChevronLeft size={18} />
              </button>
              <button 
                onClick={nextReview} 
                className="w-12 h-12 bg-violet-600 rounded-full flex items-center justify-center text-white shadow-md transition-all duration-300 hover:bg-violet-700 hover:scale-110"
                aria-label="Next"
              >
                <FaChevronRight size={18} />
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {currentReviews().map((review) => (
              <div 
                key={review.id} 
                className="bg-white rounded-2xl p-6 shadow-xl transition-all duration-300 hover:shadow-2xl hover:translate-y-[-5px] border border-gray-100 flex flex-col"
              >
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <div className="flex items-center mb-4 justify-center">
                      {review.avatar ? (
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-violet-500 to-emerald-400 flex items-center justify-center text-white font-bold mr-3 shadow-md">
                          {review.avatar}
                        </div>
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-violet-500 to-emerald-400 flex items-center justify-center text-white mr-3 shadow-md">
                          <BiUser size={22} />
                        </div>
                      )}
                      <h3 className="text-xl font-bold text-gray-900">{review.name}</h3>
                    </div>
                    <div className="flex mb-4 justify-center">
                      {renderStars(review.rating)}
                    </div>
                    <p className="text-gray-700 mb-6 line-clamp-4 text-center">
                      {review.text}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{review.date}</span>
                    {review.source === 'google' && (
                      <div className="flex items-center">
                        <span className="text-sm text-gray-500 mr-1">via</span>
                        <FcGoogle size={20} />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-12 space-x-2">
            {Array.from({ length: totalReviewPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReviewPage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentReviewPage === index 
                    ? 'bg-violet-600 transform scale-125' 
                    : index === currentReviewPage - 1 || index === currentReviewPage + 1 
                      ? 'bg-violet-300'
                      : 'bg-violet-200'
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-10 bg-gray-50">
        <div className="w-full max-w-[1400px] mx-auto px-4 lg:px-8 flex flex-col items-center">
          <h2 className="text-emerald-500 text-4xl font-bold mb-8 text-center">FAQ</h2>
          
          <div className={`${isDesktop ? 'grid grid-cols-2 gap-x-6 gap-y-12' : 'space-y-4'} w-full max-w-6xl`}>
            {faqItems.map((item, index) => (
              <div 
                key={index} 
                className={`border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 ${
                  openQuestion === index ? 'shadow-lg' : 'hover:shadow-md'
                } flex flex-col h-auto`}
              >
                <div 
                  className="flex justify-between items-center p-5 cursor-pointer bg-white"
                  onClick={() => toggleQuestion(index)}
                >
                  <h3 className="text-lg font-semibold text-gray-800">{item.question}</h3>
                  <span className={`flex-shrink-0 ml-4 flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
                    openQuestion === index 
                      ? 'bg-violet-600 text-white' 
                      : 'bg-violet-100 text-violet-600'
                  }`}>
                    {openQuestion === index ? <FaMinus size={14} /> : <FaPlus size={14} />}
                  </span>
                </div>
                
                <div className={`transition-all duration-300 ${openQuestion === index ? 'block' : 'hidden'}`}>
                  <div className="p-5 pt-0 bg-white">
                    <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="w-full flex justify-center mt-8">
            {!isDesktop && (
              <button className="bg-gradient-to-r from-violet-600 to-emerald-500 text-white font-medium py-3 px-8 rounded-full hover:shadow-xl transform transition-all duration-300 hover:scale-105">
                More Questions
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-16 bg-white">
        <div className="w-full max-w-[1400px] mx-auto px-4 lg:px-8">
          {!isDesktop ? (
            <div className="flex flex-col items-center">
              <div className="mb-6 text-center">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-emerald-500 bg-clip-text text-transparent">
                  GETVISAGO
                </h1>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Contact us</h2>
              
              <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center">
                <a 
                  href="tel:+911234567890" 
                  className="flex items-center justify-center gap-4 py-4 px-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] group"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-violet-500 to-violet-600 flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-all duration-300">
                    <FaPhone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Call us</p>
                    <p className="text-lg font-semibold text-gray-800">+91 123 456 7890</p>
                  </div>
                </a>
                
                <a 
                  href="mailto:support@visadoc.com" 
                  className="flex items-center justify-center gap-4 py-4 px-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] group"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-all duration-300">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email us</p>
                    <p className="text-lg font-semibold text-gray-800">support@visadoc.com</p>
                  </div>
                </a>
                
                <a 
                  href="#chat" 
                  className="flex items-center justify-center gap-4 py-4 px-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] group"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-violet-500 to-emerald-400 flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-all duration-300">
                    <FaComments size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Live chat</p>
                    <p className="text-lg font-semibold text-gray-800">Chat with support</p>
                  </div>
                </a>
              </div>
            </div>
          ) : (
            <div className="flex justify-center">
              <div className="grid grid-cols-3 gap-16 w-full max-w-4xl">
                {/* Contact Us */}
                <div className="flex flex-col items-center">
                  <h2 className="text-emerald-500 text-2xl font-bold mb-6 text-center">Contact us</h2>
                  <div className="flex flex-col space-y-4 items-center">
                    <a href="tel:+91-123-456-78-90" className="flex items-center text-violet-600 hover:text-violet-700">
                      <FaPhone className="mr-3" />
                      <span>+91-123 456 78-90</span>
                    </a>
                    <a href="mailto:support@visadoc.com" className="flex items-center text-violet-600 hover:text-violet-700 uppercase">
                      <FaEnvelope className="mr-3" />
                      <span>support@visadoc.com</span>
                    </a>
                    <a href="#chat" className="flex items-center text-violet-600 hover:text-violet-700">
                      <FaComments className="mr-3" />
                      <span>CHAT HELP</span>
                    </a>
                  </div>
                </div>
                
                {/* Documents */}
                <div className="flex flex-col items-center">
                  <h2 className="text-emerald-500 text-2xl font-bold mb-6 text-center">Documents</h2>
                  <div className="flex flex-col space-y-3 items-center">
                    <a href="#document1" className="text-gray-700 hover:text-violet-600">
                      My document 1
                    </a>
                    <a href="#document2" className="text-gray-700 hover:text-violet-600">
                      My document 123
                    </a>
                    <a href="#document3" className="text-gray-700 hover:text-violet-600">
                      Your document 6
                    </a>
                  </div>
                </div>
                
                {/* Social Media */}
                <div className="flex flex-col items-center">
                  <h2 className="text-emerald-500 text-2xl font-bold mb-6 text-center">Social media</h2>
                  <div className="flex space-x-4 justify-center">
                    <a href="#facebook" className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 hover:bg-violet-200 transition-all duration-300">
                      <FaFacebook size={20} />
                    </a>
                    <a href="#twitter" className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 hover:bg-violet-200 transition-all duration-300">
                      <FaTwitter size={20} />
                    </a>
                    <a href="#instagram" className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 hover:bg-violet-200 transition-all duration-300">
                      <FaInstagram size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col items-center">
            <div className="text-sm text-gray-500 mb-6 text-center">
              <p>Address: 123 Visa Street, Digital City</p>
              <p>© 2023 GETVISAGO</p>
            </div>
            <div className="flex items-center space-x-8 justify-center">
              <FaCcVisa size={60} className="text-blue-700" />
              <div className="w-[60px] h-[60px] flex items-center justify-center">
                <img src={mastercardSvg} alt="MasterCard" className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SocialMediaDocs Section - Only on Mobile */}
      {isMobile && (
        <section className="w-full py-8 bg-white">
          <div className="w-full max-w-[1400px] mx-auto px-4 flex flex-col items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-md">
              <div className="flex flex-col items-center">
                <h2 className="text-emerald-500 text-2xl font-bold mb-4">Documents</h2>
                <div className="flex flex-col space-y-3 items-center">
                  <a href="#document1" className="text-gray-700 hover:text-violet-600">
                    My document 1
                  </a>
                  <a href="#document2" className="text-gray-700 hover:text-violet-600">
                    My document 123
                  </a>
                  <a href="#document3" className="text-gray-700 hover:text-violet-600">
                    Your document 6
                  </a>
                </div>
              </div>
              
              <div className="flex flex-col items-center">
                <h2 className="text-emerald-500 text-2xl font-bold mb-4">Social media</h2>
                <div className="flex space-x-4">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 hover:bg-violet-200 transition-all duration-300">
                    <FaFacebook size={20} />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 hover:bg-violet-200 transition-all duration-300">
                    <FaTwitter size={20} />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 hover:bg-violet-200 transition-all duration-300">
                    <FaInstagram size={20} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col items-center w-full max-w-md">
              <div className="flex items-center space-x-8 justify-center mb-4">
                <FaCcVisa size={48} className="text-blue-700" />
                <div className="w-[48px] h-[48px] flex items-center justify-center">
                  <img src={mastercardSvg} alt="MasterCard" className="w-full h-full" />
                </div>
              </div>
              
              <div className="text-sm text-gray-500 text-center">
                <p>© 2023 GETVISAGO</p>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default SaudiArabiaVisa; 