import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useWindowSize from '../hooks/useWindowSize';
import Reviews from '../components/Reviews/Reviews';
import FAQ from '../components/FAQ/FAQ';
import Footer from '../components/Footer/Footer';
import bannerSA1 from '../assets/bannerSA1.png';
import bannerSA2 from '../assets/bannerSA2.png';

const Blog = () => {
  const { width } = useWindowSize();
  const isMobile = width < 1024;
  const [activeCategory, setActiveCategory] = useState('All News');
  
  const categories = [
    'All News',
    'Countries',
    'Visas',
    'Travel',
    'Countries'
  ];
  
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const newsItems = [
    {
      id: 1,
      image: bannerSA1,
      title: 'Saudi Arabia defines itself as a sovereign Arab Islamic state.',
      date: '27 May, 2025',
      link: '/blog/saudi-arabia-1'
    },
    {
      id: 2,
      image: bannerSA2,
      title: 'Saudi Arabia defines itself as a sovereign Arab Islamic state.',
      date: '27 May, 2025',
      link: '/blog/saudi-arabia-2'
    },
    {
      id: 3,
      image: bannerSA1,
      title: 'Saudi Arabia defines itself as a sovereign Arab Islamic state.',
      date: '27 May, 2025',
      link: '/blog/saudi-arabia-3'
    },
    {
      id: 4,
      image: bannerSA2,
      title: 'Saudi Arabia defines itself as a sovereign Arab Islamic state.',
      date: '27 May, 2025',
      link: '/blog/saudi-arabia-4'
    }
  ];

  return (
    <div className="blog-page">
      <div className="container section-container">
        <div className="blog-hero section-spacing">
          <h1 className="mobile-gradient-heading text-center">Welcome to our blog</h1>
        </div>
        
        <div className="blog-categories">
          <div className="categories-wrapper">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="search-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#8C4AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 21L16.65 16.65" stroke="#8C4AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
      
      <div className="blog-content section-container section-spacing">
        <h2 className="section-title">Last news</h2>
        
        <div className="news-grid">
          {newsItems.map((item) => (
            <div key={item.id} className="news-card card-spacing">
              <div className="news-image-container">
                <img src={item.image} alt={item.title} className="news-image" />
              </div>
              <div className="news-content">
                <h3 className="news-title">{item.title}</h3>
                <div className="news-footer">
                  <span className="news-date">{item.date}</span>
                  <Link to={item.link} className="read-more-link">
                    Read more <span className="read-more-arrow">&gt;</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Reviews />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Blog; 