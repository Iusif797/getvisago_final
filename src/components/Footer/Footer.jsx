import React from 'react';
import useWindowSize from '../../hooks/useWindowSize';

import phoneIcon from '../../assets/phone_footer.svg';
import emailIcon from '../../assets/e-mail_footer.svg';
import messageIcon from '../../assets/message_footer.svg';
import facebookIcon from '../../assets/facebook_logo.svg';
import twitterIcon from '../../assets/twitter_logo.svg';
import instagramIcon from '../../assets/instagram_logo.svg';
import visaIcon from '../../assets/VISA_footer.svg';
import mastercardIcon from '../../assets/MASTERCARD_footer.svg';

import phoneIconMobile from '../../assets/numbermobile_footer.svg';
import emailIconMobile from '../../assets/e-mailmobile_footer.svg';
import supportIconMobile from '../../assets/supportmobile_footer.svg';

const Footer = () => {
  const { width } = useWindowSize();
  const isDesktop = width >= 1024;

  if (isDesktop) {
    return (
      <footer id="contacts" className="w-full py-16 bg-white">
        <div className="w-full max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="flex justify-center">
            <div className="grid grid-cols-3 gap-16 w-full max-w-4xl">
              {/* Contact Us */}
              <div className="flex flex-col items-center">
                <h2 className="text-emerald-500 text-2xl font-bold mb-6 text-center">Contact us</h2>
                <div className="flex flex-col space-y-4 items-center">
                  <a href="tel:+91-123-456-78-90" className="flex items-center text-violet-600 hover:text-violet-700 transition-all duration-300 transform hover:scale-105">
                    <img src={phoneIcon} alt="Phone" className="mr-3 h-6" />
                    <span>+91-123 456 78-90</span>
                  </a>
                  <a href="mailto:support@visadoc.com" className="flex items-center text-violet-600 hover:text-violet-700 uppercase transition-all duration-300 transform hover:scale-105">
                    <img src={emailIcon} alt="Email" className="mr-3 h-6" />
                    <span>SUPPORT@VISADOC.COM</span>
                  </a>
                  <a href="#chat" className="flex items-center text-violet-600 hover:text-violet-700 transition-all duration-300 transform hover:scale-105">
                    <img src={messageIcon} alt="Chat" className="mr-3 h-6" />
                    <span>CHAT HELP</span>
                  </a>
                </div>
              </div>
              
              {/* Documents */}
              <div className="flex flex-col items-center">
                <h2 className="text-emerald-500 text-2xl font-bold mb-6 text-center">Documents</h2>
                <div className="flex flex-col space-y-3 items-center">
                  <a href="#document1" className="text-gray-700 hover:text-violet-600 transition-all duration-300 transform hover:scale-105">
                    My document 1
                  </a>
                  <a href="#document2" className="text-gray-700 hover:text-violet-600 transition-all duration-300 transform hover:scale-105">
                    My document 123
                  </a>
                  <a href="#document3" className="text-gray-700 hover:text-violet-600 transition-all duration-300 transform hover:scale-105">
                    Your document 6
                  </a>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="flex flex-col items-center">
                <h2 className="text-emerald-500 text-2xl font-bold mb-6 text-center">Social media</h2>
                <div className="flex space-x-4 justify-center mb-6">
                  <a href="#facebook" className="hover:opacity-80 transition-all duration-300 transform hover:scale-110">
                    <img src={facebookIcon} alt="Facebook" className="h-8 w-8" />
                  </a>
                  <a href="#twitter" className="hover:opacity-80 transition-all duration-300 transform hover:scale-110">
                    <img src={twitterIcon} alt="Twitter" className="h-8 w-8" />
                  </a>
                  <a href="#instagram" className="hover:opacity-80 transition-all duration-300 transform hover:scale-110">
                    <img src={instagramIcon} alt="Instagram" className="h-8 w-8" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200 flex justify-between items-center w-full max-w-4xl mx-auto">
            <div className="text-sm text-gray-500">
              <p>Address: Visago Street, 1</p>
              <p>© 2025 GETVISAGO LTD</p>
            </div>
            
            <div className="flex items-center">
              <div className="mr-4">
                <span className="text-emerald-500 font-bold">GET</span>
                <span className="text-violet-600 font-bold">VISAGO</span>
              </div>
              <div className="flex items-center space-x-2">
                <img src={visaIcon} alt="Visa" className="h-8" />
                <img src={mastercardIcon} alt="MasterCard" className="h-8" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  // Мобильная версия
  return (
    <footer id="contacts" className="w-full bg-white py-0 px-4">
      <div className="flex flex-col">
        {/* Contact Us */}
        <div className="mb-6">
          <h2 className="text-emerald-500 text-2xl font-bold mb-4">Contact us</h2>
          
          <div className="flex flex-col space-y-4 w-full">
            <a href="tel:+91-123-456-78-90" className="flex items-center justify-center text-violet-600 hover:text-violet-700 py-3 px-6 rounded-full border-2 border-violet-600 transition-all duration-300 transform hover:scale-105">
              <img src={phoneIcon} alt="Phone" className="mr-3 h-6" />
              <span>+91-123 456 78-90</span>
            </a>
            
            <a href="mailto:support@visadoc.com" className="flex items-center justify-center text-violet-600 hover:text-violet-700 uppercase py-3 px-6 rounded-full border-2 border-violet-600 transition-all duration-300 transform hover:scale-105">
              <img src={emailIcon} alt="Email" className="mr-3 h-6" />
              <span>SUPPORT@VISADOC.COM</span>
            </a>
            
            <a href="#chat" className="flex items-center justify-center text-violet-600 hover:text-violet-700 py-3 px-6 rounded-full border-2 border-violet-600 transition-all duration-300 transform hover:scale-105">
              <img src={messageIcon} alt="Chat" className="mr-3 h-6" />
              <span>CHAT HELP</span>
            </a>
          </div>
        </div>
        
        {/* Social Media */}
        <div className="mb-6">
          <h2 className="text-emerald-500 text-2xl font-bold mb-4">Social media</h2>
          <div className="flex space-x-6 mb-4">
            <a href="#facebook" className="transition-transform duration-300 transform hover:scale-110">
              <img src={facebookIcon} alt="Facebook" className="h-8 w-8" />
            </a>
            <a href="#twitter" className="transition-transform duration-300 transform hover:scale-110">
              <img src={twitterIcon} alt="Twitter" className="h-8 w-8" />
            </a>
            <a href="#instagram" className="transition-transform duration-300 transform hover:scale-110">
              <img src={instagramIcon} alt="Instagram" className="h-8 w-8" />
            </a>
          </div>
        </div>
        
        {/* Documents */}
        <div className="mb-6">
          <h2 className="text-emerald-500 text-2xl font-bold mb-4">Documents</h2>
          <div className="flex flex-col space-y-3">
            <a href="#document1" className="text-gray-700 hover:text-violet-600 transition-all duration-300 transform hover:scale-105">
              My document 1
            </a>
            <a href="#document2" className="text-gray-700 hover:text-violet-600 transition-all duration-300 transform hover:scale-105">
              My document 123
            </a>
            <a href="#document3" className="text-gray-700 hover:text-violet-600 transition-all duration-300 transform hover:scale-105">
              Your document 6
            </a>
          </div>
        </div>
        
        {/* Footer bottom */}
        <div className="w-full pt-4 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-500">
              <p>Address: Visago Street, 1</p>
              <p>© 2025 GETVISAGO LTD</p>
            </div>
            
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <img src={visaIcon} alt="Visa" className="h-6" />
                <img src={mastercardIcon} alt="MasterCard" className="h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;