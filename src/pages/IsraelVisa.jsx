import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlaneDeparture } from 'react-icons/fa';
import israelImage from '../assets/Israel_VisaPageBanner.JPG';
import handRightSideIcon from '../assets/hand_svg.svg';
import touristIcon from '../assets/tourist--blender-style.svg';
import Footer from '../components/Footer/Footer';
import Reviews from '../components/Reviews/Reviews';
import FAQ from '../components/FAQ/FAQ';
import useWindowSize from '../hooks/useWindowSize';
import DesktopVisaPageLayout from '../components/Visas/DesktopVisaPageLayout';


const IsraelVisa = () => {
  const { width } = useWindowSize();

  const desktopVisaData = {
    countryName: "Israel",
    bannerImage: israelImage,
    cost: "₹ 5112",
    approvalTime: "3-10 days",
    validity: "from 90 days",
    getVisaLink: "/get-visa/israel",
    agencyText: `GetVisaGo Ltd — your independent private agency for fast and secure Israel e-Visa-B2 processing. Apply fully online in minutes, without embassy visits or paperwork hassle. Our single transparent fee covers both our professional service (document check, secure submission, and 24/7 support) and the official government visa cost — no extra payments required. We are not affiliated with the Israel government; we assist you to get your visa easily and stress-free.`,
    visaTypes: [
      {
        title: "e-Visa-B2",
        icon: touristIcon,
        applyLink: "/get-visa/israel",
        details: [
          { label: "Validity", value: "90 days" },
          { label: "Stay per visit", value: "90 days" },
          { label: "Government fee", value: "2 530 ₹" },
          { label: "Service fee", value: "2 582 ₹" },
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
        <div className="relative">
          <div className="h-80 lg:h-96">
            <img
              src={israelImage}
              alt="Israel"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative px-4 sm:px-6 lg:px-8 -mt-32 sm:-mt-40">
            <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md mx-auto flex flex-col">
              <h1 className="text-3xl lg:text-4xl font-bold mb-6 text-center">
                <span className="bg-gradient-to-r from-[#00B89F] to-[#00D6A9] bg-clip-text text-transparent">Visa to </span>
                <span className="bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] bg-clip-text text-transparent">Israel</span>
              </h1>

              <div className="space-y-4 mb-6">
                <div className="flex space-x-4">
                  <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-3 text-center flex-1">
                    <p className="text-gray-500 text-sm mb-1">Approval:</p>
                    <p className="text-gray-900 font-bold text-base">3-10 days</p>
                  </div>
                  <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-3 text-center flex-1">
                    <p className="text-gray-500 text-sm mb-1">Valid for:</p>
                    <p className="text-gray-900 font-bold text-base">from 90 days</p>
                  </div>
                </div>
                <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-3 text-center w-full">
                  <p className="text-gray-500 text-sm mb-1">Cost:</p>
                  <p className="text-gray-900 font-bold text-base">₹ 5112</p>
                </div>
              </div>

              <Link
                to="/get-visa/israel"
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
                GetVisaGo Ltd — your independent private agency for fast and secure Israel e-Visa-B2 processing. Apply fully online in minutes, without embassy visits or paperwork hassle. Our single transparent fee covers both our professional service (document check, secure submission, and 24/7 support) and the official government visa cost — no extra payments required. We are not affiliated with the Israel government; we assist you to get your visa easily and stress-free.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 py-12">
          <div className="w-full max-w-md mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">
              <span className="bg-gradient-to-r from-[#00B89F] to-[#00D6A9] bg-clip-text text-transparent">Select visa </span>
              <span className="bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] bg-clip-text text-transparent">type</span>
            </h2>

            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-purple-600">e-Visa-B2</h3>
                  <img src={touristIcon} alt="e-Visa-B2" className="w-12 h-12 object-contain" />
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Validity:</span>
                    <span className="font-semibold text-gray-800">90 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Stay per visit:</span>
                    <span className="font-semibold text-gray-800">90 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Government fee:</span>
                    <span className="font-semibold text-gray-800">2 530 ₹</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Service fee:</span>
                    <span className="font-semibold text-gray-800">2 582 ₹</span>
                  </div>
                </div>
                <Link to="/get-visa/israel" className="block w-full mt-6 bg-white border-2 border-purple-600 text-purple-600 py-3 rounded-full font-bold text-center text-lg hover:bg-purple-50 transition-all duration-300">
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

export default IsraelVisa; 