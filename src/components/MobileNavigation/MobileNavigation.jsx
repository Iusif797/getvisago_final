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
    <nav className="fixed bottom-0 left-0 right-0 bg-[#9B51E0] z-50">
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
          to="/about-us" 
          icon={AboutIcon} 
          label="About us" 
          isActive={isActive('/about-us')} 
        />
        <NavItem 
          to="/faq" 
          icon={QuestionsIcon} 
          label="FAQ" 
          isActive={isActive('/faq')} 
        />
        <NavItem 
          to="/contact" 
          icon={ContactsIcon} 
          label="Contacts" 
          isActive={isActive('/contact')} 
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
          ? 'text-white' 
          : 'text-white/80 hover:text-white'
      }`}
    >
      <img 
        src={icon} 
        alt={label} 
        className="h-8 w-8 mb-1" 
      />
      <span className="text-xs font-medium">{label}</span>
    </Link>
  );
};

export default MobileNavigation; 