import React, { useState, useEffect } from 'react';
import reviewsLogo from '../../assets/reviews_logo.svg';
import arrowLeft from '../../assets/arrow-left.svg';
import arrowRight from '../../assets/arrow-right.svg';
import googleReviews from '../../assets/google_rewiews.svg';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      text: "GetVisago made my visa application process incredibly smooth. I was worried about all the paperwork, but their step-by-step guidance helped me complete everything correctly the first time. Highly recommended for anyone needing visa assistance!",
      author: "Michael Thompson",
      rating: 5
    },
    {
      id: 2,
      text: "I've used several visa services before, but GetVisago stands out for their attention to detail and customer support. They were available whenever I had questions and ensured my application was submitted well before my travel date.",
      author: "Sarah Johnson",
      rating: 5
    },
    {
      id: 3,
      text: "The refund guarantee gave me confidence to use GetVisago, but I didn't even need it! My visa was approved without any issues. Their interface is user-friendly and the process was much faster than I expected.",
      author: "David Wilson",
      rating: 5
    }
  ];

  const [currentReview, setCurrentReview] = useState(0);
  const [animation, setAnimation] = useState('');

  useEffect(() => {
    // Автоматическое переключение отзывов каждые 8 секунд
    const intervalId = setInterval(() => {
      goToNext();
    }, 8000);
    
    return () => clearInterval(intervalId);
  }, [currentReview]);

  const goToPrevious = () => {
    setAnimation('slide-right');
    setTimeout(() => {
      setCurrentReview(currentReview === 0 ? reviews.length - 1 : currentReview - 1);
      setAnimation('');
    }, 300);
  };

  const goToNext = () => {
    setAnimation('slide-left');
    setTimeout(() => {
      setCurrentReview(currentReview === reviews.length - 1 ? 0 : currentReview + 1);
      setAnimation('');
    }, 300);
  };

  return (
    <section className="reviews-section">
      <div className="reviews-container">
        <div className="reviews-header">
          <img 
            src={reviewsLogo} 
            alt="Reviews" 
            className="reviews-logo" 
          />
        </div>
        
        <div className="reviews-carousel">
          <button 
            className="arrow-button left" 
            onClick={goToPrevious}
            aria-label="Previous review"
          >
            <img src={arrowLeft} alt="Previous" className="arrow-icon" />
          </button>

          <div className="reviews-content">
            <div className={`review-card ${animation}`}>
              <div className="stars">
                {[...Array(reviews[currentReview].rating)].map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
              <p className="review-text">"{reviews[currentReview].text}"</p>
              <p className="review-author">{reviews[currentReview].author}</p>
            </div>
          </div>

          <button 
            className="arrow-button right" 
            onClick={goToNext}
            aria-label="Next review"
          >
            <img src={arrowRight} alt="Next" className="arrow-icon" />
          </button>
        </div>

        <div className="reviews-pagination">
          {reviews.map((_, index) => (
            <span 
              key={index} 
              className={`pagination-dot ${index === currentReview ? 'active' : ''}`}
              onClick={() => setCurrentReview(index)}
            />
          ))}
        </div>

        <div className="reviews-footer">
          <a href="https://www.google.com/maps/place/your-business" target="_blank" rel="noopener noreferrer">
            <img src={googleReviews} alt="Google Reviews" className="google-reviews-logo" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews; 