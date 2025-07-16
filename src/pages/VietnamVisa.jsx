import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlaneDeparture } from 'react-icons/fa';
import vietnamImage from '../assets/Vietnam.JPG';
import handRightSideIcon from '../assets/hand_rightside.svg';
import touristIcon from '../assets/simple-3d-icon-of-a-tourist--blender-style--clean-.png';
import Reviews from '../components/Reviews/Reviews';
import FAQ from '../components/FAQ/FAQ';
import Footer from '../components/Footer/Footer';
import useWindowSize from '../hooks/useWindowSize';
import DesktopVisaPageLayout from '../components/Visas/DesktopVisaPageLayout';

const VietnamVisa = () => {
  const { width } = useWindowSize();

  const desktopVisaData = {
    countryName: "Vietnam",
    bannerImage: vietnamImage,
    cost: "From 4379,58 ₹",
    approvalTime: "2 - 12 days",
    validity: "90 days after issued",
    getVisaLink: "/get-visa/vietnam",
    agencyText: `GetVisaGo Ltd — your independent private agency for fast and secure Vietnam e-Visa processing. Apply fully online in minutes, without embassy visits or paperwork hassle. Our single transparent fee covers both our professional service (document check, secure submission, and 24/7 support) and the official government visa cost — no extra payments required. We are not affiliated with the Vietnam government; we assist you to get your visa easily and stress-free.`,
    visaTypes: [
      {
        title: "Tourist single visa",
        icon: touristIcon,
        applyLink: "/get-visa/vietnam?type=single",
        details: [
          { label: "Validity", value: "90 days" },
          { label: "Stay per visit", value: "30 days" },
          { label: "Government fee", value: "2189,9" },
          { label: "Service fee", value: "2590" },
        ]
      },
      {
        title: "Tourist multiple visa",
        icon: touristIcon,
        applyLink: "/get-visa/vietnam?type=multiple",
        details: [
          { label: "Validity", value: "90 days" },
          { label: "Stay per visit", value: "30 days" },
          { label: "Government fee", value: "4379,58 ₹" },
          { label: "Service fee", value: "2890 ₹" },
        ]
      }
    ]
  };

  return (
    <div className="saudi-visa-page bg-gray-50">
      <div className="hidden lg:block">
        <DesktopVisaPageLayout {...desktopVisaData} />
      </div>
      <div className="lg:hidden">
        {/* Hero Section */}
        <div className="relative">
          <div className="h-80 lg:h-96">
            <img
              src={vietnamImage}
              alt="Vietnam"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative px-4 sm:px-6 lg:px-8 -mt-32 sm:-mt-40">
            <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md mx-auto flex flex-col">
              <h1 className="text-3xl lg:text-4xl font-bold mb-6 text-center">
                <span className="bg-gradient-to-r from-[#00B89F] to-[#00D6A9] bg-clip-text text-transparent">Visa to </span>
                <span className="bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] bg-clip-text text-transparent">Vietnam</span>
              </h1>

              <div className="space-y-4 mb-6">
                <div className="flex space-x-4">
                  <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-3 text-center flex-1">
                    <p className="text-gray-500 text-sm mb-1">Approval:</p>
                    <p className="text-gray-900 font-bold text-base">2 - 12 days</p>
                  </div>
                  <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-3 text-center flex-1">
                    <p className="text-gray-500 text-sm mb-1">Valid for:</p>
                    <p className="text-gray-900 font-bold text-base">90 days after issued</p>
                  </div>
                </div>
                <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-3 text-center w-full">
                  <p className="text-gray-500 text-sm mb-1">Cost:</p>
                  <p className="text-gray-900 font-bold text-base">From 4379,58 ₹</p>
                </div>
              </div>

              <Link
                to="/get-visa/vietnam"
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
                GetVisaGo Ltd — your independent private agency for fast and secure Vietnam e-Visa processing. Apply fully online in minutes, without embassy visits or paperwork hassle. Our single transparent fee covers both our professional service (document check, secure submission, and 24/7 support) and the official government visa cost — no extra payments required. We are not affiliated with the Vietnam government; we assist you to get your visa easily and stress-free.
              </p>
            </div>
          </div>
        </div>

        {/* Visa Type Selection Section */}
        <div className="bg-gray-50 py-12">
          <div className="w-full max-w-md mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">
              <span className="bg-gradient-to-r from-[#00B89F] to-[#00D6A9] bg-clip-text text-transparent">Select visa </span>
              <span className="bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] bg-clip-text text-transparent">type</span>
            </h2>

            <div className="space-y-8">
              {/* Tourist Single Visa Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-purple-600">Tourist single visa</h3>
                  <img src={touristIcon} alt="Tourist single visa" className="w-12 h-12 object-contain" />
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Validity:</span>
                    <span className="font-semibold text-gray-800">90 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Stay per visit:</span>
                    <span className="font-semibold text-gray-800">30 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Government fee:</span>
                    <span className="font-semibold text-gray-800">2189,9</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Service fee:</span>
                    <span className="font-semibold text-gray-800">2590</span>
                  </div>
                </div>
                <Link to="/get-visa/vietnam?type=single" className="block w-full mt-6 bg-white border-2 border-purple-600 text-purple-600 py-3 rounded-full font-bold text-center text-lg hover:bg-purple-50 transition-all duration-300">
                  APPLY NOW
                </Link>
              </div>

              {/* Tourist Multiple Visa Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-purple-600">Tourist multiple visa</h3>
                  <img src={touristIcon} alt="Tourist multiple visa" className="w-12 h-12 object-contain" />
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Validity:</span>
                    <span className="font-semibold text-gray-800">90 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Stay per visit:</span>
                    <span className="font-semibold text-gray-800">30 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Government fee:</span>
                    <span className="font-semibold text-gray-800">4379,58 ₹</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Service fee:</span>
                    <span className="font-semibold text-gray-800">2890 ₹</span>
                  </div>
                </div>
                <Link to="/get-visa/vietnam?type=multiple" className="block w-full mt-6 bg-white border-2 border-purple-600 text-purple-600 py-3 rounded-full font-bold text-center text-lg hover:bg-purple-50 transition-all duration-300">
                  APPLY NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Reviews />
      <FAQ />
      <Footer />
    </div>
  );
};

export default VietnamVisa; 