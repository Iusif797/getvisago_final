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
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="#9B51E0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-[#9B51E0] font-semibold text-lg">+91-123 456 78-90</span>
              </div>
            </a>
            
            <a 
              href="mailto:support@visadoc.com" 
              className="flex items-center justify-between py-4 px-6 bg-white rounded-full border-2 border-[#9B51E0] transition-all duration-300"
            >
              <div className="flex items-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3">
                  <rect x="2" y="4" width="20" height="16" rx="2" stroke="#9B51E0" strokeWidth="2.5"/>
                  <path d="M22 7L12 14L2 7" stroke="#9B51E0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-[#9B51E0] font-semibold text-lg uppercase">SUPPORT@VISADOC.COM</span>
              </div>
            </a>
            
            <a 
              href="#chat" 
              className="flex items-center justify-between py-4 px-6 bg-white rounded-full border-2 border-[#9B51E0] transition-all duration-300"
            >
              <div className="flex items-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3">
                  <path d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z" stroke="#9B51E0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
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