import React from 'react';
import {
    FaUser, FaEnvelope, FaPhone, FaHome, FaMinus, FaPlus,
    FaChevronLeft, FaInfoCircle, FaMapMarkerAlt, FaUpload, FaPencilAlt
} from 'react-icons/fa';
import { CustomRadio, DateSelector, GenericFlagIcon } from './SharedComponents';
import sriLankaFlag from '../../assets/Flag_of_Sri_Lanka.svg';

const SriLankaSteps = ({
    step, setStep, selectedVisa, setSelectedVisa, visaCount, setVisaCount,
    agreed, setAgreed, passportSubStep, setPassportSubStep,
    paymentSubStep, setPaymentSubStep, billingSubStep, setBillingSubStep,
    meta, countrySlug, sriLankaVisaOptions, isDesktop
}) => {

    // MOBILE STEPS
    const Step1Mobile = () => (
        <div className="w-full p-5 bg-white rounded-[20px] shadow-[0px_4px_60px_0px_rgba(0,0,0,0.20)] flex flex-col justify-start items-center gap-6">
            {/* Progress Bar */}
            <div className="self-stretch h-3 relative bg-neutral-100 rounded-[50px] shadow-[inset_0px_1px_8px_0px_rgba(0,0,0,0.25)] overflow-hidden">
                <div className="w-16 h-3 left-0 top-0 absolute bg-gradient-to-br from-emerald-500 to-violet-500" />
            </div>

            {/* Main Content */}
            <div className="self-stretch flex flex-col justify-start items-start gap-3">
                <div className="self-stretch justify-start text-stone-900 text-lg font-bold font-['Montserrat']">Select visa type</div>

                <div className="self-stretch flex flex-col justify-start items-start gap-3">
                    {sriLankaVisaOptions.map((visa, index) => (
                        <div
                            key={visa.id}
                            className={`self-stretch p-2 bg-neutral-100 rounded-xl flex flex-col justify-start items-start gap-2 overflow-hidden cursor-pointer ${selectedVisa === visa.id
                                ? 'outline outline-2 outline-offset-[-2px] outline-violet-500'
                                : ''
                                }`}
                            onClick={() => setSelectedVisa(visa.id)}
                        >
                            <div className="inline-flex justify-start items-center gap-1.5">
                                <div className="w-4 h-4 flex justify-start items-center gap-2.5 overflow-hidden">
                                    <div className={`w-4 h-4 rounded-full ${selectedVisa === visa.id
                                        ? 'bg-white border-4 border-violet-500'
                                        : 'bg-gray-100 border border-gray-400'
                                        }`} />
                                </div>
                                <div className="w-72 self-stretch flex justify-between items-end">
                                    <div className="inline-flex flex-col justify-start items-start gap-1">
                                        <div className="justify-start text-stone-900 text-sm font-bold font-['Inter']">{visa.label}</div>
                                    </div>
                                    <div className="text-right justify-start text-stone-900 text-xs font-bold font-['Inter']">{visa.price} USD</div>
                                </div>
                            </div>
                            <div className="self-stretch pl-6 inline-flex justify-start items-start gap-2">
                                <div className="w-20 px-2.5 py-1 bg-violet-500 rounded-[20px] flex justify-center items-center gap-2.5">
                                    <div className="justify-center text-white text-sm font-bold font-['Inter']">{visa.duration}</div>
                                </div>
                                <div className="flex-1 inline-flex flex-col justify-start items-start gap-1">
                                    <div className="self-stretch justify-start text-zinc-600 text-xs font-normal font-['Inter']">{visa.description}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Select number of visas */}
            <div className="self-stretch inline-flex justify-between items-center">
                <div className="flex-1 justify-start text-stone-900 text-lg font-bold font-['Inter']">Select number of visas</div>
                <div className="w-32 h-11 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-gray-400 flex justify-start items-start overflow-hidden">
                    <button
                        onClick={() => setVisaCount(Math.max(1, visaCount - 1))}
                        className="w-9 h-11 bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition"
                    >
                        <div className="w-3 h-0.5 bg-gray-600" />
                    </button>
                    <div className="flex-1 self-stretch bg-white flex justify-center items-center gap-2.5">
                        <div className="flex-1 text-center justify-start text-gray-800 text-base font-medium font-['Roboto']">{visaCount}</div>
                    </div>
                    <button
                        onClick={() => setVisaCount(visaCount + 1)}
                        className="w-9 h-11 bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition"
                    >
                        <FaPlus className="text-gray-600 text-xs" />
                    </button>
                </div>
            </div>

            {/* Privacy Policy */}
            <div className="self-stretch justify-start text-stone-900 text-sm font-normal font-['Inter']">
                By clicking "Continue", I agree to the Privacy Policy
            </div>

            {/* Continue Button */}
            <button
                onClick={() => setStep(2)}
                className="self-stretch h-11 flex flex-col justify-start items-start gap-2.5"
            >
                <div className="w-full flex-1 max-w-[480px] px-4 py-1.5 bg-violet-500 rounded-[50px] inline-flex justify-start items-center gap-3 overflow-hidden hover:bg-violet-600 transition">
                    <div className="flex-1 text-center justify-start text-white text-xl font-black font-['Gotham'] uppercase">Continue</div>
                </div>
            </button>
        </div>
    );

    const Step5Mobile = () => (
        <div className="w-full p-5 bg-white rounded-[20px] shadow-[0px_4px_60px_0px_rgba(0,0,0,0.20)] flex flex-col justify-start items-center gap-6">
            {/* Progress Bar */}
            <div className="self-stretch h-3 relative bg-neutral-100 rounded-[50px] shadow-[inset_0px_1px_8px_0px_rgba(0,0,0,0.25)] overflow-hidden">
                <div className="w-36 h-3 left-0 top-0 absolute bg-gradient-to-br from-emerald-500 to-violet-500" />
            </div>

            {/* Main Content */}
            <div className="self-stretch flex flex-col justify-start items-start gap-3">
                <div className="self-stretch justify-start text-stone-900 text-lg font-bold font-['Montserrat']">Photos & Documents</div>
                <div className="self-stretch justify-start text-violet-500 text-base font-bold font-['Montserrat']">Applicant 1</div>

                {/* Document Upload Buttons */}
                {['FACE PHOTO', 'PASSPORT SCAN', 'RETURN TICKET (OPTIONAL)', 'HOTEL RESERVATION'].map((label, idx) => (
                    <div key={idx} className="w-80 h-11 inline-flex justify-start items-start">
                        <div className="flex-1 self-stretch max-w-[480px] px-4 py-1.5 rounded-tl-xl rounded-bl-xl outline outline-2 outline-offset-[-1px] outline-emerald-500 flex justify-center items-center gap-3 overflow-hidden">
                            <div className="flex-1 text-center justify-start text-emerald-500 text-base font-black font-['Gotham'] uppercase tracking-wider">
                                {label === 'HOTEL RESERVATION' ? 'HOTEL RESERVATION' : label}
                            </div>
                        </div>
                        <div className="self-stretch max-w-[480px] px-4 py-1.5 bg-emerald-500 rounded-tr-xl rounded-br-xl outline outline-2 outline-offset-[-1px] outline-emerald-500 flex justify-start items-center gap-3 overflow-hidden">
                            <div className="w-9 h-9 relative">
                                <div className="w-7 h-6 left-[5.10px] top-[6px] absolute outline outline-2 outline-offset-[-1px] outline-white" />
                            </div>
                        </div>
                    </div>
                ))}

                {/* Local Address Input */}
                <div className="self-stretch flex flex-col justify-start items-start gap-1">
                    <div className="self-stretch h-4 inline-flex justify-start items-center gap-1">
                        <div className="justify-start text-gray-800 text-sm font-normal font-['Inter']">Local address if you have no hotel reservation</div>
                        <div className="w-1.5 h-1.5 relative overflow-hidden">
                            <div className="w-1.5 h-1.5 left-0 top-0 absolute bg-gray-400 rounded-full" />
                            <div className="w-[3px] h-[5px] left-[2px] top-[1px] absolute bg-white" />
                        </div>
                    </div>
                    <div className="self-stretch px-4 py-3 bg-white rounded-[10px] outline outline-1 outline-offset-[-1px] outline-gray-400 inline-flex justify-start items-center gap-2">
                        <div className="flex-1 justify-start text-gray-400 text-sm font-normal font-['Gotham']">Hotel name or host info</div>
                    </div>
                </div>
            </div>

            {/* Continue Button */}
            <button
                onClick={() => setStep(6)}
                className="self-stretch h-11 flex flex-col justify-start items-start gap-2.5"
            >
                <div className="w-full flex-1 max-w-[480px] px-4 py-1.5 bg-violet-500 rounded-[50px] inline-flex justify-start items-center gap-3 overflow-hidden hover:bg-violet-600 transition">
                    <div className="flex-1 text-center justify-start text-white text-xl font-black font-['Gotham'] uppercase">Continue</div>
                </div>
            </button>
        </div>
    );

    // DESKTOP STEPS
    const Step1Desktop = () => (
        <div className="grid grid-cols-2 gap-x-16">
            <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6">1. Select visa type</h2>
                <div className="space-y-4">
                    {sriLankaVisaOptions.map(option => (
                        <div key={option.id} className={`p-5 rounded-xl border-2 cursor-pointer transition-all ${selectedVisa === option.id ? 'border-purple-600 bg-[#F6F0FF]' : 'border-transparent bg-gray-100 hover:bg-gray-200'}`} onClick={() => setSelectedVisa(option.id)}>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                    <CustomRadio selected={selectedVisa === option.id} />
                                    <span className="font-bold text-gray-800 flex items-center">
                                        <img src={sriLankaFlag} alt="LK" className="w-6 h-4 mr-2 object-cover rounded" />
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
                    <input type="checkbox" id="privacy-desktop-srilanka" checked={agreed} onChange={() => setAgreed(!agreed)} className="h-5 w-5 accent-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500" />
                    <label htmlFor="privacy-desktop-srilanka" className="ml-3 text-sm text-gray-600">By clicking "Continue", I agree to the Privacy Policy</label>
                </div>
                <button onClick={() => setStep(2)} className="w-full mt-6 bg-gradient-to-r from-purple-600 to-violet-600 text-white uppercase font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-purple-200 transition-all duration-300">Continue</button>
            </div>
        </div>
    );

    // Step 6 Desktop - Data verification
    const Step6Desktop = () => (
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
                                <span className="text-purple-600 font-bold mr-2">Female</span>
                                <FaPencilAlt className="text-gray-400 cursor-pointer" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6">Visa information</h2>
                <div className="space-y-5">
                    <div className="border border-gray-200 rounded-xl p-4">
                        <h4 className="font-bold text-gray-900 mb-3">Visa information:</h4>
                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center text-purple-600 font-bold">
                                    <img src={sriLankaFlag} alt="LK" className="w-6 h-4 mr-2 object-cover rounded" />
                                    <span>{meta.title}</span>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-700">Validity:</span>
                                <span className="font-bold text-purple-600">{meta.validity}</span>
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
                        Total price: {meta.price} $
                    </div>
                </div>
            </div>
            <div className="col-span-2 flex justify-center mt-8">
                <button onClick={() => setStep(7)} className="w-1/2 bg-gradient-to-r from-purple-600 to-violet-600 text-white uppercase font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-purple-200 transition-all duration-300">Continue</button>
            </div>
        </div>
    );

    const Step4Desktop = () => (
        <div className="grid grid-cols-2 gap-x-16">
            <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6">7. Add photos</h2>
                <div className="space-y-5">
                    <h3 className="text-lg font-bold text-purple-600">Applicant 1</h3>
                    <div className="space-y-4">
                        {['FACE PHOTO', 'PASSPORT SCAN', 'RETURN TICKET (OPTIONAL)', 'HOTEL RESERVATION'].map((label, idx) => (
                            <button key={idx} className="w-full flex justify-between items-center p-4 border-2 border-[#04C495] rounded-xl text-[#04C495] font-bold hover:bg-[#04C495]/5 transition-all">
                                <span>{label}</span>
                                <div className="bg-[#04C495] p-2 rounded-md">
                                    <FaUpload className="text-white" />
                                </div>
                            </button>
                        ))}
                    </div>
                    <div className="mt-4">
                        <p className="text-gray-600 text-sm mb-2 flex items-center">
                            Local address if you have no hotel reservation
                            <FaInfoCircle className="ml-1 text-gray-400" />
                        </p>
                        <input
                            type="text"
                            placeholder="Hotel name or host info"
                            className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition"
                        />
                    </div>
                </div>
            </div>
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
                        <input type="text" placeholder="Enter occupation" className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition" />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block flex items-center">Contact info <FaInfoCircle className="ml-1 text-gray-400 text-xs" /></label>
                        <input type="text" placeholder="Hotel Address / Person Contacts" className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition" />
                    </div>
                </div>
            </div>
            <div className="col-span-2 flex justify-center mt-8">
                <button onClick={() => setStep(5)} className="w-1/2 bg-gradient-to-r from-purple-600 to-violet-600 text-white uppercase font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-purple-200 transition-all duration-300">Continue</button>
            </div>
        </div>
    );

    // Step 6 - Data verification (mobile)
    const Step6Mobile = () => (
        <div className="w-full p-5 bg-white rounded-[20px] shadow-[0px_4px_60px_0px_rgba(0,0,0,0.20)] flex flex-col justify-start items-center gap-6">
            {/* Progress Bar */}
            <div className="self-stretch h-3 relative bg-neutral-100 rounded-[50px] shadow-[inset_0px_1px_8px_0px_rgba(0,0,0,0.25)] overflow-hidden">
                <div className="w-52 h-3 left-0 top-0 absolute bg-gradient-to-br from-emerald-500 to-violet-500" />
            </div>

            {/* Main Content */}
            <div className="self-stretch flex flex-col justify-start items-start gap-3">
                <div className="self-stretch justify-start text-stone-900 text-lg font-bold font-['Montserrat']">Data verification</div>
                <div className="w-60 justify-start text-black text-base font-bold font-['Montserrat']">Visa information:</div>

                {/* Visa Flag and Title */}
                <div className="flex items-center gap-2">
                    <img src={sriLankaFlag} alt="LK" className="w-6 h-6" />
                    <div className="w-72 justify-start text-violet-500 text-sm font-semibold font-['Montserrat']">Tourist ETA (Single Entry)</div>
                </div>

                {/* Visa Details */}
                <div className="space-y-2 text-xs">
                    <div className="flex justify-between items-center">
                        <div className="w-40 justify-start text-black font-normal font-['Inter']">Validity:</div>
                        <div className="w-20 text-right text-violet-500 text-sm font-medium font-['Gotham']">30 days</div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="w-48 justify-start text-black font-normal font-['Inter']">Entries:</div>
                        <div className="w-32 text-right text-violet-500 text-sm font-medium font-['Gotham']">Single entry</div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="w-36 justify-start text-black font-normal font-['Inter']">Stay:</div>
                        <div className="w-56 h-4 text-right text-violet-500 text-sm font-medium font-['Gotham']">up to 30 days per visit</div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="w-48 justify-start text-black font-normal font-['Inter']">Будет готова через</div>
                        <div className="w-32 text-right text-violet-500 text-sm font-medium font-['Gotham']">2 days</div>
                    </div>
                </div>

                {/* Email Input */}
                <div className="self-stretch flex flex-col justify-start items-start gap-1">
                    <div className="self-stretch h-4 inline-flex justify-start items-center gap-1">
                        <div className="justify-start text-gray-800 text-sm font-normal font-['Inter']">Email</div>
                    </div>
                    <div className="self-stretch px-4 py-3 bg-white rounded-[10px] outline outline-1 outline-offset-[-1px] outline-gray-400 inline-flex justify-start items-center gap-2">
                        <div className="w-4 h-4 relative overflow-hidden">
                            <div className="w-4 h-3 left-[0.71px] top-[2.12px] absolute bg-violet-500" />
                        </div>
                        <div className="flex-1 justify-start text-gray-400 text-sm font-normal font-['Gotham']">your@email.com</div>
                    </div>
                </div>

                {/* Date Entry */}
                <div className="self-stretch flex flex-col justify-start items-start gap-1">
                    <div className="self-stretch h-4 inline-flex justify-start items-center gap-1">
                        <div className="justify-start text-gray-800 text-sm font-normal font-['Inter']">Planned date of entry</div>
                        <div className="w-1.5 h-1.5 relative overflow-hidden">
                            <div className="w-1.5 h-1.5 left-0 top-0 absolute bg-gray-400 rounded-full" />
                            <div className="w-[3px] h-[5px] left-[2px] top-[1px] absolute bg-white" />
                        </div>
                    </div>
                    <div className="self-stretch inline-flex justify-start items-start gap-2.5">
                        <div className="flex-1 flex justify-between items-center">
                            <div className="flex-1 flex justify-start items-center">
                                <div className="flex-1 h-10 px-2 py-3 bg-white rounded-tl-[10px] rounded-bl-[10px] border-l border-t border-b border-gray-400 flex justify-start items-center gap-2">
                                    <div className="flex-1 justify-start text-stone-900 text-sm font-normal font-['Gotham']">01</div>
                                    <div className="w-4 h-4 flex justify-start items-center gap-1.5 overflow-hidden">
                                        <div className="flex-1 self-stretch relative">
                                            <div className="w-1.5 h-3.5 left-[15.58px] top-[5.67px] absolute origin-top-left rotate-90 outline outline-2 outline-offset-[-1px] outline-gray-500" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 h-10 px-2 py-3 bg-white border-l border-t border-b border-gray-400 flex justify-start items-center gap-2">
                                    <div className="flex-1 justify-start text-stone-900 text-sm font-normal font-['Gotham']">01</div>
                                    <div className="w-4 h-4 flex justify-start items-center gap-1.5 overflow-hidden">
                                        <div className="flex-1 self-stretch relative">
                                            <div className="w-1.5 h-3.5 left-[15.58px] top-[5.67px] absolute origin-top-left rotate-90 outline outline-2 outline-offset-[-1px] outline-gray-500" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 h-10 px-2 py-3 bg-white border-l border-t border-b border-gray-400 flex justify-start items-center gap-2">
                                    <div className="flex-1 justify-start text-stone-900 text-sm font-normal font-['Gotham']">2025</div>
                                    <div className="w-4 h-4 flex justify-start items-center gap-1.5 overflow-hidden">
                                        <div className="flex-1 self-stretch relative">
                                            <div className="w-1.5 h-3.5 left-[15.58px] top-[5.67px] absolute origin-top-left rotate-90 outline outline-2 outline-offset-[-1px] outline-gray-500" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-10 h-10 rounded-[10px] inline-flex flex-col justify-center items-center gap-2.5">
                                <div className="w-full flex-1 max-w-[480px] px-4 py-1.5 bg-violet-500 rounded-tr-[10px] rounded-br-[10px] inline-flex justify-center items-center gap-3 overflow-hidden">
                                    <div className="w-9 h-9 relative overflow-hidden">
                                        <div className="w-5 h-7 left-[7px] top-[4px] absolute bg-white" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Total Price */}
                <div className="w-80 inline-flex justify-start items-center">
                    <div className="self-stretch px-4 py-2 rounded-tl-[10px] rounded-bl-[10px] outline outline-2 outline-offset-[-2px] outline-emerald-500 inline-flex flex-col justify-center items-center">
                        <div className="justify-start text-gray-800 text-sm font-normal font-['Inter']">Total price:</div>
                    </div>
                    <div className="flex-1 self-stretch px-4 py-2 bg-emerald-500 rounded-tr-[10px] rounded-br-[10px] inline-flex flex-col justify-center items-center">
                        <div className="text-center justify-start text-white text-2xl font-black font-['Gotham'] uppercase">55 $</div>
                    </div>
                </div>
            </div>

            {/* Continue Button */}
            <button
                onClick={() => setStep(7)}
                className="self-stretch h-11 flex flex-col justify-start items-start gap-2.5"
            >
                <div className="w-full flex-1 max-w-[480px] px-4 py-1.5 bg-violet-500 rounded-[50px] inline-flex justify-start items-center gap-3 overflow-hidden hover:bg-violet-600 transition">
                    <div className="flex-1 text-center justify-start text-white text-xl font-black font-['Gotham'] uppercase">Continue</div>
                </div>
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
            case 4: return <Step4Desktop />;
            case 5: return <Step6Desktop />;
            default: return renderGenericStep(step);
        }
    } else {
        switch (step) {
            case 1: return <Step1Mobile />;
            case 5: return <Step5Mobile />;
            case 6: return <Step6Mobile />;
            default: return renderGenericStep(step);
        }
    }
};

export default SriLankaSteps; 