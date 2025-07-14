import React from 'react';
import { FaUser, FaEnvelope, FaPhone, FaHome, FaChevronLeft } from 'react-icons/fa';

const ClientData = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-6">
                <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
                    <div className="bg-gradient-to-r from-[#00C6A2] to-[#9B51E0] h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>

                <h2 className="text-2xl font-bold text-black mb-6">3. Client data</h2>

                <div className="space-y-4">
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block">First and Last Name</label>
                        <div className="relative">
                            <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400" />
                            <input type="text" placeholder="Your Name" className="pl-12 w-full p-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-purple-500 focus:border-purple-500 transition" />
                        </div>
                    </div>

                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block">E-mail</label>
                        <div className="relative">
                            <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400" />
                            <input type="email" placeholder="your@email.com" className="pl-12 w-full p-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-purple-500 focus:border-purple-500 transition" />
                        </div>
                    </div>

                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block">Phone number</label>
                        <div className="relative">
                            <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400" />
                            <input type="tel" placeholder="+1 123 325 57-73" className="pl-12 w-full p-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-purple-500 focus:border-purple-500 transition" />
                        </div>
                    </div>

                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block">Home address</label>
                        <div className="relative">
                            <FaHome className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400" />
                            <input type="text" placeholder="Address" className="pl-12 w-full p-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-purple-500 focus:border-purple-500 transition" />
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between mt-8">
                    <button className="bg-gray-200 text-gray-600 p-4 rounded-full transition hover:bg-gray-300">
                        <FaChevronLeft />
                    </button>
                    <button className="w-full ml-4 bg-gradient-to-r from-[#9B51E0] to-[#7B2CBF] text-white uppercase font-bold py-4 rounded-xl hover:shadow-lg transition-all duration-300">
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ClientData; 