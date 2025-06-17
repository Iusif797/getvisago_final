import React, { useState, useEffect } from 'react';
import { FaUserCircle, FaBars, FaCommentAlt, FaQuestionCircle, FaPhoneAlt } from 'react-icons/fa';
import useWindowSize from '../../hooks/useWindowSize';
import visaLogo from '../../assets/visa-logo.png';
import mastercardLogo from '../../assets/mastercard-logo.png';

const Footer = () => {
  const { width } = useWindowSize();
  const isDesktop = width >= 1024;
  const [activeNav, setActiveNav] = useState('account');
  const [showNav, setShowNav] = useState(false);
  
  const handleNavClick = (navItem) => {
    setActiveNav(navItem);
  };
  
  // Временно отключаем мобильное меню на всех страницах
  return null;
  
  /* Закомментировано для временного отключения мобильного меню
  useEffect(() => {
    if (isDesktop) return; // Не применяем эту логику для десктопа
    
    const handleScroll = () => {
      // Проверяем, достиг ли пользователь конца страницы
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      
      // Показываем меню если пользователь прокрутил страницу на 90% или больше
      const scrolledToBottom = scrollTop + windowHeight >= documentHeight * 0.9;
      
      setShowNav(scrolledToBottom);
    };
    
    // Добавляем слушатель события прокрутки
    window.addEventListener('scroll', handleScroll);
    
    // Вызываем функцию сразу, чтобы установить правильное состояние при загрузке
    handleScroll();
    
    // Очищаем слушатель при размонтировании компонента
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isDesktop]);
  
  // Десктопная версия футера не нужна, так как информация уже отображается в Contact и SocialMediaDocs
  if (isDesktop) {
    return null;
  }
  
  // Мобильная версия
  return (
    <footer className="w-full">
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 border-t border-gray-200">
        <div className={`flex justify-around items-center py-3 px-4 ${showNav ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
          <button 
            className={`flex flex-col items-center ${activeNav === 'account' ? 'text-violet-600' : 'text-gray-500'}`}
            onClick={() => handleNavClick('account')}
          >
            <FaUserCircle className="text-2xl mb-1" />
            <span className="text-xs">Account</span>
          </button>
          
          <button 
            className={`flex flex-col items-center ${activeNav === 'menu' ? 'text-violet-600' : 'text-gray-500'}`}
            onClick={() => handleNavClick('menu')}
          >
            <FaBars className="text-2xl mb-1" />
            <span className="text-xs">Menu</span>
          </button>
          
          <button 
            className={`flex flex-col items-center ${activeNav === 'chat' ? 'text-violet-600' : 'text-gray-500'}`}
            onClick={() => handleNavClick('chat')}
          >
            <FaCommentAlt className="text-2xl mb-1" />
            <span className="text-xs">Chat</span>
          </button>
          
          <button 
            className={`flex flex-col items-center ${activeNav === 'help' ? 'text-violet-600' : 'text-gray-500'}`}
            onClick={() => handleNavClick('help')}
          >
            <FaQuestionCircle className="text-2xl mb-1" />
            <span className="text-xs">Help</span>
          </button>
          
          <button 
            className={`flex flex-col items-center ${activeNav === 'call' ? 'text-violet-600' : 'text-gray-500'}`}
            onClick={() => handleNavClick('call')}
          >
            <FaPhoneAlt className="text-2xl mb-1" />
            <span className="text-xs">Call</span>
          </button>
        </div>
      </div>
    </footer>
  );
  */
};

export default Footer; 