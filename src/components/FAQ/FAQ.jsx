import React, { useState, useEffect } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import useWindowSize from '../../hooks/useWindowSize';

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null);
  const { width } = useWindowSize();
  const isDesktop = width >= 1024;

  const faqItems = [
    {
      question: "How does the visa purchase process work on your website?",
      answer: "Our visa purchase process is simple and user-friendly. First, select your destination country and visa type. Then, fill out the required information and upload necessary documents. After reviewing your application, proceed to payment. Once approved, you'll receive your visa electronically. Our customer support team is available throughout the process to assist you with any questions."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit and debit cards including Visa, Mastercard, and American Express. We also support PayPal, Apple Pay, and Google Pay for your convenience. All payments are processed through secure encrypted channels to ensure your financial information remains protected."
    },
    {
      question: "How long does it take to process my visa application?",
      answer: "Processing times vary depending on the destination country and visa type. Standard processing typically takes 3-5 business days, while expedited service can be completed within 24-48 hours for most destinations. Specific processing times are displayed during the application process for each visa type."
    },
    {
      question: "What if my visa application is rejected?",
      answer: "We offer a money-back guarantee if your visa application is rejected. You'll receive a full refund of our service fee. Please note that government fees may not be refundable depending on the country's policies. Our team will also provide guidance on how to improve your application for future submissions."
    },
    {
      question: "Can I expedite my visa application?",
      answer: "Yes, we offer expedited processing for most visa types. This service comes with an additional fee but can significantly reduce the processing time. The expedited option is available during the checkout process, and the specific timeframe will be displayed based on your destination country and visa type."
    },
    {
      question: "Do I need to send my passport for visa processing?",
      answer: "For most e-Visas, you don't need to send your physical passport. You'll only need to upload a scan of your passport's information page. However, for certain visa types or countries, physical submission might be required. Our system will clearly indicate this requirement during the application process."
    }
  ];

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <section id="faq" className="w-full py-10 bg-gray-50">
      <div className="w-full max-w-[1400px] mx-auto px-4 lg:px-8 flex flex-col items-center">
        <h2 className="text-emerald-500 text-4xl font-bold mb-8 text-center">FAQ</h2>
        
        <div className={`${isDesktop ? 'grid grid-cols-2 gap-x-6 gap-y-12' : 'space-y-4'} w-full max-w-6xl`}>
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className={`border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 ${
                openQuestion === index ? 'shadow-lg' : 'hover:shadow-md'
              } flex flex-col h-auto`}
            >
              <div 
                className="flex justify-between items-center p-5 cursor-pointer bg-white"
                onClick={() => toggleQuestion(index)}
              >
                <h3 className="text-lg font-semibold text-gray-800">{item.question}</h3>
                <span className={`flex-shrink-0 ml-4 flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
                  openQuestion === index 
                    ? 'bg-violet-600 text-white' 
                    : 'bg-violet-100 text-violet-600'
                }`}>
                  {openQuestion === index ? <FaMinus size={14} /> : <FaPlus size={14} />}
                </span>
              </div>
              
              {index === 1 ? (
                <div className={`transition-all duration-300 ${openQuestion === index ? 'block' : 'hidden'}`}>
                  <div className="p-5 pt-0 bg-white">
                    <p className="text-gray-600 leading-relaxed">
                      We accept all major credit and debit cards including Visa, Mastercard, and American Express. 
                      We also support PayPal, Apple Pay, and Google Pay for your convenience. 
                      All payments are processed through secure encrypted channels to ensure your financial information remains protected.
                    </p>
                  </div>
                </div>
              ) : (
                <div className={`transition-all duration-300 ${openQuestion === index ? 'block' : 'hidden'}`}>
                  <div className="p-5 pt-0 bg-white">
                    <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="w-full flex justify-center mt-8">
          {!isDesktop && (
            <button className="bg-gradient-to-r from-violet-600 to-emerald-500 text-white font-medium py-3 px-8 rounded-full hover:shadow-xl transform transition-all duration-300 hover:scale-105">
              More Questions
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 