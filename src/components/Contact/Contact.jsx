import React from 'react';
import { FaPhone, FaEnvelope, FaComments, FaFacebook, FaTwitter, FaInstagram, FaCcVisa } from 'react-icons/fa';
import useWindowSize from '../../hooks/useWindowSize';
import mastercardSvg from '../../assets/mastercard.svg';
import phoneIcon from '../../assets/number.svg';
import emailIcon from '../../assets/e-maiil.svg';
import chatIcon from '../../assets/chat_help.svg';

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
          <div className="flex flex-col gap-6 w-full max-w-md">
            {/* Phone */}
            <a
              href="tel:+91-123-456-78-90"
              className="relative flex items-center justify-center w-full py-4 px-8 bg-white rounded-full border-2 border-[#9B51E0] shadow-sm"
            >
              <span className="text-[#9B51E0] font-extrabold text-xl tracking-tight">+91-123 456 78-90</span>
              <img src={phoneIcon} alt="Phone" className="absolute right-6 top-1/2 -translate-y-1/2 w-8 h-8" />
            </a>
            {/* Email */}
            <a
              href="mailto:support@visadoc.com"
              className="relative flex items-center justify-center w-full py-4 px-8 bg-white rounded-full border-2 border-[#9B51E0] shadow-sm"
            >
              <span className="text-[#9B51E0] font-extrabold text-xl tracking-tight uppercase">SUPPORT@VISADOC.COM</span>
              <img src={emailIcon} alt="Email" className="absolute right-6 top-1/2 -translate-y-1/2 w-8 h-8" />
            </a>
            {/* Chat */}
            <a
              href="#chat"
              className="relative flex items-center justify-center w-full py-4 px-8 bg-white rounded-full border-2 border-[#9B51E0] shadow-sm"
            >
              <span className="text-[#9B51E0] font-extrabold text-xl tracking-tight">CHAT HELP</span>
              <img src={chatIcon} alt="Chat" className="absolute right-6 top-1/2 -translate-y-1/2 w-8 h-8" />
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