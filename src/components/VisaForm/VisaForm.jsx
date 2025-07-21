import React, { useState } from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import {
    FaUser, FaEnvelope, FaPhone, FaHome, FaMinus, FaPlus, FaChevronLeft,
    FaInfoCircle, FaMapMarkerAlt, FaPencilAlt, FaUpload, FaHourglassHalf,
    FaRegCreditCard, FaPaypal, FaApple, FaGoogle, FaPlaneDeparture,
    FaRegCalendarDays, FaArrowsLeftRight
} from 'react-icons/fa';
import calendarIcon from '../../assets/button_calendar.svg';
import calendarIconDefault from '../../assets/button_visa_apply.svg';

const IconMapping = {
    FaUser, FaEnvelope, FaPhone, FaHome, FaMinus, FaPlus, FaChevronLeft,
    FaInfoCircle, FaMapMarkerAlt, FaPencilAlt, FaUpload, FaHourglassHalf,
    FaRegCreditCard, FaPaypal, FaApple, FaGoogle, FaPlaneDeparture,
    FaRegCalendarDays, FaArrowsLeftRight
};

const DateSelector = ({ isStep4 = false }) => (
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

const ProgressBar = ({ currentStep, totalSteps }) => {
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

const VisaForm = ({ data }) => {
    const { country, steps, meta } = data;
    const { width } = useWindowSize();
    const isDesktop = width >= 1024;
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({});

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handlePrev = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const renderField = (field) => {
        const { type, name, label, placeholder, icon, options } = field;
        const IconComponent = icon ? IconMapping[icon] : null;

        switch (type) {
            case 'text':
            case 'email':
            case 'tel':
                return (
                    <div key={name} className="relative">
                        <label className="text-sm font-medium text-gray-700 mb-1 block">{label}</label>
                        {IconComponent && <IconComponent className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400" />}
                        <input
                            type={type}
                            name={name}
                            placeholder={placeholder}
                            onChange={handleChange}
                            className="pl-12 w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition"
                        />
                    </div>
                );
            case 'radio':
                return (
                    <div key={name} className="space-y-4">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">{label}</h3>
                        {options.map((option, index) => (
                            <div
                                key={index}
                                className={`p-5 rounded-xl border-2 cursor-pointer transition-all ${formData[name] === option.label ? 'border-purple-600 bg-[#F6F0FF]' : 'border-transparent bg-gray-100 hover:bg-gray-200'}`}
                                onClick={() => setFormData(prev => ({ ...prev, [name]: option.label }))}
                            >
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center">
                                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mr-4 flex-shrink-0 ${formData[name] === option.label ? 'border-purple-600' : 'border-gray-300'}`}>
                                            {formData[name] === option.label && <div className="w-3 h-3 bg-purple-600 rounded-full"></div>}
                                        </div>
                                        <span className="font-bold text-gray-800">{option.label}</span>
                                    </div>
                                    <span className="font-bold text-gray-800">{option.price} USD</span>
                                </div>
                                <div className="pl-10 mt-2">
                                    <div className="inline-block bg-purple-600 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-2">{option.duration}</div>
                                    <p className="text-gray-500 text-sm">{option.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                );
            case 'counter':
                return (
                    <div key={name} className="mt-8">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">{label}</h3>
                        <div className="flex items-center justify-between p-1.5 rounded-lg bg-white shadow-sm border border-gray-200 w-32">
                            <button onClick={() => setFormData(prev => ({ ...prev, [name]: Math.max(1, (prev[name] || 1) - 1) }))} className="text-gray-500 hover:text-purple-700 p-2 rounded-md transition"><FaMinus /></button>
                            <span className="font-bold text-lg text-gray-900">{formData[name] || 1}</span>
                            <button onClick={() => setFormData(prev => ({ ...prev, [name]: (prev[name] || 1) + 1 }))} className="text-gray-500 hover:text-purple-700 p-2 rounded-md transition"><FaPlus /></button>
                        </div>
                    </div>
                );
            case 'checkbox':
                return (
                    <div key={name} className="mt-8 flex items-center">
                        <input
                            type="checkbox"
                            id={name}
                            name={name}
                            checked={formData[name] || false}
                            onChange={handleChange}
                            className="h-5 w-5 accent-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500"
                        />
                        <label htmlFor={name} className="ml-3 text-sm text-gray-600">{label}</label>
                    </div>
                );
            case 'date':
                return (
                    <div key={name}>
                        <label className="text-sm font-medium text-gray-700 mb-2 block flex items-center">{label} <FaInfoCircle className="ml-2 text-gray-400" /></label>
                        <DateSelector />
                    </div>
                );
            default:
                return null;
        }
    };

    const renderStep = (stepIndex) => {
        const step = steps[stepIndex];
        if (!step) return null;
        return (
            <div className="space-y-5">
                <h2 className="text-xl font-bold text-gray-900 mb-6">{step.title}</h2>
                {step.fields.map(field => renderField(field))}
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-gray-50 flex justify-center px-4 pt-4 pb-24 lg:items-center lg:py-8">
            <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-6xl mx-auto">
                <div className="grid grid-cols-2 gap-x-8 items-center mb-10">
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-[#00C6A2] to-[#9B51E0] bg-clip-text text-transparent">
                        {steps[currentStep].title}
                    </h1>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                            className="bg-gradient-to-r from-[#00C6A2] to-[#9B51E0] h-2 rounded-full transition-all duration-500 ease-in-out"
                            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                        ></div>
                    </div>
                </div>

                {isDesktop ? (
                    <div className="grid grid-cols-2 gap-x-16">
                        <div>{renderStep(currentStep)}</div>
                        <div>{renderStep(currentStep + 1)}</div>
                        <div className="col-span-2 flex justify-between mt-8">
                            {currentStep > 0 && <button onClick={handlePrev} className="bg-gray-200 text-gray-600 font-bold py-4 px-8 rounded-xl hover:shadow-lg transition-all duration-300">Back</button>}
                            <button onClick={() => setCurrentStep(currentStep + 2)} className="w-1/2 bg-gradient-to-r from-purple-600 to-violet-600 text-white uppercase font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-purple-200 transition-all duration-300">Continue</button>
                        </div>
                    </div>
                ) : (
                    <div>
                        <ProgressBar currentStep={currentStep + 1} totalSteps={steps.length} />
                        {renderStep(currentStep)}
                        <div className="flex items-center justify-between mt-8">
                            {currentStep > 0 && <button onClick={handlePrev} className="bg-gray-200 text-gray-600 p-4 rounded-full transition hover:bg-gray-300"><FaChevronLeft /></button>}
                            <button onClick={handleNext} className="flex-grow ml-4 bg-gradient-to-r from-[#9B51E0] to-[#7B2CBF] text-white uppercase font-bold py-3.5 rounded-xl hover:shadow-lg transition-all duration-300">Continue</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default VisaForm; 