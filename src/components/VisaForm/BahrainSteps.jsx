import React from 'react';
import {
    FaUser, FaEnvelope, FaPhone, FaHome, FaMinus, FaPlus,
    FaChevronLeft, FaInfoCircle, FaMapMarkerAlt, FaUpload, FaPencilAlt,
    FaRegCreditCard
} from 'react-icons/fa';
import { CustomRadio, DateSelector, GenericFlagIcon } from './SharedComponents';
import bahrainFlag from '../../assets/Flag_of_Bahrain.svg.png';

const BahrainSteps = ({
    step, setStep, selectedVisa, setSelectedVisa, visaCount, setVisaCount,
    agreed, setAgreed, passportSubStep, setPassportSubStep,
    paymentSubStep, setPaymentSubStep, billingSubStep, setBillingSubStep,
    meta, countrySlug, bahrainVisaOptions, isDesktop
}) => {

    // MOBILE STEPS
    const Step1Mobile = () => (
        <div className="space-y-6">
            <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">1. Select visa type</h2>
                <div className="space-y-3">
                    {bahrainVisaOptions.map(visa => (
                        <div key={visa.id} className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${selectedVisa === visa.id ? 'border-purple-600 bg-purple-50' : 'border-gray-200 bg-gray-50 hover:bg-gray-100'}`} onClick={() => setSelectedVisa(visa.id)}>
                            <div className="flex justify-between items-center mb-2">
                                <div className="flex items-center">
                                    <CustomRadio selected={selectedVisa === visa.id} />
                                    <span className="ml-3 font-bold text-gray-800 flex items-center"><img src={bahrainFlag} alt="BH" className="w-6 h-4 mr-2 object-cover rounded" />{visa.label}</span>
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

            <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Select number of visas</h3>
                <div className="flex items-center justify-between p-1.5 rounded-lg bg-white shadow-sm border border-gray-200 w-32">
                    <button onClick={() => setVisaCount(v => v > 1 ? v - 1 : 1)} className="text-gray-500 hover:text-purple-700 p-2 rounded-md transition">
                        <FaMinus />
                    </button>
                    <span className="font-bold text-lg text-gray-900">{visaCount}</span>
                    <button onClick={() => setVisaCount(v => v + 1)} className="text-gray-500 hover:text-purple-700 p-2 rounded-md transition">
                        <FaPlus />
                    </button>
                </div>
            </div>

            <div className="flex items-center">
                <input type="checkbox" id="privacy-mobile-bahrain" checked={agreed} onChange={() => setAgreed(!agreed)} className="h-4 w-4 accent-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500" />
                <label htmlFor="privacy-mobile-bahrain" className="ml-2 text-sm text-gray-600">By clicking "Continue", I agree to the Privacy Policy</label>
            </div>

            <button onClick={() => setStep(2)} className="w-full bg-gradient-to-r from-purple-600 to-violet-600 text-white uppercase font-bold py-3 rounded-xl hover:shadow-lg hover:shadow-purple-200 transition-all duration-300">
                Continue
            </button>
        </div>
    );

    const Step5Mobile = () => (
        <div className="space-y-6">
            <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">5. Photos & Documents</h2>
                <h3 className="text-lg font-bold text-purple-600 mb-4">Applicant 1</h3>
                <div className="space-y-4">
                    <div className="p-4 border-2 border-dashed border-purple-300 rounded-xl bg-purple-50 hover:bg-purple-100 transition cursor-pointer">
                        <div className="flex items-center space-x-3">
                            <FaUpload className="text-purple-600 text-xl" />
                            <div>
                                <p className="font-semibold text-purple-700">Upload passport photo</p>
                                <p className="text-sm text-purple-500">JPG, PNG up to 5MB</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 border-2 border-dashed border-purple-300 rounded-xl bg-purple-50 hover:bg-purple-100 transition cursor-pointer">
                        <div className="flex items-center space-x-3">
                            <FaUpload className="text-purple-600 text-xl" />
                            <div>
                                <p className="font-semibold text-purple-700">Upload passport copy</p>
                                <p className="text-sm text-purple-500">JPG, PNG up to 5MB</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 border-2 border-dashed border-purple-300 rounded-xl bg-purple-50 hover:bg-purple-100 transition cursor-pointer">
                        <div className="flex items-center space-x-3">
                            <FaUpload className="text-purple-600 text-xl" />
                            <div>
                                <p className="font-semibold text-purple-700">Upload travel insurance</p>
                                <p className="text-sm text-purple-500">PDF, JPG, PNG up to 5MB</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Local address in Bahrain</label>
                        <div className="relative">
                            <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400" />
                            <input type="text" name="localAddress" placeholder="Enter your local address" className="pl-12 w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition" />
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
            <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">6. Data verification</h2>

                <div className="p-4 bg-gray-50 rounded-xl mb-4">
                    <div className="flex items-center mb-3">
                        <img src={bahrainFlag} alt="Bahrain" className="w-6 h-4 mr-2 object-cover rounded" />
                        <span className="font-bold text-gray-800">Bahrain Tourist eVisa</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <div><span className="text-gray-600">Validity:</span> <span className="font-semibold">30 days</span></div>
                        <div><span className="text-gray-600">Entries:</span> <span className="font-semibold">Single</span></div>
                        <div><span className="text-gray-600">Stay:</span> <span className="font-semibold">30 days</span></div>
                        <div><span className="text-gray-600">Processing:</span> <span className="font-semibold">3-5 days</span></div>
                    </div>
                </div>

                <div className="space-y-4">
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">E-mail</label>
                        <div className="relative">
                            <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400" />
                            <input type="email" name="email" placeholder="your@email.com" className="pl-12 w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition" />
                        </div>
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block">Planned date of entry</label>
                        <DateSelector />
                    </div>
                </div>

                <div className="flex items-center bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-4 text-white">
                    <div className="flex-1">
                        <span className="text-sm font-medium">Total price:</span>
                    </div>
                    <div className="text-2xl font-bold">45 $</div>
                </div>
            </div>
            <button onClick={() => setStep(7)} className="w-full bg-gradient-to-r from-purple-600 to-violet-600 text-white uppercase font-bold py-3 rounded-xl hover:shadow-lg hover:shadow-purple-200 transition-all duration-300">
                Continue
            </button>
        </div>
    );

    // DESKTOP STEPS
    const Step1Desktop = () => (
        <div className="grid grid-cols-2 gap-x-16">
            <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6">1. Select visa type</h2>
                <div className="space-y-4">
                    {bahrainVisaOptions.map(option => (
                        <div key={option.id} className={`p-5 rounded-xl border-2 cursor-pointer transition-all ${selectedVisa === option.id ? 'border-purple-600 bg-[#F6F0FF]' : 'border-transparent bg-gray-100 hover:bg-gray-200'}`} onClick={() => setSelectedVisa(option.id)}>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                    <CustomRadio selected={selectedVisa === option.id} />
                                    <span className="font-bold text-gray-800 flex items-center">
                                        <img src={meta.flag} alt="BH" className="w-6 h-4 mr-2 object-cover rounded" />
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
                        <button onClick={() => setVisaCount(v => v > 1 ? v - 1 : 1)} className="text-gray-500 hover:text-purple-700 p-2 rounded-md transition">
                            <FaMinus />
                        </button>
                        <span className="font-bold text-lg text-gray-900">{visaCount}</span>
                        <button onClick={() => setVisaCount(v => v + 1)} className="text-gray-500 hover:text-purple-700 p-2 rounded-md transition">
                            <FaPlus />
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6">2. Client data</h2>
                <div className="space-y-5">
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
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Home address</label>
                        <div className="relative">
                            <FaHome className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400" />
                            <input type="text" name="address" placeholder="Address" className="pl-12 w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition" />
                        </div>
                    </div>
                </div>
                <div className="mt-8 flex items-center">
                    <input type="checkbox" id="privacy-desktop" checked={agreed} onChange={() => setAgreed(!agreed)} className="h-5 w-5 accent-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500" />
                    <label htmlFor="privacy-desktop" className="ml-3 text-sm text-gray-600">By clicking "Continue", I agree to the Privacy Policy</label>
                </div>
                <button onClick={() => setStep(2)} className="w-full mt-6 bg-gradient-to-r from-purple-600 to-violet-600 text-white uppercase font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-purple-200 transition-all duration-300">Continue</button>
            </div>
        </div>
    );

    const Step2Mobile = () => (
        <div className="space-y-6">
            <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">2. Dates & purpose</h2>
                <div className="space-y-4">
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block flex items-center">
                            Planned date of entry
                            <FaInfoCircle className="ml-2 text-gray-400" />
                        </label>
                        <DateSelector />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block flex items-center">
                            Planned date of exit
                            <FaInfoCircle className="ml-2 text-gray-400" />
                        </label>
                        <DateSelector />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block flex items-center">
                            Purpose of entry
                            <FaInfoCircle className="ml-2 text-gray-400" />
                        </label>
                        <input type="text" placeholder="Tourism" className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition" />
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
            <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">3. Passport details</h2>
                <h3 className="text-lg font-bold text-purple-600 mb-4">Applicant 1</h3>
                <div className="space-y-4">
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">First name</label>
                        <input type="text" name="firstName" placeholder="Your Name" className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition" />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Last name</label>
                        <input type="text" name="lastName" placeholder="Your Surname" className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition" />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Passport number</label>
                        <input type="text" name="passport" placeholder="Enter passport number" className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition" />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Date of birth</label>
                        <DateSelector />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Nationality</label>
                        <select className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition">
                            <option value="">Select nationality</option>
                            <option value="us">United States</option>
                            <option value="uk">United Kingdom</option>
                            <option value="ca">Canada</option>
                        </select>
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
            <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">4. Personal information</h2>
                <h3 className="text-lg font-bold text-purple-600 mb-4">Applicant 1</h3>
                <div className="space-y-4">
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
                            <input type="tel" name="phone" placeholder="+1 123 456 7890" className="pl-12 w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition" />
                        </div>
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Home address</label>
                        <div className="relative">
                            <FaHome className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400" />
                            <input type="text" name="address" placeholder="Your address" className="pl-12 w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition" />
                        </div>
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block">Gender</label>
                        <div className="flex gap-4">
                            <div className="flex items-center">
                                <input type="radio" name="gender" value="male" className="h-4 w-4 accent-purple-600" />
                                <label className="ml-2 text-sm text-gray-700">Male</label>
                            </div>
                            <div className="flex items-center">
                                <input type="radio" name="gender" value="female" defaultChecked className="h-4 w-4 accent-purple-600" />
                                <label className="ml-2 text-sm text-gray-700">Female</label>
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

    const Step7Mobile = () => (
        <div className="space-y-6">
            <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">7. Payment</h2>
                <div className="space-y-3">
                    <div className="p-4 border-2 border-purple-600 bg-purple-50 rounded-xl cursor-pointer">
                        <div className="flex items-center">
                            <input type="radio" name="payment" value="card" defaultChecked className="h-4 w-4 accent-purple-600" />
                            <label className="ml-3 font-semibold text-gray-800">Credit/Debit Card</label>
                        </div>
                    </div>
                    <div className="p-4 border border-gray-200 bg-gray-50 rounded-xl cursor-pointer">
                        <div className="flex items-center">
                            <input type="radio" name="payment" value="paypal" className="h-4 w-4 accent-purple-600" />
                            <label className="ml-3 text-gray-600">PayPal</label>
                        </div>
                    </div>
                    <div className="p-4 border border-gray-200 bg-gray-50 rounded-xl cursor-pointer">
                        <div className="flex items-center">
                            <input type="radio" name="payment" value="apple" className="h-4 w-4 accent-purple-600" />
                            <label className="ml-3 text-gray-600">Apple Pay</label>
                        </div>
                    </div>
                    <div className="p-4 border border-gray-200 bg-gray-50 rounded-xl cursor-pointer">
                        <div className="flex items-center">
                            <input type="radio" name="payment" value="google" className="h-4 w-4 accent-purple-600" />
                            <label className="ml-3 text-gray-600">Google Pay</label>
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
            <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">8. Card details</h2>
                <div className="space-y-4">
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Card number</label>
                        <div className="relative">
                            <FaRegCreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400" />
                            <input type="text" name="cardNumber" placeholder="1234 5678 9012 3456" className="pl-12 w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="text-sm font-medium text-gray-700 mb-1 block">Expiry date</label>
                            <input type="text" name="expiry" placeholder="MM/YY" className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition" />
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-700 mb-1 block">CVV</label>
                            <input type="text" name="cvv" placeholder="123" className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition" />
                        </div>
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Cardholder name</label>
                        <div className="relative">
                            <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400" />
                            <input type="text" name="cardName" placeholder="John Doe" className="pl-12 w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition" />
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
            <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">9. Billing address</h2>
                <div className="space-y-4">
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Country</label>
                        <select className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition">
                            <option value="">Select country</option>
                            <option value="us">United States</option>
                            <option value="uk">United Kingdom</option>
                            <option value="ca">Canada</option>
                        </select>
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Address</label>
                        <div className="relative">
                            <FaHome className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400" />
                            <input type="text" name="billingAddress" placeholder="Your address" className="pl-12 w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="text-sm font-medium text-gray-700 mb-1 block">City</label>
                            <input type="text" name="city" placeholder="City" className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition" />
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-700 mb-1 block">ZIP code</label>
                            <input type="text" name="zip" placeholder="12345" className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition" />
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={() => setStep(10)} className="w-full bg-gradient-to-r from-purple-600 to-violet-600 text-white uppercase font-bold py-3 rounded-xl hover:shadow-lg hover:shadow-purple-200 transition-all duration-300">
                Continue
            </button>
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
            default: return renderGenericStep(step);
        }
    }
};

export default BahrainSteps; 