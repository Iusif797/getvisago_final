import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ukFlag from '../../assets/uk-flag.svg';
import indiaFlag from '../../assets/flag_india.svg';
import logoGetVisago from '../../assets/logo_getvisago.svg';
import LanguageSelector from './LanguageSelector';
import { FaBars, FaTimes, FaAngleRight, FaFacebook, FaTwitter, FaInstagram, FaQuestionCircle, FaHome } from 'react-icons/fa';
import DesktopHeader from './DesktopHeader';
import useWindowSize from '../../hooks/useWindowSize';

const Header = () => {
  const { width } = useWindowSize();
  const isDesktop = width >= 1024;
  const [showLanguages, setShowLanguages] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleLanguages = () => {
    setShowLanguages(!showLanguages);
  };

  const selectLanguage = (lang) => {
    console.log(`Selected language: ${lang}`);
    setCurrentLanguage(lang);
    setShowLanguages(false);
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
    setIsAnimating(true);
    
    // Блокировать скролл страницы при открытом меню
    if (!showMobileMenu) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('menu-open');
    } else {
      document.body.style.overflow = '';
      document.body.classList.remove('menu-open');
    }
  };

  const closeMobileMenu = () => {
    setIsAnimating(true);
    setShowMobileMenu(false);
    document.body.style.overflow = '';
    document.body.classList.remove('menu-open');
  };
  
  // Сбрасываем состояние анимации
  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 300); // Длительность анимации
      
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  // Обработчик для скролла к FAQ
  const handleFAQClick = (e) => {
    e.preventDefault();
    closeMobileMenu();
    
    // Небольшая задержка для закрытия меню перед скроллом
    setTimeout(() => {
      const faqElement = document.getElementById('faq');
      if (faqElement) {
        faqElement.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Если элемент не найден на текущей странице, перенаправляем на главную с якорем
        window.location.href = '/#faq';
      }
    }, 300);
  };

  // Обработчик для скролла к Contacts
  const handleContactsClick = (e) => {
    e.preventDefault();
    closeMobileMenu();
    
    // Небольшая задержка для закрытия меню перед скроллом
    setTimeout(() => {
      const contactsElement = document.getElementById('contacts');
      if (contactsElement) {
        contactsElement.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Если элемент не найден на текущей странице, перенаправляем на главную с якорем
        window.location.href = '/#contacts';
      }
    }, 300);
  };

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Get Visa', path: '/get-visa' },
    { title: 'Visa Status', path: '/visa-status' },
    { title: 'Contacts', path: '/contacts' },
  ];

  if (isDesktop) {
    return <DesktopHeader />;
  }

  return (
    <>
      <header className="mx-3 my-2 bg-[#F6F7FA] rounded-full shadow-md flex items-center justify-between py-1.5 px-3 z-40">
        <div className="flex items-center">
          <Link to="/">
            <img src={logoGetVisago} alt="GETVISAGO" className="h-5" />
          </Link>
        </div>
        
        <div className="flex items-center">
          <div className="scale-90">
            <LanguageSelector 
              showLanguages={showLanguages}
              currentLanguage={currentLanguage}
              toggleLanguages={toggleLanguages}
              selectLanguage={selectLanguage}
            />
          </div>
          <button 
            onClick={toggleMobileMenu} 
            className="ml-2 hover:bg-visa-gray-100 rounded-full transition-colors w-10 h-10 flex items-center justify-center"
          >
            <FaBars size={28} className="text-visa-gray-800" />
          </button>
        </div>
      </header>

      {/* Затемнение при открытом меню */}
      {(showMobileMenu || isAnimating) && (
        <div 
          className={`fixed inset-0 bg-black/30 z-50 transition-opacity duration-300 menu-backdrop ${
            showMobileMenu ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={closeMobileMenu}
        ></div>
      )}

      {/* Мобильное меню */}
      <div 
        className={`fixed top-0 right-0 bottom-0 z-50 w-72 bg-white shadow-lg transform transition-transform duration-300 flex flex-col ${
          showMobileMenu ? 'translate-x-0 menu-panel-enter' : 'translate-x-full menu-panel-exit'
        } ${isAnimating || showMobileMenu ? 'block' : 'hidden'}`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-gradient-to-r from-[#00BFA5]/10 to-[#7950ED]/10">
          <div className="flex items-center">
            <span className="font-semibold text-lg text-[#7950ED]">Menu</span>
          </div>
          <button 
            onClick={closeMobileMenu}
            className="p-2 rounded-full hover:bg-white/80 text-visa-gray-800"
          >
            <FaTimes size={20} />
          </button>
        </div>

        <nav className="py-2 flex-grow overflow-y-auto">
          <ul className="space-y-1">
            <li>
              <Link 
                to="/" 
                className="flex justify-between items-center px-5 py-3 border-b border-gray-100 text-visa-gray-800 hover:bg-violet-50"
                onClick={closeMobileMenu}
              >
                <div className="flex items-center">
                  <FaHome className="text-[#00BFA5] mr-2" />
                  <span>Home</span>
                </div>
                <FaAngleRight className="text-visa-gray-400" />
              </Link>
            </li>
            <li>
              <Link 
                to="/visas" 
                className="flex justify-between items-center px-5 py-3 border-b border-gray-100 text-visa-gray-800 hover:bg-violet-50"
                onClick={closeMobileMenu}
              >
                <span>Visas</span>
                <FaAngleRight className="text-visa-gray-400" />
              </Link>
            </li>
            <li>
              <Link 
                to="/visa-status" 
                className="flex justify-between items-center px-5 py-3 border-b border-gray-100 text-visa-gray-800 hover:bg-violet-50"
                onClick={closeMobileMenu}
              >
                <span>Visa Status</span>
                <FaAngleRight className="text-visa-gray-400" />
              </Link>
            </li>
            <li>
              <Link 
                to="/blog" 
                className="flex justify-between items-center px-5 py-3 border-b border-gray-100 text-visa-gray-800 hover:bg-violet-50"
                onClick={closeMobileMenu}
              >
                <span>Blog</span>
                <FaAngleRight className="text-visa-gray-400" />
              </Link>
            </li>
            <li>
              <a 
                href="/#contacts" 
                className="flex justify-between items-center px-5 py-3 border-b border-gray-100 text-visa-gray-800 hover:bg-violet-50"
                onClick={handleContactsClick}
              >
                <span>Contacts</span>
                <FaAngleRight className="text-visa-gray-400" />
              </a>
            </li>
            <li>
              <a 
                href="/#faq" 
                className="flex justify-between items-center px-5 py-3 border-b border-gray-100 text-visa-gray-800 hover:bg-violet-50"
                onClick={handleFAQClick}
              >
                <div className="flex items-center">
                  <FaQuestionCircle className="text-[#00BFA5] mr-2" />
                  <span>FAQ</span>
                </div>
                <FaAngleRight className="text-visa-gray-400" />
              </a>
            </li>
          </ul>
          
          <div className="px-5 py-4 mt-4">
            <Link 
              to="/get-visa" 
              className="block w-full bg-[#00BFA5] text-white py-3 px-4 rounded-full font-medium text-center shadow-sm hover:bg-[#00BFA5]/90 transition-all"
              onClick={closeMobileMenu}
            >
              GET VISA
            </Link>
          </div>
        </nav>
        
        {/* Социальные сети и копирайт */}
        <div className="mt-auto border-t border-gray-200 py-4 px-5">
          <div className="flex justify-center space-x-4 mb-3">
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
          <div className="text-sm text-center text-visa-gray-500">
            © 2025 GETVISAGO LTD
          </div>
        </div>
      </div>
    </>
  );
};

export default Header; 