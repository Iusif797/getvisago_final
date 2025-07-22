import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import calendarIcon from '../../assets/button_calendar.svg';
import calendarIconDefault from '../../assets/button_visa_apply.svg';

export const CustomRadio = ({ selected }) => (
    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mr-4 flex-shrink-0 ${selected ? 'border-purple-600' : 'border-gray-300'}`}>
        {selected && <div className="w-3 h-3 bg-purple-600 rounded-full"></div>}
    </div>
);

export const DateSelector = ({ isStep4 = false }) => (
    <div className={`flex items-center border overflow-hidden transition-all ${isStep4 ? 'bg-gray-50 border-gray-200 rounded-xl focus-within:ring-2 focus-within:ring-purple-500' : 'bg-white border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-purple-500'}`}>
        <div className="relative flex-grow">
            <select className="w-full appearance-none bg-transparent p-3 text-gray-700 focus:outline-none text-center cursor-pointer">
                <option>01</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-1 flex items-center px-2 text-gray-400">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 10l5 5 5-5H7z" /></svg>
            </div>
        </div>
        <span className="border-l border-gray-300 h-6"></span>
        <div className="relative flex-grow">
            <select className="w-full appearance-none bg-transparent p-3 text-gray-700 focus:outline-none text-center cursor-pointer">
                <option>01</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-1 flex items-center px-2 text-gray-400">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 10l5 5 5-5H7z" /></svg>
            </div>
        </div>
        <span className="border-l border-gray-300 h-6"></span>
        <div className="relative flex-grow">
            <select className="w-full appearance-none bg-transparent p-3 text-gray-700 focus:outline-none text-center cursor-pointer">
                <option>{isStep4 ? '2024' : '2025'}</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-1 flex items-center px-2 text-gray-400">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 10l5 5 5-5H7z" /></svg>
            </div>
        </div>
        <button className={`flex-shrink-0 flex items-center justify-center self-stretch ${isStep4 ? '' : ''}`}>
            {isStep4 ?
                <img src={calendarIcon} alt="Select Date" />
                :
                <img src={calendarIconDefault} alt="Select Date" className="w-11 h-11" />
            }
        </button>
    </div>
);

export const GenericFlagIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" className="absolute left-4">
        <defs>
            <clipPath id="clip0_105_2">
                <rect width="24" height="24" rx="4" fill="white" />
            </clipPath>
        </defs>
        <g clipPath="url(#clip0_105_2)">
            <path fill="#007A4D" d="M0 0h24v24H0z" />
            <path stroke="#FFFFFF" strokeWidth="1.2" d="M0 8h24M0 16h24" />
            <path fill="#FFB612" d="M0 10.5h24v3H0z" />
            <path d="M0 0v24l12-12L0 0z" fill="#000000" />
            <path d="M0 0v24l10-12L0 0z" stroke="#FFB612" strokeWidth="1.2" />
            <path d="M0 0h9L0 7V0z" fill="#DE3831" />
        </g>
    </svg>
);

export const ProgressBar = ({ currentStep, totalSteps }) => {
    const progressPercentage = (currentStep / totalSteps) * 100;
    return (
        <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
            <div
                className="bg-gradient-to-r from-[#00C6A2] to-[#9B51E0] h-2 rounded-full transition-all duration-500 ease-in-out"
                style={{ width: `${progressPercentage}%` }}
            ></div>
        </div>
    );
}; 