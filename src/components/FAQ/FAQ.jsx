import React, { useState } from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import strelkaIcon from '../../assets/strelka.svg';
import questionsButton from '../../assets/questions_svg.svg';

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null);
  const { width } = useWindowSize();
  const isDesktop = width >= 1024;
  const isMobile = width < 768;

  const faqItems = [
    {
      question: "How does the visa purchase process work on your website?",
      answer: "Our visa purchase process is simple and user-friendly. First, select your destination country and visa type. Then, fill out the required information and upload necessary documents. After reviewing your application, proceed to payment. Once approved, you'll receive your visa electronically. Our customer support team is available throughout the process to assist you with any questions."
    },
    {
      question: "How does the visa purchase process work on your website?",
      answer: "We accept all major credit and debit cards including Visa, Mastercard, and American Express. We also support PayPal, Apple Pay, and Google Pay for your convenience. All payments are processed through secure encrypted channels to ensure your financial information remains protected."
    },
    {
      question: "How does the visa purchase process work on your website?",
      answer: "Processing times vary depending on the destination country and visa type. Standard processing typically takes 3-5 business days, while expedited service can be completed within 24-48 hours for most destinations. Specific processing times are displayed during the application process for each visa type."
    },
    {
      question: "How does the visa purchase process work on your website?",
      answer: "We offer a money-back guarantee if your visa application is rejected. You'll receive a full refund of our service fee. Please note that government fees may not be refundable depending on the country's policies. Our team will also provide guidance on how to improve your application for future submissions."
    },
    {
      question: "How does the visa purchase process work on your website?",
      answer: "Yes, we offer expedited processing for most visa types. This service comes with an additional fee but can significantly reduce the processing time. The expedited option is available during the checkout process, and the specific timeframe will be displayed based on your destination country and visa type."
    },
    {
      question: "How does the visa purchase process work on your website?",
      answer: "For most e-Visas, you don't need to send your physical passport. You'll only need to upload a scan of your passport's information page. However, for certain visa types or countries, physical submission might be required. Our system will clearly indicate this requirement during the application process."
    }
  ];

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <section id="faq" className={`w-full ${isMobile ? 'mobile-section' : 'py-10'} bg-white`}>
      <div className="w-full max-w-[1400px] mx-auto px-4 lg:px-8">
        <h2 className={isMobile ? "section-title" : "text-[#04C495] text-4xl font-bold mb-8 text-center"}>FAQ</h2>
        
        <div className={`${isDesktop ? 'grid grid-cols-2 gap-6' : 'space-y-4'} w-full`}>
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-lg overflow-hidden transition-all duration-300 ${
                openQuestion === index ? 'shadow-md' : ''
              } ${isMobile ? 'card-spacing' : ''}`}
            >
              <div 
                className={`flex justify-between items-center p-5 cursor-pointer ${
                  isDesktop ? 'border border-gray-200 rounded-lg' : ''
                } ${openQuestion === index && !isDesktop ? 'bg-[#f8fafc]' : 'bg-white'}`}
                onClick={() => toggleQuestion(index)}
              >
                <h3 className="text-base font-medium text-gray-800">{item.question}</h3>
                <div className={`flex-shrink-0 ml-4 transition-transform duration-300 ${
                  openQuestion === index ? 'rotate-180' : ''
                }`}>
                  <img src={strelkaIcon} alt="Toggle" className="w-4 h-4" />
                </div>
              </div>
              
              {openQuestion === index && (
                <div className="p-5 bg-white">
                  <p className="text-gray-600 leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur. Quisque eget risus aliquam ac urna vitae amet egestas. Sagittis blandit elementum mauris sed suspendisse mattis. Adipiscing varius ullamcorper enim sed. Magna egestas justo lorem nec aliquet eu.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {!isDesktop && (
          <div className="w-full flex justify-center mt-8 mb-0">
            <img src={questionsButton} alt="More Questions" className="h-auto cursor-pointer" />
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQ; 