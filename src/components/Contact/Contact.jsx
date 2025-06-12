import React from 'react';
import { FaPhone, FaEnvelope, FaComments, FaFacebook, FaTwitter, FaInstagram, FaCcVisa, FaCcMastercard } from 'react-icons/fa';
import useWindowSize from '../../hooks/useWindowSize';
import mastercardSvg from '../../assets/mastercard.svg';

const Contact = () => {
  const { width } = useWindowSize();
  const isDesktop = width >= 1024;

  // Мобильная версия
  if (!isDesktop) {
    return (
      <section className="w-full py-10 bg-gradient-to-b from-gray-50 to-white">
        <div className="w-full max-w-[1400px] mx-auto px-4 lg:px-8 flex flex-col items-center">
          <div className="mb-6 text-center">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-emerald-500 bg-clip-text text-transparent">
              GETVISAGO
            </h1>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Contact us</h2>
          
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center">
            <a 
              href="tel:+911234567890" 
              className="flex items-center justify-center gap-4 py-4 px-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] group"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-violet-500 to-violet-600 flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-all duration-300">
                <FaPhone size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Call us</p>
                <p className="text-lg font-semibold text-gray-800">+91 123 456 7890</p>
              </div>
            </a>
            
            <a 
              href="mailto:support@visadoc.com" 
              className="flex items-center justify-center gap-4 py-4 px-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] group"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-all duration-300">
                <FaEnvelope size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email us</p>
                <p className="text-lg font-semibold text-gray-800">support@visadoc.com</p>
              </div>
            </a>
            
            <a 
              href="#chat" 
              className="flex items-center justify-center gap-4 py-4 px-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] group"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-violet-500 to-emerald-400 flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-all duration-300">
                <FaComments size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Live chat</p>
                <p className="text-lg font-semibold text-gray-800">Chat with support</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    );
  }

  // Десктопная версия
  return (
    <section className="w-full py-16 bg-white">
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
            <img src={mastercardSvg} alt="MasterCard" className="h-[60px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 