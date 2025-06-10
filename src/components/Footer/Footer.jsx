import React, { useState } from 'react';
import visaIcon from '../../assets/icon_VISA.svg';
import masterCardIcon from '../../assets/mastercard.svg';
import { FaUserCircle, FaBars, FaCommentAlt, FaQuestionCircle, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  const [activeNav, setActiveNav] = useState('account');
  
  const handleNavClick = (navItem) => {
    setActiveNav(navItem);
  };
  
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-info">
            <p className="footer-address">Adress. Vsya huynya</p>
            <p className="footer-copyright">© 2025 GOVISAGO</p>
          </div>
          
          <div className="payment-methods">
            <img src={visaIcon} alt="Visa" className="payment-icon" />
            <img src={masterCardIcon} alt="MasterCard" className="payment-icon" />
          </div>
        </div>
      </div>
      
      <div className="footer-nav">
        <div 
          className={`nav-item ${activeNav === 'account' ? 'active' : ''}`}
          onClick={() => handleNavClick('account')}
        >
          <div className="nav-icon-wrapper">
            <FaUserCircle className="nav-icon" />
          </div>
        </div>
        
        <div 
          className={`nav-item ${activeNav === 'menu' ? 'active' : ''}`}
          onClick={() => handleNavClick('menu')}
        >
          <div className="nav-icon-wrapper">
            <FaBars className="nav-icon" />
          </div>
        </div>
        
        <div 
          className={`nav-item ${activeNav === 'chat' ? 'active' : ''}`}
          onClick={() => handleNavClick('chat')}
        >
          <div className="nav-icon-wrapper">
            <FaCommentAlt className="nav-icon" />
          </div>
        </div>
        
        <div 
          className={`nav-item ${activeNav === 'help' ? 'active' : ''}`}
          onClick={() => handleNavClick('help')}
        >
          <div className="nav-icon-wrapper">
            <FaQuestionCircle className="nav-icon" />
          </div>
        </div>
        
        <div 
          className={`nav-item ${activeNav === 'call' ? 'active' : ''}`}
          onClick={() => handleNavClick('call')}
        >
          <div className="nav-icon-wrapper">
            <FaPhoneAlt className="nav-icon" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 