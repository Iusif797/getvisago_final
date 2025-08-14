import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlaneDeparture } from 'react-icons/fa';
import handIcon from '../../assets/hand_svg.svg';

const DesktopVisaPageLayout = ({
    countryName,
    bannerImage,
    cost,
    approvalTime,
    validity,
    visaTypes = [],
    agencyText,
    getVisaLink
}) => {
    return (
        <div className="font-proxima-nova">
            <div className="relative">
                <div className="h-[750px] w-full bg-cover bg-center rounded-[3rem]"
                    style={{ backgroundImage: `url(${bannerImage})` }}
                />
                <div className="absolute inset-0">
                    <div className="container mx-auto h-full relative">
                        <div className="absolute top-20 left-8 bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-2xl max-w-md">
                            <h1 className="text-4xl font-bold mb-8">
                                <span style={{ color: '#24a59a' }}>Visa to </span>
                                <span className="bg-gradient-to-r from-[#9c5ee5] to-[#645ff3] text-transparent bg-clip-text">
                                    {countryName}
                                </span>
                            </h1>
                            <div className="flex justify-between items-center gap-x-4 mb-8">
                                <div className="bg-white rounded-2xl shadow-lg p-4 flex-1 text-center">
                                    <p className="text-gray-500 text-sm">Cost</p>
                                    <p className="font-bold text-lg">{cost}</p>
                                </div>
                                <div className="bg-white rounded-2xl shadow-lg p-4 flex-1 text-center">
                                    <p className="text-gray-500 text-sm">Approval</p>
                                    <p className="font-bold text-lg">{approvalTime}</p>
                                </div>
                                <div className="bg-white rounded-2xl shadow-lg p-4 flex-1 text-center">
                                    <p className="text-gray-500 text-sm">Valid for</p>
                                    <p className="font-bold text-lg">{validity}</p>
                                </div>
                            </div>
                            <Link to={getVisaLink}>
                                <button className="w-full flex items-center justify-center bg-gradient-to-r from-[#9c5ee5] to-[#645ff3] text-white font-bold py-3.5 rounded-xl text-lg shadow-xl hover:scale-105 transition-transform duration-300">
                                    APPLY NOW <FaPlaneDeparture className="ml-2" size={18} />
                                </button>
                            </Link>
                        </div>

                        <div className="absolute top-60 right-8 bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-2xl max-w-sm flex items-start gap-4">
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {agencyText}
                            </p>
                            <img src={handIcon} alt="hand icon" className="w-9 h-9 flex-shrink-0 mt-1" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-50 mt-12 relative">
                <div className="container mx-auto px-4 pt-20 pb-16">
                    <h2 className="text-4xl font-bold text-center mb-12">
                        <span style={{ color: '#24a59a' }}>Select visa type</span>
                    </h2>
                    <div className="flex justify-center gap-8">
                        {visaTypes.map((visa, index) => (
                            <div key={index} className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-md">
                                <div className="flex justify-between items-start mb-6">
                                    <h3 className="text-2xl font-bold" style={{ color: '#9c5ee5' }}>{visa.title}</h3>
                                    <img src={visa.icon} alt={visa.title} className="w-16 h-16" />
                                </div>
                                <div className="space-y-3 text-gray-900">
                                    {visa.details.map((detail, i) => (
                                        <div key={i} className="flex justify-between text-base">
                                            <span className="font-semibold">{detail.label}:</span>
                                            <span className="font-extrabold">{detail.value}</span>
                                        </div>
                                    ))}
                                </div>
                                <Link to={visa.applyLink}>
                                    <button className="mt-8 w-full border-2 border-purple-500 text-purple-600 font-bold py-3 rounded-full hover:bg-purple-600 hover:text-white transition-colors duration-300">
                                        BUY NOW
                                    </button>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DesktopVisaPageLayout; 