import React from 'react';
import ukFlag from '../../assets/uk-flag.svg';
import indiaFlag from '../../assets/flag_india.svg';

const LanguageSelector = ({ showLanguages, currentLanguage, toggleLanguages, selectLanguage }) => {
  return (
    <div className="relative">
      <img 
        src={currentLanguage === 'en' ? ukFlag : indiaFlag} 
        alt="Select Language" 
        className="w-8 h-8 rounded-full cursor-pointer hover:shadow-sm transition-shadow"
        onClick={toggleLanguages}
      />
      
      {showLanguages && (
        <div className="absolute right-0 top-full mt-2 bg-white rounded-lg shadow-card p-2 min-w-[150px] z-20 animate-slide-in">
          <div 
            className={`flex items-center gap-2 p-2 rounded-md cursor-pointer transition-colors hover:bg-visa-gray-100 ${currentLanguage === 'en' ? 'bg-visa-gray-100' : ''}`}
            onClick={() => selectLanguage('en')}
          >
            <img src={ukFlag} alt="English" className="w-6 h-6 rounded-full" />
            <span className="text-sm font-medium">English</span>
          </div>
          <div 
            className={`flex items-center gap-2 p-2 rounded-md cursor-pointer transition-colors hover:bg-visa-gray-100 ${currentLanguage === 'hi' ? 'bg-visa-gray-100' : ''}`}
            onClick={() => selectLanguage('hi')}
          >
            <img src={indiaFlag} alt="Hindi" className="w-6 h-6 rounded-full" />
            <span className="text-sm font-medium">Hindi</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector; 