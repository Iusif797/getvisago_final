import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
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
import omanFlagIcon from '../assets/oman.jpg';
import australiaFlagIcon from '../assets/australia.jpg';
import saudiArabiaFlagIcon from '../assets/saudi-arabia.png';
import malaysiaFlagIcon from '../assets/malaysia.png';
import malaysiaFlagPng from '../assets/Flag_of_Malaysia.svg.png';
import malaysiaNewFlag from '../assets/Flag_of_Malaysia.svg.png';

// Malaysia SVG flag component
const MalaysiaFlagSvg = ({ className = "w-6 h-4 mr-2" }) => (
    <svg className={className} viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg">
        <rect width="30" height="20" fill="#C8102E" />
        <g fill="#fff">
            {[...Array(6)].map((_, i) => (<rect key={i} y={(i * 2 + 1) * 1.428} width="30" height="1.428" />))}
        </g>
        <rect width="12" height="10" fill="#012169" />
        <g fill="#FEDF00" transform="translate(3,5)">
            <path d="M3.5 0a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 1 0-7z" />
            <path d="M5.5 0l.6 1.8h1.9l-1.5 1.1.6 1.8-1.6-1.1-1.5 1.1.6-1.8-1.5-1.1h1.9z" />
        </g>
    </svg>
);

const GenericFlagIcon = () => (
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

const VisaApplication = () => {
    const { country: paramCountry } = useParams();
    const countrySlug = (paramCountry || 'israel').toLowerCase();

    const visaMeta = {
        israel: {
            flag: israelFlagIcon,
            title: 'Tourist visa B2',
            price: 55,
            validity: '2 years',
        },
        oman: {
            flag: omanFlagIcon,
            title: 'Tourist visa',
            price: 50,
            validity: '30 days',
        },
        australia: {
            flag: australiaFlagIcon,
            title: 'Tourist visa',
            price: 60,
            validity: '1 year',
        },
        'saudi-arabia': {
            flag: saudiArabiaFlagIcon,
            title: 'Tourist visa',
            price: 270,
            validity: '1 year',
        },
        malaysia: {
            flag: malaysiaNewFlag,
            title: 'eNTRI Visa',
            price: 55,
            validity: '15 days',
        },
    };

    const meta = visaMeta[countrySlug] || visaMeta.israel;

    const { width } = useWindowSize();
    const isDesktop = width >= 1024;
    const [step, setStep] = useState(1);

    const initialSelectedVisa = countrySlug === 'malaysia' ? 'entrivisa' : 'tourist';
    const [selectedVisa, setSelectedVisa] = useState(initialSelectedVisa);
    const [visaCount, setVisaCount] = useState(1);
    const [agreed, setAgreed] = useState(false);
    const [passportSubStep, setPassportSubStep] = useState(1);
    const [paymentSubStep, setPaymentSubStep] = useState(1);
    const [billingSubStep, setBillingSubStep] = useState(1);

    const malaysiaVisaOptions = [
        {
            id: 'entrivisa',
            label: 'eNTRI Visa',
            price: 55,
            duration: '15 days',
            description: 'Up to 15 days, for tourism or short visits. Single entry. Valid for 3 months from issue date.'
        },
        {
            id: 'singleEntry',
            label: 'Tourist eVisa (Single Entry)',
            price: 80,
            duration: '30 days',
            description: 'Up to 30 days, for tourism or visiting family. Valid for 3 months. One-time entry only.'
        },
        {
            id: 'multipleEntry',
            label: 'Tourist eVisa (Multiple Entry)',
            price: 80,
            duration: '30 days',
            description: 'Up to 30 days per visit, multiple entries allowed. Valid for 3 to 6 months. For regular travelers.'
        },
        {
            id: 'fastVisa',
            label: 'Fast visa service (+25 USD)',
            price: 80,
            duration: '90 days',
            description: 'Expedited processing within 12–24 hours.'
        },
    ];

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

    const Step1DesktopMalaysia = () => (
        <div className="grid grid-cols-2 gap-x-16">
            <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6">1. Select visa type</h2>
                <div className="space-y-4">
                    {malaysiaVisaOptions.map(option => (
                        <div key={option.id} className={`p-5 rounded-xl border-2 cursor-pointer transition-all ${selectedVisa === option.id ? 'border-purple-600 bg-[#F6F0FF]' : 'border-transparent bg-gray-100 hover:bg-gray-200'}`} onClick={() => setSelectedVisa(option.id)}>
                            <div className="flex justify-between items-center"><div className="flex items-center"><CustomRadio selected={selectedVisa === option.id} /><span className="font-bold text-gray-800 flex items-center"><img src={malaysiaFlagPng} alt="MY" className="w-6 h-4 mr-2 object-cover rounded" />{option.label}</span></div><span className="font-bold text-gray-800">{option.price} USD</span></div>
                            <div className="pl-10 mt-2"><div className="inline-block bg-purple-600 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-2">{option.duration}</div><p className="text-gray-500 text-sm">{option.description}</p></div>
                        </div>
                    ))}
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
                <h2 className="text-xl font-bold text-gray-900 mb-6">2. Dates & purpose</h2>
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
                    <div><label className="text-sm font-medium text-gray-700 mb-1 block">First name</label><input type="text" name="firstName" placeholder="Your Name" className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition" /></div>
                    <div><label className="text-sm font-medium text-gray-700 mb-1 block">Last name</label><input type="text" name="lastName" placeholder="Your Surname" className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition" /></div>
                    <div><label className="text-sm font-medium text-gray-700 mb-1 block">Sex</label><select className="w-full appearance-none bg-white border border-gray-300 rounded-lg p-3 pr-8 focus:outline-none focus:ring-2 focus:ring-purple-500"><option>Male</option><option>Female</option></select></div>
                    <div><label className="text-sm font-medium text-gray-700 mb-2 block">Date of birth</label><DateSelector isStep4={true} /></div>
                </div>
            </div>
            <div className="col-span-2 flex justify-center mt-8">
                <button onClick={() => setStep(3)} className="w-1/2 bg-gradient-to-r from-purple-600 to-violet-600 text-white uppercase font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-purple-200 transition-all duration-300">Continue</button>
            </div>
        </div>
    );

    const Step3Desktop = () => (
        <div className="grid grid-cols-2 gap-x-16">
            <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6">4. Passport details</h2>
                <div className="space-y-5">
                    <h3 className="text-lg font-bold text-purple-600">Applicant 1</h3>
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
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 10l5 5 5-5H7z" /></svg>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Nationality</label>
                        <div className="relative flex items-center">
                            <GenericFlagIcon />
                            <select className="pl-12 w-full appearance-none bg-gray-50 border border-gray-200 rounded-xl p-3 pr-8 focus:outline-none focus:ring-2 focus:ring-purple-500">
                                <option>Your nationality</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 10l5 5 5-5H7z" /></svg>
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
            </div>
            <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6">4. Passport details</h2>
                <div className="space-y-5">
                    <h3 className="text-lg font-bold text-purple-600">Applicant 1</h3>
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Place of issue</label>
                        <div className="relative flex items-center">
                            <FaMapMarkerAlt className="absolute left-4 text-purple-400" />
                            <input type="text" placeholder="Enter place" className="pl-12 w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-purple-500 focus:border-purple-500 transition" />
                        </div>
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Issuing Authority</label>
                        <input type="text" placeholder="issuing authority" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-purple-500 focus:border-purple-500 transition" />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Religion</label>
                        <input type="text" placeholder="Enter religion" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-purple-500 focus:border-purple-500 transition" />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Place of birth</label>
                        <div className="relative flex items-center">
                            <GenericFlagIcon />
                            <select className="pl-12 w-full appearance-none bg-gray-50 border border-gray-200 rounded-xl p-3 pr-8 focus:outline-none focus:ring-2 focus:ring-purple-500">
                                <option>Select country</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 10l5 5 5-5H7z" /></svg>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Additional nationality</label>
                        <div className="relative flex items-center">
                            <GenericFlagIcon />
                            <select className="pl-12 w-full appearance-none bg-gray-50 border border-gray-200 rounded-xl p-3 pr-8 focus:outline-none focus:ring-2 focus:ring-purple-500">
                                <option>Select country</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 10l5 5 5-5H7z" /></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-2 flex justify-center mt-8">
                <button onClick={() => setStep(4)} className="w-1/2 bg-gradient-to-r from-purple-600 to-violet-600 text-white uppercase font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-purple-200 transition-all duration-300">Continue</button>
            </div>
        </div>
    );

    const Step4Desktop = () => (
        <div className="grid grid-cols-2 gap-x-16">
            <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6">5. Personal information</h2>
                <div className="space-y-5">
                    <h3 className="text-lg font-bold text-purple-600">Applicant 1</h3>
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Marital status</label>
                        <div className="relative">
                            <select className="w-full appearance-none bg-white border border-gray-300 rounded-lg p-3 pr-8 focus:outline-none focus:ring-2 focus:ring-purple-500">
                                <option>Married</option>
                                <option>Single</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 10l5 5 5-5H7z" /></svg>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block flex items-center">Father's name <FaInfoCircle className="ml-1 text-gray-400 text-xs" /></label>
                        <input type="text" placeholder="Enter name" className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition" />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block flex items-center">Mother's name <FaInfoCircle className="ml-1 text-gray-400 text-xs" /></label>
                        <input type="text" placeholder="Enter name" className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition" />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block flex items-center">Occupation <FaInfoCircle className="ml-1 text-gray-400 text-xs" /></label>
                        <input type="text" placeholder="addasd" className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition" />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block flex items-center">Contact info <FaInfoCircle className="ml-1 text-gray-400 text-xs" /></label>
                        <input type="text" placeholder="Hotel Address / Person Contacts" className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition" />
                    </div>
                </div>
            </div>
            <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6">7. Add photos</h2>
                <div className="space-y-5">
                    <h3 className="text-lg font-bold text-purple-600">Applicant 1</h3>
                    <div className="space-y-4">
                        <button className="w-full flex justify-between items-center p-4 border-2 border-[#04C495] rounded-xl text-[#04C495] font-bold hover:bg-[#04C495]/5 transition-all">
                            <span>FACE PHOTO</span>
                            <div className="bg-[#04C495] p-2 rounded-md">
                                <FaUpload className="text-white" />
                            </div>
                        </button>
                        <button className="w-full flex justify-between items-center p-4 border-2 border-[#04C495] rounded-xl text-[#04C495] font-bold hover:bg-[#04C495]/5 transition-all">
                            <span>PASSPORT SCAN</span>
                            <div className="bg-[#04C495] p-2 rounded-md">
                                <FaUpload className="text-white" />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div className="col-span-2 flex justify-center mt-8">
                <button onClick={() => setStep(5)} className="w-1/2 bg-gradient-to-r from-purple-600 to-violet-600 text-white uppercase font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-purple-200 transition-all duration-300">Continue</button>
            </div>
        </div>
    );

    const Step5Desktop = () => (
        <div className="grid grid-cols-2 gap-x-16">
            <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6">6. Data verification</h2>
                <div className="space-y-5">
                    <h3 className="text-lg font-bold text-purple-600">Applicant 1</h3>
                    <div className="space-y-3">
                        <div className="flex justify-between items-center">
                            <span className="text-gray-700">Name</span>
                            <div className="flex items-center">
                                <span className="text-purple-600 font-bold mr-2">Саламидов Вагтангович</span>
                                <FaPencilAlt className="text-gray-400 cursor-pointer" />
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-700">Citizenship</span>
                            <div className="flex items-center">
                                <span className="text-purple-600 font-bold mr-2">Россия</span>
                                <FaPencilAlt className="text-gray-400 cursor-pointer" />
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-700">Passport number</span>
                            <div className="flex items-center">
                                <span className="text-purple-600 font-bold mr-2">4851**4**</span>
                                <FaPencilAlt className="text-gray-400 cursor-pointer" />
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-700">Release date</span>
                            <div className="flex items-center">
                                <span className="text-purple-600 font-bold mr-2">05.05.2015</span>
                                <FaPencilAlt className="text-gray-400 cursor-pointer" />
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-700">Date of Expiry</span>
                            <div className="flex items-center">
                                <span className="text-purple-600 font-bold mr-2">05.05.2025</span>
                                <FaPencilAlt className="text-gray-400 cursor-pointer" />
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-700">Country of birth</span>
                            <div className="flex items-center">
                                <span className="text-purple-600 font-bold mr-2">Россия</span>
                                <FaPencilAlt className="text-gray-400 cursor-pointer" />
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-700">Date of birth</span>
                            <div className="flex items-center">
                                <span className="text-purple-600 font-bold mr-2">05.05.2015</span>
                                <FaPencilAlt className="text-gray-400 cursor-pointer" />
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-700">Sex</span>
                            <div className="flex items-center">
                                <span className="text-purple-600 font-bold mr-2">05.05.2015</span>
                                <FaPencilAlt className="text-gray-400 cursor-pointer" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6">6. Data verification</h2>
                <div className="space-y-5">
                    <div className="border border-gray-200 rounded-xl p-4">
                        <h4 className="font-bold text-gray-900 mb-3">Visa information:</h4>
                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center text-purple-600 font-bold">
                                    <img src={meta.flag} alt={countrySlug} className="w-6 h-4 mr-2 object-cover rounded" />
                                    <span>Tourist visa B2</span>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-700">Validity:</span>
                                <span className="font-bold text-purple-600">2 years</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-700">Entries:</span>
                                <span className="font-bold text-purple-600">Multiple entries</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-700">Stay:</span>
                                <span className="font-bold text-purple-600">up to 90 days per visit</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-700">Будет готова через</span>
                                <span className="font-bold text-purple-600">2 days</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Email</label>
                        <input type="email" value="your@email.com" readOnly className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg" />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Planned date of entry ®</label>
                        <DateSelector isStep4={true} />
                    </div>
                    <div className="bg-[#00D6A9] text-white font-bold text-xl text-center p-4 rounded-xl">
                        Total price: 55 $
                    </div>
                </div>
            </div>
            <div className="col-span-2 flex justify-center mt-8">
                <button onClick={() => setStep(6)} className="w-1/2 bg-gradient-to-r from-purple-600 to-violet-600 text-white uppercase font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-purple-200 transition-all duration-300">Continue</button>
            </div>
        </div>
    );

    const Step6Desktop = () => (
        <div className="grid grid-cols-2 gap-x-16">
            <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6">7. Payment</h2>
                <div className="space-y-5">
                    <div className="flex justify-start items-center space-x-4 mb-6">
                        <img src={visaCard} alt="Visa" className="h-8" />
                        <img src={masterCard} alt="Mastercard" className="h-8" />
                        <img src={amexCard} alt="Amex" className="h-8" />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Full name</label>
                        <div className="relative flex items-center">
                            <FaUser className="absolute left-4 text-purple-400" />
                            <input type="text" placeholder="Your Name" className="pl-12 w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition" />
                        </div>
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Card Number</label>
                        <input type="text" placeholder="XXXX XXXX XXXX XXXX" className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition" />
                    </div>
                    <div className="flex space-x-4">
                        <div className="flex-1">
                            <label className="text-sm font-medium text-gray-700 mb-1 block">MM/YY</label>
                            <input type="text" placeholder="MM/YY" className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition" />
                        </div>
                        <div className="flex-1">
                            <label className="text-sm font-medium text-gray-700 mb-1 block">CVV</label>
                            <input type="text" placeholder="XXX" className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition" />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6">7. Billing Address</h2>
                <div className="space-y-5">
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Address Line</label>
                        <input type="text" placeholder="Address Line" className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition" />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Country</label>
                        <input type="text" placeholder="Address Line" className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition" />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">City</label>
                        <input type="text" placeholder="Address Line" className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition" />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Postal code</label>
                        <input type="text" placeholder="Address Line" className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition" />
                    </div>
                    <button className="w-full bg-[#00D6A9] text-white uppercase font-bold py-4 rounded-xl hover:shadow-lg transition-all duration-300">PAY 1488$</button>
                </div>
            </div>
        </div>
    );

    const Step1Mobile = () => (
        <>
            <h2 className="text-xl font-bold text-gray-900 mb-5">1. Select visa type</h2>
            <div className="space-y-4">
                <div className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${selectedVisa === 'tourist' ? 'border-purple-600 bg-[#F6F0FF]' : 'border-transparent bg-gray-100'}`} onClick={() => setSelectedVisa('tourist')}><div className="flex justify-between items-center"><div className="flex items-center"><CustomRadio selected={selectedVisa === 'tourist'} /><span className="font-bold text-gray-800 text-base">Tourist visa B2</span></div><span className="font-bold text-gray-800">55 USD</span></div><div className="pl-10 mt-2"><div className="inline-block bg-purple-600 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-2">90 days</div><p className="text-gray-500 text-sm leading-tight">Up to 90 days, for tourism, visiting family, or short-term business.</p></div></div>
                <div className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${selectedVisa === 'fastTourist' ? 'border-purple-600 bg-[#F6F0FF]' : 'border-transparent bg-gray-100'}`} onClick={() => setSelectedVisa('fastTourist')}><div className="flex justify-between items-center"><div className="flex items-center"><CustomRadio selected={selectedVisa === 'fastTourist'} /><span className="font-bold text-gray-800 text-base">Fast tourist visa B2</span></div><span className="font-bold text-gray-800">80 USD</span></div><div className="pl-10 mt-2"><div className="inline-block bg-purple-600 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-2">90 days</div><p className="text-gray-500 text-sm leading-tight">Expedited processing (+25 USD), still max 90 days.</p></div></div>
            </div>
            <div className="mt-8"><h3 className="text-lg font-bold text-gray-900 mb-3">Select number of visas</h3><div className="flex items-center justify-between p-1 rounded-lg bg-gray-100 w-32"><button onClick={() => setVisaCount(v => v > 1 ? v - 1 : 1)} className="text-gray-600 hover:text-purple-700 p-2 rounded-md transition"><FaMinus /></button><span className="font-bold text-lg text-gray-900">{visaCount}</span><button onClick={() => setVisaCount(v => v + 1)} className="text-gray-600 hover:text-purple-700 p-2 rounded-md transition"><FaPlus /></button></div></div>
            <div className="mt-8 flex items-center"><input type="checkbox" id="privacy-mobile-1" checked={agreed} onChange={() => setAgreed(!agreed)} className="h-5 w-5 bg-gray-100 border-gray-300 rounded focus:ring-purple-500" /><label htmlFor="privacy-mobile-1" className="ml-3 text-sm text-gray-600">By clicking "Continue", I agree to the Privacy Policy</label></div>
            <button onClick={() => setStep(2)} className="w-full mt-6 bg-gradient-to-r from-purple-600 to-violet-600 text-white uppercase font-bold py-3.5 rounded-xl hover:shadow-lg transition-all duration-300">Continue</button>
        </>
    );

    const Step1MobileMalaysia = () => (
        <>
            <h2 className="text-xl font-bold text-gray-900 mb-5">1. Select visa type</h2>
            <div className="space-y-4">
                {malaysiaVisaOptions.map(option => (
                    <div key={option.id} className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${selectedVisa === option.id ? 'border-purple-600 bg-[#F6F0FF]' : 'border-transparent bg-gray-100'}`} onClick={() => setSelectedVisa(option.id)}>
                        <div className="flex justify-between items-center"><div className="flex items-center"><CustomRadio selected={selectedVisa === option.id} /><span className="font-bold text-gray-800 text-base flex items-center"><img src={malaysiaFlagPng} alt="MY" className="w-6 h-4 mr-2 object-cover rounded" />{option.label}</span></div><span className="font-bold text-gray-800">{option.price} USD</span></div>
                        <div className="pl-10 mt-2"><div className="inline-block bg-purple-600 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-2">{option.duration}</div><p className="text-gray-500 text-sm leading-tight">{option.description}</p></div>
                    </div>
                ))}
            </div>
            <div className="mt-8"><h3 className="text-lg font-bold text-gray-900 mb-3">Select number of visas</h3><div className="flex items-center justify-between p-1 rounded-lg bg-gray-100 w-32"><button onClick={() => setVisaCount(v => v > 1 ? v - 1 : 1)} className="text-gray-600 hover:text-purple-700 p-2 rounded-md transition"><FaMinus /></button><span className="font-bold text-lg text-gray-900">{visaCount}</span><button onClick={() => setVisaCount(v => v + 1)} className="text-gray-600 hover:text-purple-700 p-2 rounded-md transition"><FaPlus /></button></div></div>
            <div className="mt-8 flex items-center"><input type="checkbox" id="privacy-mobile-1" checked={agreed} onChange={() => setAgreed(!agreed)} className="h-5 w-5 bg-gray-100 border-gray-300 rounded focus:ring-purple-500" /><label htmlFor="privacy-mobile-1" className="ml-3 text-sm text-gray-600">By clicking "Continue", I agree to the Privacy Policy</label></div>
            <button onClick={() => setStep(2)} className="w-full mt-6 bg-gradient-to-r from-purple-600 to-violet-600 text-white uppercase font-bold py-3.5 rounded-xl hover:shadow-lg transition-all duration-300">Continue</button>
        </>
    );

    const Step2Mobile = () => (
        <>
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
        </>
    );

    const Step3Mobile = () => (
        <>
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
        </>
    );

    const Step4Mobile = () => (
        <>
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
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 10l5 5 5-5H7z" /></svg>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Nationality</label>
                        <div className="relative flex items-center">
                            <GenericFlagIcon />
                            <select className="pl-12 w-full appearance-none bg-gray-50 border border-gray-200 rounded-xl p-3 pr-8 focus:outline-none focus:ring-2 focus:ring-purple-500">
                                <option>Your nationality</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 10l5 5 5-5H7z" /></svg>
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
                            <GenericFlagIcon />
                            <select className="pl-12 w-full appearance-none bg-gray-50 border border-gray-200 rounded-xl p-3 pr-8 focus:outline-none focus:ring-2 focus:ring-purple-500">
                                <option>Select country</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 10l5 5 5-5H7z" /></svg>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Additional nationality</label>
                        <div className="relative flex items-center">
                            <GenericFlagIcon />
                            <select className="pl-12 w-full appearance-none bg-gray-50 border border-gray-200 rounded-xl p-3 pr-8 focus:outline-none focus:ring-2 focus:ring-purple-500">
                                <option>Select country</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 10l5 5 5-5H7z" /></svg>
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
        </>
    );

    const Step5Mobile = () => (
        <>
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
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 10l5 5 5-5H7z" /></svg>
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
        </>
    );

    const Step6Mobile = () => {
        if (paymentSubStep === 1) {
            return (
                <>
                    <h2 className="text-xl font-bold text-black mb-1">6. Data verification</h2>
                    <p className="font-bold text-black mb-4">Visa information:</p>

                    <div className="space-y-3 text-sm mb-6">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center text-purple-600 font-bold">
                                <img src={meta.flag} alt={countrySlug} className="w-6 h-4 mr-2 object-cover rounded" />
                                <span>{meta.title}</span>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center text-gray-700"><FaHourglassHalf className="mr-2 text-gray-400" /><span>Validity:</span></div>
                            <span className="font-bold text-purple-600">{meta.validity}</span>
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
                        Total price: {meta.price} $
                    </div>

                    <div className="flex items-center justify-between">
                        <button onClick={() => setStep(5)} className="bg-gray-200 text-gray-600 p-4 rounded-full transition hover:bg-gray-300"><FaChevronLeft /></button>
                        <button onClick={() => setPaymentSubStep(2)} className="flex-grow ml-4 bg-gradient-to-r from-[#9B51E0] to-[#7B2CBF] text-white uppercase font-bold py-3.5 rounded-xl hover:shadow-lg transition-all duration-300">Continue</button>
                    </div>
                </>
            );
        }

        return (
            <>
                <h2 className="text-xl font-bold text-black mb-6">6. Select payment method</h2>

                <div className="flex justify-start items-center space-x-4 mb-6">
                    <img src={visaCard} alt="Visa" className="h-8" />
                    <img src={masterCard} alt="Mastercard" className="h-8" />
                    <img src={amexCard} alt="Amex" className="h-8" />
                </div>

                <div className="space-y-4 mb-6">
                    <button className="w-full">
                        <img src={bankCardButton} alt="Bank Card" className="w-full h-auto" />
                    </button>
                    <div className="flex justify-start items-center space-x-4">
                        <img src={gPay} alt="Google Pay" className="h-8" />
                        <img src={applePay} alt="Apple Pay" className="h-8" />
                    </div>
                    <button className="w-full">
                        <img src={mobilePayButton} alt="Mobile Pay" className="w-full h-auto" />
                    </button>
                </div>

                <div className="flex items-center justify-between mt-8">
                    <button onClick={() => setPaymentSubStep(1)} className="bg-gray-200 text-gray-600 p-4 rounded-full transition hover:bg-gray-300"><FaChevronLeft /></button>
                    <button onClick={() => setStep(7)} className="flex-grow ml-4 bg-gradient-to-r from-[#9B51E0] to-[#7B2CBF] text-white uppercase font-bold py-3.5 rounded-xl hover:shadow-lg transition-all duration-300">Continue</button>
                </div>
            </>
        );
    };

    const Step7Mobile = () => {
        if (billingSubStep === 1) { // Billing Address
            return (
                <>
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
                </>
            );
        }

        // Card View
        return (
            <>
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
                    <button onClick={() => setStep(8)} className="flex-grow ml-4 bg-[#00D6A9] text-white uppercase font-bold py-3.5 rounded-xl hover:shadow-lg transition-all duration-300">PAY 55$</button>
                </div>
            </>
        );
    };

    const Step8Mobile = () => (
        <>
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
        </>
    );

    // ---------- MALAYSIA EXCLUSIVE STEPS (MOBILE) ----------
    const Step5MobileMalaysia = () => (
        <>
            <h2 className="text-xl font-bold text-black mb-2">5. Photos & Documents</h2>
            <p className="text-[#9B51E0] font-bold mb-6">Applicant 1</p>
            <div className="space-y-4">
                {['FACE PHOTO', 'PASSPORT SCAN', 'RETURN TICKET', 'BANK STATEMENT', 'ACCOMMODATION PROOF'].map((label, idx) => (
                    <button key={idx} className="w-full flex justify-between items-center p-4 border-2 border-[#04C495] rounded-xl text-[#04C495] font-bold">
                        <span>{label}</span>
                        <div className="bg-[#04C495] p-2 rounded-md">
                            <FaUpload className="text-white" />
                        </div>
                    </button>
                ))}
            </div>
            <div className="flex items-center justify-between mt-8">
                <button onClick={() => setStep(4)} className="bg-gray-200 text-gray-600 p-4 rounded-full transition hover:bg-gray-300"><FaChevronLeft /></button>
                <button onClick={() => setStep(6)} className="flex-grow ml-4 bg-gradient-to-r from-[#9B51E0] to-[#7B2CBF] text-white uppercase font-bold py-3.5 rounded-xl hover:shadow-lg transition-all duration-300">Continue</button>
            </div>
        </>
    );

    const Step6MobileMalaysia = () => (
        <>
            <h2 className="text-xl font-bold text-black mb-2">6. Home address</h2>
            <p className="text-[#9B51E0] font-bold mb-6">Applicant 1</p>
            <div className="space-y-4">
                <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Country</label>
                    <div className="relative flex items-center">
                        <GenericFlagIcon />
                        <select className="pl-12 w-full appearance-none bg-gray-50 border border-gray-200 rounded-xl p-3 pr-8 focus:outline-none focus:ring-2 focus:ring-purple-500">
                            <option>Country</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700"><svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 10l5 5 5-5H7z" /></svg></div>
                    </div>
                </div>
                {['City', 'Street', 'Postal code'].map((lbl, i) => (
                    <div key={i}>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">{lbl} <span className="text-red-500">•</span></label>
                        <input type="text" placeholder="Enter name" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-purple-500 focus:border-purple-500 transition" />
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-between mt-8">
                <button onClick={() => setStep(5)} className="bg-gray-200 text-gray-600 p-4 rounded-full transition hover:bg-gray-300"><FaChevronLeft /></button>
                <button onClick={() => setStep(7)} className="flex-grow ml-4 bg-gradient-to-r from-[#9B51E0] to-[#7B2CBF] text-white uppercase font-bold py-3.5 rounded-xl hover:shadow-lg transition-all duration-300">Continue</button>
            </div>
        </>
    );

    const Step7MobileMalaysia = () => (
        <>
            <h2 className="text-xl font-bold text-black mb-2">7. Address in Malaysia</h2>
            <p className="text-[#9B51E0] font-bold mb-6">Applicant 1</p>
            <div className="space-y-4">
                {[
                    { lbl: 'Name of hotel / appartments', ph: 'Enter name' },
                    { lbl: 'City', ph: 'Enter name' },
                    { lbl: 'Street', ph: 'Enter name' },
                    { lbl: 'House number', ph: 'addasd' }
                ].map((f, i) => (
                    <div key={i}>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">{f.lbl} <span className="text-red-500">•</span></label>
                        <input type="text" placeholder={f.ph} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-purple-500 focus:border-purple-500 transition" />
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-between mt-8">
                <button onClick={() => setStep(6)} className="bg-gray-200 text-gray-600 p-4 rounded-full transition hover:bg-gray-300"><FaChevronLeft /></button>
                <button onClick={() => setStep(8)} className="flex-grow ml-4 bg-gradient-to-r from-[#9B51E0] to-[#7B2CBF] text-white uppercase font-bold py-3.5 rounded-xl hover:shadow-lg transition-all duration-300">Continue</button>
            </div>
        </>
    );

    const Step8MobileMalaysia = () => (
        <>
            <h2 className="text-xl font-bold text-black mb-2">8. Data verification</h2>
            <p className="text-[#9B51E0] font-bold mb-6">Applicant 1</p>
            <div className="space-y-3 mb-6 text-sm">
                {[
                    { label: 'Name', value: 'Саламандара Вахтанговна' },
                    { label: 'Citizenship', value: 'Россия' },
                    { label: 'Passport number', value: '485718493' },
                    { label: 'Release date', value: '05.05.2015' },
                    { label: 'Date of Expiry', value: '05.05.2025' },
                    { label: 'Country of birth', value: 'Россия' },
                    { label: 'Date of birth', value: '05.05.2015' },
                    { label: 'Sex', value: 'Female' },
                ].map((row, i) => (
                    <div key={i} className="flex justify-between items-center border-b border-gray-200 py-2">
                        <span className="text-gray-700">{row.label}</span>
                        <div className="flex items-center">
                            <span className="text-purple-600 font-bold mr-2">{row.value}</span>
                            <FaPencilAlt className="text-gray-400" />
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-between mt-8">
                <button onClick={() => setStep(7)} className="bg-gray-200 text-gray-600 p-4 rounded-full transition hover:bg-gray-300"><FaChevronLeft /></button>
                <button onClick={() => setStep(9)} className="flex-grow ml-4 bg-gradient-to-r from-[#9B51E0] to-[#7B2CBF] text-white uppercase font-bold py-3.5 rounded-xl hover:shadow-lg transition-all duration-300">Continue</button>
            </div>
        </>
    );

    // --- Add after Step8MobileMalaysia definition, replace existing Step9MobileMalaysia and payment
    const Step9MobileMalaysia = () => (
        <>
            <h2 className="text-xl font-bold text-black mb-1">9. Data verification</h2>
            <p className="font-bold text-black mb-4">Visa information:</p>

            <div className="space-y-3 text-sm mb-6">
                <div className="flex justify-between items-center">
                    <div className="flex items-center text-purple-600 font-bold">
                        <img src={meta.flag} alt={countrySlug} className="w-6 h-4 mr-2 object-cover rounded" />
                        <span>{meta.title}</span>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex items-center text-gray-700"><FaHourglassHalf className="mr-2 text-gray-400" /><span>Validity:</span></div>
                    <span className="font-bold text-purple-600">{meta.validity}</span>
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
                Total price: {meta.price} $
            </div>

            <div className="flex items-center justify-between mt-8">
                <button onClick={() => setStep(8)} className="bg-gray-200 text-gray-600 p-4 rounded-full transition hover:bg-gray-300"><FaChevronLeft /></button>
                <button onClick={() => setStep(10)} className="flex-grow ml-4 bg-gradient-to-r from-[#9B51E0] to-[#7B2CBF] text-white uppercase font-bold py-3.5 rounded-xl hover:shadow-lg transition-all duration-300">Continue</button>
            </div>
        </>
    );

    // Payment step now 10
    const Step10MobileMalaysia = () => {
        const [subStep, setSubStep] = useState(1);
        if (subStep === 1) {
            return (
                <>
                    <h2 className="text-xl font-bold text-black mb-6">10. Select payment method</h2>
                    <div className="flex justify-start items-center space-x-4 mb-6">
                        <img src={visaCard} alt="Visa" className="h-8" />
                        <img src={masterCard} alt="Mastercard" className="h-8" />
                        <img src={amexCard} alt="Amex" className="h-8" />
                    </div>
                    <div className="space-y-4 mb-6">
                        <button className="w-full" onClick={() => setSubStep(2)}>
                            <img src={bankCardButton} alt="Bank Card" className="w-full h-auto" />
                        </button>
                    </div>
                    <div className="flex items-center justify-between mt-8">
                        <button onClick={() => setStep(9)} className="bg-gray-200 text-gray-600 p-4 rounded-full transition hover:bg-gray-300"><FaChevronLeft /></button>
                    </div>
                </>
            );
        }
        return (
            <>
                <h2 className="text-xl font-bold text-black mb-6">Payment</h2>
                <div className="space-y-4 mb-6">
                    <input type="text" placeholder="Card Holder" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-purple-500 focus:border-purple-500" />
                    <input type="text" placeholder="XXXX XXXX XXXX XXXX" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-purple-500 focus:border-purple-500" />
                    <div className="flex space-x-4">
                        <input type="text" placeholder="MM/YY" className="flex-1 p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-purple-500 focus:border-purple-500" />
                        <input type="text" placeholder="CVV" className="flex-1 p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-purple-500 focus:border-purple-500" />
                    </div>
                </div>
                <div className="flex items-center justify-between mt-8">
                    <button onClick={() => setSubStep(1)} className="bg-gray-200 text-gray-600 p-4 rounded-full transition hover:bg-gray-300"><FaChevronLeft /></button>
                    <button className="flex-grow ml-4 bg-[#00D6A9] text-white uppercase font-bold py-3.5 rounded-xl">PAY {meta.price}$</button>
                </div>
            </>
        );
    };

    // ---------- END MALAYSIA EXCLUSIVE STEPS ----------

    const renderMobileStepContent = () => {
        if (countrySlug === 'malaysia') {
            switch (step) {
                case 1: return <Step1MobileMalaysia />;
                case 2: return <Step2Mobile />;
                case 3: return <Step3Mobile />;
                case 4: return <Step4Mobile />;
                case 5: return <Step5MobileMalaysia />;
                case 6: return <Step6MobileMalaysia />;
                case 7: return <Step7MobileMalaysia />;
                case 8: return <Step8MobileMalaysia />;
                case 9: return <Step9MobileMalaysia />;
                case 10: return <Step10MobileMalaysia />;
                default: return <Step1MobileMalaysia />;
            }
        }
        // default behaviour for other countries
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
            case 9:
                return <Step9MobileMalaysia />;
            case 10:
                return <Step10MobileMalaysia />;
            default:
                return <Step1Mobile />;
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 flex justify-center px-4 pt-4 pb-24 lg:items-center lg:py-8">
            {isDesktop ? (
                <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 gap-x-8 items-center mb-10">
                        <h1 className="text-5xl font-bold bg-gradient-to-r from-[#00C6A2] to-[#9B51E0] bg-clip-text text-transparent">
                            {step === 1 && 'Select visa type'}
                            {step === 2 && 'Dates & purpose'}
                            {step === 3 && 'Passport details'}
                            {step === 4 && 'Personal information'}
                            {step === 5 && 'Data verification'}
                            {step === 6 && 'Payment'}
                        </h1>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                                className="bg-gradient-to-r from-[#00C6A2] to-[#9B51E0] h-2 rounded-full transition-all duration-500 ease-in-out"
                                style={{
                                    width: step === 1 ? '16.67%' :
                                        step === 2 ? '33.33%' :
                                            step === 3 ? '50%' :
                                                step === 4 ? '66.67%' :
                                                    step === 5 ? '83.33%' :
                                                        step === 6 ? '100%' : '16.67%'
                                }}
                            ></div>
                        </div>
                    </div>
                    {step === 1 && (countrySlug === 'malaysia' ? <Step1DesktopMalaysia /> : <Step1Desktop />)}
                    {step === 2 && <Step2Desktop />}
                    {step === 3 && <Step3Desktop />}
                    {step === 4 && <Step4Desktop />}
                    {step === 5 && <Step5Desktop />}
                    {step === 6 && <Step6Desktop />}
                </div>
            ) : (
                <div className="bg-white p-5 rounded-3xl shadow-xl w-full max-w-md mx-auto">
                    <ProgressBar currentStep={step} totalSteps={10} />
                    {renderMobileStepContent()}
                </div>
            )}
        </div>
    );
};

export default VisaApplication; 