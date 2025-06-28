import React from 'react';
import { Link } from 'react-router-dom';
import { FaPassport, FaQuestionCircle, FaInfoCircle, FaPhone } from 'react-icons/fa';
import { MdOutlineQueryStats } from 'react-icons/md';

const MobileNavigation = () => {
  return (
    <nav className="mobile-nav-bar">
      <Link to="/visas" className="mobile-nav-item">
        <div className="mobile-nav-icon text-white">
          <FaPassport size={24} />
        </div>
        <span className="mobile-nav-text">Visas</span>
      </Link>
      
      <Link to="/status" className="mobile-nav-item">
        <div className="mobile-nav-icon text-white">
          <MdOutlineQueryStats size={24} />
        </div>
        <span className="mobile-nav-text">Status</span>
      </Link>
      
      <Link to="/about" className="mobile-nav-item">
        <div className="mobile-nav-icon text-white">
          <FaInfoCircle size={24} />
        </div>
        <span className="mobile-nav-text">About us</span>
      </Link>
      
      <Link to="/faq" className="mobile-nav-item">
        <div className="mobile-nav-icon text-white">
          <FaQuestionCircle size={24} />
        </div>
        <span className="mobile-nav-text">FAQ</span>
      </Link>
      
      <Link to="/contacts" className="mobile-nav-item">
        <div className="mobile-nav-icon text-white">
          <FaPhone size={24} />
        </div>
        <span className="mobile-nav-text">Contacts</span>
      </Link>
    </nav>
  );
};

export default MobileNavigation; 