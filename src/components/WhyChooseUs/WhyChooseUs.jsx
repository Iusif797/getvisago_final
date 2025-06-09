import React from 'react';
import molnia from '../../assets/molnia.svg';
import money from '../../assets/money.svg';
import todo from '../../assets/todo.svg';
import naushniki from '../../assets/naushniki.svg';

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us-section">
      <h2>Why Choose Us</h2>
      
      <div className="flex flex-col">
        {/* Fast Processing - фиолетовый блок с иконкой справа */}
        <div className="feature-card purple feature-card-right">
          <span className="feature-text">Fast Processing</span>
          <div className="feature-icon purple">
            <img src={molnia} alt="Fast Processing" />
          </div>
        </div>
        
        {/* Simple Application - зеленый блок с иконкой слева */}
        <div className="feature-card green feature-card-left">
          <div className="feature-icon green">
            <img src={todo} alt="Simple Application" />
          </div>
          <span className="feature-text">Simple Application</span>
        </div>
        
        {/* Refund Guarantee - фиолетовый блок с иконкой справа */}
        <div className="feature-card purple feature-card-right">
          <span className="feature-text">Refund Guarantee</span>
          <div className="feature-icon purple">
            <img src={money} alt="Refund Guarantee" />
          </div>
        </div>
        
        {/* Customer Support - зеленый блок с иконкой слева */}
        <div className="feature-card green feature-card-left">
          <div className="feature-icon green">
            <img src={naushniki} alt="Customer Support" />
          </div>
          <span className="feature-text">Customer Support</span>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 