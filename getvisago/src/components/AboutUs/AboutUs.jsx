import React from 'react';
import backgroundImage from '../../assets/background.png';
import buttonSvg from '../../assets/button.svg';

const AboutUs = () => {
  return (
    <section className="about-us-section">
      <div className="about-us-content">
        <h2 className="about-us-title">
          We understand the frustration of dealing with complicated visa application processes.
        </h2>
        <div className="button-wrapper">
          <a href="#about">
            <img 
              src={buttonSvg} 
              alt="READ MORE ABOUT US" 
              className="about-us-button-svg" 
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs; 