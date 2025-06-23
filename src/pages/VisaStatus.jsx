import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaEnvelope, FaCheck } from 'react-icons/fa';
import statusTimer from '../assets/status_timer.svg';
import checkButton from '../assets/check_button.svg';
import handSvg from '../assets/hand_svg.svg';
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
            <div className="hand-icon-container">
              <img src={handSvg} alt="Hand pointing" className="hand-icon" />
            </div>
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

      <style jsx>{`
        .find-id-row {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          background-color: #f9f9f9;
          border-radius: 8px;
          padding: 30px;
          margin-top: 40px;
          position: relative;
        }

        .find-id-title {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
          position: relative;
          width: 100%;
        }

        .where-can-i-find {
          font-size: 24px;
          font-weight: 600;
          color: #333;
          margin-right: 20px;
        }

        .hand-icon-container {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
        }

        .hand-icon {
          width: 80px;
          height: auto;
          margin-left: 15px;
          animation: pointingAnimation 2s infinite ease-in-out;
        }

        @keyframes pointingAnimation {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(-10px);
          }
        }

        .find-id-content {
          width: 100%;
        }

        .application-id-info {
          font-size: 16px;
          line-height: 1.6;
          color: #555;
          margin-bottom: 20px;
        }

        .info-badge {
          display: inline-flex;
          align-items: center;
          background-color: #e8f4ff;
          padding: 10px 15px;
          border-radius: 4px;
          font-size: 14px;
          color: #0066cc;
        }

        .check-icon {
          margin-right: 8px;
          color: #00aa55;
        }

        @media (max-width: 768px) {
          .find-id-row {
            padding: 20px;
          }

          .find-id-title {
            flex-direction: column;
            align-items: flex-start;
          }

          .hand-icon-container {
            position: relative;
            right: auto;
            top: auto;
            transform: none;
            margin-top: 15px;
            align-self: flex-end;
          }

          .hand-icon {
            width: 60px;
          }

          .where-can-i-find {
            font-size: 20px;
            margin-right: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default VisaStatus; 