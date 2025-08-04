import React from 'react';
import { FaRegClock, FaGlobeAmericas, FaRegSmile, FaRegCheckCircle, FaUsers, FaRocket, FaHeart, FaLaptop, FaBolt, FaCompass, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState } from 'react';
import useWindowSize from '../hooks/useWindowSize';
import aboutHero from '../assets/about_us.png';
import backgroundImg from '../assets/background.png';
import buttonApply from '../assets/button_visa_apply.svg';
import DesktopReviews from '../components/Reviews/DesktopReviews';
import handRight from '../assets/hand_rightside.svg';
import laggageIcon from '../assets/laggage_icon.png';
import ReactCountryFlag from 'react-country-flag';

const stats = [
  { id: 1, value: '250K+', label: 'Visas Processed', icon: FaRegCheckCircle },
  { id: 2, value: '180+', label: 'Countries Served', icon: FaGlobeAmericas },
  { id: 3, value: '<12h', label: 'Avg. Approval Time', icon: FaRegClock },
  { id: 4, value: '99%', label: 'Approval Rate', icon: FaRegSmile },
];

const differenceData = [
  {
    id: 1,
    icon: FaLaptop,
    title: "All-online application",
    description: "No embassy visits. No paperwork. Just a few clicks."
  },
  {
    id: 2,
    icon: FaBolt,
    title: "Fast Processing",
    description: "Standard and urgent visas available — choose what works for your travel plan."
  },
  {
    id: 3,
    icon: FaCompass,
    title: "Step-by-step guidance",
    description: "Clear instructions, examples, and help at every stage."
  },
  {
    id: 4,
    icon: FaRegCheckCircle,
    title: "Guaranteed approval",
    description: "99% success rate with money-back guarantee if your visa is rejected."
  },
  {
    id: 5,
    icon: FaUsers,
    title: "Expert support",
    description: "24/7 customer service from visa specialists who know the process inside out."
  }
];

const WhatMakesUsDifferent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(differenceData.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentItems = () => {
    const startIndex = currentSlide * itemsPerSlide;
    return differenceData.slice(startIndex, startIndex + itemsPerSlide);
  };

  return (
    <section className="w-full py-16 lg:py-20 px-4 lg:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
            What Makes Us Different
          </h2>
          <div className="hidden lg:flex gap-3">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-purple-100 hover:bg-purple-200 flex items-center justify-center text-purple-600 transition-colors"
            >
              <FaChevronLeft size={16} />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-purple-600 hover:bg-purple-700 flex items-center justify-center text-white transition-colors"
            >
              <FaChevronRight size={16} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500">
          {getCurrentItems().map((item) => (
            <div key={item.id} className="text-center group">
              <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 mx-auto mb-6 flex items-center justify-center shadow-xl transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                <item.icon className="text-white text-4xl lg:text-5xl" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-12 gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? 'bg-purple-600' : 'bg-purple-200'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const CountryButton = ({ country, countryCode }) => (
  <div className="inline-flex items-center justify-center gap-3 px-6 py-4 bg-white rounded-full shadow-md border border-gray-100 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
    <span className="font-black text-gray-800 text-lg">{country}</span>
    <ReactCountryFlag
      countryCode={countryCode}
      svg
      style={{
        width: '1.5em',
        height: '1.5em',
      }}
    />
  </div>
);

const StatCard = ({ value, label, Icon }) => (
  <div className="relative flex flex-col items-center justify-center rounded-2xl p-6 bg-gradient-to-br from-white/80 to-white/60 border border-white/40 backdrop-blur-xl shadow-xl transform-gpu transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
    <Icon className="text-emerald-500 mb-2" size={32} />
    <span className="text-3xl font-bold bg-gradient-to-r from-emerald-500 to-violet-600 bg-clip-text text-transparent">
      {value}
    </span>
    <span className="mt-1 text-gray-700 font-medium text-center">{label}</span>
  </div>
);

const DesktopAboutPage = () => (
  <main className="w-full bg-white">
    {/* Hero */}
    <section className="relative max-w-6xl mx-auto pt-8 lg:pt-12 px-4 lg:px-6">
      <div className="relative overflow-hidden rounded-3xl">
        <img src={aboutHero} alt="Travel Banner" className="w-full h-[400px] lg:h-[450px] object-cover" />

        {/* Text card positioned over the image - exactly like in mockup */}
        <div className="absolute top-1/2 left-4 lg:left-12 -translate-y-1/2">
          <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-10 max-w-[480px]">
            <div className="space-y-0">
              <p className="text-2xl lg:text-4xl font-extrabold leading-tight">
                <span className="text-[#00B09B]">Travel Easy. </span>
                <span className="text-[#8E2DE2]">Travel Smart.</span>
              </p>
              <p className="text-2xl lg:text-4xl font-extrabold text-[#00B09B] leading-tight">Travel with GetVisaGo.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Welcome Section */}
    <section className="w-full py-12 lg:py-16 px-4 lg:px-6">
      <div className="grid gap-6 lg:gap-8 lg:grid-cols-2 max-w-5xl mx-auto items-start">
        <div className="lg:pr-8 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold leading-normal mb-4 lg:mb-0">
            <span className="bg-gradient-to-r from-teal-400 to-cyan-500 text-transparent bg-clip-text">
              Welcome to GetVisaGo — your trusted partner in fast, secure, and fully online e-Visa processing for over 30 countries.
            </span>
          </h2>
        </div>
        <div className="text-gray-600 text-base leading-relaxed lg:border-l-2 border-gray-200 lg:pl-8 text-center lg:text-left">
          <p>
            We are a UK-registered visa assistance company founded with a simple mission: to make international travel easier for Indian citizens. Whether you're planning a family holiday in Thailand, a honeymoon in the Maldives, a business trip to Dubai, or a spiritual journey to Israel — we're here to ensure your visa is never a roadblock.
          </p>
        </div>
      </div>
    </section>

    {/* Who We Are */}
    <section className="max-w-5xl mx-auto mt-12 lg:mt-20 px-4 lg:px-6 relative">
      {/* Background decoration - hidden on mobile */}
      <div className="hidden lg:block absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-full opacity-20 animate-pulse"></div>
      <div className="hidden lg:block absolute -bottom-10 -left-10 w-24 h-24 bg-gradient-to-br from-purple-100 to-violet-100 rounded-full opacity-20 animate-pulse delay-1000"></div>

      <div className="relative">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-8 lg:mb-12 text-center lg:text-left">
          <span className="bg-gradient-to-r from-teal-400 via-cyan-500 to-emerald-500 bg-clip-text text-transparent drop-shadow-sm">
            Who We Are
          </span>
        </h2>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
          {/* Enhanced Avatar - shown on mobile too but smaller */}
          <div className="flex relative group">
            <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-52 lg:h-52 rounded-full bg-gradient-to-br from-white via-gray-50 to-gray-100 border-4 border-white shadow-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl flex-shrink-0">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-400/20 to-cyan-500/20 animate-pulse"></div>
              <div className="relative z-10 p-4 sm:p-6 lg:p-8 rounded-full bg-gradient-to-br from-teal-50 to-cyan-50">
                <FaUsers className="text-teal-600 text-3xl sm:text-4xl lg:text-5xl" />
              </div>
            </div>
            {/* Floating icons - smaller on mobile */}
            <div className="absolute -top-1 -right-1 lg:-top-2 lg:-right-2 w-8 h-8 lg:w-12 lg:h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <FaRocket className="text-white text-sm lg:text-lg" />
            </div>
            <div className="absolute -bottom-1 -left-1 lg:-bottom-2 lg:-left-2 w-6 h-6 lg:w-10 lg:h-10 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-500">
              <FaHeart className="text-white text-xs lg:text-sm" />
            </div>
          </div>

          {/* Enhanced Content */}
          <div className="flex-1 space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="relative">
              <p className="text-gray-700 text-base lg:text-lg leading-relaxed font-medium">
                We are a team of travel professionals, legal experts, and tech enthusiasts united by one goal — to simplify the visa process. With years of experience, our founders saw how confusing and stressful visa applications could be. That's why we built GetVisaGo: a transparent, mobile-friendly, 100% online visa service designed for real people — like you.
              </p>
            </div>

            {/* Enhanced highlight card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-2xl blur-sm opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-2xl shadow-xl p-6 lg:p-8 border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-teal-400 via-cyan-500 to-emerald-500"></div>
                <div className="absolute top-4 right-4 w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-full opacity-50"></div>

                <div className="flex flex-col sm:flex-row gap-4 lg:gap-5 items-start relative z-10">
                  <div className="flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg mx-auto sm:mx-0">
                    <img src={handRight} alt="thumbs up" className="w-5 h-5 lg:w-6 lg:h-6 brightness-0 invert" />
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="text-[#00B09B] font-bold text-base lg:text-lg leading-relaxed mb-3 lg:mb-2">
                      Our operations are based in the United Kingdom, but our heart beats for India's smart and ambitious travelers, especially those aged 25 to 45 who value speed, clarity, and real-time support.
                    </p>
                    <div className="flex flex-wrap justify-center sm:justify-start gap-2 lg:gap-3 mt-4">
                      <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs lg:text-sm font-medium">UK-Based</span>
                      <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-xs lg:text-sm font-medium">India-Focused</span>
                      <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs lg:text-sm font-medium">24/7 Support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* What Makes Us Different */}
    <WhatMakesUsDifferent />

    {/* Our Promise */}
    <section className="w-full py-16 lg:py-20 px-4 lg:px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Image */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-100/50 to-purple-100/50 rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-xl transform transition-all duration-500 group-hover:scale-102 group-hover:shadow-2xl">
                <img
                  src={laggageIcon}
                  alt="Travel luggage"
                  className="w-full max-w-sm mx-auto"
                />
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent mb-6">
                Our Promise
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                We know your time is valuable. We also know how important your travel plans are — whether it's for love, work, family, or adventure. That's why we handle your application as if it were our own. With GetVisaGo, you're not just filling out a form — you're partnering with a reliable service that's always on your side.
              </p>
            </div>

            <div className="bg-gradient-to-r from-teal-50 to-purple-50 rounded-2xl p-8 border border-teal-100 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-1 h-16 bg-gradient-to-b from-teal-400 to-purple-500 rounded-full"></div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Our Commitment</h3>
                  <p className="text-gray-800 text-lg leading-relaxed">
                    <strong>We double-check your documents, keep you updated, and handle any rejections or errors as fast as possible.</strong> If we ever make a mistake — we take full responsibility.
                  </p>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <FaRegCheckCircle className="text-white text-xl" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">100% Secure</h4>
                <p className="text-sm text-gray-600">Bank-level encryption</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <FaBolt className="text-white text-xl" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Fast Response</h4>
                <p className="text-sm text-gray-600">Within 24 hours</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-violet-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <FaUsers className="text-white text-xl" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Full Support</h4>
                <p className="text-sm text-gray-600">Expert assistance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Countries We Cover */}
    <section className="w-full py-16 lg:py-20 px-4 lg:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-teal-400 to-purple-600 bg-clip-text text-transparent mb-12">
          Countries We Cover
        </h2>

        <div className="space-y-6">
          {/* Row 1 */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <CountryButton country="UAE" countryCode="AE" />
            <CountryButton country="Oman" countryCode="OM" />
            <CountryButton country="Saudi Arabia" countryCode="SA" />
            <CountryButton country="Israel" countryCode="IL" />
            <CountryButton country="Turkey" countryCode="TR" />
            <CountryButton country="Egypt" countryCode="EG" />
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <CountryButton country="Bahrain" countryCode="BH" />
            <CountryButton country="Azerbaijan" countryCode="AZ" />
            <CountryButton country="South Korea" countryCode="KR" />
            <CountryButton country="Malaysia" countryCode="MY" />
            <CountryButton country="Sri Lanka" countryCode="LK" />
          </div>

          {/* Row 3 */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <CountryButton country="Georgia" countryCode="GE" />
            <CountryButton country="Armenia" countryCode="AM" />
            <CountryButton country="Cambodia" countryCode="KH" />
            <CountryButton country="Kenya" countryCode="KE" />
            <CountryButton country="Thailand" countryCode="TH" />
            <CountryButton country="Vietnam" countryCode="VN" />
          </div>

          {/* Row 4 */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <CountryButton country="Uzbekistan" countryCode="UZ" />
            <CountryButton country="Argentina" countryCode="AR" />
            <CountryButton country="Ethiopia" countryCode="ET" />
            <CountryButton country="South Africa" countryCode="ZA" />
            <CountryButton country="Jordan" countryCode="JO" />
          </div>

          {/* Row 5 */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <CountryButton country="New Zealand" countryCode="NZ" />
            <CountryButton country="UK" countryCode="GB" />
            <CountryButton country="Canada" countryCode="CA" />
            <CountryButton country="Laos" countryCode="LA" />
            <CountryButton country="Tajikistan" countryCode="TJ" />
          </div>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="w-full py-16 lg:py-24 bg-white">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto px-4 lg:px-6">
        {stats.map(({ id, value, label, icon }) => (
          <StatCard key={id} value={value} label={label} Icon={icon} />
        ))}
      </div>
    </section>

    {/* Mission */}
    <section className="py-16 lg:py-24 px-4 lg:px-6 max-w-5xl mx-auto">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
        <div className="text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-500 to-violet-600 bg-clip-text text-transparent">
            Our Mission
          </h2>
          <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
            We eliminate the complexity of visa applications so you can focus on planning your journey. Our cutting-edge platform, expert team, and customer-centric approach guarantee a seamless, secure, and lightning-fast experience for travellers worldwide.
          </p>
        </div>
        <div className="bg-white/60 backdrop-blur-lg rounded-2xl lg:rounded-3xl p-6 lg:p-12 shadow-2xl border border-white/40">
          <h3 className="text-xl lg:text-2xl font-semibold mb-4 text-gray-800 text-center lg:text-left">Why Choose GetVisaGo?</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start justify-center lg:justify-start"><FaRegCheckCircle className="text-emerald-500 mt-1 mr-2 flex-shrink-0" />Transparent, flat pricing with no hidden fees.</li>
            <li className="flex items-start justify-center lg:justify-start"><FaRegCheckCircle className="text-emerald-500 mt-1 mr-2 flex-shrink-0" />AI-powered form validation to minimise errors.</li>
            <li className="flex items-start justify-center lg:justify-start"><FaRegCheckCircle className="text-emerald-500 mt-1 mr-2 flex-shrink-0" />24/7 multilingual human support.</li>
            <li className="flex items-start justify-center lg:justify-start"><FaRegCheckCircle className="text-emerald-500 mt-1 mr-2 flex-shrink-0" />Bank-level security & data encryption.</li>
          </ul>
        </div>
      </div>
    </section>

    {/* Reviews */}
    <DesktopReviews />

    {/* Call to Action */}
    <section className="relative py-24 flex flex-col items-center justify-center bg-gradient-to-r from-emerald-500 via-cyan-500 to-violet-600 overflow-hidden">
      <h2 className="text-white text-4xl lg:text-5xl font-extrabold mb-10 text-center drop-shadow-lg">Ready to Start Your Journey?</h2>
      <a href="/visas" className="relative inline-block group">
        <span className="absolute inset-0 transform translate-x-1 translate-y-1 bg-black rounded-full transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>
        <span className="relative inline-flex items-center px-10 py-4 bg-white text-emerald-600 font-bold rounded-full text-lg shadow-lg">
          APPLY FOR VISA NOW
        </span>
      </a>
    </section>
  </main>
);

const MobileAboutPage = () => (
  <main className="w-full bg-white">
    {/* Hero */}
    <section className="flex flex-col items-center justify-between gap-6 max-w-full mx-auto pt-8 px-4">
      <div className="w-full order-1">
        <img src={aboutHero} alt="Travel Banner" className="w-full h-64 object-cover rounded-2xl" />
      </div>
      <div className="bg-white rounded-xl shadow-lg p-6 w-full text-center order-2">
        <p className="text-2xl font-extrabold text-[#00B09B] leading-tight">Travel Easy.</p>
        <p className="text-2xl font-extrabold text-[#8E2DE2] leading-tight">Travel Smart.</p>
        <p className="text-2xl font-extrabold text-[#5F30E2] leading-tight">Travel with GetVisaGo.</p>
      </div>
    </section>

    {/* Welcome Section */}
    <section className="w-full py-12 px-4">
      <div className="max-w-full mx-auto space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-normal mb-4">
            <span className="bg-gradient-to-r from-teal-400 to-cyan-500 text-transparent bg-clip-text">
              Welcome to GetVisaGo — your trusted partner in fast, secure, and fully online e-Visa processing for over 30 countries.
            </span>
          </h2>
        </div>
        <div className="text-gray-600 text-base leading-relaxed text-center">
          <p>
            We are a UK-registered visa assistance company founded with a simple mission: to make international travel easier for Indian citizens. Whether you're planning a family holiday in Thailand, a honeymoon in the Maldives, a business trip to Dubai, or a spiritual journey to Israel — we're here to ensure your visa is never a roadblock.
          </p>
        </div>
      </div>
    </section>

    {/* Who We Are */}
    <section className="max-w-full mx-auto mt-12 px-4">
      <div className="relative">
        <h2 className="text-3xl font-extrabold mb-8 text-center">
          <span className="bg-gradient-to-r from-teal-400 via-cyan-500 to-emerald-500 bg-clip-text text-transparent drop-shadow-sm">
            Who We Are
          </span>
        </h2>

        <div className="flex flex-col items-center gap-8">
          {/* Enhanced Avatar */}
          <div className="flex relative group">
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-white via-gray-50 to-gray-100 border-4 border-white shadow-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl flex-shrink-0">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-400/20 to-cyan-500/20 animate-pulse"></div>
              <div className="relative z-10 p-6 rounded-full bg-gradient-to-br from-teal-50 to-cyan-50">
                <FaUsers className="text-teal-600 text-4xl" />
              </div>
            </div>
            {/* Floating icons */}
            <div className="absolute -top-1 -right-1 w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <FaRocket className="text-white text-sm" />
            </div>
            <div className="absolute -bottom-1 -left-1 w-6 h-6 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-500">
              <FaHeart className="text-white text-xs" />
            </div>
          </div>

          {/* Enhanced Content */}
          <div className="flex-1 space-y-6 text-center">
            <div className="relative">
              <p className="text-gray-700 text-base leading-relaxed font-medium">
                We are a team of travel professionals, legal experts, and tech enthusiasts united by one goal — to simplify the visa process. With years of experience, our founders saw how confusing and stressful visa applications could be. That's why we built GetVisaGo: a transparent, mobile-friendly, 100% online visa service designed for real people — like you.
              </p>
            </div>

            {/* Enhanced highlight card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-2xl blur-sm opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-2xl shadow-xl p-6 border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-teal-400 via-cyan-500 to-emerald-500"></div>
                <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-full opacity-50"></div>

                <div className="flex flex-col gap-4 items-center relative z-10">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                    <img src={handRight} alt="thumbs up" className="w-5 h-5 brightness-0 invert" />
                  </div>
                  <div className="text-center">
                    <p className="text-[#00B09B] font-bold text-base leading-relaxed mb-3">
                      Our operations are based in the United Kingdom, but our heart beats for India's smart and ambitious travelers, especially those aged 25 to 45 who value speed, clarity, and real-time support.
                    </p>
                    <div className="flex flex-wrap justify-center gap-2 mt-4">
                      <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-medium">UK-Based</span>
                      <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-xs font-medium">India-Focused</span>
                      <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">24/7 Support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="w-full py-16 bg-white">
      <div className="grid grid-cols-2 gap-4 max-w-full mx-auto px-4">
        {stats.map(({ id, value, label, icon }) => (
          <StatCard key={id} value={value} label={label} Icon={icon} />
        ))}
      </div>
    </section>

    {/* Mission */}
    <section className="py-16 px-4 max-w-full mx-auto">
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-emerald-500 to-violet-600 bg-clip-text text-transparent">
            Our Mission
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            We eliminate the complexity of visa applications so you can focus on planning your journey. Our cutting-edge platform, expert team, and customer-centric approach guarantee a seamless, secure, and lightning-fast experience for travellers worldwide.
          </p>
        </div>
        <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/40">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 text-center">Why Choose GetVisaGo?</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start justify-center"><FaRegCheckCircle className="text-emerald-500 mt-1 mr-2 flex-shrink-0" />Transparent, flat pricing with no hidden fees.</li>
            <li className="flex items-start justify-center"><FaRegCheckCircle className="text-emerald-500 mt-1 mr-2 flex-shrink-0" />AI-powered form validation to minimise errors.</li>
            <li className="flex items-start justify-center"><FaRegCheckCircle className="text-emerald-500 mt-1 mr-2 flex-shrink-0" />24/7 multilingual human support.</li>
            <li className="flex items-start justify-center"><FaRegCheckCircle className="text-emerald-500 mt-1 mr-2 flex-shrink-0" />Bank-level security & data encryption.</li>
          </ul>
        </div>
      </div>
    </section>

    <div className="w-full bg-[#F6F7FA] text-gray-800 py-16 px-6 grid grid-cols-2 gap-4">
      {stats.map(({ id, value, label }) => (
        <div key={id} className="flex flex-col items-center bg-white rounded-2xl p-4 shadow-md">
          <span className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-violet-600 bg-clip-text text-transparent">
            {value}
          </span>
          <span className="mt-1 text-sm text-center font-medium">{label}</span>
        </div>
      ))}
    </div>
  </main>
);

const About = () => {
  const { width } = useWindowSize();
  const isDesktop = width >= 1024;
  return isDesktop ? <DesktopAboutPage /> : <MobileAboutPage />;
};

export default About;

