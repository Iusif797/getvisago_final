import React, { useState } from 'react';
import moreQuestionsIcon from '../../assets/more_questions.svg';

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(0);

  const faqItems = [
    {
      question: "How does the visa purchase process work on your website?",
      answer: "Lorem ipsum dolor sit amet consectetur. Quisque eget risus aliquam ac urna vitae amet egestas. Sagittis blandit elementum mauris sed suspendisse mattis. Adipiscing varius ullamcorper enim sed. Magna egestas justo lorem nec aliquet eu."
    },
    {
      question: "How does the visa purchase process work on your website?",
      answer: "Lorem ipsum dolor sit amet consectetur. Quisque eget risus aliquam ac urna vitae amet egestas. Sagittis blandit elementum mauris sed suspendisse mattis. Adipiscing varius ullamcorper enim sed."
    },
    {
      question: "How does the visa purchase process work on your website?",
      answer: "Lorem ipsum dolor sit amet consectetur. Quisque eget risus aliquam ac urna vitae amet egestas. Sagittis blandit elementum mauris sed suspendisse mattis."
    }
  ];

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">FAQ</h2>
        
        <div className="faq-questions">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className={`faq-item ${openQuestion === index ? 'open' : ''}`}
            >
              <div 
                className="faq-question"
                onClick={() => toggleQuestion(index)}
              >
                <h3>{item.question}</h3>
                <span className="faq-icon">
                  {openQuestion === index ? 
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19" stroke="#9B5DE5" strokeWidth="2" strokeLinecap="round" />
                    </svg> 
                    : 
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 5V19" stroke="#9B5DE5" strokeWidth="2" strokeLinecap="round" />
                      <path d="M5 12H19" stroke="#9B5DE5" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  }
                </span>
              </div>
              
              {openQuestion === index && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="more-questions-btn">
          <img src={moreQuestionsIcon} alt="More Questions" />
        </div>
      </div>
    </section>
  );
};

export default FAQ; 