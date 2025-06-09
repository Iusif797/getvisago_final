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
    <header className="header">
      <div>
        <h1 className="logo-text">
          <span className="logo-gradient">GET</span>
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