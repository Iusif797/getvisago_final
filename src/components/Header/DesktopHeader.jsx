import React, { useState } from 'react';
import ukFlag from '../../assets/uk-flag.svg';
import indianFlag from '../../assets/flag_india.svg';
import { FaIdCard } from 'react-icons/fa';

const DesktopHeader = () => {
  const [language, setLanguage] = useState('en');
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  const toggleLanguage = () => {
    setShowLanguageDropdown(!showLanguageDropdown);
  };

  const selectLanguage = (lang) => {
    setLanguage(lang);
    setShowLanguageDropdown(false);
  };

  return (
    <header className="flex w-full bg-white shadow-md sticky top-0 z-50">
      <div className="w-full flex justify-between items-center py-4 px-8 lg:px-16 xl:px-24">
        {/* Логотип */}
        <div className="flex items-center">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-[#00BFA5] font-bold text-2xl">GET</span>
              <span className="text-[#7950ED] font-bold text-2xl">VISAGO</span>
            </a>
          </div>
        </div>
        
        {/* Навигация */}
        <nav className="flex items-center">
          <ul className="flex space-x-10">
            <li className="list-none">
              <a href="/visa/saudi-arabia" className="text-visa-gray-800 font-medium hover:text-visa-purple transition-colors">
                Visas <span className="text-xs">&#9662;</span>
              </a>
            </li>
            <li className="list-none">
              <a href="#" className="text-visa-gray-800 font-medium hover:text-visa-purple transition-colors">
                Visa Status
              </a>
            </li>
            <li className="list-none">
              <a href="#" className="text-visa-gray-800 font-medium hover:text-visa-purple transition-colors">
                Contacts
              </a>
            </li>
          </ul>
        </nav>
        
        {/* Правая часть (язык и кнопка) */}
        <div className="flex items-center space-x-6">
          <div className="cursor-pointer relative">
            <div onClick={toggleLanguage} className="flex items-center">
              <img src={language === 'en' ? ukFlag : indianFlag} alt="Language" className="w-9 h-9 rounded-full" />
              <span className="text-xs ml-1">&#9662;</span>
            </div>
            
            {showLanguageDropdown && (
              <div className="absolute top-full right-0 mt-2 bg-white rounded-md shadow-lg py-2 px-2 z-50 min-w-[120px]">
                <div 
                  className={`flex items-center gap-2 p-2 rounded cursor-pointer hover:bg-visa-gray-100 ${language === 'en' ? 'bg-visa-gray-100' : ''}`}
                  onClick={() => selectLanguage('en')}
                >
                  <img src={ukFlag} alt="English" className="w-5 h-5 rounded-full" />
                  <span className="text-sm">English</span>
                </div>
                <div 
                  className={`flex items-center gap-2 p-2 rounded cursor-pointer hover:bg-visa-gray-100 ${language === 'hi' ? 'bg-visa-gray-100' : ''}`}
                  onClick={() => selectLanguage('hi')}
                >
                  <img src={indianFlag} alt="Hindi" className="w-5 h-5 rounded-full" />
                  <span className="text-sm">Hindi</span>
                </div>
              </div>
            )}
          </div>
          
          <button className="flex items-center bg-[#00BFA5] text-white py-2 px-6 rounded-full font-semibold gap-2">
            GET VISA
            <FaIdCard className="text-white" size={18} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default DesktopHeader; 