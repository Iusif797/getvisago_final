import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Импортируем SVG иконки
import PassportIcon from '../../assets/Passport_SVG.svg';
import ProgressIcon from '../../assets/Progress_Indicator_SVG.svg';
import AboutIcon from '../../assets/About_SVG.svg';
import QuestionsIcon from '../../assets/Questions_SV.svg';
import ContactsIcon from '../../assets/Contacts_SVG.svg';

const MobileNavigation = () => {
  const location = useLocation();
  
  // Функция для определения активного состояния ссылки
  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-[#9B51E0] rounded-full shadow-lg px-2 py-1 z-50 w-[90%] max-w-md">
      <div className="flex justify-between items-center">
        <NavItem 
          to="/" 
          icon={PassportIcon} 
          label="Visas" 
          isActive={isActive('/')} 
        />
        <NavItem 
          to="/visa-status" 
          icon={ProgressIcon} 
          label="Status" 
          isActive={isActive('/visa-status')} 
        />
        <NavItem 
          to="/about" 
          icon={AboutIcon} 
          label="About us" 
          isActive={isActive('/about')} 
        />
        <NavItem 
          to="/faq" 
          icon={QuestionsIcon} 
          label="FAQ" 
          isActive={isActive('/faq')} 
        />
        <NavItem 
          to="/#contacts" 
          icon={ContactsIcon} 
          label="Contacts" 
          isActive={location.hash === '#contacts'} 
        />
      </div>
    </nav>
  );
};

// Компонент для отдельного элемента навигации
const NavItem = ({ to, icon, label, isActive }) => {
  return (
    <Link 
      to={to} 
      className={`flex flex-col items-center justify-center py-2 px-2 transition-all duration-300 ${
        isActive 
          ? 'text-white scale-110' 
          : 'text-white/80 hover:text-white hover:scale-105'
      }`}
    >
      <div className={`relative ${isActive ? 'after:absolute after:w-6 after:h-1 after:-bottom-1 after:left-1/2 after:transform after:-translate-x-1/2 after:bg-white after:rounded-full' : ''}`}>
        <img 
          src={icon} 
          alt={label} 
          className={`h-8 w-8 mb-1 transition-transform duration-300 ${isActive ? 'filter brightness-110' : ''}`} 
        />
      </div>
      <span className="text-xs font-medium">{label}</span>
    </Link>
  );
};

export default MobileNavigation; 