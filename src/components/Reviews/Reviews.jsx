import React, { useState, useEffect } from 'react';
import arrowLeft from '../../assets/arrow-left.svg';
import arrowRight from '../../assets/arrow-right.svg';
import googleLogo from '../../assets/google_rewiews.svg';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      text: "Спасибо за помощь в подаче на визу в Индию. Не смог разобраться на официальном сайте, а тут всё просто и понятно и можно оплатить любой картой) Спасибо! А если отзыв длинный об...",
      author: "Abdula",
      date: "01.12.24",
      rating: 5
    },
    {
      id: 2,
      text: "I've used several visa services before, but GetVisago stands out for their attention to detail and customer support. They were available whenever I had questions.",
      author: "Abdula",
      date: "01.12.24",
      rating: 5
    },
    {
      id: 3,
      text: "The refund guarantee gave me confidence to use GetVisago, but I didn't even need it! My visa was approved without any issues. Their interface is user-friendly.",
      author: "Abdula",
      date: "01.12.24",
      rating: 5
    }
  ];

  const [currentReview, setCurrentReview] = useState(0);
  const [animation, setAnimation] = useState('');

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
          <h2 className="reviews-title">Reviews</h2>
        </div>
        
        <div className="reviews-carousel-wrapper">
          <button 
            className="arrow-button left" 
            onClick={goToPrevious}
            aria-label="Previous review"
          >
            <img src={arrowLeft} alt="Previous" className="arrow-icon" />
          </button>

          <div className="reviews-carousel">
            <div className={`review-card ${animation}`}>
              <h3 className="review-author-name">{reviews[currentReview].author}</h3>
              
              <div className="stars">
                {[...Array(reviews[currentReview].rating)].map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
              
              <p className="review-text">{reviews[currentReview].text}</p>
              
              <div className="review-footer">
                <span className="review-date">{reviews[currentReview].date}</span>
                <img src={googleLogo} alt="Google" className="review-google-logo" />
              </div>
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
      </div>
    </section>
  );
};

export default Reviews; 