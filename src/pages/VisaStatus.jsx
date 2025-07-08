import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaEnvelope } from 'react-icons/fa';
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

        <div className="content-wrapper">
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

          <div className="find-id-section">
            <div className="find-id-content">
              <h2 className="find-id-title">Where can I<br />find the application ID?</h2>
              <p className="find-id-text">
                Your Application ID is included in the confirmation 
                email we sent you after you submitted your 
                application. Make sure you enter the same email 
                address you used when you submitted your application.
              </p>
            </div>
            <div className="hand-icon-wrapper">
              <img src={handSvg} alt="Hand pointing" className="hand-icon" />
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
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        .content-wrapper {
          max-width: 900px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .visa-status-banner {
          text-align: center;
          padding: 40px 0;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.5s ease;
        }
        
        .visa-status-banner.animated {
          opacity: 1;
          transform: translateY(0);
        }
        
        .visa-status-title {
          font-size: 36px;
          font-weight: 700;
          margin-bottom: 15px;
          color: #333;
        }
        
        .visa-status-description {
          font-size: 18px;
          color: #666;
          max-width: 700px;
          margin: 0 auto;
        }
        
        .status-check-card {
          background-color: #ffffff;
          border-radius: 20px;
          padding: 30px;
          width: 100%;
          margin: 30px 0;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.5s ease 0.2s;
        }
        
        .status-check-card.animated {
          opacity: 1;
          transform: translateY(0);
        }
        
        .status-check-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        
        .status-check-content {
          flex: 1;
          padding-right: 30px;
        }
        
        .check-title {
          font-size: 28px;
          font-weight: 700;
          color: #333;
          margin-bottom: 25px;
          line-height: 1.3;
        }
        
        .form-group {
          margin-bottom: 20px;
        }
        
        .input-with-icon {
          position: relative;
        }
        
        .input-icon {
          position: absolute;
          left: 15px;
          top: 50%;
          transform: translateY(-50%);
          color: #9B51E0;
        }
        
        input {
          width: 100%;
          padding: 15px 15px 15px 45px;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          font-size: 16px;
          transition: all 0.3s;
        }
        
        input:focus {
          border-color: #9B51E0;
          outline: none;
          box-shadow: 0 0 0 2px rgba(155, 81, 224, 0.2);
        }
        
        .check-status-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          transition: transform 0.3s;
        }
        
        .check-status-btn:hover {
          transform: scale(1.05);
        }
        
        .status-timer-image {
          max-width: 40%;
        }
        
        .status-timer-image img {
          max-width: 100%;
          height: auto;
        }

        .find-id-section {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 40px 0 60px;
          width: 100%;
        }

        .find-id-content {
          background-color: #ffffff;
          border-radius: 20px;
          padding: 30px;
          width: 85%;
          position: relative;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
        }

        .find-id-title {
          font-size: 26px;
          font-weight: 700;
          color: #9B51E0;
          margin-bottom: 20px;
          line-height: 1.3;
          text-align: left;
        }

        .find-id-text {
          font-size: 16px;
          line-height: 1.6;
          color: #000000;
          text-align: left;
          max-width: 90%;
        }

        .hand-icon-wrapper {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
        }

        .hand-icon {
          width: 90px;
          height: auto;
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

        .reviews-section,
        .faq-section {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.5s ease 0.4s;
        }
        
        .reviews-section.animated,
        .faq-section.animated {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 1024px) {
          .status-check-row {
            flex-direction: column;
          }
          
          .status-check-content {
            padding-right: 0;
            margin-bottom: 30px;
            width: 100%;
          }
          
          .status-timer-image {
            max-width: 70%;
            margin: 0 auto;
          }
        }

        @media (max-width: 768px) {
          .content-wrapper {
            padding: 0;
          }
          
          .visa-status-title {
            font-size: 28px;
          }
          
          .visa-status-description {
            font-size: 16px;
          }
          
          .status-check-card {
            padding: 25px;
          }
          
          .check-title {
            font-size: 24px;
          }
          
          .find-id-section {
            padding: 0;
            margin: 30px 0;
            flex-direction: row;
            align-items: center;
            position: relative;
          }

          .find-id-content {
            flex: 1;
            width: 100%;
            background-color: #ffffff;
            border-radius: 20px;
            padding: 25px;
          }

          .find-id-title {
            font-size: 22px;
            font-weight: 700;
            color: #9B51E0;
            margin-bottom: 10px;
            line-height: 1.2;
          }

          .hand-icon-wrapper {
            position: relative;
            right: 0;
            top: 0;
            transform: none;
            margin-left: 10px;
            display: flex;
            align-items: center;
          }

          .hand-icon {
            width: 60px;
          }
        }
      `}</style>
    </div>
  );
};

export default VisaStatus;