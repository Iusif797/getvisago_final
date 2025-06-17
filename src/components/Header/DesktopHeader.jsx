import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

  // Обработчик для скролла к FAQ
  const handleFAQClick = (e) => {
    e.preventDefault();
    const faqElement = document.getElementById('faq');
    if (faqElement) {
      faqElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Если элемент не найден на текущей странице, перенаправляем на главную с якорем
      window.location.href = '/#faq';
    }
  };

  // Обработчик для скролла к Contacts
  const handleContactsClick = (e) => {
    e.preventDefault();
    const contactsElement = document.getElementById('contacts');
    if (contactsElement) {
      contactsElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Если элемент не найден на текущей странице, перенаправляем на главную с якорем
      window.location.href = '/#contacts';
    }
  };

  return (
    <header className="flex w-full bg-white shadow-md sticky top-0 z-50">
      <div className="w-full flex justify-between items-center py-4 px-8 lg:px-16 xl:px-24">
        {/* Логотип */}
        <div className="flex items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-[#00BFA5] font-bold text-2xl">GET</span>
              <span className="text-[#7950ED] font-bold text-2xl">VISAGO</span>
            </Link>
          </div>
        </div>
        
        {/* Навигация */}
        <nav className="flex items-center space-x-8">
          <Link to="/" className="text-visa-gray-800 hover:text-visa-purple transition-colors">
            Home
          </Link>
          <Link to="/visas" className="text-visa-gray-800 hover:text-visa-purple transition-colors">
            Visas
          </Link>
          <Link to="/visa-status" className="text-visa-gray-800 hover:text-visa-purple transition-colors">
            Visa Status
          </Link>
          <Link to="/blog" className="text-visa-gray-800 hover:text-visa-purple transition-colors">
            Blog
          </Link>
          <a href="/#faq" onClick={handleFAQClick} className="text-visa-gray-800 hover:text-visa-purple transition-colors cursor-pointer">
            FAQ
          </a>
          <a href="/#contacts" onClick={handleContactsClick} className="text-visa-gray-800 hover:text-visa-purple transition-colors cursor-pointer">
            Contacts
          </a>
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
          
          <Link to="/get-visa" className="flex items-center bg-[#00BFA5] text-white py-2 px-6 rounded-full font-semibold gap-2">
            GET VISA
            <FaIdCard className="text-white" size={18} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default DesktopHeader; 