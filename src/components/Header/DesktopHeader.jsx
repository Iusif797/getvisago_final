import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ukFlag from '../../assets/uk-flag.svg';
import indianFlag from '../../assets/flag_india.svg';
import logoGetVisago from '../../assets/logo_getvisago.svg';
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
    <header className="w-full sticky top-0 z-50 bg-[#F6F7FA] py-3 px-0">
      <div className="w-full max-w-[1400px] mx-auto bg-white rounded-full py-3 px-4 flex justify-between items-center shadow-sm">
        {/* Логотип */}
        <div className="flex items-center pl-2">
          <Link to="/" className="flex items-center">
            <span className="text-[#00C6A2] font-bold text-2xl">GET</span>
            <span className="text-[#9B51E0] font-bold text-2xl">VISAGO</span>
          </Link>
        </div>

        {/* Правая часть (навигация, язык, кнопка) */}
        <div className="flex items-center">
          {/* Навигация */}
          <nav className="flex items-center space-x-6 mr-6">
            <Link to="/" className="text-gray-800 hover:text-[#9B51E0] transition-colors">
              Home
            </Link>
            <Link to="/visas" className="text-gray-800 hover:text-[#9B51E0] transition-colors">
              Visas
            </Link>
            <Link to="/visa-status" className="text-gray-800 hover:text-[#9B51E0] transition-colors">
              Visa Status
            </Link>
            <Link to="/about" className="text-gray-800 hover:text-[#9B51E0] transition-colors">
              About Us
            </Link>
            <Link to="/blog" className="text-gray-800 hover:text-[#9B51E0] transition-colors">
              Blog
            </Link>
            <a href="/#faq" onClick={handleFAQClick} className="text-gray-800 hover:text-[#9B51E0] transition-colors cursor-pointer">
              FAQ
            </a>
            <a href="/#contacts" onClick={handleContactsClick} className="text-gray-800 hover:text-[#9B51E0] transition-colors cursor-pointer">
              Contacts
            </a>
          </nav>

          {/* Язык */}
          <div className="cursor-pointer relative mr-4">
            <div onClick={toggleLanguage} className="flex items-center">
              <img src={language === 'en' ? ukFlag : indianFlag} alt="Language" className="w-8 h-8 rounded-full" />
            </div>

            {showLanguageDropdown && (
              <div className="absolute top-full right-0 mt-2 bg-white rounded-md shadow-lg py-2 px-2 z-50 min-w-[120px]">
                <div
                  className={`flex items-center gap-2 p-2 rounded cursor-pointer hover:bg-gray-100 ${language === 'en' ? 'bg-gray-100' : ''}`}
                  onClick={() => selectLanguage('en')}
                >
                  <img src={ukFlag} alt="English" className="w-5 h-5 rounded-full" />
                  <span className="text-sm">English</span>
                </div>
                <div
                  className={`flex items-center gap-2 p-2 rounded cursor-pointer hover:bg-gray-100 ${language === 'hi' ? 'bg-gray-100' : ''}`}
                  onClick={() => selectLanguage('hi')}
                >
                  <img src={indianFlag} alt="Hindi" className="w-5 h-5 rounded-full" />
                  <span className="text-sm">Hindi</span>
                </div>
              </div>
            )}
          </div>

          {/* Кнопка GET VISA */}
          <Link to="/get-visa" className="flex items-center bg-[#00C6A2] text-white py-2 px-6 rounded-full font-bold">
            GET VISA <FaIdCard className="ml-2 text-white" size={18} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default DesktopHeader;