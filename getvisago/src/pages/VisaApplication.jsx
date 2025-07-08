import React, { useState } from 'react';
import useWindowSize from '../hooks/useWindowSize';
import { FaUser, FaEnvelope, FaPhone, FaHome, FaMinus, FaPlus, FaChevronLeft, FaInfoCircle } from 'react-icons/fa';
import calendarIcon from '../assets/button_visa_apply.svg';

const VisaApplication = () => {
    const { width } = useWindowSize();
    const isDesktop = width >= 1024;
    const [step, setStep] = useState(1);

    const [selectedVisa, setSelectedVisa] = useState('tourist');
    const [visaCount, setVisaCount] = useState(1);
    const [agreed, setAgreed] = useState(false);

    const CustomRadio = ({ selected }) => (
        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mr-4 flex-shrink-0 ${selected ? 'border-purple-600' : 'border-gray-300'}`}>
            {selected && <div className="w-3 h-3 bg-purple-600 rounded-full"></div>}
        </div>
    );

    const DateSelector = () => (
        <div className="flex items-center bg-white border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-purple-500 transition-all">
            <div className="relative flex-grow">
                <select className="w-full appearance-none bg-transparent p-3 text-gray-700 focus:outline-none text-center cursor-pointer">
                    <option>01</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-1 flex items-center px-2 text-gray-400">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 10l5 5 5-5H7z"/></svg>
                </div>
            </div>
            <span className="border-l border-gray-300 h-6"></span>
            <div className="relative flex-grow">
                <select className="w-full appearance-none bg-transparent p-3 text-gray-700 focus:outline-none text-center cursor-pointer">
                    <option>01</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-1 flex items-center px-2 text-gray-400">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 10l5 5 5-5H7z"/></svg>
                </div>
            </div>
            <span className="border-l border-gray-300 h-6"></span>
            <div className="relative flex-grow">
                <select className="w-full appearance-none bg-transparent p-3 text-gray-700 focus:outline-none text-center cursor-pointer">
                    <option>2025</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-1 flex items-center px-2 text-gray-400">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 10l5 5 5-5H7z"/></svg>
                </div>
            </div>
            <button className="flex-shrink-0">
                <img src={calendarIcon} alt="Select Date" className="w-11 h-11" />
            </button>
        </div>
    );
    
    const Step1Desktop = () => (
        <div className="grid grid-cols-2 gap-x-16">
            <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6">1. Select visa type</h2>
                <div className="space-y-4">
                    <div className={`p-5 rounded-xl border-2 cursor-pointer transition-all ${selectedVisa === 'tourist' ? 'border-purple-600 bg-[#F6F0FF]' : 'border-transparent bg-gray-100 hover:bg-gray-200'}`} onClick={() => setSelectedVisa('tourist')}>
                        <div className="flex justify-between items-center"><div className="flex items-center"><CustomRadio selected={selectedVisa === 'tourist'} /><span className="font-bold text-gray-800">Tourist visa B2</span></div><span className="font-bold text-gray-800">55 USD</span></div>
                        <div className="pl-10 mt-2"><div className="inline-block bg-purple-600 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-2">90 days</div><p className="text-gray-500 text-sm">Up to 90 days, for tourism, visiting family, or short-term business.</p></div>
                    </div>
                    <div className={`p-5 rounded-xl border-2 cursor-pointer transition-all ${selectedVisa === 'fastTourist' ? 'border-purple-600 bg-[#F6F0FF]' : 'border-transparent bg-gray-100 hover:bg-gray-200'}`} onClick={() => setSelectedVisa('fastTourist')}>
                        <div className="flex justify-between items-center"><div className="flex items-center"><CustomRadio selected={selectedVisa === 'fastTourist'} /><span className="font-bold text-gray-800">Fast tourist visa B2</span></div><span className="font-bold text-gray-800">80 USD</span></div>
                        <div className="pl-10 mt-2"><div className="inline-block bg-purple-600 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-2">90 days</div><p className="text-gray-500 text-sm">Expedited processing (+25 USD), still max 90 days.</p></div>
                    </div>
                </div>
                <div className="mt-8"><h3 className="text-lg font-bold text-gray-900 mb-4">Select number of visas</h3><div className="flex items-center justify-between p-1.5 rounded-lg bg-white shadow-sm border border-gray-200 w-32"><button onClick={() => setVisaCount(v => v > 1 ? v - 1 : 1)} className="text-gray-500 hover:text-purple-700 p-2 rounded-md transition"><FaMinus /></button><span className="font-bold text-lg text-gray-900">{visaCount}</span><button onClick={() => setVisaCount(v => v + 1)} className="text-gray-500 hover:text-purple-700 p-2 rounded-md transition"><FaPlus /></button></div></div>
            </div>
            <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6">2. Client data</h2>
                <div className="space-y-5">
                    <div><label className="text-sm font-medium text-gray-700 mb-1 block">First and Last Name</label><div className="relative"><FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400" /><input type="text" name="name" placeholder="Your Name" className="pl-12 w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition" /></div></div>
                    <div><label className="text-sm font-medium text-gray-700 mb-1 block">E-mail</label><div className="relative"><FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400" /><input type="email" name="email" placeholder="your@email.com" className="pl-12 w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition" /></div></div>
                    <div><label className="text-sm font-medium text-gray-700 mb-1 block">Phone number</label><div className="relative"><FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400" /><input type="tel" name="phone" placeholder="+1 123 325 57-73" className="pl-12 w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition" /></div></div>
                    <div><label className="text-sm font-medium text-gray-700 mb-1 block">Home address</label><div className="relative"><FaHome className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400" /><input type="text" name="address" placeholder="Address" className="pl-12 w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition" /></div></div>
                </div>
                <div className="mt-8 flex items-center"><input type="checkbox" id="privacy-desktop" checked={agreed} onChange={() => setAgreed(!agreed)} className="h-5 w-5 accent-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500" /><label htmlFor="privacy-desktop" className="ml-3 text-sm text-gray-600">By clicking "Continue", I agree to the Privacy Policy</label></div>
                <button onClick={() => setStep(2)} className="w-full mt-6 bg-gradient-to-r from-purple-600 to-violet-600 text-white uppercase font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-purple-200 transition-all duration-300">Continue</button>
            </div>
        </div>
    );
    
    const Step2Desktop = () => (
         <div className="grid grid-cols-2 gap-x-16">
            <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">2. Dates & purpose</h2>
                <div className="space-y-5">
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block flex items-center">Planned date of entry <FaInfoCircle className="ml-2 text-gray-400" /></label>
                        <DateSelector />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block flex items-center">Planned date of exit <FaInfoCircle className="ml-2 text-gray-400" /></label>
                        <DateSelector />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block flex items-center">Purpose of entry <FaInfoCircle className="ml-2 text-gray-400" /></label>
                        <input type="text" placeholder="Перечислите места" className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition" />
                    </div>
                </div>
            </div>
            <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6">4. Passport details</h2>
                <div className="space-y-5">
                    <h3 className="text-lg font-bold text-purple-600">Applicant 1</h3>
                    <div><label className="text-sm font-medium text-gray-700 mb-1 block">First Name</label><input type="text" name="firstName" placeholder="Your Name" className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition" /></div>
                    <div><label className="text-sm font-medium text-gray-700 mb-1 block">Last name</label><input type="text" name="lastName" placeholder="Your Surname" className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition" /></div>
                    <div><label className="text-sm font-medium text-gray-700 mb-1 block">Sex</label><select className="w-full appearance-none bg-white border border-gray-300 rounded-lg p-3 pr-8 focus:outline-none focus:ring-2 focus:ring-purple-500"><option>Male</option><option>Female</option></select></div>
                    <div><label className="text-sm font-medium text-gray-700 mb-2 block">Date of birth</label><DateSelector /></div>
                </div>
            </div>
             <div className="col-span-2 flex justify-center mt-8">
                <button className="w-1/2 bg-gradient-to-r from-purple-600 to-violet-600 text-white uppercase font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-purple-200 transition-all duration-300">Continue</button>
            </div>
        </div>
    );

    const Step1Mobile = () => (
         <div className="bg-white p-5 rounded-2xl shadow-xl w-full max-w-md mx-auto">
            <div className="w-full bg-gray-200 rounded-full h-2 mb-6"><div className="bg-gradient-to-r from-[#00C6A2] to-[#9B51E0] h-2 rounded-full" style={{ width: '25%' }}></div></div>
            <h2 className="text-xl font-bold text-gray-900 mb-5">1. Select visa type</h2>
            <div className="space-y-4">
                <div className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${selectedVisa === 'tourist' ? 'border-purple-600 bg-[#F6F0FF]' : 'border-transparent bg-gray-100'}`} onClick={() => setSelectedVisa('tourist')}><div className="flex justify-between items-center"><div className="flex items-center"><CustomRadio selected={selectedVisa === 'tourist'} /><span className="font-bold text-gray-800 text-base">Tourist visa B2</span></div><span className="font-bold text-gray-800">55 USD</span></div><div className="pl-10 mt-2"><div className="inline-block bg-purple-600 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-2">90 days</div><p className="text-gray-500 text-sm leading-tight">Up to 90 days, for tourism, visiting family, or short-term business.</p></div></div>
                <div className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${selectedVisa === 'fastTourist' ? 'border-purple-600 bg-[#F6F0FF]' : 'border-transparent bg-gray-100'}`} onClick={() => setSelectedVisa('fastTourist')}><div className="flex justify-between items-center"><div className="flex items-center"><CustomRadio selected={selectedVisa === 'fastTourist'} /><span className="font-bold text-gray-800 text-base">Fast tourist visa B2</span></div><span className="font-bold text-gray-800">80 USD</span></div><div className="pl-10 mt-2"><div className="inline-block bg-purple-600 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-2">90 days</div><p className="text-gray-500 text-sm leading-tight">Expedited processing (+25 USD), still max 90 days.</p></div></div>
            </div>
            <div className="mt-8"><h3 className="text-lg font-bold text-gray-900 mb-3">Select number of visas</h3><div className="flex items-center justify-between p-1 rounded-lg bg-gray-100 w-32"><button onClick={() => setVisaCount(v => v > 1 ? v - 1 : 1)} className="text-gray-600 hover:text-purple-700 p-2 rounded-md transition"><FaMinus /></button><span className="font-bold text-lg text-gray-900">{visaCount}</span><button onClick={() => setVisaCount(v => v + 1)} className="text-gray-600 hover:text-purple-700 p-2 rounded-md transition"><FaPlus /></button></div></div>
            <div className="mt-8 flex items-center"><input type="checkbox" id="privacy-mobile-1" checked={agreed} onChange={() => setAgreed(!agreed)} className="h-5 w-5 bg-gray-100 border-gray-300 rounded focus:ring-purple-500" /><label htmlFor="privacy-mobile-1" className="ml-3 text-sm text-gray-600">By clicking "Continue", I agree to the Privacy Policy</label></div>
            <button onClick={() => setStep(2)} className="w-full mt-6 bg-gradient-to-r from-purple-600 to-violet-600 text-white uppercase font-bold py-3.5 rounded-xl hover:shadow-lg transition-all duration-300">Continue</button>
        </div>
    );

    const Step2Mobile = () => (
        <div className="bg-white p-5 rounded-2xl shadow-xl w-full max-w-md mx-auto">
            <div className="w-full bg-gray-200 rounded-full h-2 mb-6"><div className="bg-gradient-to-r from-[#00C6A2] to-[#9B51E0] h-2 rounded-full" style={{ width: '50%' }}></div></div>
            <h2 className="text-xl font-bold text-gray-900 mb-5">2. Dates & purpose</h2>
             <div className="space-y-5">
                <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block flex items-center">Planned date of entry <FaInfoCircle className="ml-2 text-gray-400" /></label>
                    <DateSelector />
                </div>
                <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block flex items-center">Planned date of exit <FaInfoCircle className="ml-2 text-gray-400" /></label>
                    <DateSelector />
                </div>
                <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block flex items-center">Purpose of entry <FaInfoCircle className="ml-2 text-gray-400" /></label>
                    <input type="text" placeholder="Перечислите места" className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition" />
                </div>
            </div>
            <div className="flex items-center justify-between mt-8">
                <button onClick={() => setStep(1)} className="bg-gray-200 text-gray-600 p-4 rounded-full transition hover:bg-gray-300"><FaChevronLeft /></button>
                <button onClick={() => setStep(3)} className="bg-gradient-to-r from-purple-600 to-violet-600 text-white uppercase font-bold py-3.5 px-12 rounded-xl hover:shadow-lg transition-all duration-300">Continue</button>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50 flex justify-center px-4 pt-4 pb-24 lg:items-center lg:py-8">
            {isDesktop ? (
                <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 gap-x-8 items-center mb-10">
                        <h1 className="text-5xl font-bold bg-gradient-to-r from-[#00C6A2] to-[#9B51E0] bg-clip-text text-transparent">Select visa type</h1>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-gradient-to-r from-[#00C6A2] to-[#9B51E0] h-2 rounded-full" style={{ width: step === 1 ? '25%' : '50%' }}></div>
                        </div>
                    </div>
                    {step === 1 && <Step1Desktop />}
                    {step === 2 && <Step2Desktop />}
                </div>
            ) : (
                step === 1 ? <Step1Mobile /> : <Step2Mobile />
            )}
        </div>
    );
};

export default VisaApplication; 