import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { BiUser } from 'react-icons/bi';

const reviewsData = [
  {
    id: 1,
    name: 'Abdula',
    rating: 5,
    text: 'Спасибо за помощь в подаче на визу в Индию. Не смог разобраться на официальном сайте, а тут всё просто и понятно и можно оплатить любой картой! Спасибо!',
    date: '01.12.24',
    source: 'google',
  },
  {
    id: 2,
    name: 'Maria',
    rating: 5,
    text: 'Amazing service! Got my visa quickly without any hassle. The support team was very responsive and helpful throughout the process.',
    date: '03.12.24',
    source: 'google',
    avatar: 'M',
  },
  {
    id: 3,
    name: 'John',
    rating: 4,
    text: 'Very good experience overall. The process was straightforward and the customer service was excellent. Would recommend to friends.',
    date: '05.12.24',
    source: 'google',
    avatar: 'J',
  },
  {
    id: 4,
    name: 'Elena',
    rating: 5,
    text: 'Fantastic service! Got my visa in record time. The website is so easy to navigate and the instructions were crystal clear.',
    date: '10.12.24',
    source: 'google',
  },
  {
    id: 5,
    name: 'Ahmed',
    rating: 5,
    text: 'I was struggling with my visa application until I found this service. Everything was handled professionally and efficiently.',
    date: '15.12.24',
    source: 'google',
    avatar: 'A',
  },
  {
    id: 6,
    name: 'Sophie',
    rating: 4,
    text: 'Great experience from start to finish. The process was much simpler than I expected. Will definitely use again for my next trip.',
    date: '20.12.24',
    source: 'google',
  },
];

const DesktopReviews = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(reviewsData.length / itemsPerPage);
  
  const prev = () => {
    setCurrentPage((currentPage - 1 + totalPages) % totalPages);
  };
  
  const next = () => {
    setCurrentPage((currentPage + 1) % totalPages);
  };
  
  const currentReviews = () => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, reviewsData.length);
    return reviewsData.slice(startIndex, endIndex);
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

  return (
    <section className="w-full py-16 bg-[#F6F7FA]">
      <div className="w-full px-4 lg:px-8 max-w-[1400px] mx-auto relative">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold mx-auto bg-gradient-to-r from-emerald-500 to-violet-600 bg-clip-text text-transparent">
            Customer Reviews
          </h2>
          
          <div className="flex space-x-4 absolute right-4 lg:right-8">
            <button 
              onClick={prev} 
              className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center text-violet-600 shadow-md transition-all duration-300 hover:bg-violet-200 hover:scale-110"
              aria-label="Previous"
            >
              <FaChevronLeft size={18} />
            </button>
            <button 
              onClick={next} 
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
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentPage === index 
                  ? 'bg-violet-600 transform scale-125' 
                  : index === currentPage - 1 || index === currentPage + 1 
                    ? 'bg-violet-300'
                    : 'bg-violet-200'
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesktopReviews; 