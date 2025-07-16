import React from 'react';
import { Link } from 'react-router-dom';
import bannerSA1 from '../../assets/bannerSA1.png';
import handIcon from '../../assets/hand_svg.svg';
import touristIcon from '../../assets/tourist--blender-style.svg';

const DesktopSaudiArabiaVisa = () => {
    return (
        <div className="hidden md:block font-proxima-nova">
            <div
                className="bg-cover bg-center bg-no-repeat py-16"
                style={{ backgroundImage: `url(${bannerSA1})` }}
            >
                <div className="container mx-auto flex justify-between items-end px-4">
                    {/* Left Block */}
                    <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-lg max-w-lg">
                        <h1 className="text-5xl font-bold mb-6">
                            <span style={{ color: '#24a59a' }}>Visa to </span>
                            <span
                                className="bg-gradient-to-r from-[#9c5ee5] to-[#645ff3] text-transparent bg-clip-text"
                            >
                                Saudi Arabia
                            </span>
                        </h1>
                        <div className="grid grid-cols-3 gap-6 mb-8 text-center">
                            <div>
                                <p className="text-gray-500">Cost</p>
                                <p className="font-bold text-lg">From 14 270 ₹</p>
                            </div>
                            <div>
                                <p className="text-gray-500">Approval</p>
                                <p className="font-bold text-lg">1-10 days</p>
                            </div>
                            <div>
                                <p className="text-gray-500">Valid for</p>
                                <p className="font-bold text-lg">from 90 days</p>
                            </div>
                        </div>
                        <Link to="/get-visa/saudi-arabia">
                            <button className="w-full bg-gradient-to-r from-[#9c5ee5] to-[#645ff3] text-white font-bold py-4 rounded-xl text-lg shadow-md hover:scale-105 transition-transform duration-300">
                                GET VISA
                            </button>
                        </Link>
                    </div>

                    {/* Right Block */}
                    <div className="bg-white/90 backdrop-blur-sm p-6 rounded-3xl shadow-lg max-w-sm flex items-start gap-4">
                        <p className="text-gray-600 text-sm">
                            GetVisaGo Ltd — your independent private agency for fast and secure Saudi Arabia e-Visa processing. Apply fully online in minutes, without embassy visits or paperwork hassle. Our single transparent fee covers both our professional service (document check, secure submission, and 24/7 support) and the official government visa cost — no extra payments required. We are not affiliated with the Saudi Arabia government; we assist you to get your visa easily and stress-free.
                        </p>
                        <img src={handIcon} alt="hand icon" className="w-8 h-8 flex-shrink-0" />
                    </div>
                </div>
            </div>

            {/* Visa Types Section */}
            <div className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12">
                        <span style={{ color: '#24a59a' }}>Select visa type</span>
                    </h2>
                    <div className="flex justify-center gap-8">
                        {/* Tourist Visa */}
                        <div className="bg-white p-8 rounded-3xl shadow-lg w-full max-w-md">
                            <div className="flex justify-between items-start mb-6">
                                <h3 className="text-2xl font-bold" style={{ color: '#9c5ee5' }}>Tourist visa</h3>
                                <img src={touristIcon} alt="Tourist" className="w-12 h-12" />
                            </div>
                            <div className="space-y-3 text-gray-600">
                                <div className="flex justify-between"><span>Validity:</span> <span className="font-bold text-black">1 year, multiple entry</span></div>
                                <div className="flex justify-between"><span>Stay per visit:</span> <span className="font-bold text-black">up to 90 days</span></div>
                                <div className="flex justify-between"><span>Government fee:</span> <span className="font-bold text-black">13017,32 ₹</span></div>
                                <div className="flex justify-between"><span>Service fee:</span> <span className="font-bold text-black">up to 90 days</span></div>
                            </div>
                            <Link to="/get-visa/saudi-arabia?type=tourist">
                                <button className="mt-8 w-full border-2 border-[#9c5ee5] text-[#9c5ee5] font-bold py-3 rounded-xl hover:bg-[#9c5ee5] hover:text-white transition-colors duration-300">
                                    BUY NOW
                                </button>
                            </Link>
                        </div>

                        {/* Business Visa */}
                        <div className="bg-white p-8 rounded-3xl shadow-lg w-full max-w-md">
                            <div className="flex justify-between items-start mb-6">
                                <h3 className="text-2xl font-bold" style={{ color: '#9c5ee5' }}>Business Visa</h3>
                                <img src={touristIcon} alt="Business" className="w-12 h-12" />
                            </div>
                            <div className="space-y-3 text-gray-600">
                                <div className="flex justify-between"><span>Validity:</span> <span className="font-bold text-black">1 year, multiple entry</span></div>
                                <div className="flex justify-between"><span>Stay per visit:</span> <span className="font-bold text-black">up to 90 days</span></div>
                                <div className="flex justify-between"><span>Government fee:</span> <span className="font-bold text-black">13017,32 ₹</span></div>
                                <div className="flex justify-between"><span>Service fee:</span> <span className="font-bold text-black">up to 90 days</span></div>
                            </div>
                            <Link to="/get-visa/saudi-arabia?type=business">
                                <button className="mt-8 w-full border-2 border-[#9c5ee5] text-[#9c5ee5] font-bold py-3 rounded-xl hover:bg-[#9c5ee5] hover:text-white transition-colors duration-300">
                                    BUY NOW
                                </button>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default DesktopSaudiArabiaVisa; 