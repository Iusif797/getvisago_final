import React from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import { FaPhoneAlt, FaEnvelope, FaRegComments } from 'react-icons/fa';

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

// Используем тонкие иконки, как на макете

const Footer = () => {
  const { width } = useWindowSize();
  const isDesktop = width >= 1024;

  if (isDesktop) {
    return (
      <footer id="contacts" className="w-full py-16 bg-[#F6F7FA]">
        <div className="w-full max-w-[1400px] mx-auto px-4">
          <div className="flex justify-center">
            <div className="grid grid-cols-3 gap-16 w-full">
              {/* Contact Us */}
              <div className="flex flex-col items-center">
                <h2 className="text-emerald-500 text-2xl font-bold mb-6 text-center">Contact us</h2>
                <div className="flex flex-col space-y-4 items-center">
                  <a href="tel:+91-123-456-78-90" className="flex items-center text-violet-600 hover:text-violet-700 transition-all duration-300 transform hover:scale-105">
                    <img src={phoneIcon} alt="Phone" className="mr-3 h-6" />
                    <span>+91-123 456 78-90</span>
                  </a>
                  <a href="mailto:support@getvisago.com" className="flex items-center text-violet-600 hover:text-violet-700 uppercase transition-all duration-300 transform hover:scale-105">
                    <img src={emailIcon} alt="Email" className="mr-3 h-6" />
                    <span>SUPPORT@GETVISAGO.COM</span>
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
                  <a href="/documents/terms" className="text-gray-700 hover:text-violet-600 transition-all duration-300 transform hover:scale-105">
                    Terms & Conditions
                  </a>
                  <a href="/documents/my-document-1" className="text-gray-700 hover:text-violet-600 transition-all duration-300 transform hover:scale-105">
                    Privacy Policy
                  </a>
                  <a href="/documents/refund-policy" className="text-gray-700 hover:text-violet-600 transition-all duration-300 transform hover:scale-105">
                    Refund & Cancellation Policy
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
                  <a href="#instagram" className="hover:opacity-80 transition-all duration-300 transform hover:scale-110">
                    <img src={instagramIcon} alt="Instagram" className="h-8 w-8" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 flex justify-between items-center w-full mx-auto">
            <div className="text-sm text-gray-500">
              <p>© 2025 GetVisaGo Ltd (Company No. 16470281, England & Wales)</p>
              <p>Registered Office: 3rd Floor, 86–90 Paul Street, London, EC2A 4NE, United Kingdom</p>
              <p>Not a government website — we are a private visa assistance service.</p>
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
    <footer id="contacts" className="w-full bg-white rounded-t-[20px] py-0 px-4 pb-20">
      <div className="flex flex-col">
        {/* Brand */}
        <div className="mb-6 mt-6">
          <h2 className="text-2xl font-extrabold bg-gradient-to-r from-[#00C6A2] to-[#9B51E0] bg-clip-text text-transparent">
            GETVISAGO
          </h2>
        </div>
        {/* Contact Us */}
        <div className="mb-6">
          <h2 className="text-2xl font-extrabold mb-4 bg-gradient-to-r from-[#00C6A2] to-[#9B51E0] bg-clip-text text-transparent">Contact us</h2>

          <div className="flex flex-col space-y-6 w-full">
            {/* Phone */}
            <a href="tel:+91-123-456-78-90" className="group flex items-center justify-between w-full py-4 pl-8 pr-6 bg-white rounded-full border-2 border-[#9B51E0] shadow-sm">
              <span className="text-[#9B51E0] font-extrabold text-lg tracking-tight">+91-123 456 78-90</span>
              <FaPhoneAlt size={26} className="text-[#9B51E0] transition-transform duration-300 group-hover:scale-110" />
            </a>

            {/* Email */}
            <a href="mailto:support@getvisago.com" className="group flex items-center justify-between w-full py-4 pl-8 pr-6 bg-white rounded-full border-2 border-[#9B51E0] shadow-sm">
              <span className="text-[#9B51E0] font-extrabold text-lg tracking-tight uppercase">SUPPORT@GETVISAGO.COM</span>
              <FaEnvelope size={26} className="text-[#9B51E0] transition-transform duration-300 group-hover:scale-110" />
            </a>

            {/* Chat */}
            <a href="#chat" className="group flex items-center justify-between w-full py-4 pl-8 pr-6 bg-white rounded-full border-2 border-[#9B51E0] shadow-sm">
              <span className="text-[#9B51E0] font-extrabold text-lg tracking-tight">CHAT HELP</span>
              <FaRegComments size={26} className="text-[#9B51E0] transition-transform duration-300 group-hover:scale-110" />
            </a>
          </div>
        </div>

        {/* Social Media */}
        <div className="mb-6">
          <h2 className="text-2xl font-extrabold mb-4 bg-gradient-to-r from-[#00C6A2] to-[#9B51E0] bg-clip-text text-transparent">Social media</h2>
          <div className="flex space-x-6 mb-4">
            <a href="#facebook" className="transition-transform duration-300 transform hover:scale-110">
              <img src={facebookIcon} alt="Facebook" className="h-8 w-8" />
            </a>
            <a href="#instagram" className="transition-transform duration-300 transform hover:scale-110">
              <img src={instagramIcon} alt="Instagram" className="h-8 w-8" />
            </a>
          </div>
        </div>

        {/* Documents */}
        <div className="mb-6">
          <h2 className="text-2xl font-extrabold mb-4 bg-gradient-to-r from-[#00C6A2] to-[#9B51E0] bg-clip-text text-transparent">Documents</h2>
          <div className="flex flex-col space-y-3">
            <a href="/documents/terms" className="text-gray-700 hover:text-violet-600 transition-all duration-300 transform hover:scale-105">
              Terms & Conditions
            </a>
            <a href="/documents/my-document-1" className="text-gray-700 hover:text-violet-600 transition-all duration-300 transform hover:scale-105">
              Privacy Policy
            </a>
            <a href="/documents/refund-policy" className="text-gray-700 hover:text-violet-600 transition-all duration-300 transform hover:scale-105">
              Refund & Cancellation Policy
            </a>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="w-full pt-4 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-500">
              <p>© 2025 GetVisaGo Ltd (Company No. 16470281, England & Wales)</p>
              <p>Registered Office: 3rd Floor, 86–90 Paul Street, London, EC2A 4NE, United Kingdom</p>
              <p>Not a government website — we are a private visa assistance service.</p>
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