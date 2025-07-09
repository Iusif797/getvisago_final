import React, { useState } from 'react';
import useWindowSize from '../hooks/useWindowSize';
import { FaUser, FaEnvelope, FaPhone, FaHome, FaMinus, FaPlus, FaChevronLeft, FaInfoCircle, FaMapMarkerAlt, FaPencilAlt, FaUpload, FaHourglassHalf, FaRegCreditCard, FaPaypal, FaApple, FaGoogle } from 'react-icons/fa';
import { FaPlaneDeparture, FaRegCalendarDays, FaArrowsLeftRight } from "react-icons/fa6";
import calendarIcon from '../assets/button_calendar.svg';
import calendarIconDefault from '../assets/button_visa_apply.svg';
import formFlagIcon from '../assets/flag_icon_form.svg';
import visaCard from '../assets/icon_VISA_form.svg';
import masterCard from '../assets/mastercard_form.svg';
import amexCard from '../assets/amex_form.svg';
import gPay from '../assets/google_pay_form.svg';
import applePay from '../assets/apple_pay_form.svg';
import bankCardButton from '../assets/bank_card_button.png';
import mobilePayButton from '../assets/mobile_pay_button.png';
import israelFlagIcon from '../assets/Israel (IL).svg';


const FlagIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" className="absolute left-4">
        <defs>
            <clipPath id="clip0_105_2">
                <rect width="24" height="24" rx="4" fill="white"/>
            </clipPath>
        </defs>
        <g clipPath="url(#clip0_105_2)">
            <path fill="#007A4D" d="M0 0h24v24H0z"/>
            <path stroke="#FFFFFF" strokeWidth="1.2" d="M0 8h24M0 16h24"/>
            <path fill="#FFB612" d="M0 10.5h24v3H0z"/>
            <path d="M0 0v24l12-12L0 0z" fill="#000000"/>
            <path d="M0 0v24l10-12L0 0z" stroke="#FFB612" strokeWidth="1.2"/>
            <path d="M0 0h9L0 7V0z" fill="#DE3831"/>
        </g>
    </svg>
);

const VisaApplication = () => {
    const { width } = useWindowSize();
    const isDesktop = width >= 1024;
    const [step, setStep] = useState(1);

    const [selectedVisa, setSelectedVisa] = useState('tourist');
    const [visaCount, setVisaCount] = useState(1);
    const [agreed, setAgreed] = useState(false);
    const [passportSubStep, setPassportSubStep] = useState(1);
    const [paymentSubStep, setPaymentSubStep] = useState(1);
    const [billingSubStep, setBillingSubStep] = useState(1);


    const CustomRadio = ({ selected }) => (
        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mr-4 flex-shrink-0 ${selected ? 'border-purple-600' : 'border-gray-300'}`}>
            {selected && <div className="w-3 h-3 bg-purple-600 rounded-full"></div>}
        </div>
    );

    const DateSelector = ({ isStep4 = false }) => (
        <div className={`flex items-center border overflow-hidden transition-all ${isStep4 ? 'bg-gray-50 border-gray-200 rounded-xl focus-within:ring-2 focus-within:ring-purple-500' : 'bg-white border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-purple-500'}`}>
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
                    <option>{isStep4 ? '2024' : '2025'}</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-1 flex items-center px-2 text-gray-400">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 10l5 5 5-5H7z"/></svg>
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
                    <div><label className="text-sm font-medium text-gray-700 mb-2 block">Date of birth</label><DateSelector isStep4={true} /></div>
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

    const Step3Mobile = () => (
        <div className="bg-white p-5 rounded-3xl shadow-xl w-full max-w-md mx-auto">
            <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
                <div className="bg-gradient-to-r from-[#00C6A2] to-[#9B51E0] h-2 rounded-full" style={{ width: '75%' }}></div>
            </div>
            <h2 className="text-xl font-bold text-black mb-6">3. Client data</h2>
            <div className="space-y-4">
                <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">First and Last Name</label>
                    <div className="relative flex items-center">
                        <FaUser className="absolute left-4 text-purple-400" />
                        <input type="text" placeholder="Your Name" className="pl-12 w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-purple-500 focus:border-purple-500 transition" />
                    </div>
                </div>
                <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">E-mail</label>
                    <div className="relative flex items-center">
                        <FaEnvelope className="absolute left-4 text-purple-400" />
                        <input type="email" placeholder="your@email.com" className="pl-12 w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-purple-500 focus:border-purple-500 transition" />
                    </div>
                </div>
                <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Phone number</label>
                    <div className="relative flex items-center">
                        <FaPhone className="absolute left-4 text-purple-400" />
                        <input type="tel" placeholder="+1 123 325 57-73" className="pl-12 w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-purple-500 focus:border-purple-500 transition" />
                    </div>
                </div>
                <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Home address</label>
                    <div className="relative flex items-center">
                        <FaHome className="absolute left-4 text-purple-400" />
                        <input type="text" placeholder="Adress" className="pl-12 w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-purple-500 focus:border-purple-500 transition" />
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between mt-8">
                <button onClick={() => setStep(2)} className="bg-gray-200 text-gray-600 p-4 rounded-full transition hover:bg-gray-300">
                    <FaChevronLeft />
                </button>
                <button onClick={() => setStep(4)} className="flex-grow ml-4 bg-gradient-to-r from-[#9B51E0] to-[#7B2CBF] text-white uppercase font-bold py-3.5 rounded-xl hover:shadow-lg transition-all duration-300">
                    Continue
                </button>
            </div>
        </div>
    );

    const Step4Mobile = () => (
        <div className="bg-white p-5 rounded-3xl shadow-xl w-full max-w-md mx-auto">
            <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
                <div className="bg-gradient-to-r from-[#00C6A2] to-[#9B51E0] h-2 rounded-full" style={{ width: '100%' }}></div>
            </div>
            <h2 className="text-xl font-bold text-black mb-2">4. Passport details</h2>
            <p className="text-[#9B51E0] font-bold mb-6">Applicant 1</p>
            
            {passportSubStep === 1 && (
                <div className="space-y-4">
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Passport number</label>
                        <input type="text" placeholder="XX XX XXX XXX" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-purple-500 focus:border-purple-500 transition" />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Passport type</label>
                        <div className="relative">
                            <select className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-xl p-3 pr-8 focus:outline-none focus:ring-2 focus:ring-purple-500">
                                <option>Ordinary/Diplomatic/Official/Other</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
                               <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 10l5 5 5-5H7z"/></svg>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Nationality</label>
                        <div className="relative flex items-center">
                            <FlagIcon />
                            <select className="pl-12 w-full appearance-none bg-gray-50 border border-gray-200 rounded-xl p-3 pr-8 focus:outline-none focus:ring-2 focus:ring-purple-500">
                                <option>Your nationality</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
                               <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 10l5 5 5-5H7z"/></svg>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Date of issue</label>
                        <DateSelector isStep4={true} />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Date of expiry</label>
                        <DateSelector isStep4={true} />
                    </div>
                </div>
            )}

            {passportSubStep === 2 && (
                <div className="space-y-4">
                     <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Place of issue</label>
                        <div className="relative flex items-center">
                            <FaMapMarkerAlt className="absolute left-4 text-purple-400" />
                            <input type="text" placeholder="Enter place" className="pl-12 w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-purple-500 focus:border-purple-500 transition" />
                        </div>
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Issuing Authority</label>
                        <input type="text" placeholder="Issuing authority" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-purple-500 focus:border-purple-500 transition" />
                    </div>
                     <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Religion</label>
                        <input type="text" placeholder="Enter religion" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-purple-500 focus:border-purple-500 transition" />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Place of birth</label>
                         <div className="relative flex items-center">
                            <FlagIcon />
                            <select className="pl-12 w-full appearance-none bg-gray-50 border border-gray-200 rounded-xl p-3 pr-8 focus:outline-none focus:ring-2 focus:ring-purple-500">
                                <option>Select country</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
                               <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 10l5 5 5-5H7z"/></svg>
                            </div>
                        </div>
                    </div>
                     <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Additional nationality</label>
                         <div className="relative flex items-center">
                            <FlagIcon />
                            <select className="pl-12 w-full appearance-none bg-gray-50 border border-gray-200 rounded-xl p-3 pr-8 focus:outline-none focus:ring-2 focus:ring-purple-500">
                                <option>Select country</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
                               <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 10l5 5 5-5H7z"/></svg>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="flex items-center justify-between mt-8">
                <button onClick={() => passportSubStep === 1 ? setStep(3) : setPassportSubStep(1)} className="bg-gray-200 text-gray-600 p-4 rounded-full transition hover:bg-gray-300">
                    <FaChevronLeft />
                </button>
                <button onClick={() => passportSubStep === 1 ? setPassportSubStep(2) : setStep(5)} className="flex-grow ml-4 bg-gradient-to-r from-[#9B51E0] to-[#7B2CBF] text-white uppercase font-bold py-3.5 rounded-xl hover:shadow-lg transition-all duration-300">
                    Continue
                </button>
            </div>
        </div>
    );

    const Step5Mobile = () => (
        <div className="bg-white p-5 rounded-3xl shadow-xl w-full max-w-md mx-auto">
            <div className="w-full bg-gray-200 rounded-full h-2 mb-6"><div className="bg-gradient-to-r from-[#00C6A2] to-[#9B51E0] h-2 rounded-full" style={{ width: '85%' }}></div></div>
            <h2 className="text-xl font-bold text-black mb-2">5. Personal information</h2>
            <p className="text-[#9B51E0] font-bold mb-6">Applicant 1</p>
            <div className="space-y-4">
                <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Marital status</label>
                    <div className="relative">
                        <select className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-xl p-3 pr-8 focus:outline-none focus:ring-2 focus:ring-purple-500">
                            <option>Married</option>
                            <option>Single</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
                           <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 10l5 5 5-5H7z"/></svg>
                        </div>
                    </div>
                </div>
                <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block flex items-center">Father's name <FaInfoCircle className="ml-1 text-gray-400 text-xs" /></label>
                    <input type="text" placeholder="Enter name" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-purple-500 focus:border-purple-500 transition" />
                </div>
                <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block flex items-center">Mother's name <FaInfoCircle className="ml-1 text-gray-400 text-xs" /></label>
                    <input type="text" placeholder="Enter name" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-purple-500 focus:border-purple-500 transition" />
                </div>
                <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block flex items-center">Occupation <FaInfoCircle className="ml-1 text-gray-400 text-xs" /></label>
                    <input type="text" placeholder="addasd" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-purple-500 focus:border-purple-500 transition" />
                </div>
                <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block flex items-center">Contact info <FaInfoCircle className="ml-1 text-gray-400 text-xs" /></label>
                    <input type="text" placeholder="Hotel Address / Person Contacts" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-purple-500 focus:border-purple-500 transition" />
                </div>
            </div>
             <div className="flex items-center justify-between mt-8">
                <button onClick={() => setStep(4)} className="bg-gray-200 text-gray-600 p-4 rounded-full transition hover:bg-gray-300"><FaChevronLeft /></button>
                <button onClick={() => setStep(6)} className="flex-grow ml-4 bg-gradient-to-r from-[#9B51E0] to-[#7B2CBF] text-white uppercase font-bold py-3.5 rounded-xl hover:shadow-lg transition-all duration-300">Continue</button>
            </div>
        </div>
    );

    const Step6Mobile = () => {
        if (paymentSubStep === 1) {
            return (
                <div className="bg-white p-5 rounded-3xl shadow-xl w-full max-w-md mx-auto">
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
                        <div className="bg-gradient-to-r from-[#00C6A2] to-[#9B51E0] h-2 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                    <h2 className="text-xl font-bold text-black mb-1">6. Data verification</h2>
                    <p className="font-bold text-black mb-4">Visa information:</p>
                    
                    <div className="space-y-3 text-sm mb-6">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center text-purple-600 font-bold">
                                <img src={israelFlagIcon} alt="Israel Flag" className="w-6 h-6 mr-2" />
                                <span>Tourist visa B2</span>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center text-gray-700"><FaHourglassHalf className="mr-2 text-gray-400" /><span>Validity:</span></div>
                            <span className="font-bold text-purple-600">2 years</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center text-gray-700"><FaArrowsLeftRight className="mr-2 text-gray-400" /><span>Entries:</span></div>
                            <span className="font-bold text-purple-600">Multiple entries</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center text-gray-700"><FaRegCalendarDays className="mr-2 text-gray-400" /><span>Stay:</span></div>
                            <span className="font-bold text-purple-600">up to 90 days per visit</span>
                        </div>
                         <div className="flex justify-between items-center">
                            <div className="flex items-center text-gray-700"><FaPlaneDeparture className="mr-2 text-gray-400" /><span>Будет готова через</span></div>
                            <span className="font-bold text-purple-600">2 days</span>
                        </div>
                    </div>

                    <div className="space-y-4 mb-6">
                        <div>
                            <label className="text-sm font-medium text-gray-700 mb-1 block">Email</label>
                            <div className="relative flex items-center">
                                <FaEnvelope className="absolute left-4 text-gray-400" />
                                <input type="email" value="your@email.com" readOnly className="pl-12 w-full p-3 bg-white border border-gray-300 rounded-xl focus:ring-purple-500 focus:border-purple-500 transition" />
                            </div>
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-700 mb-1 block">Planned date of entry ®</label>
                            <DateSelector isStep4={true} />
                        </div>
                    </div>

                    <div className="bg-[#00D6A9] text-white font-bold text-xl text-center p-4 rounded-xl mb-6">
                        Total price: 55 $
                    </div>

                    <div className="flex items-center justify-between">
                        <button onClick={() => setStep(5)} className="bg-gray-200 text-gray-600 p-4 rounded-full transition hover:bg-gray-300"><FaChevronLeft /></button>
                        <button onClick={() => setPaymentSubStep(2)} className="flex-grow ml-4 bg-gradient-to-r from-[#9B51E0] to-[#7B2CBF] text-white uppercase font-bold py-3.5 rounded-xl hover:shadow-lg transition-all duration-300">Continue</button>
                    </div>
                </div>
            );
        }

        return (
            <div className="bg-white p-5 rounded-3xl shadow-xl w-full max-w-md mx-auto">
                <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
                    <div className="bg-gradient-to-r from-[#00C6A2] to-[#9B51E0] h-2 rounded-full" style={{ width: '95%' }}></div>
                </div>
                <h2 className="text-xl font-bold text-black mb-6">6. Select payment method</h2>
                
                <div className="flex justify-start items-center space-x-4 mb-6">
                    <img src={visaCard} alt="Visa" className="h-8"/>
                    <img src={masterCard} alt="Mastercard" className="h-8"/>
                    <img src={amexCard} alt="Amex" className="h-8"/>
                </div>

                <div className="space-y-4 mb-6">
                    <button className="w-full">
                        <img src={bankCardButton} alt="Bank Card" className="w-full h-auto"/>
                    </button>
                     <div className="flex justify-start items-center space-x-4">
                        <img src={gPay} alt="Google Pay" className="h-8"/>
                        <img src={applePay} alt="Apple Pay" className="h-8"/>
                    </div>
                    <button className="w-full">
                        <img src={mobilePayButton} alt="Mobile Pay" className="w-full h-auto"/>
                    </button>
                </div>

                <div className="flex items-center justify-between mt-8">
                    <button onClick={() => setPaymentSubStep(1)} className="bg-gray-200 text-gray-600 p-4 rounded-full transition hover:bg-gray-300"><FaChevronLeft /></button>
                    <button onClick={() => setStep(7)} className="flex-grow ml-4 bg-gradient-to-r from-[#9B51E0] to-[#7B2CBF] text-white uppercase font-bold py-3.5 rounded-xl hover:shadow-lg transition-all duration-300">Continue</button>
                </div>
            </div>
        );
    };

    const Step7Mobile = () => {
        if (billingSubStep === 1) { // Billing Address
            return (
                <div className="bg-white p-5 rounded-3xl shadow-xl w-full max-w-md mx-auto">
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
                        <div className="bg-gradient-to-r from-[#00C6A2] to-[#9B51E0] h-2 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                    <h2 className="text-xl font-bold text-black mb-6">7. Billing Address</h2>
                    <div className="space-y-4">
                        <div>
                            <label className="text-sm font-medium text-gray-700 mb-1 block">Address Line</label>
                            <input type="text" placeholder="Address Line" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-purple-500 focus:border-purple-500 transition" />
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-700 mb-1 block">Country</label>
                            <input type="text" placeholder="Address Line" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-purple-500 focus:border-purple-500 transition" />
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-700 mb-1 block">City</label>
                            <input type="text" placeholder="Address Line" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-purple-500 focus:border-purple-500 transition" />
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-700 mb-1 block">Postal code</label>
                            <input type="text" placeholder="Address Line" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-purple-500 focus:border-purple-500 transition" />
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-8">
                        <button onClick={() => setStep(6)} className="bg-gray-200 text-gray-600 p-4 rounded-full transition hover:bg-gray-300"><FaChevronLeft /></button>
                        <button onClick={() => setBillingSubStep(2)} className="flex-grow ml-4 bg-gradient-to-r from-[#9B51E0] to-[#7B2CBF] text-white uppercase font-bold py-3.5 rounded-xl hover:shadow-lg transition-all duration-300">Continue</button>
                    </div>
                </div>
            );
        }

        // Card View
        return (
            <div className="bg-white p-5 rounded-3xl shadow-xl w-full max-w-md mx-auto">
                <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
                    <div className="bg-gradient-to-r from-[#00C6A2] to-[#9B51E0] h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
                <h2 className="text-xl font-bold text-black mb-6">7. Card</h2>
                <div className="space-y-4">
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Full name</label>
                        <div className="relative flex items-center">
                            <FaUser className="absolute left-4 text-purple-400" />
                            <input type="text" placeholder="Your Name" className="pl-12 w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-purple-500 focus:border-purple-500 transition" />
                        </div>
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Card Number</label>
                        <input type="text" placeholder="XXXX XXXX XXXX XXXX" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-purple-500 focus:border-purple-500 transition" />
                    </div>
                    <div className="flex space-x-4">
                        <div className="flex-1">
                            <label className="text-sm font-medium text-gray-700 mb-1 block">MM/YY</label>
                            <input type="text" placeholder="MM/YY" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-purple-500 focus:border-purple-500 transition" />
                        </div>
                        <div className="flex-1">
                            <label className="text-sm font-medium text-gray-700 mb-1 block">CVV</label>
                            <input type="text" placeholder="XXX" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-purple-500 focus:border-purple-500 transition" />
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between mt-8">
                    <button onClick={() => setBillingSubStep(1)} className="bg-gray-200 text-gray-600 p-4 rounded-full transition hover:bg-gray-300"><FaChevronLeft /></button>
                    <button onClick={() => setStep(8) } className="flex-grow ml-4 bg-[#00D6A9] text-white uppercase font-bold py-3.5 rounded-xl hover:shadow-lg transition-all duration-300">PAY 55$</button>
                </div>
            </div>
        );
    };

    const Step8Mobile = () => (
        <div className="bg-white p-5 rounded-3xl shadow-xl w-full max-w-md mx-auto">
            <div className="w-full bg-gray-200 rounded-full h-2 mb-6"><div className="bg-gradient-to-r from-[#00C6A2] to-[#9B51E0] h-2 rounded-full" style={{ width: '100%' }}></div></div>
            <h2 className="text-xl font-bold text-black mb-2">8. Add photos</h2>
            <p className="text-[#9B51E0] font-bold mb-6">Applicant 1</p>
            <div className="space-y-4">
                <button className="w-full flex justify-between items-center p-4 border-2 border-[#04C495] rounded-xl text-[#04C495] font-bold">
                    <span>FACE PHOTO</span>
                    <div className="bg-[#04C495] p-2 rounded-md">
                        <FaUpload className="text-white" />
                    </div>
                </button>
                <button className="w-full flex justify-between items-center p-4 border-2 border-[#04C495] rounded-xl text-[#04C495] font-bold">
                    <span>PASSPORT SCAN</span>
                    <div className="bg-[#04C495] p-2 rounded-md">
                        <FaUpload className="text-white" />
                    </div>
                </button>
            </div>
            <div className="flex items-center justify-between mt-8">
                <button onClick={() => setStep(7)} className="bg-gray-200 text-gray-600 p-4 rounded-full transition hover:bg-gray-300"><FaChevronLeft /></button>
                <button onClick={() => { /* Final submission logic goes here */ }} className="flex-grow ml-4 bg-gradient-to-r from-[#9B51E0] to-[#7B2CBF] text-white uppercase font-bold py-3.5 rounded-xl hover:shadow-lg transition-all duration-300">Continue</button>
            </div>
        </div>
    );

    const renderMobileStep = () => {
        switch (step) {
            case 1:
                return <Step1Mobile />;
            case 2:
                return <Step2Mobile />;
            case 3:
                return <Step3Mobile />;
            case 4:
                return <Step4Mobile />;
            case 5:
                return <Step5Mobile />;
            case 6:
                return <Step6Mobile />;
            case 7:
                return <Step7Mobile />;
            case 8:
                return <Step8Mobile />;
            default:
                return <Step1Mobile />;
        }
    }

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
                renderMobileStep()
            )}
        </div>
    );
};

export default VisaApplication; 