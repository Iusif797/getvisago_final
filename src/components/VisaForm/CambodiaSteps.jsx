import React from 'react';
import {
    FaUser, FaEnvelope, FaPhone, FaHome, FaMinus, FaPlus,
    FaChevronLeft, FaInfoCircle, FaMapMarkerAlt, FaUpload, FaPencilAlt,
    FaRegCreditCard, FaCalendarAlt, FaEdit, FaCreditCard, FaMobile,
    FaClock, FaGlobe, FaPlane, FaCalendar
} from 'react-icons/fa';
import { CustomRadio, DateSelector, GenericFlagIcon } from './SharedComponents';
import cambodiaFlag from '../../assets/Flag_of_Cambodia.svg';
// Import payment icons
import visaIcon from '../../assets/icon_VISA_form.svg';
import mastercardIcon from '../../assets/mastercard_form.svg';
import amexIcon from '../../assets/amex_form.svg';
import googlePayIcon from '../../assets/google_pay_form.svg';
import applePayIcon from '../../assets/apple_pay_form.svg';

const CambodiaSteps = ({
    step, setStep, selectedVisa, setSelectedVisa, visaCount, setVisaCount,
    agreed, setAgreed, passportSubStep, setPassportSubStep,
    paymentSubStep, setPaymentSubStep, billingSubStep, setBillingSubStep,
    meta, countrySlug, cambodiaVisaOptions, isDesktop
}) => {

    // Enhanced Progress Bar Component
    const ProgressBar = ({ currentStep, totalSteps = 10 }) => {
        const progressPercentage = (currentStep / totalSteps) * 100;
        return (
            <div className="w-full bg-gray-100 rounded-full h-3 mb-8 shadow-inner">
                <div
                    className="bg-gradient-to-r from-[#00C6A2] to-[#9B51E0] h-3 rounded-full transition-all duration-700 ease-out shadow-lg"
                    style={{ width: `${progressPercentage}%` }}
                ></div>
            </div>
        );
    };

    // Enhanced Step Number Component
    const StepNumber = ({ number, title }) => (
        <div className="flex items-center mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-[#00C6A2] to-[#9B51E0] rounded-full flex items-center justify-center mr-4 shadow-lg">
                <span className="text-white font-bold text-base">{number}</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        </div>
    );

    // MOBILE STEPS
    const Step1Mobile = () => (
        <div className="space-y-8">
            <ProgressBar currentStep={1} />
            <div>
                <StepNumber number="1" title="Select visa type" />
                <div className="space-y-4">
                    {cambodiaVisaOptions.map(visa => (
                        <div key={visa.id} className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 shadow-sm hover:shadow-md ${selectedVisa === visa.id ? 'border-purple-600 bg-gradient-to-r from-purple-50 to-violet-50 shadow-lg' : 'border-gray-200 bg-white hover:bg-gray-50'}`} onClick={() => setSelectedVisa(visa.id)}>
                            <div className="flex justify-between items-center mb-3">
                                <div className="flex items-center">
                                    <CustomRadio selected={selectedVisa === visa.id} />
                                    <span className="ml-4 font-bold text-gray-800 flex items-center text-lg">
                                        <img src={cambodiaFlag} alt="KH" className="w-7 h-5 mr-3 object-cover rounded shadow-sm" />
                                        {visa.label}
                                    </span>
                                </div>
                                <span className="font-bold text-gray-800 text-lg">{visa.price} USD</span>
                            </div>
                            <div className="ml-10">
                                <div className="inline-block bg-gradient-to-r from-purple-600 to-violet-600 text-white text-sm font-bold px-4 py-2 rounded-full mb-3 shadow-md">{visa.duration}</div>
                                <p className="text-gray-600 text-base leading-relaxed">{visa.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-10">
                <h3 className="text-xl font-bold text-gray-900 mb-5">Select number of visas</h3>
                <div className="flex items-center justify-between p-2 rounded-xl bg-white shadow-lg border border-gray-200 w-36">
                    <button
                        onClick={() => setVisaCount(Math.max(1, visaCount - 1))}
                        className="text-gray-500 hover:text-purple-700 p-3 rounded-lg transition-all duration-200 hover:bg-purple-50"
                    >
                        <FaMinus />
                    </button>
                    <span className="font-bold text-xl text-gray-900">{visaCount}</span>
                    <button
                        onClick={() => setVisaCount(visaCount + 1)}
                        className="text-gray-500 hover:text-purple-700 p-3 rounded-lg transition-all duration-200 hover:bg-purple-50"
                    >
                        <FaPlus />
                    </button>
                </div>
            </div>

            <div className="mt-10 flex items-start gap-3">
                <input
                    type="checkbox"
                    id="privacy-policy"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="h-7 w-7 accent-purple-600 bg-gray-100 border-gray-300 rounded-lg focus:ring-purple-500 mt-0.5 shadow-sm"
                />
                <label htmlFor="privacy-policy" className="text-base text-gray-900 font-medium cursor-pointer leading-relaxed">
                    By clicking "Continue", I agree to the Privacy Policy
                </label>
            </div>

            <button
                onClick={() => setStep(2)}
                disabled={!selectedVisa || !agreed}
                className={`w-full uppercase font-bold py-4 rounded-2xl transition-all duration-300 text-lg shadow-lg ${selectedVisa && agreed
                        ? 'bg-gradient-to-r from-purple-600 to-violet-600 text-white hover:shadow-xl hover:scale-[1.02]'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
            >
                Continue
            </button>
        </div>
    );

    const Step2Mobile = () => (
        <div className="space-y-8">
            <ProgressBar currentStep={2} />
            <div>
                <StepNumber number="2" title="Dates & purpose" />
                <div className="space-y-6">
                    <div>
                        <label className="text-base font-medium text-gray-700 mb-3 block flex items-center">
                            Intended date of arrival <FaInfoCircle className="ml-2 text-gray-400 text-sm" />
                        </label>
                        <DateSelector />
                    </div>
                    <div>
                        <label className="text-base font-medium text-gray-700 mb-3 block flex items-center">
                            Intended date of departure <FaInfoCircle className="ml-2 text-gray-400 text-sm" />
                        </label>
                        <DateSelector />
                    </div>
                    <div>
                        <label className="text-base font-medium text-gray-700 mb-2 block">Purpose of visit</label>
                        <select className="w-full p-4 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 shadow-sm">
                            <option value="">Tourism / Business / Transit</option>
                            <option value="tourism">Tourism</option>
                            <option value="business">Business</option>
                            <option value="transit">Transit</option>
                        </select>
                    </div>
                </div>
            </div>
            <button onClick={() => setStep(3)} className="w-full bg-gradient-to-r from-purple-600 to-violet-600 text-white uppercase font-bold py-4 rounded-2xl hover:shadow-xl hover:scale-[1.02] transition-all duration-300 text-lg shadow-lg">
                Continue
            </button>
        </div>
    );

    const Step3Mobile = () => (
        <div className="space-y-8">
            <ProgressBar currentStep={3} />
            <div>
                <StepNumber number="3" title="Client data" />
                <div className="space-y-6">
                    <div>
                        <label className="text-base font-medium text-gray-700 mb-2 block">First and Last Name</label>
                        <div className="relative">
                            <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400 text-lg" />
                            <input type="text" name="name" placeholder="Your Name" className="pl-12 w-full p-4 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 shadow-sm" />
                        </div>
                    </div>
                    <div>
                        <label className="text-base font-medium text-gray-700 mb-2 block">E-mail</label>
                        <div className="relative">
                            <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400 text-lg" />
                            <input type="email" name="email" placeholder="your@email.com" className="pl-12 w-full p-4 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 shadow-sm" />
                        </div>
                    </div>
                    <div>
                        <label className="text-base font-medium text-gray-700 mb-2 block">Phone number</label>
                        <div className="relative">
                            <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400 text-lg" />
                            <input type="tel" name="phone" placeholder="+1 123 325 57-73" className="pl-12 w-full p-4 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 shadow-sm" />
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={() => setStep(4)} className="w-full bg-gradient-to-r from-purple-600 to-violet-600 text-white uppercase font-bold py-4 rounded-2xl hover:shadow-xl hover:scale-[1.02] transition-all duration-300 text-lg shadow-lg">
                Continue
            </button>
        </div>
    );

    const Step4Mobile = () => (
        <div className="space-y-8">
            <ProgressBar currentStep={4} />
            <div>
                <StepNumber number="4" title="Passport details" />
                <div className="space-y-6">
                    <div>
                        <label className="text-base font-medium text-gray-700 mb-3 block">Applicant 1</label>
                        <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-2xl shadow-sm space-y-5">
                            <div>
                                <label className="text-base font-medium text-gray-700 mb-2 block">First name</label>
                                <input type="text" name="firstName" placeholder="Your Name" className="w-full p-4 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 shadow-sm" />
                            </div>
                            <div>
                                <label className="text-base font-medium text-gray-700 mb-2 block">Last name</label>
                                <input type="text" name="lastName" placeholder="Your Surname" className="w-full p-4 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 shadow-sm" />
                            </div>
                            <div>
                                <label className="text-base font-medium text-gray-700 mb-3 block">Date of birth</label>
                                <DateSelector />
                            </div>
                            <div>
                                <label className="text-base font-medium text-gray-700 mb-2 block">Nationality</label>
                                <div className="flex items-center p-4 bg-white border border-gray-300 rounded-xl shadow-sm">
                                    <img src="https://flagcdn.com/w20/us.png" alt="US" className="w-6 h-4 mr-4 shadow-sm" />
                                    <select className="flex-1 bg-transparent focus:outline-none text-base">
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
            <button onClick={() => setStep(5)} className="w-full bg-gradient-to-r from-purple-600 to-violet-600 text-white uppercase font-bold py-4 rounded-2xl hover:shadow-xl hover:scale-[1.02] transition-all duration-300 text-lg shadow-lg">
                Continue
            </button>
        </div>
    );

    const Step5Mobile = () => (
        <div className="space-y-8">
            <ProgressBar currentStep={5} />
            <div>
                <StepNumber number="5" title="Photos & Documents" />
                <div className="space-y-6">
                    <div>
                        <label className="text-base font-medium text-gray-700 mb-3 block">Applicant 1</label>
                        <div className="space-y-4">
                            {/* Face Photo */}
                            <div className="bg-gradient-to-r from-teal-50 to-teal-100 border-2 border-teal-300 rounded-2xl p-6 flex items-center justify-between shadow-lg">
                                <div className="flex items-center">
                                    <div className="text-teal-600 mr-4">
                                        <FaUser className="text-2xl" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900 text-base">FACE PHOTO (WHITE BACKGROUND)</div>
                                    </div>
                                </div>
                                <button className="bg-gradient-to-r from-teal-500 to-teal-600 text-white p-3 rounded-xl hover:shadow-lg transition-all duration-200 hover:scale-105">
                                    <FaUpload />
                                </button>
                            </div>

                            {/* Passport Scan */}
                            <div className="bg-gradient-to-r from-teal-50 to-teal-100 border-2 border-teal-300 rounded-2xl p-6 flex items-center justify-between shadow-lg">
                                <div className="flex items-center">
                                    <div className="text-teal-600 mr-4">
                                        <FaPencilAlt className="text-2xl" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900 text-base">PASSPORT SCAN</div>
                                    </div>
                                </div>
                                <button className="bg-gradient-to-r from-teal-500 to-teal-600 text-white p-3 rounded-xl hover:shadow-lg transition-all duration-200 hover:scale-105">
                                    <FaUpload />
                                </button>
                            </div>

                            {/* Flight Tickets */}
                            <div className="bg-gradient-to-r from-teal-50 to-teal-100 border-2 border-teal-300 rounded-2xl p-6 flex items-center justify-between shadow-lg">
                                <div className="flex items-center">
                                    <div className="text-teal-600 mr-4">
                                        <FaUpload className="text-2xl" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900 text-base">FLIGHT TICKETS</div>
                                    </div>
                                </div>
                                <button className="bg-gradient-to-r from-teal-500 to-teal-600 text-white p-3 rounded-xl hover:shadow-lg transition-all duration-200 hover:scale-105">
                                    <FaUpload />
                                </button>
                            </div>

                            {/* Hotel Reservation */}
                            <div className="bg-gradient-to-r from-teal-50 to-teal-100 border-2 border-teal-300 rounded-2xl p-6 flex items-center justify-between shadow-lg">
                                <div className="flex items-center">
                                    <div className="text-teal-600 mr-4">
                                        <FaHome className="text-2xl" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900 text-base">HOTEL RESERVATION OR INVITATION</div>
                                    </div>
                                </div>
                                <button className="bg-gradient-to-r from-teal-500 to-teal-600 text-white p-3 rounded-xl hover:shadow-lg transition-all duration-200 hover:scale-105">
                                    <FaUpload />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={() => setStep(6)} className="w-full bg-gradient-to-r from-purple-600 to-violet-600 text-white uppercase font-bold py-4 rounded-2xl hover:shadow-xl hover:scale-[1.02] transition-all duration-300 text-lg shadow-lg">
                Continue
            </button>
        </div>
    );

    const Step6Mobile = () => (
        <div className="space-y-8">
            <ProgressBar currentStep={6} />
            <div>
                <StepNumber number="6" title="Home address" />
                <div className="space-y-6">
                    <div>
                        <label className="text-base font-medium text-gray-700 mb-3 block">Applicant 1</label>
                        <div className="space-y-5">
                            <div>
                                <label className="text-base font-medium text-gray-700 mb-2 block">Country</label>
                                <div className="flex items-center p-4 bg-white border border-gray-300 rounded-xl shadow-sm">
                                    <img src="https://flagcdn.com/w20/us.png" alt="Country" className="w-6 h-4 mr-4 shadow-sm" />
                                    <select className="flex-1 bg-transparent focus:outline-none text-base">
                                        <option>Country</option>
                                        <option value="us">United States</option>
                                        <option value="uk">United Kingdom</option>
                                        <option value="ca">Canada</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="text-base font-medium text-gray-700 mb-2 block">City *</label>
                                <input type="text" name="city" placeholder="Enter name" className="w-full p-4 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 shadow-sm" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-base font-medium text-gray-700 mb-2 block">Street</label>
                                    <input type="text" name="street" placeholder="Name of street" className="w-full p-4 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 shadow-sm" />
                                </div>
                                <div>
                                    <label className="text-base font-medium text-gray-700 mb-2 block">Postal code</label>
                                    <input type="text" name="postalCode" placeholder="XXXX" className="w-full p-4 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 shadow-sm" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={() => setStep(7)} className="w-full bg-gradient-to-r from-purple-600 to-violet-600 text-white uppercase font-bold py-4 rounded-2xl hover:shadow-xl hover:scale-[1.02] transition-all duration-300 text-lg shadow-lg">
                Continue
            </button>
        </div>
    );

    const Step7Mobile = () => (
        <div className="space-y-8">
            <ProgressBar currentStep={7} />
            <div>
                <StepNumber number="7" title="Address in Cambodia" />
                <div className="space-y-6">
                    <div>
                        <label className="text-base font-medium text-gray-700 mb-3 block">Applicant 1</label>
                        <div className="space-y-5">
                            <div>
                                <label className="text-base font-medium text-gray-700 mb-2 block">Name of hotel / appartments =</label>
                                <input type="text" name="hotelName" placeholder="Enter name" className="w-full p-4 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 shadow-sm" />
                            </div>
                            <div>
                                <label className="text-base font-medium text-gray-700 mb-2 block">City *</label>
                                <input type="text" name="cambodiaCity" placeholder="Enter name" className="w-full p-4 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 shadow-sm" />
                            </div>
                            <div>
                                <label className="text-base font-medium text-gray-700 mb-2 block">Street =</label>
                                <input type="text" name="cambodiaStreet" placeholder="Enter name" className="w-full p-4 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 shadow-sm" />
                            </div>
                            <div>
                                <label className="text-base font-medium text-gray-700 mb-2 block">House number =</label>
                                <input type="text" name="houseNumber" placeholder="xxxxxx" className="w-full p-4 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 shadow-sm" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={() => setStep(8)} className="w-full bg-gradient-to-r from-purple-600 to-violet-600 text-white uppercase font-bold py-4 rounded-2xl hover:shadow-xl hover:scale-[1.02] transition-all duration-300 text-lg shadow-lg">
                Continue
            </button>
        </div>
    );

    const Step8Mobile = () => (
        <div className="space-y-8">
            <ProgressBar currentStep={8} />
            <div>
                <StepNumber number="8" title="Data verification" />
                <div className="space-y-6">
                    <div>
                        <label className="text-base font-medium text-gray-700 mb-3 block">Applicant 1</label>
                        <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-2xl shadow-sm space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-base text-gray-700">Name</span>
                                <div className="flex items-center">
                                    <span className="text-base font-medium text-purple-600 mr-3">John Smith</span>
                                    <FaEdit className="text-purple-600 cursor-pointer hover:scale-110 transition-all duration-200" />
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-base text-gray-700">Citizenship</span>
                                <div className="flex items-center">
                                    <span className="text-base font-medium text-purple-600 mr-3">United States</span>
                                    <FaEdit className="text-purple-600 cursor-pointer hover:scale-110 transition-all duration-200" />
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-base text-gray-700">Passport number</span>
                                <div className="flex items-center">
                                    <span className="text-base font-medium text-purple-600 mr-3">123456789</span>
                                    <FaEdit className="text-purple-600 cursor-pointer hover:scale-110 transition-all duration-200" />
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-base text-gray-700">Release date</span>
                                <div className="flex items-center">
                                    <span className="text-base font-medium text-purple-600 mr-3">01.01.2020</span>
                                    <FaEdit className="text-purple-600 cursor-pointer hover:scale-110 transition-all duration-200" />
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-base text-gray-700">Date of Expiry</span>
                                <div className="flex items-center">
                                    <span className="text-base font-medium text-purple-600 mr-3">01.01.2030</span>
                                    <FaEdit className="text-purple-600 cursor-pointer hover:scale-110 transition-all duration-200" />
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-base text-gray-700">Country of birth</span>
                                <div className="flex items-center">
                                    <span className="text-base font-medium text-purple-600 mr-3">United States</span>
                                    <FaEdit className="text-purple-600 cursor-pointer hover:scale-110 transition-all duration-200" />
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-base text-gray-700">Date of birth</span>
                                <div className="flex items-center">
                                    <span className="text-base font-medium text-purple-600 mr-3">15.06.1990</span>
                                    <FaEdit className="text-purple-600 cursor-pointer hover:scale-110 transition-all duration-200" />
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-base text-gray-700">Gender</span>
                                <div className="flex items-center">
                                    <span className="text-base font-medium text-purple-600 mr-3">Male</span>
                                    <FaEdit className="text-purple-600 cursor-pointer hover:scale-110 transition-all duration-200" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={() => setStep(9)} className="w-full bg-gradient-to-r from-purple-600 to-violet-600 text-white uppercase font-bold py-4 rounded-2xl hover:shadow-xl hover:scale-[1.02] transition-all duration-300 text-lg shadow-lg">
                Continue
            </button>
        </div>
    );

    const Step9Mobile = () => (
        <div className="space-y-8">
            <ProgressBar currentStep={9} />
            <div>
                <StepNumber number="9" title="Select payment method" />
                <div className="space-y-6">
                    {/* Payment Cards Icons */}
                    <div className="flex justify-center items-center space-x-6 mb-8">
                        <img src={visaIcon} alt="Visa" className="h-10" />
                        <img src={mastercardIcon} alt="Mastercard" className="h-10" />
                        <img src={amexIcon} alt="American Express" className="h-10" />
                    </div>

                    {/* Bank Card Option */}
                    <div className="bg-gradient-to-r from-teal-50 to-teal-100 border-2 border-teal-300 rounded-3xl p-6 flex items-center justify-between cursor-pointer hover:bg-gradient-to-r hover:from-teal-100 hover:to-teal-200 transition-all duration-300 shadow-lg">
                        <div className="flex items-center">
                            <span className="font-bold text-gray-900 text-xl">BANK CARD</span>
                        </div>
                        <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white p-3 rounded-xl shadow-md">
                            <FaInfoCircle />
                        </div>
                    </div>

                    {/* Mobile Pay Options */}
                    <div className="flex justify-center items-center space-x-6 mb-6">
                        <img src={googlePayIcon} alt="Google Pay" className="h-10" />
                        <img src={applePayIcon} alt="Apple Pay" className="h-10" />
                    </div>

                    {/* Mobile Pay Option */}
                    <div className="bg-gradient-to-r from-teal-50 to-teal-100 border-2 border-teal-300 rounded-3xl p-6 flex items-center justify-between cursor-pointer hover:bg-gradient-to-r hover:from-teal-100 hover:to-teal-200 transition-all duration-300 shadow-lg">
                        <div className="flex items-center">
                            <span className="font-bold text-gray-900 text-xl">MOBILE PAY</span>
                        </div>
                        <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white p-3 rounded-xl shadow-md">
                            <FaInfoCircle />
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={() => setStep(10)} className="w-full bg-gradient-to-r from-purple-600 to-violet-600 text-white uppercase font-bold py-4 rounded-2xl hover:shadow-xl hover:scale-[1.02] transition-all duration-300 text-lg shadow-lg">
                Continue
            </button>
        </div>
    );

    const Step10Mobile = () => (
        <div className="space-y-8">
            <ProgressBar currentStep={10} />
            <div>
                <StepNumber number="10" title="Data verification" />

                {/* Visa Information */}
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-2xl shadow-sm space-y-5 mb-8">
                    <h3 className="font-bold text-gray-900 mb-4 text-lg">Visa Information:</h3>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <FaGlobe className="text-purple-600 mr-3 text-lg" />
                            <span className="text-base text-gray-700">Tourist Visa</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <FaClock className="text-purple-600 mr-3 text-lg" />
                            <span className="text-base text-gray-700">Validity</span>
                        </div>
                        <span className="text-base font-medium text-purple-600">30 days</span>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <FaPlane className="text-purple-600 mr-3 text-lg" />
                            <span className="text-base text-gray-700">Entries</span>
                        </div>
                        <span className="text-base font-medium text-purple-600">Single entry</span>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <FaCalendar className="text-purple-600 mr-3 text-lg" />
                            <span className="text-base text-gray-700">Stay</span>
                        </div>
                        <span className="text-base font-medium text-purple-600">up to 30 days</span>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <FaClock className="text-purple-600 mr-3 text-lg" />
                            <span className="text-base text-gray-700">Processing time</span>
                        </div>
                        <span className="text-base font-medium text-purple-600">3-5 days</span>
                    </div>
                </div>

                {/* Email Field */}
                <div className="mb-6">
                    <label className="text-base font-medium text-gray-700 mb-2 block">Email</label>
                    <div className="flex items-center p-4 bg-white border border-gray-300 rounded-xl shadow-sm">
                        <FaEnvelope className="text-purple-600 mr-4 text-lg" />
                        <input
                            type="email"
                            placeholder="youremail@email.com"
                            className="flex-1 bg-transparent focus:outline-none text-purple-600 text-base"
                        />
                    </div>
                </div>

                {/* Planned Date */}
                <div className="mb-8">
                    <label className="text-base font-medium text-gray-700 mb-3 block">Planned date of entry</label>
                    <DateSelector />
                </div>

                {/* Total Price */}
                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-2xl text-center mb-8 shadow-lg">
                    <div className="text-base mb-2">Total price:</div>
                    <div className="text-3xl font-bold">45 $</div>
                </div>
            </div>

            <button onClick={() => setStep(1)} className="w-full bg-gradient-to-r from-purple-600 to-violet-600 text-white uppercase font-bold py-4 rounded-2xl hover:shadow-xl hover:scale-[1.02] transition-all duration-300 text-lg shadow-lg">
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
                <div className="space-y-5">
                    {cambodiaVisaOptions.map(option => (
                        <div key={option.id} className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 shadow-sm hover:shadow-md ${selectedVisa === option.id ? 'border-purple-600 bg-gradient-to-r from-purple-50 to-violet-50 shadow-lg' : 'border-transparent bg-gray-100 hover:bg-gray-200'}`} onClick={() => setSelectedVisa(option.id)}>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                    <CustomRadio selected={selectedVisa === option.id} />
                                    <span className="font-bold text-gray-800 flex items-center text-lg">
                                        <img src={cambodiaFlag} alt="KH" className="w-7 h-5 mr-3 object-cover rounded shadow-sm" />
                                        {option.label}
                                    </span>
                                </div>
                                <span className="font-bold text-gray-800 text-lg">{option.price} USD</span>
                            </div>
                            <div className="pl-12 mt-3">
                                <div className="inline-block bg-gradient-to-r from-purple-600 to-violet-600 text-white text-sm font-bold px-5 py-2 rounded-full mb-3 shadow-md">{option.duration}</div>
                                <p className="text-gray-600 text-base leading-relaxed">{option.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-10">
                    <h3 className="text-xl font-bold text-gray-900 mb-5">Select number of visas</h3>
                    <div className="flex items-center justify-between p-2 rounded-xl bg-white shadow-lg border border-gray-200 w-36">
                        <button onClick={() => setVisaCount(Math.max(1, visaCount - 1))} className="text-gray-500 hover:text-purple-700 p-3 rounded-lg transition-all duration-200 hover:bg-purple-50"><FaMinus /></button>
                        <span className="font-bold text-xl text-gray-900">{visaCount}</span>
                        <button onClick={() => setVisaCount(visaCount + 1)} className="text-gray-500 hover:text-purple-700 p-3 rounded-lg transition-all duration-200 hover:bg-purple-50"><FaPlus /></button>
                    </div>
                </div>

                <div className="mt-10 flex items-start gap-3">
                    <input
                        type="checkbox"
                        id="privacy-policy-desktop"
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                        className="h-7 w-7 accent-purple-600 bg-gray-100 border-gray-300 rounded-lg focus:ring-purple-500 mt-0.5 shadow-sm"
                    />
                    <label htmlFor="privacy-policy-desktop" className="text-base text-gray-900 font-medium cursor-pointer leading-relaxed">
                        By clicking "Continue", I agree to the Privacy Policy
                    </label>
                </div>
            </div>

            <div>
                <StepNumber number="2" title="Dates & purpose" />
                <div className="space-y-6">
                    <div>
                        <label className="text-base font-medium text-gray-700 mb-3 block flex items-center">
                            Intended date of arrival <FaInfoCircle className="ml-2 text-gray-400 text-sm" />
                        </label>
                        <DateSelector />
                    </div>
                    <div>
                        <label className="text-base font-medium text-gray-700 mb-3 block flex items-center">
                            Intended date of departure <FaInfoCircle className="ml-2 text-gray-400 text-sm" />
                        </label>
                        <DateSelector />
                    </div>
                    <div>
                        <label className="text-base font-medium text-gray-700 mb-2 block">Purpose of visit</label>
                        <select className="w-full p-4 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 shadow-sm">
                            <option value="">Tourism / Business / Transit</option>
                            <option value="tourism">Tourism</option>
                            <option value="business">Business</option>
                            <option value="transit">Transit</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="col-span-2 flex justify-between mt-10">
                <button
                    onClick={() => setStep(2)}
                    disabled={!selectedVisa || !agreed}
                    className={`w-1/2 uppercase font-bold py-5 rounded-2xl transition-all duration-300 text-lg shadow-lg ${selectedVisa && agreed
                            ? 'bg-gradient-to-r from-purple-600 to-violet-600 text-white hover:shadow-xl hover:scale-[1.02]'
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

export default CambodiaSteps;
