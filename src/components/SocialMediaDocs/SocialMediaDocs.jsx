import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaCcVisa } from 'react-icons/fa';
import useWindowSize from '../../hooks/useWindowSize';
import mastercardSvg from '../../assets/mastercard.svg';

const SocialMediaDocs = () => {
  const { width } = useWindowSize();
  const isDesktop = width >= 1024;

  // Компонент скрыт на десктопе, так как эта информация отображается в компоненте Contact
  if (isDesktop) {
    return null;
  }

  return (
    <section className="w-full py-8 bg-[#F6F7FA]">
      <div className="w-full max-w-[1400px] mx-auto px-4 flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-md">
          <div className="flex flex-col items-center">
            <h2 className="text-emerald-500 text-2xl font-bold mb-4">Documents</h2>
            <div className="flex flex-col space-y-3 items-center">
              <a href="/documents/my-document-1" className="text-gray-700 hover:text-violet-600">
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

          <div className="flex flex-col items-center">
            <h2 className="text-emerald-500 text-2xl font-bold mb-4">Social media</h2>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 hover:bg-violet-200 transition-all duration-300">
                <FaFacebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 hover:bg-violet-200 transition-all duration-300">
                <FaTwitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 hover:bg-violet-200 transition-all duration-300">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col items-center w-full max-w-md">
          <div className="flex items-center space-x-8 justify-center mb-4">
            <FaCcVisa size={48} className="text-blue-700" />
            <div className="w-[48px] h-[48px] flex items-center justify-center">
              <img src={mastercardSvg} alt="MasterCard" className="w-full h-full" />
            </div>
          </div>

          <div className="text-sm text-gray-500 text-center">
            <p>© 2023 GETVISAGO</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaDocs; 