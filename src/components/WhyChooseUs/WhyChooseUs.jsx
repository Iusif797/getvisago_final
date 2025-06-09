import React from 'react';
import molnia from '../../assets/molnia.svg';
import money from '../../assets/money.svg';
import todo from '../../assets/todo.svg';
import naushniki from '../../assets/naushniki.svg';

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us-section px-6 py-8 bg-visa-gray-50">
      <h2>Why Choose Us</h2>
      
      <div className="flex flex-col gap-4">
        {/* Fast Processing - фиолетовый блок */}
        <div className="feature-card purple">
          <div className="icon-container bg-[#A259F7]">
            <img src={molnia} alt="Fast Processing" />
          </div>
          <span className="feature-text">Fast Processing</span>
        </div>
        
        {/* Simple Application - зеленый блок */}
        <div className="feature-card green">
          <div className="icon-container bg-[#06E2A4]">
            <img src={todo} alt="Simple Application" />
          </div>
          <span className="feature-text">Simple Application</span>
        </div>
        
        {/* Refund Guarantee - фиолетовый блок */}
        <div className="feature-card purple">
          <div className="icon-container bg-[#A259F7]">
            <img src={money} alt="Refund Guarantee" />
          </div>
          <span className="feature-text">Refund Guarantee</span>
        </div>
        
        {/* Customer Support - зеленый блок */}
        <div className="feature-card green">
          <div className="icon-container bg-[#06E2A4]">
            <img src={naushniki} alt="Customer Support" />
          </div>
          <span className="feature-text">Customer Support</span>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 