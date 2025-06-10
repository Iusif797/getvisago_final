import React from 'react';
import logoGetVisago from '../../assets/logo_getvisago_2.svg';
import phoneNumber from '../../assets/phone_number.svg';
import email from '../../assets/e-mail.svg';
import supportButton from '../../assets/support_button.svg';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-logo">
          <img src={logoGetVisago} alt="GETVISAGO" className="contact-logo-img" />
        </div>
        
        <h2 className="contact-title">Contact us</h2>
        
        <div className="contact-buttons">
          <a href="tel:+911234567890" className="contact-button">
            <img src={phoneNumber} alt="Phone" className="contact-button-img" />
          </a>
          
          <a href="mailto:support@visadoc.com" className="contact-button">
            <img src={email} alt="Email" className="contact-button-img" />
          </a>
          
          <a href="#chat" className="contact-button">
            <img src={supportButton} alt="Chat Help" className="contact-button-img" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact; 