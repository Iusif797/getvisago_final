import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useWindowSize from '../hooks/useWindowSize';
import indiaFlag from '../assets/flag_india.svg';

const VisaApplication = () => {
  const { width } = useWindowSize();
  const isMobile = width < 768;
  
  const [selectedVisa, setSelectedVisa] = useState('tourist30');
  const [quantity, setQuantity] = useState(1);
  const [isExpressOrder, setIsExpressOrder] = useState(false);
  const [showQuantityDropdown, setShowQuantityDropdown] = useState(false);
  const [entryPoint, setEntryPoint] = useState('');
  const [showEntryPointDropdown, setShowEntryPointDropdown] = useState(false);
  const [day, setDay] = useState('');
  const [showDayDropdown, setShowDayDropdown] = useState(false);
  const [month, setMonth] = useState('');
  const [showMonthDropdown, setShowMonthDropdown] = useState(false);
  const [year, setYear] = useState('');
  const [showYearDropdown, setShowYearDropdown] = useState(false);
  const [promoCode, setPromoCode] = useState('');

  // Visa types data
  const visaTypes = [
    { id: 'tourist30', name: 'Tourist visa, 30 days', price: 4490, days: 30 },
    { id: 'tourist1y', name: 'Tourist visa, 1 year', price: 6990, days: 365 },
    { id: 'tourist5y', name: 'Tourist visa, 5 years', price: 9990, days: 1825 },
    { id: 'business1y', name: 'Business visa, 1 year', price: 12990, days: 365 },
  ];

  // Selected visa data
  const getSelectedVisaData = () => {
    return visaTypes.find(visa => visa.id === selectedVisa);
  };

  const visaData = getSelectedVisaData();

  // Event handlers
  const handleVisaChange = (visaId) => {
    setSelectedVisa(visaId);
  };

  const handleQuantityChange = (qty) => {
    setQuantity(qty);
    setShowQuantityDropdown(false);
  };

  const toggleExpressOrder = () => {
    setIsExpressOrder(!isExpressOrder);
  };

  // Calculate total price
  const calculateTotalPrice = () => {
    const basePrice = visaData.price * quantity;
    const expressCharge = isExpressOrder ? 1990 : 0;
    return basePrice + expressCharge;
  };

  // Dropdown options
  const quantityOptions = [1, 2, 3, 4, 5];
  const dayOptions = Array.from({ length: 31 }, (_, i) => i + 1);
  const monthOptions = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const yearOptions = [2025, 2026, 2027, 2028, 2029];
  const entryPointOptions = ['Delhi', 'Mumbai', 'Chennai', 'Kolkata', 'Bangalore'];

  return (
    <div className="visa-application-page">
      <div className="visa-application-container">
        {/* Application steps */}
        <div className="application-steps">
          <div className="step active">
            <div className="step-number">1</div>
            <div className="step-name">Visa Selection</div>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <div className="step-name">Details</div>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <div className="step-name">Verification</div>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <div className="step-name">Photos</div>
          </div>
          <div className="step">
            <div className="step-number">5</div>
            <div className="step-name">Payment</div>
          </div>
        </div>

        <h1 className="page-title">Visa Selection</h1>

        <div className="application-content">
          <div className="visa-selection-container">
            <p className="section-subtitle">Select your electronic visa type for India</p>

            <div className="visa-options">
              {visaTypes.map((visa) => (
                <div className="visa-option" key={visa.id}>
                  <label className="visa-radio-label">
                    <input
                      type="radio"
                      name="visaType"
                      checked={selectedVisa === visa.id}
                      onChange={() => handleVisaChange(visa.id)}
                      className="visa-radio"
                    />
                    <span className="visa-name">{visa.name}: {visa.price}₽</span>
                  </label>
                </div>
              ))}
            </div>

            <div className="quantity-selector">
              <p className="quantity-label">Number of visas</p>
              <div className="dropdown-container">
                <button 
                  className="dropdown-button"
                  onClick={() => setShowQuantityDropdown(!showQuantityDropdown)}
                >
                  {quantity}
                  <span className="dropdown-arrow">▼</span>
                </button>
                {showQuantityDropdown && (
                  <div className="dropdown-menu">
                    {quantityOptions.map((qty) => (
                      <div 
                        key={qty} 
                        className="dropdown-item"
                        onClick={() => handleQuantityChange(qty)}
                      >
                        {qty}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <p className="quantity-note">One visa per person (including children 0-18 years)</p>
            </div>

            <div className="express-order">
              <label className="express-checkbox-label">
                <input
                  type="checkbox"
                  checked={isExpressOrder}
                  onChange={toggleExpressOrder}
                  className="express-checkbox"
                />
                <div className="express-info">
                  <div className="express-title">
                    Express order: Next day delivery
                    <span className="express-price">+1990₽</span>
                    <span className="express-icon">⚡</span>
                  </div>
                  <div className="express-note">Check ✓ to receive by the next day.</div>
                </div>
              </label>
            </div>
          </div>

          <div className="visa-details-container">
            <div className="visa-info-card">
              <h3 className="card-title">Visa Information:</h3>
              <div className="info-item">
                <div className="info-icon">🕒</div>
                <div className="info-text">Validity period: {visaData.days} days</div>
              </div>
              <div className="info-item">
                <div className="info-icon">✅</div>
                <div className="info-text">Approval time: 3 days</div>
              </div>
              <div className="info-item">
                <div className="info-icon">🔄</div>
                <div className="info-text">Number of entries: maximum 2</div>
              </div>
            </div>

            <div className="visa-info-card">
              <h3 className="card-title">Order Details:</h3>
              <div className="order-item">
                <div className="order-flag">
                  <img src={indiaFlag} alt="India" className="country-flag" />
                </div>
                <div className="order-text">
                  Tourist visa India, 30 days: {visaData.price}₽
                </div>
              </div>
              <div className="order-item">
                <div className="order-icon">🔢</div>
                <div className="order-text">Quantity: ×{quantity}</div>
              </div>
              <div className="order-total">
                <div className="total-text">Total price:</div>
                <div className="total-price">{calculateTotalPrice()}₽</div>
                <div className="info-icon-small">ℹ️</div>
              </div>
              <div className="promo-code">
                <button className="promo-button">Promo code</button>
              </div>
            </div>
          </div>
        </div>

        <div className="travel-info-section">
          <h2 className="section-title">Travel Information</h2>
          
          <div className="travel-form">
            <div className="form-group">
              <label className="form-label">Planned entry date</label>
              <div className="date-inputs">
                <div className="dropdown-container small">
                  <button 
                    className="dropdown-button"
                    onClick={() => setShowDayDropdown(!showDayDropdown)}
                  >
                    {day || 'Day'}
                    <span className="dropdown-arrow">▼</span>
                  </button>
                  {showDayDropdown && (
                    <div className="dropdown-menu">
                      {dayOptions.map((d) => (
                        <div 
                          key={d} 
                          className="dropdown-item"
                          onClick={() => {
                            setDay(d);
                            setShowDayDropdown(false);
                          }}
                        >
                          {d}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                <div className="dropdown-container medium">
                  <button 
                    className="dropdown-button"
                    onClick={() => setShowMonthDropdown(!showMonthDropdown)}
                  >
                    {month || 'Month'}
                    <span className="dropdown-arrow">▼</span>
                  </button>
                  {showMonthDropdown && (
                    <div className="dropdown-menu">
                      {monthOptions.map((m) => (
                        <div 
                          key={m} 
                          className="dropdown-item"
                          onClick={() => {
                            setMonth(m);
                            setShowMonthDropdown(false);
                          }}
                        >
                          {m}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                <div className="dropdown-container small">
                  <button 
                    className="dropdown-button"
                    onClick={() => setShowYearDropdown(!showYearDropdown)}
                  >
                    {year || 'Year'}
                    <span className="dropdown-arrow">▼</span>
                  </button>
                  {showYearDropdown && (
                    <div className="dropdown-menu">
                      {yearOptions.map((y) => (
                        <div 
                          key={y} 
                          className="dropdown-item"
                          onClick={() => {
                            setYear(y);
                            setShowYearDropdown(false);
                          }}
                        >
                          {y}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="form-group">
              <label className="form-label">Planned entry point</label>
              <div className="dropdown-container large">
                <button 
                  className="dropdown-button"
                  onClick={() => setShowEntryPointDropdown(!showEntryPointDropdown)}
                >
                  {entryPoint || 'Select entry point'}
                  <span className="dropdown-arrow">▼</span>
                </button>
                {showEntryPointDropdown && (
                  <div className="dropdown-menu">
                    {entryPointOptions.map((point) => (
                      <div 
                        key={point} 
                        className="dropdown-item"
                        onClick={() => {
                          setEntryPoint(point);
                          setShowEntryPointDropdown(false);
                        }}
                      >
                        {point}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <p className="entry-point-note">Approximate is fine. Entry is allowed through any of these points.</p>
            </div>
          </div>
        </div>

        <div className="navigation-buttons">
          <Link to="/" className="back-button">Back</Link>
          <Link to="/visa-application/details" className="next-button">Next</Link>
        </div>
      </div>
    </div>
  );
};

export default VisaApplication; 