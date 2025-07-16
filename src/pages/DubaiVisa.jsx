import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight, FaPlaneDeparture } from 'react-icons/fa';
import dubaiImage from '../assets/dubai_getvisago.jpg';
import handRightSideIcon from '../assets/hand_rightside.svg';
import touristIcon from '../assets/simple-3d-icon-of-a-tourist--blender-style--clean-.png';
import bannerSA1 from '../assets/bannerSA1.png';
import bannerSA2 from '../assets/bannerSA2.png';
import useWindowSize from '../hooks/useWindowSize';
import Reviews from '../components/Reviews/Reviews';
import FAQ from '../components/FAQ/FAQ';
import Footer from '../components/Footer/Footer';
import DesktopVisaPageLayout from '../components/Visas/DesktopVisaPageLayout';

const DubaiVisa = () => {
  const { width } = useWindowSize();
  const isDesktop = width >= 1024;

  const desktopVisaData = {
    countryName: "Dubai",
    bannerImage: dubaiImage,
    cost: "From 8 990 ₹",
    approvalTime: "1–5 days",
    validity: "from 30 days",
    getVisaLink: "/get-visa/dubai",
    agencyText: `GetVisaGo Ltd is an independent agency offering fast and secure Dubai e-Visa processing. Apply fully online — no embassy visits or paperwork. One clear fee includes the official visa cost and our services: document check, secure submission, and 24/7 support. We are not a government body but help you get your visa easily and hassle-free.`,
    visaTypes: [
      {
        title: "Tourist visa (30 days)",
        icon: touristIcon,
        applyLink: "/get-visa/dubai",
        details: [
          { label: "Validity", value: "60 days, single entry" },
          { label: "Stay per visit", value: "up to 30 days" },
          { label: "Government fee", value: "6500,00 ₹" },
          { label: "Service fee", value: "2490,00 ₹" },
        ]
      }
    ]
  };

  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { id: 1, image: bannerSA1, title: "Explore the futuristic city of Dubai.", date: "27 May, 2025" },
    { id: 2, image: bannerSA2, title: "From stunning skyscrapers to vast deserts.", date: "27 May, 2025" }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

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
              src={dubaiImage}
              alt="Dubai"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative px-4 sm:px-6 lg:px-8 -mt-32 sm:-mt-40">
            <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md mx-auto flex flex-col">
              <h1 className="text-3xl lg:text-4xl font-bold mb-6 text-center">
                <span className="bg-gradient-to-r from-[#00B89F] to-[#00D6A9] bg-clip-text text-transparent">Visa to </span>
                <span className="bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] bg-clip-text text-transparent">Dubai</span>
              </h1>

              <div className="space-y-4 mb-6">
                <div className="flex space-x-4">
                  <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-3 text-center flex-1">
                    <p className="text-gray-500 text-sm mb-1">Approval:</p>
                    <p className="text-gray-900 font-bold text-base">1–5 days</p>
                  </div>
                  <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-3 text-center flex-1">
                    <p className="text-gray-500 text-sm mb-1">Valid for:</p>
                    <p className="text-gray-900 font-bold text-base">from 30 days</p>
                  </div>
                </div>
                <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-3 text-center w-full">
                  <p className="text-gray-500 text-sm mb-1">Cost:</p>
                  <p className="text-gray-900 font-bold text-base">From 8 990 ₹</p>
                </div>
              </div>

              <Link
                to="/get-visa/dubai"
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
                GetVisaGo Ltd is an independent agency offering fast and secure Dubai e-Visa processing. Apply fully online — no embassy visits or paperwork. One clear fee includes the official visa cost and our services: document check, secure submission, and 24/7 support. We are not a government body but help you get your visa easily and hassle-free.
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
                  <h3 className="text-2xl font-bold text-purple-600">Tourist visa (30 days)</h3>
                  <img src={touristIcon} alt="Tourist Visa" className="w-12 h-12 object-contain" />
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Validity:</span>
                    <span className="font-semibold text-gray-800">60 days, single entry</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Stay per visit:</span>
                    <span className="font-semibold text-gray-800">up to 30 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Government fee:</span>
                    <span className="font-semibold text-gray-800">6500,00 ₹</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Service fee:</span>
                    <span className="font-semibold text-gray-800">2490,00 ₹</span>
                  </div>
                </div>
                <Link to="/get-visa/dubai" className="block w-full mt-6 bg-white border-2 border-purple-600 text-purple-600 py-3 rounded-full font-bold text-center text-lg hover:bg-purple-50 transition-all duration-300">
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

export default DubaiVisa; 