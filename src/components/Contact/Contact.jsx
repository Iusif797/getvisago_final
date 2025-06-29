import React from 'react';
import { FaPhone, FaEnvelope, FaComments, FaFacebook, FaTwitter, FaInstagram, FaCcVisa } from 'react-icons/fa';
import useWindowSize from '../../hooks/useWindowSize';
import mastercardSvg from '../../assets/mastercard.svg';

const Contact = () => {
  const { width } = useWindowSize();
  const isDesktop = width >= 1024;

  // Мобильная версия
  if (!isDesktop) {
    return (
      <section id="contacts" className="w-full py-10 bg-gradient-to-b from-gray-50 to-white">
        <div className="w-full max-w-[1400px] mx-auto px-4 lg:px-8 flex flex-col items-center">
          <div className="mb-6 text-center">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-[#04C495] to-[#9B51E0] bg-clip-text text-transparent">
              GETVISAGO
            </h1>
          </div>
          
          <h2 className="section-title mb-8">Contact us</h2>
          
          <div className="flex flex-col gap-4 w-full max-w-md">
            <a 
              href="tel:+91-123-456-78-90" 
              className="flex items-center justify-between py-4 px-6 bg-white rounded-full border-2 border-[#9B51E0] transition-all duration-300"
            >
              <div className="flex items-center">
                <div className="w-10 h-10 flex items-center justify-center mr-3">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.0002 15.4999V18.3333C20.0013 18.6554 19.9318 18.9741 19.7968 19.2649C19.6617 19.5558 19.4646 19.8103 19.2206 20.0104C18.9765 20.2104 18.6921 20.3503 18.3879 20.4189C18.0838 20.4875 17.7686 20.4827 17.4669 20.4049C14.9408 19.8057 12.5779 18.6789 10.5669 17.1049C8.69954 15.6571 7.1258 13.8712 5.92521 11.8333C5.00021 9.62495 4.47271 7.24495 4.36688 4.83328C4.31497 4.53163 4.33355 4.22307 4.42127 3.93004C4.50899 3.637 4.66323 3.36645 4.87223 3.13512C5.08124 2.90378 5.33979 2.71707 5.62982 2.58574C5.91986 2.45441 6.23577 2.38201 6.55855 2.37495H9.42521C9.98435 2.36986 10.5269 2.56566 10.9553 2.92479C11.3837 3.28392 11.6681 3.78145 11.7502 4.32495C11.8987 5.37495 12.1719 6.40828 12.5669 7.39995C12.7385 7.85003 12.7857 8.33642 12.7028 8.80919C12.6198 9.28197 12.4096 9.72036 12.0985 10.0749L10.9335 11.2333C12.0402 13.1725 13.6677 14.7833 15.6252 15.8749L16.7902 14.7166C17.1502 14.4094 17.5948 14.2021 18.0743 14.1201C18.5538 14.0381 19.0471 14.0846 19.5035 14.2533C20.5085 14.6433 21.5552 14.9133 22.6252 15.0583C23.1801 15.1414 23.6869 15.4329 24.0486 15.8713C24.4103 16.3097 24.6023 16.8639 24.5835 17.4316L24.0002 15.4999H20.0002Z" fill="#9B51E0" stroke="#9B51E0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-[#9B51E0] font-semibold text-lg">+91-123 456 78-90</span>
              </div>
            </a>
            
            <a 
              href="mailto:support@visadoc.com" 
              className="flex items-center justify-between py-4 px-6 bg-white rounded-full border-2 border-[#9B51E0] transition-all duration-300"
            >
              <div className="flex items-center">
                <div className="w-10 h-10 flex items-center justify-center mr-3">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" fill="#9B51E0" stroke="#9B51E0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 6L12 13L2 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-[#9B51E0] font-semibold text-lg uppercase">SUPPORT@VISADOC.COM</span>
              </div>
            </a>
            
            <a 
              href="#chat" 
              className="flex items-center justify-between py-4 px-6 bg-white rounded-full border-2 border-[#9B51E0] transition-all duration-300"
            >
              <div className="flex items-center">
                <div className="w-10 h-10 flex items-center justify-center mr-3">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" fill="#9B51E0" stroke="#9B51E0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 9H16" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 13H14" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-[#9B51E0] font-semibold text-lg">CHAT HELP</span>
              </div>
            </a>
          </div>
        </div>
      </section>
    );
  }

  // Десктопная версия
  return (
    <section id="contacts" className="w-full py-16 bg-white">
      <div className="w-full max-w-[1400px] mx-auto px-4 lg:px-8">
        <div className="flex justify-center">
          <div className="grid grid-cols-3 gap-16 w-full max-w-4xl">
            {/* Contact Us */}
            <div className="flex flex-col items-center">
              <h2 className="text-emerald-500 text-2xl font-bold mb-6 text-center">Contact us</h2>
              <div className="flex flex-col space-y-4 items-center">
                <a href="tel:+91-123-456-78-90" className="flex items-center text-violet-600 hover:text-violet-700">
                  <FaPhone className="mr-3" />
                  <span>+91-123 456 78-90</span>
                </a>
                <a href="mailto:support@visadoc.com" className="flex items-center text-violet-600 hover:text-violet-700 uppercase">
                  <FaEnvelope className="mr-3" />
                  <span>support@visadoc.com</span>
                </a>
                <a href="#chat" className="flex items-center text-violet-600 hover:text-violet-700">
                  <FaComments className="mr-3" />
                  <span>CHAT HELP</span>
                </a>
              </div>
            </div>
            
            {/* Documents */}
            <div className="flex flex-col items-center">
              <h2 className="text-emerald-500 text-2xl font-bold mb-6 text-center">Documents</h2>
              <div className="flex flex-col space-y-3 items-center">
                <a href="#document1" className="text-gray-700 hover:text-violet-600">
                  My document 1
                </a>
                <a href="#document2" className="text-gray-700 hover:text-violet-600">
                  My document 123
                </a>
                <a href="#document3" className="text-gray-700 hover:text-violet-600">
                  Your document 6
                </a>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="flex flex-col items-center">
              <h2 className="text-emerald-500 text-2xl font-bold mb-6 text-center">Social media</h2>
              <div className="flex space-x-4 justify-center">
                <a href="#facebook" className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 hover:bg-violet-200 transition-all duration-300">
                  <FaFacebook size={20} />
                </a>
                <a href="#twitter" className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 hover:bg-violet-200 transition-all duration-300">
                  <FaTwitter size={20} />
                </a>
                <a href="#instagram" className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 hover:bg-violet-200 transition-all duration-300">
                  <FaInstagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col items-center">
          <div className="text-sm text-gray-500 mb-6 text-center">
            <p>Address: 123 Visa Street, Digital City</p>
            <p>© 2023 GETVISAGO</p>
          </div>
          <div className="flex items-center space-x-8 justify-center">
            <FaCcVisa size={60} className="text-blue-700" />
            <div className="w-[60px] h-[60px] flex items-center justify-center">
              <img src={mastercardSvg} alt="MasterCard" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 