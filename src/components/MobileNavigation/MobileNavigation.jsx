import React from 'react';
import { NavLink } from 'react-router-dom';

// Inline SVG icons for perfect sharpness on all DPR/zoom levels.
// Each icon accepts a color prop to match inactive/active state.
function VisaIcon({ color, outlined }) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {outlined ? (
        <rect x="2.75" y="2.75" width="18.5" height="18.5" rx="2.5" stroke={color} strokeWidth="2" vectorEffect="non-scaling-stroke" />
      ) : (
        <rect x="3.5" y="3.5" width="17" height="17" rx="2" stroke={color} strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
      )}
      <circle cx="12" cy="10" r="2.25" stroke={color} strokeWidth="1.8" vectorEffect="non-scaling-stroke" />
      <path d="M6.5 16.5h11" stroke={color} strokeWidth="1.8" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

function StatusIcon({ color }) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g stroke={color} strokeWidth="1.8" strokeLinecap="round" vectorEffect="non-scaling-stroke">
        <path d="M12 3v2" />
        <path d="M12 19v2" />
        <path d="M4.93 4.93l1.41 1.41" />
        <path d="M17.66 17.66l1.41 1.41" />
        <path d="M3 12h2" />
        <path d="M19 12h2" />
        <path d="M4.93 19.07l1.41-1.41" />
        <path d="M17.66 6.34l1.41-1.41" />
      </g>
    </svg>
  );
}

function AboutIcon({ color }) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M21 11a7 7 0 0 1-7 7H8l-5 3V11a7 7 0 0 1 7-7h4a7 7 0 0 1 7 7Z" stroke={color} strokeWidth="1.8" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
      <circle cx="12" cy="8.5" r="0.9" fill={color} />
      <path d="M12 11.5v4" stroke={color} strokeWidth="1.8" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

function PhoneIcon({ color }) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M6.5 3h3l1.5 4-2 1.5a12.5 12.5 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2 2h-.5C11.04 19 5 12.96 5 5.5V5a2 2 0 0 1 1.5-2Z" stroke={color} strokeWidth="1.8" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

function MobileNavItem({ to, label, children, exact, isExternal }) {
  const baseClasses = 'flex flex-col items-center justify-center py-1.5';
  if (isExternal) {
    return (
      <a href={to} className={`${baseClasses} text-gray-500`} aria-label={label}>
        <div className="flex items-center justify-center">
          {children(false)}
        </div>
        <span className="mt-1 text-[13px] leading-none">{label}</span>
      </a>
    );
  }
  return (
    <NavLink
      to={to}
      end={exact}
      className={({ isActive }) => `${baseClasses} ${isActive ? 'text-[#7C3AED] font-semibold' : 'text-gray-500'}`}
      aria-label={label}
    >
      {({ isActive }) => (
        <>
          <div className={`flex items-center justify-center ${isActive ? 'ring-2 ring-[#7C3AED] rounded-md p-1.5' : ''}`}>
            {children(isActive)}
          </div>
          <span className="mt-1 text-[13px] leading-none">{label}</span>
        </>
      )}
    </NavLink>
  );
}

const MobileNavigation = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur rounded-t-3xl shadow-[0_-6px_24px_rgba(0,0,0,0.06)] border-t border-gray-100 py-2 px-2">
      <div className="grid grid-cols-4 items-center text-center max-w-md mx-auto">
        <MobileNavItem to="/visas" label="Visas" exact>
          {(active) => <VisaIcon color={active ? '#7C3AED' : '#6B7280'} outlined={active} />}
        </MobileNavItem>

        <MobileNavItem to="/visa-status" label="Status" exact>
          {(active) => <StatusIcon color={active ? '#7C3AED' : '#6B7280'} />}
        </MobileNavItem>

        <MobileNavItem to="/about" label="About us" exact>
          {(active) => <AboutIcon color={active ? '#7C3AED' : '#6B7280'} />}
        </MobileNavItem>

        <MobileNavItem to="/#contacts" label="Contacts" isExternal>
          {(active) => <PhoneIcon color={active ? '#7C3AED' : '#6B7280'} />}
        </MobileNavItem>
      </div>
    </nav>
  );
};

export default MobileNavigation;