import React from 'react';
import {
    FaUser, FaEnvelope, FaPhone, FaHome, FaMinus, FaPlus,
    FaChevronLeft, FaInfoCircle, FaMapMarkerAlt, FaUpload, FaPencilAlt,
    FaRegCreditCard, FaCalendarAlt, FaEdit, FaCreditCard, FaMobile,
    FaClock, FaGlobe, FaPlane, FaCalendar
} from 'react-icons/fa';
import { CustomRadio, DateSelector, GenericFlagIcon } from './SharedComponents';
import australiaFlag from '../../assets/Flag_of_Australia.svg.png';
// Import payment icons
import visaIcon from '../../assets/icon_VISA_form.svg';
import mastercardIcon from '../../assets/mastercard_form.svg';
import amexIcon from '../../assets/amex_form.svg';
import googlePayIcon from '../../assets/google_pay_form.svg';
import applePayIcon from '../../assets/apple_pay_form.svg';

const AustraliaSteps = ({
    step, setStep, selectedVisa, setSelectedVisa, visaCount, setVisaCount,
    agreed, setAgreed, passportSubStep, setPassportSubStep,
    paymentSubStep, setPaymentSubStep, billingSubStep, setBillingSubStep,
    meta, countrySlug, australiaVisaOptions, isDesktop
}) => {

    // Progress Bar Component
    const ProgressBar = ({ currentStep, totalSteps = 10 }) => {
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

    // Step Number Component
    const StepNumber = ({ number, title }) => (
        <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-[#00C6A2] to-[#9B51E0] rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold text-sm">{number}</span>
            </div>
            <h2 className="text-xl font-bold text-gray-900">{title}</h2>
        </div>
    );

    // MOBILE STEPS
    const Step1Mobile = () => (
        <div className="space-y-6">
            <ProgressBar currentStep={1} />
            <div>
                <StepNumber number="1" title="Select visa type" />
                <div className="space-y-3">
                    {australiaVisaOptions.map(visa => (
                        <div key={visa.id} className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${selectedVisa === visa.id ? 'border-purple-600 bg-purple-50' : 'border-gray-200 bg-gray-50 hover:bg-gray-100'}`} onClick={() => setSelectedVisa(visa.id)}>
                            <div className="flex justify-between items-center mb-2">
                                <div className="flex items-center">
                                    <CustomRadio selected={selectedVisa === visa.id} />
                                    <span className="ml-3 font-bold text-gray-800 flex items-center">
                                        <img src={australiaFlag} alt="AU" className="w-6 h-4 mr-2 object-cover rounded" />
                                        {visa.label}
                                    </span>
                                </div>
                                <span className="font-bold text-gray-800">{visa.price} USD</span>
                            </div>
                            <div className="ml-8">
                                <div className="inline-block bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">{visa.duration}</div>
                                <p className="text-gray-500 text-sm">{visa.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Select number of visas</h3>
                <div className="flex items-center justify-between p-1.5 rounded-lg bg-white shadow-sm border border-gray-200 w-32">
                    <button
                        onClick={() => setVisaCount(Math.max(1, visaCount - 1))}
                        className="text-gray-500 hover:text-purple-700 p-2 rounded-md transition"
                    >
                        <FaMinus />
                    </button>
                    <span className="font-bold text-lg text-gray-900">{visaCount}</span>
                    <button
                        onClick={() => setVisaCount(visaCount + 1)}
                        className="text-gray-500 hover:text-purple-700 p-2 rounded-md transition"
                    >
                        <FaPlus />
                    </button>
                </div>
            </div>

            <div className="mt-8 flex items-start gap-2">
                <input
                    type="checkbox"
                    id="privacy-policy"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="h-6 w-6 accent-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 mt-0.5"
                />
                <label htmlFor="privacy-policy" className="text-sm text-gray-900 font-normal cursor-pointer">
                    By clicking "Continue", I agree to the Privacy Policy
                </label>
            </div>

            <button
                onClick={() => setStep(2)}
                disabled={!selectedVisa || !agreed}
                className={`w-full uppercase font-bold py-3 rounded-xl transition-all duration-300 ${selectedVisa && agreed
                        ? 'bg-gradient-to-r from-purple-600 to-violet-600 text-white hover:shadow-lg hover:shadow-purple-200'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
            >
                Continue
            </button>
        </div>
    );

    const Step2Mobile = () => (
        <div className="space-y-6">
            <ProgressBar currentStep={2} />
            <div>
                <StepNumber number="2" title="Dates & purpose" />
                <div className="space-y-4">
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block flex items-center">
                            Intended date of arrival <FaInfoCircle className="ml-1 text-gray-400 text-xs" />
                        </label>
                        <DateSelector />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block flex items-center">
                            Intended date of departure <FaInfoCircle className="ml-1 text-gray-400 text-xs" />
                        </label>
                        <DateSelector />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Purpose of visit</label>
                        <select className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition">
                            <option value="">Tourism / Business / Transit</option>
                            <option value="tourism">Tourism</option>
                            <option value="business">Business</option>
                            <option value="transit">Transit</option>
                        </select>
                    </div>
                </div>
            </div>
            <button onClick={() => setStep(3)} className="w-full bg-gradient-to-r from-purple-600 to-violet-600 text-white uppercase font-bold py-3 rounded-xl hover:shadow-lg hover:shadow-purple-200 transition-all duration-300">
                Continue
            </button>
        </div>
    );

    const Step3Mobile = () => (
        <div className="space-y-6">
            <ProgressBar currentStep={3} />
            <div>
                <StepNumber number="3" title="Client data" />
                <div className="space-y-4">
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">First and Last Name</label>
                        <div className="relative">
                            <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400" />
                            <input type="text" name="name" placeholder="Your Name" className="pl-12 w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition" />
                        </div>
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">E-mail</label>
                        <div className="relative">
                            <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400" />
                            <input type="email" name="email" placeholder="your@email.com" className="pl-12 w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition" />
                        </div>
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Phone number</label>
                        <div className="relative">
                            <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400" />
                            <input type="tel" name="phone" placeholder="+1 123 325 57-73" className="pl-12 w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition" />
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={() => setStep(4)} className="w-full bg-gradient-to-r from-purple-600 to-violet-600 text-white uppercase font-bold py-3 rounded-xl hover:shadow-lg hover:shadow-purple-200 transition-all duration-300">
                Continue
            </button>
        </div>
    );

    const Step4Mobile = () => (
        <div className="space-y-6">
            <ProgressBar currentStep={4} />
            <div>
                <StepNumber number="4" title="Passport details" />
                <div className="space-y-4">
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Applicant 1</label>
                        <div className="bg-gray-50 p-4 rounded-lg space-y-4">
                            <div>
                                <label className="text-sm font-medium text-gray-700 mb-1 block">First name</label>
                                <input type="text" name="firstName" placeholder="Your Name" className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition" />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-700 mb-1 block">Last name</label>
                                <input type="text" name="lastName" placeholder="Your Surname" className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition" />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-700 mb-2 block">Date of birth</label>
                                <DateSelector />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-700 mb-1 block">Nationality</label>
                                <div className="flex items-center p-3 bg-white border border-gray-300 rounded-lg">
                                    <img src="https://flagcdn.com/w20/us.png" alt="US" className="w-5 h-3 mr-3" />
                                    <select className="flex-1 bg-transparent focus:outline-none">
                                        <option>Your nationality</option>
                                        <option value="us">United States</option>
                                        <option value="uk">United Kingdom</option>
                                        <option value="ca">Canada</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={() => setStep(5)} className="w-full bg-gradient-to-r from-purple-600 to-violet-600 text-white uppercase font-bold py-3 rounded-xl hover:shadow-lg hover:shadow-purple-200 transition-all duration-300">
                Continue
            </button>
        </div>
    );

    const Step5Mobile = () => (
        <div className="space-y-6">
            <ProgressBar currentStep={5} />
            <div>
                <StepNumber number="5" title="Photos & Documents" />
                <div className="space-y-4">
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Applicant 1</label>
                        <div className="space-y-3">
                            {/* Face Photo */}
                            <div className="bg-teal-100 border-2 border-teal-300 rounded-lg p-4 flex items-center justify-between">
                                <div className="flex items-center">
                                    <div className="text-teal-600 mr-3">
                                        <FaUser className="text-lg" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900 text-sm">FACE PHOTO (WHITE BACKGROUND)</div>
                                    </div>
                                </div>
                                <button className="bg-teal-500 text-white p-2 rounded-lg hover:bg-teal-600 transition">
                                    <FaUpload />
                                </button>
                            </div>

                            {/* Passport Scan */}
                            <div className="bg-teal-100 border-2 border-teal-300 rounded-lg p-4 flex items-center justify-between">
                                <div className="flex items-center">
                                    <div className="text-teal-600 mr-3">
                                        <FaPencilAlt className="text-lg" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900 text-sm">PASSPORT SCAN</div>
                                    </div>
                                </div>
                                <button className="bg-teal-500 text-white p-2 rounded-lg hover:bg-teal-600 transition">
                                    <FaUpload />
                                </button>
                            </div>

                            {/* Flight Tickets */}
                            <div className="bg-teal-100 border-2 border-teal-300 rounded-lg p-4 flex items-center justify-between">
                                <div className="flex items-center">
                                    <div className="text-teal-600 mr-3">
                                        <FaUpload className="text-lg" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900 text-sm">FLIGHT TICKETS</div>
                                    </div>
                                </div>
                                <button className="bg-teal-500 text-white p-2 rounded-lg hover:bg-teal-600 transition">
                                    <FaUpload />
                                </button>
                            </div>

                            {/* Hotel Reservation */}
                            <div className="bg-teal-100 border-2 border-teal-300 rounded-lg p-4 flex items-center justify-between">
                                <div className="flex items-center">
                                    <div className="text-teal-600 mr-3">
                                        <FaHome className="text-lg" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900 text-sm">HOTEL RESERVATION OR INVITATION</div>
                                    </div>
                                </div>
                                <button className="bg-teal-500 text-white p-2 rounded-lg hover:bg-teal-600 transition">
                                    <FaUpload />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={() => setStep(6)} className="w-full bg-gradient-to-r from-purple-600 to-violet-600 text-white uppercase font-bold py-3 rounded-xl hover:shadow-lg hover:shadow-purple-200 transition-all duration-300">
                Continue
            </button>
        </div>
    );

    const Step6Mobile = () => (
        <div className="space-y-6">
            <ProgressBar currentStep={6} />
            <div>
                <StepNumber number="6" title="Home address" />
                <div className="space-y-4">
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Applicant 1</label>
                        <div className="space-y-4">
                            <div>
                                <label className="text-sm font-medium text-gray-700 mb-1 block">Country</label>
                                <div className="flex items-center p-3 bg-white border border-gray-300 rounded-lg">
                                    <img src="https://flagcdn.com/w20/us.png" alt="Country" className="w-5 h-3 mr-3" />
                                    <select className="flex-1 bg-transparent focus:outline-none">
                                        <option>Country</option>
                                        <option value="us">United States</option>
                                        <option value="uk">United Kingdom</option>
                                        <option value="ca">Canada</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-700 mb-1 block">City *</label>
                                <input type="text" name="city" placeholder="Enter name" className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-sm font-medium text-gray-700 mb-1 block">Street</label>
                                    <input type="text" name="street" placeholder="Name of street" className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition" />
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-700 mb-1 block">Postal code</label>
                                    <input type="text" name="postalCode" placeholder="XXXX" className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={() => setStep(7)} className="w-full bg-gradient-to-r from-purple-600 to-violet-600 text-white uppercase font-bold py-3 rounded-xl hover:shadow-lg hover:shadow-purple-200 transition-all duration-300">
                Continue
            </button>
        </div>
    );

    const Step7Mobile = () => (
        <div className="space-y-6">
            <ProgressBar currentStep={7} />
            <div>
                <StepNumber number="7" title="Address in Australia" />
                <div className="space-y-4">
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Applicant 1</label>
                        <div className="space-y-4">
                            <div>
                                <label className="text-sm font-medium text-gray-700 mb-1 block">Name of hotel / appartments =</label>
                                <input type="text" name="hotelName" placeholder="Enter name" className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition" />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-700 mb-1 block">City *</label>
                                <input type="text" name="australiaCity" placeholder="Enter name" className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition" />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-700 mb-1 block">Street =</label>
                                <input type="text" name="australiaStreet" placeholder="Enter name" className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition" />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-700 mb-1 block">House number =</label>
                                <input type="text" name="houseNumber" placeholder="xxxxxx" className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={() => setStep(8)} className="w-full bg-gradient-to-r from-purple-600 to-violet-600 text-white uppercase font-bold py-3 rounded-xl hover:shadow-lg hover:shadow-purple-200 transition-all duration-300">
                Continue
            </button>
        </div>
    );

    const Step8Mobile = () => (
        <div className="space-y-6">
            <ProgressBar currentStep={8} />
            <div>
                <StepNumber number="8" title="Data verification" />
                <div className="space-y-4">
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Applicant 1</label>
                        <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-700">Name</span>
                                <div className="flex items-center">
                                    <span className="text-sm font-medium text-purple-600 mr-2">John Smith</span>
                                    <FaEdit className="text-purple-600 cursor-pointer" />
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-700">Citizenship</span>
                                <div className="flex items-center">
                                    <span className="text-sm font-medium text-purple-600 mr-2">United States</span>
                                    <FaEdit className="text-purple-600 cursor-pointer" />
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-700">Passport number</span>
                                <div className="flex items-center">
                                    <span className="text-sm font-medium text-purple-600 mr-2">123456789</span>
                                    <FaEdit className="text-purple-600 cursor-pointer" />
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-700">Release date</span>
                                <div className="flex items-center">
                                    <span className="text-sm font-medium text-purple-600 mr-2">01.01.2020</span>
                                    <FaEdit className="text-purple-600 cursor-pointer" />
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-700">Date of Expiry</span>
                                <div className="flex items-center">
                                    <span className="text-sm font-medium text-purple-600 mr-2">01.01.2030</span>
                                    <FaEdit className="text-purple-600 cursor-pointer" />
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-700">Country of birth</span>
                                <div className="flex items-center">
                                    <span className="text-sm font-medium text-purple-600 mr-2">United States</span>
                                    <FaEdit className="text-purple-600 cursor-pointer" />
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-700">Date of birth</span>
                                <div className="flex items-center">
                                    <span className="text-sm font-medium text-purple-600 mr-2">15.06.1990</span>
                                    <FaEdit className="text-purple-600 cursor-pointer" />
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-700">Gender</span>
                                <div className="flex items-center">
                                    <span className="text-sm font-medium text-purple-600 mr-2">Male</span>
                                    <FaEdit className="text-purple-600 cursor-pointer" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={() => setStep(9)} className="w-full bg-gradient-to-r from-purple-600 to-violet-600 text-white uppercase font-bold py-3 rounded-xl hover:shadow-lg hover:shadow-purple-200 transition-all duration-300">
                Continue
            </button>
        </div>
    );

    const Step9Mobile = () => (
        <div className="space-y-6">
            <ProgressBar currentStep={9} />
            <div>
                <StepNumber number="9" title="Select payment method" />
                <div className="space-y-4">
                    {/* Payment Cards Icons */}
                    <div className="flex justify-center items-center space-x-4 mb-6">
                        <img src={visaIcon} alt="Visa" className="h-8" />
                        <img src={mastercardIcon} alt="Mastercard" className="h-8" />
                        <img src={amexIcon} alt="American Express" className="h-8" />
                    </div>

                    {/* Bank Card Option */}
                    <div className="bg-teal-100 border-2 border-teal-300 rounded-[50px] p-4 flex items-center justify-between cursor-pointer hover:bg-teal-50 transition">
                        <div className="flex items-center">
                            <span className="font-bold text-gray-900 text-lg">BANK CARD</span>
                        </div>
                        <div className="bg-teal-500 text-white p-2 rounded-lg">
                            <FaInfoCircle />
                        </div>
                    </div>

                    {/* Mobile Pay Options */}
                    <div className="flex justify-center items-center space-x-4 mb-4">
                        <img src={googlePayIcon} alt="Google Pay" className="h-8" />
                        <img src={applePayIcon} alt="Apple Pay" className="h-8" />
                    </div>

                    {/* Mobile Pay Option */}
                    <div className="bg-teal-100 border-2 border-teal-300 rounded-[50px] p-4 flex items-center justify-between cursor-pointer hover:bg-teal-50 transition">
                        <div className="flex items-center">
                            <span className="font-bold text-gray-900 text-lg">MOBILE PAY</span>
                        </div>
                        <div className="bg-teal-500 text-white p-2 rounded-lg">
                            <FaInfoCircle />
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={() => setStep(10)} className="w-full bg-gradient-to-r from-purple-600 to-violet-600 text-white uppercase font-bold py-3 rounded-xl hover:shadow-lg hover:shadow-purple-200 transition-all duration-300">
                Continue
            </button>
        </div>
    );

    const Step10Mobile = () => (
        <div className="space-y-6">
            <ProgressBar currentStep={10} />
            <div>
                <StepNumber number="10" title="Data verification" />

                {/* Visa Information */}
                <div className="bg-gray-50 p-4 rounded-lg space-y-4 mb-6">
                    <h3 className="font-bold text-gray-900 mb-3">Visa Information:</h3>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <FaGlobe className="text-purple-600 mr-2" />
                            <span className="text-sm text-gray-700">ETA (Electronic Travel Authority)</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <FaClock className="text-purple-600 mr-2" />
                            <span className="text-sm text-gray-700">Validity</span>
                        </div>
                        <span className="text-sm font-medium text-purple-600">1 year</span>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <FaPlane className="text-purple-600 mr-2" />
                            <span className="text-sm text-gray-700">Entries</span>
                        </div>
                        <span className="text-sm font-medium text-purple-600">Multiple entries</span>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <FaCalendar className="text-purple-600 mr-2" />
                            <span className="text-sm text-gray-700">Stay</span>
                        </div>
                        <span className="text-sm font-medium text-purple-600">up to 90 days per visit</span>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <FaClock className="text-purple-600 mr-2" />
                            <span className="text-sm text-gray-700">Processing time</span>
                        </div>
                        <span className="text-sm font-medium text-purple-600">3-7 days</span>
                    </div>
                </div>

                {/* Email Field */}
                <div className="mb-4">
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Email</label>
                    <div className="flex items-center p-3 bg-white border border-gray-300 rounded-lg">
                        <FaEnvelope className="text-purple-600 mr-3" />
                        <input
                            type="email"
                            placeholder="youremail@email.com"
                            className="flex-1 bg-transparent focus:outline-none text-purple-600"
                        />
                    </div>
                </div>

                {/* Planned Date */}
                <div className="mb-6">
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Planned date of entry</label>
                    <DateSelector />
                </div>

                {/* Total Price */}
                <div className="bg-green-500 text-white p-4 rounded-lg text-center mb-6">
                    <div className="text-sm mb-1">Total price:</div>
                    <div className="text-2xl font-bold">55 $</div>
                </div>
            </div>

            <button onClick={() => setStep(1)} className="w-full bg-gradient-to-r from-purple-600 to-violet-600 text-white uppercase font-bold py-3 rounded-xl hover:shadow-lg hover:shadow-purple-200 transition-all duration-300">
                Continue
            </button>
        </div>
    );

    // DESKTOP STEPS
    const Step1Desktop = () => (
        <div className="grid grid-cols-2 gap-x-16">
            <ProgressBar currentStep={1} />
            <div>
                <StepNumber number="1" title="Select visa type" />
                <div className="space-y-4">
                    {australiaVisaOptions.map(option => (
                        <div key={option.id} className={`p-5 rounded-xl border-2 cursor-pointer transition-all ${selectedVisa === option.id ? 'border-purple-600 bg-[#F6F0FF]' : 'border-transparent bg-gray-100 hover:bg-gray-200'}`} onClick={() => setSelectedVisa(option.id)}>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                    <CustomRadio selected={selectedVisa === option.id} />
                                    <span className="font-bold text-gray-800 flex items-center">
                                        <img src={australiaFlag} alt="AU" className="w-6 h-4 mr-2 object-cover rounded" />
                                        {option.label}
                                    </span>
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

                <div className="mt-8">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Select number of visas</h3>
                    <div className="flex items-center justify-between p-1.5 rounded-lg bg-white shadow-sm border border-gray-200 w-32">
                        <button onClick={() => setVisaCount(Math.max(1, visaCount - 1))} className="text-gray-500 hover:text-purple-700 p-2 rounded-md transition"><FaMinus /></button>
                        <span className="font-bold text-lg text-gray-900">{visaCount}</span>
                        <button onClick={() => setVisaCount(visaCount + 1)} className="text-gray-500 hover:text-purple-700 p-2 rounded-md transition"><FaPlus /></button>
                    </div>
                </div>

                <div className="mt-8 flex items-start gap-2">
                    <input
                        type="checkbox"
                        id="privacy-policy-desktop"
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                        className="h-6 w-6 accent-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 mt-0.5"
                    />
                    <label htmlFor="privacy-policy-desktop" className="text-sm text-gray-900 font-normal cursor-pointer">
                        By clicking "Continue", I agree to the Privacy Policy
                    </label>
                </div>
            </div>

            <div>
                <StepNumber number="2" title="Dates & purpose" />
                <div className="space-y-5">
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block flex items-center">
                            Intended date of arrival <FaInfoCircle className="ml-1 text-gray-400 text-xs" />
                        </label>
                        <DateSelector />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block flex items-center">
                            Intended date of departure <FaInfoCircle className="ml-1 text-gray-400 text-xs" />
                        </label>
                        <DateSelector />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Purpose of visit</label>
                        <select className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition">
                            <option value="">Tourism / Business / Transit</option>
                            <option value="tourism">Tourism</option>
                            <option value="business">Business</option>
                            <option value="transit">Transit</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="col-span-2 flex justify-between mt-8">
                <button
                    onClick={() => setStep(2)}
                    disabled={!selectedVisa || !agreed}
                    className={`w-1/2 uppercase font-bold py-4 rounded-xl transition-all duration-300 ${selectedVisa && agreed
                            ? 'bg-gradient-to-r from-purple-600 to-violet-600 text-white hover:shadow-lg hover:shadow-purple-200'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                >
                    Continue
                </button>
            </div>
        </div>
    );

    // Generic step renderer for other steps
    const renderGenericStep = (stepNumber) => {
        return <div className="text-center py-8">Step {stepNumber} - Generic implementation</div>;
    };

    if (isDesktop) {
        switch (step) {
            case 1: return <Step1Desktop />;
            default: return renderGenericStep(step);
        }
    } else {
        switch (step) {
            case 1: return <Step1Mobile />;
            case 2: return <Step2Mobile />;
            case 3: return <Step3Mobile />;
            case 4: return <Step4Mobile />;
            case 5: return <Step5Mobile />;
            case 6: return <Step6Mobile />;
            case 7: return <Step7Mobile />;
            case 8: return <Step8Mobile />;
            case 9: return <Step9Mobile />;
            case 10: return <Step10Mobile />;
            default: return renderGenericStep(step);
        }
    }
};

export default AustraliaSteps; 