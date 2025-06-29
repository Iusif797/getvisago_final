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
              <span className="text-[#9B51E0] font-semibold text-lg">+91-123 456 78-90</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 16.42V19.956C21.0001 20.2092 20.9042 20.453 20.7316 20.6382C20.559 20.8234 20.3226 20.9363 20.07 20.954C19.633 20.984 19.276 21 19 21C10.163 21 3 13.837 3 5C3 4.724 3.015 4.367 3.046 3.93C3.06372 3.67744 3.17658 3.44101 3.3618 3.26841C3.54703 3.09581 3.79082 2.99989 4.044 3H7.58C7.70404 2.99987 7.8237 3.04586 7.91573 3.12902C8.00776 3.21218 8.0656 3.32658 8.078 3.45C8.101 3.68 8.122 3.863 8.142 4.002C8.34073 5.38892 8.748 6.73783 9.35 8.003C9.445 8.203 9.383 8.442 9.203 8.57L7.045 10.112C8.36445 13.1865 10.8145 15.6365 13.889 16.956L15.429 14.802C15.4919 14.714 15.5838 14.6509 15.6885 14.6237C15.7932 14.5964 15.9042 14.6068 16.002 14.653C17.267 15.2539 18.6156 15.6601 20.002 15.858C20.141 15.878 20.324 15.9 20.552 15.922C20.6752 15.9346 20.7894 15.9926 20.8724 16.0846C20.9553 16.1766 21.0012 16.2961 21.001 16.42H21Z" stroke="#9B51E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            
            <a 
              href="mailto:support@visadoc.com" 
              className="flex items-center justify-between py-4 px-6 bg-white rounded-full border-2 border-[#9B51E0] transition-all duration-300"
            >
              <span className="text-[#9B51E0] font-semibold text-lg uppercase">SUPPORT@VISADOC.COM</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#9B51E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 6L12 13L2 6" stroke="#9B51E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            
            <a 
              href="#chat" 
              className="flex items-center justify-between py-4 px-6 bg-white rounded-full border-2 border-[#9B51E0] transition-all duration-300"
            >
              <span className="text-[#9B51E0] font-semibold text-lg">CHAT HELP</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 12C21 16.971 16.971 21 12 21C10.4241 21 8.94379 20.5297 7.69173 19.7266L3 21L4.3 16.1C3.4784 14.8196 3 13.3081 3 11.7C3 6.72898 7.02898 2.7 12 2.7C16.971 2.7 21 6.72898 21 12Z" stroke="#9B51E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
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