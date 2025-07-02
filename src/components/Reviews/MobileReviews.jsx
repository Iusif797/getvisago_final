import React, { useState } from 'react';
import { BiUser } from 'react-icons/bi';
import leftArrow from '../../assets/slider_arrow_master.svg';
import rightArrow from '../../assets/slider_arrow_master1.svg';
import googleIcon from '../../assets/rewiew_service_icon.svg';

const reviewsData = [
  {
    id: 1,
    name: 'Abdula',
    rating: 5,
    text: 'Amazing service! Got my visa quickly without any hassle. The support team was very responsive and helpful throughout the process.',
    date: '01.12.24',
    source: 'google',
  },
  {
    id: 2,
    name: 'Maria',
    rating: 5,
    text: 'Very satisfied with the service. Everything was clear and straightforward. Will definitely use again for my next trip!',
    date: '01.12.24',
    source: 'google',
    avatar: 'M',
  },
  {
    id: 3,
    name: 'John',
    rating: 5,
    text: 'The visa application process was so simple. I got my visa in just 3 days. Excellent customer support!',
    date: '01.12.24',
    source: 'google',
    avatar: 'J',
  },
  {
    id: 4,
    name: 'Elena',
    rating: 5,
    text: 'I was worried about my visa application, but the team made it so easy. Very professional service!',
    date: '01.12.24',
    source: 'google',
  },
];

const MobileReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalReviews = reviewsData.length;
  
  const prev = () => {
    setCurrentIndex((currentIndex - 1 + totalReviews) % totalReviews);
  };
  
  const next = () => {
    setCurrentIndex((currentIndex + 1) % totalReviews);
  };
  
  // Функция для рендеринга звезд рейтинга
  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <svg 
        key={index} 
        className={`w-4 h-4 ${index < rating ? 'text-purple-500' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="w-full py-12 bg-[#F6F7FA]">
      <div className="w-full px-6 mx-auto relative">
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-[#00C6A2] to-[#9B51E0] bg-clip-text text-transparent">Reviews</h2>
          <div className="flex space-x-3">
            <button onClick={prev} aria-label="Previous" className="w-9 h-9 active:scale-95 transition-transform">
              <img src={leftArrow} alt="Prev" className="w-full h-full" />
            </button>
            <button onClick={next} aria-label="Next" className="w-9 h-9 active:scale-95 transition-transform">
              <img src={rightArrow} alt="Next" className="w-full h-full" />
            </button>
          </div>
        </div>
        
        <div className="relative px-6">
          <div className="rounded-xl p-5 bg-white w-[90%] mx-auto">
            <div className="flex flex-col h-full justify-between">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{reviewsData[currentIndex].name}</h3>
                <div className="flex mb-3 justify-center">
                  {renderStars(reviewsData[currentIndex].rating)}
                </div>
                <p className="text-gray-800 mb-4 text-sm line-clamp-3">
                  {reviewsData[currentIndex].text}
                </p>
              </div>
              
              <div className="flex items-center justify-between mt-2">
                <span className="text-xs text-gray-500">{reviewsData[currentIndex].date}</span>
                {reviewsData[currentIndex].source === 'google' && (
                  <img src={googleIcon} alt="Google" className="w-5 h-5" />
                )}
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-6 space-x-1.5">
          {reviewsData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? 'bg-[#9B51E0] transform scale-125' 
                  : 'bg-[#E4D9FF]'
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileReviews; 