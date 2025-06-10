import React from 'react';
import facebookLogo from '../../assets/facebook_logo.svg';
import twitterLogo from '../../assets/twitter_logo.svg';
import instagramLogo from '../../assets/instagram_logo.svg';

const SocialMediaDocs = () => {
  return (
    <section className="social-docs-section">
      <div className="social-docs-container">
        <div className="social-media-block">
          <h2 className="social-media-title">Social media</h2>
          <div className="social-media-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon-link">
              <img src={facebookLogo} alt="Facebook" className="social-icon" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon-link">
              <img src={twitterLogo} alt="Twitter" className="social-icon" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon-link">
              <img src={instagramLogo} alt="Instagram" className="social-icon" />
            </a>
          </div>
        </div>
        
        <div className="documents-block">
          <h2 className="documents-title">Documents</h2>
          <div className="documents-links">
            <a href="#document1" className="document-link">My document 1</a>
            <a href="#document2" className="document-link">My document 123</a>
            <a href="#document3" className="document-link">Your document 6</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaDocs; 