import React, { useState } from 'react';
import ukFlag from '../../assets/uk-flag.svg';
import indiaFlag from '../../assets/flag_india.svg';
import LanguageSelector from './LanguageSelector';
import { FaBars } from 'react-icons/fa';

const Header = () => {
  const [showLanguages, setShowLanguages] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const toggleLanguages = () => {
    setShowLanguages(!showLanguages);
  };

  const selectLanguage = (lang) => {
    setCurrentLanguage(lang);
    setShowLanguages(false);
  };

  return (
    <header className="flex justify-between items-center px-4 py-5 bg-white shadow-md sticky top-0 z-50">
      <div>
        <h1 className="text-xl font-bold tracking-wide">
          <span className="bg-gradient-to-r from-visa-green to-visa-purple bg-clip-text text-transparent">GET</span>
          <span className="text-visa-purple font-extrabold">VISAGO</span>
        </h1>
      </div>
      <div className="flex items-center gap-6">
        <LanguageSelector 
          showLanguages={showLanguages}
          currentLanguage={currentLanguage}
          toggleLanguages={toggleLanguages}
          selectLanguage={selectLanguage}
        />
        <FaBars className="text-visa-purple text-2xl cursor-pointer" size={24} />
      </div>
    </header>
  );
};

export default Header; 