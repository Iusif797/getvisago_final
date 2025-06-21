import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaEnvelope, FaCheck } from 'react-icons/fa';
import statusTimer from '../assets/status_timer.svg';
import checkButton from '../assets/check_button.svg';
import useWindowSize from '../hooks/useWindowSize';
import Reviews from '../components/Reviews/Reviews';
import FAQ from '../components/FAQ/FAQ';
import Footer from '../components/Footer/Footer';

const VisaStatus = () => {
  const { width } = useWindowSize();
  const isMobile = width < 1024;
  const [applicationId, setApplicationId] = useState('');
  const [email, setEmail] = useState('');
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    // Добавляем анимацию после загрузки страницы
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const handleCheckStatus = (e) => {
    e.preventDefault();
    console.log('Checking status for:', applicationId, email);
  };

  return (
    <div className="visa-status-page">
      <div className="container">
        <div className={`visa-status-banner ${isAnimated ? 'animated' : ''}`}>
          <div className="visa-status-content">
            <h1 className="visa-status-title">Visa Status</h1>
            <p className="visa-status-description">
              Welcome to visa status check page! Here you can track the progress of your visa application.
            </p>
          </div>
        </div>

        <div className={`status-check-card ${isAnimated ? 'animated' : ''}`}>
          <div className="status-check-row">
            <div className="status-check-content">
              <h2 className="check-title">Check<br />Visa readiness</h2>
              <form onSubmit={handleCheckStatus}>
                <div className="form-group">
                  <div className="input-with-icon">
                    <FaUser className="input-icon" />
                    <input 
                      type="text" 
                      placeholder="Application ID" 
                      value={applicationId}
                      onChange={(e) => setApplicationId(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-with-icon">
                    <FaEnvelope className="input-icon" />
                    <input 
                      type="email" 
                      placeholder="Email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <button type="submit" className="check-status-btn">
                  <img src={checkButton} alt="CHECK STATUS" />
                </button>
              </form>
            </div>
            <div className="status-timer-image">
              <img src={statusTimer} alt="Visa Status Timer" />
            </div>
          </div>
        </div>

        <div className={`find-id-row ${isAnimated ? 'animated' : ''}`}>
          <div className="find-id-title">
            <h2 className="where-can-i-find">Where can I find<br />the application ID?</h2>
          </div>
          <div className="find-id-content">
            <p className="application-id-info">
              Your Application ID is included in the confirmation email we sent you after you submitted your application. Make sure you enter the same email address you used when you submitted your application.
            </p>
            <div className="info-badge">
              <FaCheck className="check-icon" /> Important information
            </div>
          </div>
        </div>
      </div>

      <div className={`reviews-section ${isAnimated ? 'animated' : ''}`}>
        <Reviews />
      </div>
      <div className={`faq-section ${isAnimated ? 'animated' : ''}`}>
        <FAQ />
      </div>
      <Footer />
    </div>
  );
};

export default VisaStatus; 