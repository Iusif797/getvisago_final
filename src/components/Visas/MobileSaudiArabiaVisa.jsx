import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlaneDeparture } from 'react-icons/fa';
import saudiArabiaImage from '../../assets/saudi_arabia_visa.png';
import handRightSideIcon from '../../assets/hand_rightside.svg';
import touristIcon from '../../assets/simple-3d-icon-of-a-tourist--blender-style--clean-.png';
import businessIcon from '../../assets/simple-3d-square-icon-of-business-man--blender-sty.png';

const MobileSaudiArabiaVisa = () => {
    return (
        <div className="md:hidden">
            {/* Hero Section */}
            <div className="relative">
                <div className="h-80">
                    <img
                        src={saudiArabiaImage}
                        alt="Saudi Arabia"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="relative px-4 -mt-32">
                    <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md mx-auto flex flex-col">
                        <h1 className="text-3xl font-bold mb-6 text-center">
                            <span className="bg-gradient-to-r from-[#00B89F] to-[#00D6A9] bg-clip-text text-transparent">Visa to </span>
                            <span className="bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] bg-clip-text text-transparent">Saudi Arabia</span>
                        </h1>
                        <div className="space-y-4 mb-6">
                            <div className="flex space-x-4">
                                <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-3 text-center flex-1">
                                    <p className="text-gray-500 text-sm mb-1">Approval:</p>
                                    <p className="text-gray-900 font-bold text-base">1–10 days</p>
                                </div>
                                <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-3 text-center flex-1">
                                    <p className="text-gray-500 text-sm mb-1">Valid for:</p>
                                    <p className="text-gray-900 font-bold text-base">from 90 days</p>
                                </div>
                            </div>
                            <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-3 text-center w-full">
                                <p className="text-gray-500 text-sm mb-1">Cost:</p>
                                <p className="text-gray-900 font-bold text-base">From 14 270 ₹</p>
                            </div>
                        </div>
                        <Link
                            to="/get-visa/saudi-arabia"
                            className="flex items-center justify-center w-full bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white font-bold text-base py-4 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                        >
                            APPLY NOW <FaPlaneDeparture className="ml-2" size={18} />
                        </Link>
                    </div>
                    <div className="bg-white rounded-2xl shadow-lg p-4 mt-8 w-full max-w-md mx-auto flex items-center gap-4" style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}>
                        <img
                            src={handRightSideIcon}
                            alt="Hand pointing"
                            className="w-10 h-10 flex-shrink-0"
                        />
                        <p className="text-gray-700 text-xs font-medium leading-relaxed">
                            GetVisaGo Ltd is an independent agency offering fast and secure Saudi Arabia e-Visa processing. Apply fully online — no embassy visits or paperwork. One clear fee includes the official visa cost and our services: document check, secure submission, and 24/7 support. We are not a government body but help you get your visa easily and hassle-free.
                        </p>
                    </div>
                </div>
            </div>

            {/* Visa Type Selection Section */}
            <div className="bg-gray-50 py-12">
                <div className="w-full max-w-md mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">
                        <span className="bg-gradient-to-r from-[#00B89F] to-[#00D6A9] bg-clip-text text-transparent">Select visa </span>
                        <span className="bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] bg-clip-text text-transparent">type</span>
                    </h2>
                    <div className="space-y-8">
                        {/* Tourist Visa Card */}
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-2xl font-bold text-purple-600">Tourist visa</h3>
                                <img src={touristIcon} alt="Tourist Visa" className="w-12 h-12 object-contain" />
                            </div>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Validity:</span>
                                    <span className="font-semibold text-gray-800">1 year, multiple entry</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Stay per visit:</span>
                                    <span className="font-semibold text-gray-800">up to 90 days</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Government fee:</span>
                                    <span className="font-semibold text-gray-800">13017,32 ₹</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Service fee:</span>
                                    <span className="font-semibold text-gray-800">2500,00 ₹</span>
                                </div>
                            </div>
                            <Link to="/get-visa/saudi-arabia" className="block w-full mt-6 bg-white border-2 border-purple-600 text-purple-600 py-3 rounded-full font-bold text-center text-lg hover:bg-purple-50 transition-all duration-300">
                                APPLY NOW
                            </Link>
                        </div>
                        {/* Business Visa Card */}
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-2xl font-bold text-purple-600">Business visa</h3>
                                <img src={businessIcon} alt="Business Visa" className="w-12 h-12 object-contain" />
                            </div>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Validity:</span>
                                    <span className="font-semibold text-gray-800">1 year, multiple entry</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Stay per visit:</span>
                                    <span className="font-semibold text-gray-800">up to 90 days</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Government fee:</span>
                                    <span className="font-semibold text-gray-800">13017,32 ₹</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Service fee:</span>
                                    <span className="font-semibold text-gray-800">2500,00 ₹</span>
                                </div>
                            </div>
                            <Link to="/get-visa/saudi-arabia" className="block w-full mt-6 bg-white border-2 border-purple-600 text-purple-600 py-3 rounded-full font-bold text-center text-lg hover:bg-purple-50 transition-all duration-300">
                                APPLY NOW
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileSaudiArabiaVisa; 