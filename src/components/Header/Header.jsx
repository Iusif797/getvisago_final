import React, { useState } from 'react';
import ukFlag from '../../assets/uk-flag.svg';
import indiaFlag from '../../assets/flag_india.svg';
import logoGetVisago from '../../assets/logo_getvisago.svg';
import LanguageSelector from './LanguageSelector';
import { FaBars } from 'react-icons/fa';

const Header = () => {
  const [showLanguages, setShowLanguages] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const toggleLanguages = () => {
    setShowLanguages(!showLanguages);
  };

  const selectLanguage = (lang) => {
    console.log(`Selected language: ${lang}`);
    setCurrentLanguage(lang);
    setShowLanguages(false);
  };

  return (
    <header className="header">
      <div className="flex items-center pl-6">
        <img src={logoGetVisago} alt="GETVISAGO" className="h-6" />
      </div>
      
      <div className="flex items-center">
        <LanguageSelector 
          showLanguages={showLanguages}
          currentLanguage={currentLanguage}
          toggleLanguages={toggleLanguages}
          selectLanguage={selectLanguage}
        />
        <button className="ml-4 hover:bg-visa-gray-100 rounded-full transition-colors">
          <FaBars size={32} className="text-visa-gray-800" />
        </button>
      </div>
    </header>
  );
};

export default Header; 