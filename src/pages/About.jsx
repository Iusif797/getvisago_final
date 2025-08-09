import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegClock, FaGlobeAmericas, FaRegSmile, FaRegCheckCircle, FaUsers, FaRocket, FaHeart, FaLaptop, FaBolt, FaCompass, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState } from 'react';
import useWindowSize from '../hooks/useWindowSize';
import aboutHero from '../assets/about_us_banner.png';
import backgroundImg from '../assets/background.png';
import buttonApply from '../assets/button_visa_apply.svg';
import DesktopReviews from '../components/Reviews/DesktopReviews';
import handRight from '../assets/hand_rightside.svg';
import handUp from '../assets/hand_up.svg';
import laggageIcon from '../assets/laggage_icon.png';
import ReactCountryFlag from 'react-country-flag';
import backgroundAboutUs from '../assets/background_about_us.png';
import buttonMaster from '../assets/button_master.png';
import buttonStart from '../assets/button_start.png';
import readyToTravelTitle from '../assets/ready_to_travel_title.png';
import startApplicationTitle from '../assets/start_application_title.png';
import arrowLeft from '../assets/slider_arrow_master.svg';
import arrowRight from '../assets/slider_arrow_master1.svg';

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
  const { width } = useWindowSize();
  const isMobile = width < 768;
  const itemsPerSlide = isMobile ? 1 : 3;
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

  if (isMobile) {
    return (
      <section className="w-full pt-12 pb-16 px-4 bg-white">
        <div className="max-w-full mx-auto">
          <div className="flex items-start justify-between">
            <h2 className="text-[34px] font-black leading-[1.05] tracking-[-0.01em] bg-gradient-to-r from-[#04C495] via-[#49A9FF] to-[#8A7FFF] bg-clip-text text-transparent">
              What
              <br />
              Makes Us
              <br />
              Different
            </h2>

            <div className="flex gap-3 mt-2">
              <button onClick={prevSlide} className="relative w-14 h-14 rounded-2xl bg-[#7C4DFF] shadow-xl active:scale-95 transition-transform flex items-center justify-center">
                <div className="absolute inset-0 rounded-2xl bg-white/10" />
                <img src={arrowLeft} alt="prev" className="relative w-6 h-6" />
              </button>
              <button onClick={nextSlide} className="relative w-14 h-14 rounded-2xl bg-[#7C4DFF] shadow-xl active:scale-95 transition-transform flex items-center justify-center">
                <div className="absolute inset-0 rounded-2xl bg-white/10" />
                <img src={arrowRight} alt="next" className="relative w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="mt-10">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {differenceData.map((item) => (
                  <div key={item.id} className="w-full flex-shrink-0">
                    <div className="flex flex-col items-start">
                      <div className="relative mx-auto">
                        <div className="w-[320px] h-[320px] rounded-full bg-gradient-to-b from-[#C9B2FF] via-[#B495FF] to-[#A07BFF] shadow-[0_24px_60px_rgba(124,77,255,0.28)] ring-8 ring-white/50"></div>
                        <div className="absolute inset-0 rounded-full bg-white/10"></div>
                      </div>
                      <h3 className="mt-8 text-[28px] font-black text-gray-900 tracking-[-0.01em]">{item.title}</h3>
                      <p className="mt-3 text-gray-700 text-[16px] leading-[1.6] max-w-[90%]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots */}
            <div className="mt-6 flex gap-3 justify-center">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button key={index} onClick={() => setCurrentSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-transform ${index === currentSlide ? 'bg-[#7C4DFF] scale-125' : 'bg-[#E0D5FF]'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-16 lg:py-20 px-5 lg:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-[#04C495] to-[#8A7FFF] bg-clip-text text-transparent">
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
    {/* Hero Section: card over image (exactly like mockup) */}
    <section className="py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 lg:px-6">
        <div className="relative h-[440px] lg:h-[480px]">
          {/* Image block aligned to the right */}
          <div className="absolute right-0 top-0 h-full w-[700px] lg:w-[780px] rounded-[28px] overflow-hidden shadow-2xl">
            <img src={aboutHero} alt="Travel Banner" className="w-full h-full object-cover" />
          </div>

          {/* White text card overlapping the image from the left */}
          <div className="absolute left-2 lg:left-4 top-1/2 -translate-y-[46%] bg-white rounded-[26px] shadow-[0_20px_60px_rgba(0,0,0,0.12)] px-7 py-5 lg:px-9 lg:py-6 w-[640px] lg:w-[720px]">
            <h1 className="font-black leading-[1.08] text-[38px] sm:text-[44px] lg:text-[52px] tracking-[-0.01em]">
              <span className="whitespace-nowrap bg-gradient-to-r from-[#04C495] to-[#8A7FFF] bg-clip-text text-transparent">Travel Easy. Travel Smart.</span>
              <br />
              <span className="whitespace-nowrap bg-gradient-to-r from-[#04C495] to-[#8A7FFF] bg-clip-text text-transparent">Travel with GetVisaGo.</span>
            </h1>
          </div>
        </div>
      </div>
    </section>

    {/* Welcome Section (exact layout like mockup) */}
    <section className="w-full py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-5 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start">
          <div>
            <h2 className="font-black text-[28px] sm:text-[32px] lg:text-[44px] leading-[1.25] tracking-[-0.01em] text-transparent bg-clip-text bg-gradient-to-r from-[#04C495] to-[#04C495] max-w-[640px]">
              Welcome to GetVisaGo — your trusted partner in fast, secure, and fully online e-Visa processing for over 30 countries.
            </h2>
          </div>
          <div className="text-gray-900 text-base sm:text-lg leading-7 lg:leading-8 max-w-[640px] lg:pl-2">
            <p>
              We are a UK-registered visa assistance company founded with a simple mission: to make international travel easier for Indian citizens. Whether you're planning a family holiday in Thailand, a honeymoon in the Maldives, a business trip to Dubai, or a spiritual journey to Israel — we're here to ensure your visa is never a roadblock.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Who We Are */}
    <section className="w-full py-16 lg:py-20 px-4 lg:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Desktop Layout */}
        <div className="hidden lg:block">
          {/* Title */}
          <h2 className="text-4xl lg:text-[44px] font-black tracking-[-0.01em] text-left mb-8">
            <span className="bg-gradient-to-r from-[#04C495] to-[#8A7FFF] bg-clip-text text-transparent">
              Who We Are
            </span>
          </h2>

          <div className="grid grid-cols-12 gap-10 items-start">
            {/* Left: Large avatar circle with icon */}
            <div className="col-span-5 flex">
              <div className="w-[360px] h-[360px] rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center shadow-2xl">
                <FaUsers className="text-white text-7xl" />
              </div>
            </div>

            {/* Right: Paragraph and highlight card */}
            <div className="col-span-7">
              <p className="text-gray-900 text-[18px] leading-[1.6] tracking-[0] max-w-[720px]">
                We are a team of travel professionals, legal experts, and tech enthusiasts united by one goal — to simplify the visa process. With years of experience, our founders saw how confusing and stressful visa applications could be. That's why we built GetVisaGo: a transparent, mobile-friendly, 100% online visa service designed for real people — like you.
              </p>

              <div className="mt-8 bg-white rounded-2xl shadow-xl p-8">
                <div className="flex items-center gap-5">
                  <img src={handRight} alt="thumbs up" className="w-12 h-12 flex-shrink-0" />
                  <p className="text-[#04C495] font-extrabold text-[22px] lg:text-[24px] leading-[1.35] tracking-[-0.01em]">
                    Our operations are based in the United Kingdom, but our heart beats for India's smart and ambitious travelers, especially those aged 25 to 45 who value speed, clarity, and real-time support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="block lg:hidden">
          <div className="flex flex-col items-center space-y-8">
            {/* Circle */}
            <div className="w-40 h-40 rounded-full bg-gray-300"></div>

            {/* Title and Text */}
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-extrabold">
                <span className="bg-gradient-to-r from-teal-400 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
                  Who We Are
                </span>
              </h2>
              <p className="text-gray-800 text-base leading-relaxed">
                We are a team of travel professionals, legal experts, and tech enthusiasts united by one goal — to simplify the visa process. With years of experience, our founders saw how confusing and stressful visa applications could be. That's why we built GetVisaGo: a transparent, mobile-friendly, 100% online visa service designed for real people — like you.
              </p>
            </div>

            {/* Highlight Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 w-full">
              <div className="flex items-start gap-4">
                <img src={handRight} alt="thumbs up" className="w-8 h-8 flex-shrink-0 mt-1" />
                <p className="text-[#04C495] font-extrabold text-[16px] leading-[1.4] tracking-[-0.01em]">
                  Our operations are based in the United Kingdom, but our heart beats for India's smart and ambitious travelers, especially those aged 25 to 45 who value speed, clarity, and real-time support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* What Makes Us Different */}
    <WhatMakesUsDifferent />

    {/* Our Promise */}
    <section className="w-full py-16 lg:py-20 px-5 lg:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left: Title and luggage image */}
          <div className="col-span-12 lg:col-span-5">
            <h2 className="text-4xl font-black mb-6">
              <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
                Our Promise
              </span>
            </h2>
            <img
              src={laggageIcon}
              alt="Travel luggage with heart sticker"
              className="w-full max-w-[360px] lg:max-w-[420px] object-contain"
            />
          </div>

          {/* Right: Text content exactly like mockup */}
          <div className="col-span-12 lg:col-span-7">
            <p className="text-gray-800 text-lg lg:text-xl leading-8">
              We know your time is valuable. We also know how important your travel plans are — whether it’s for love, work, family, or adventure. That’s why we handle your application as if it were our own. With GetVisaGo, you're not just filling out a form — you're partnering with a reliable service that’s always on your side.
            </p>
            <p className="mt-8 text-gray-900 text-xl lg:text-2xl font-black leading-8">
              We double-check your documents, keep you updated, and handle any rejections or errors as fast as possible. If we ever make a mistake — we take full responsibility.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Countries We Cover */}
    <section className="w-full py-16 lg:py-20 px-5 lg:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-[#04C495] to-[#8A7FFF] bg-clip-text text-transparent mb-12">
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

    {/* Desktop hint above banner */}
    <div className="hidden lg:block px-6">
      <div className="max-w-6xl mx-auto text-center mb-6">
        <p className="text-[20px] font-black text-gray-900 leading-tight">
          Looking for a specific country? Just check our
          <Link to="/visas" className="ml-2 text-[#7C4DFF] underline font-extrabold">visas page</Link>
        </p>
      </div>
    </div>

    {/* Join Thousands Banner */}
    <section className="w-full py-12 px-5 lg:px-6 bg-white flex items-center justify-center">
      <div className="relative max-w-6xl w-full h-96 lg:h-[400px] rounded-[24px] overflow-hidden">
        {/* Background Image */}
        <img
          src={backgroundAboutUs}
          alt="Office background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#04C495]/85 via-[#6F78FF]/80 to-[#8A7FFF]/85"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 lg:px-12 text-center">
          <h2 className="text-white font-black text-[26px] lg:text-[36px] leading-tight mb-6 max-w-4xl">
            Join Thousands of Happy Travelers
          </h2>

          <p className="text-white font-extrabold text-[18px] lg:text-[22px] leading-[1.4] max-w-5xl">
            We've already helped thousands of Indian travelers get their visas faster and with less stress.
            Our average processing time is under 48 hours, and our support team answers most queries in under 15 minutes.
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full backdrop-blur-sm"></div>
        <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/10 rounded-full backdrop-blur-sm"></div>
        <div className="absolute top-1/2 left-8 w-6 h-6 bg-white/20 rounded-full"></div>
        <div className="absolute top-1/4 right-12 w-8 h-8 bg-white/15 rounded-full"></div>
      </div>
    </section>

    {/* Action Cards */}
    <section className="w-full py-16 px-4 lg:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Ready to travel Card */}
          <div className="relative bg-white rounded-3xl shadow-lg p-8 lg:p-10 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="space-y-6">
              <div className="flex justify-start">
                <img
                  src={readyToTravelTitle}
                  alt="Ready to travel?"
                  className="max-w-full h-auto"
                />
              </div>

              <p className="text-gray-800 text-lg lg:text-xl font-normal leading-relaxed">
                Find your country. Upload your documents. Pay online. And go.
              </p>

              <div className="flex justify-start">
                <img
                  src={buttonMaster}
                  alt="Get Visa Button"
                  className="cursor-pointer hover:scale-105 transition-transform duration-300 rounded-2xl"
                  style={{ filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15))' }}
                />
              </div>
            </div>
          </div>

          {/* Start application Card */}
          <div className="relative bg-white rounded-3xl shadow-lg p-8 lg:p-10 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="space-y-6">
              <div className="flex justify-start">
                <img
                  src={startApplicationTitle}
                  alt="Start application now"
                  className="max-w-full h-auto"
                />
              </div>

              <p className="text-gray-800 text-lg lg:text-xl font-normal leading-relaxed">
                Have a question? Message us on WhatsApp or email — we're available 24/7.
              </p>

              <div className="flex justify-start">
                <img
                  src={buttonStart}
                  alt="Start Button"
                  className="cursor-pointer hover:scale-105 transition-transform duration-300 rounded-2xl"
                  style={{ filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15))' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>





    {/* Reviews */}
    <DesktopReviews />
  </main>
);

const MobileAboutPage = () => (
  <main className="w-full bg-white">
    {/* Hero mobile: image with overlapping white card */}
    <section className="relative max-w-full mx-auto pt-6 px-4">
      <div className="relative w-full">
        <img src={aboutHero} alt="Travel Banner" className="w-full h-[360px] object-cover rounded-2xl" />
        <div className="absolute left-4 -bottom-8 bg-white rounded-[20px] shadow-[0_18px_50px_rgba(0,0,0,0.12)] px-5 py-4 w-[92%] max-w-[560px] text-left">
          <h1 className="font-black leading-[1.1] text-[24px]">
            <span className="block bg-gradient-to-r from-[#04C495] to-[#8A7FFF] bg-clip-text text-transparent">Travel Easy.</span>
            <span className="block bg-gradient-to-r from-[#04C495] to-[#8A7FFF] bg-clip-text text-transparent">Travel Smart.</span>
            <span className="block bg-gradient-to-r from-[#04C495] to-[#8A7FFF] bg-clip-text text-transparent">Travel with GetVisaGo.</span>
          </h1>
        </div>
      </div>
      <div className="pt-10" />
    </section>

    {/* Welcome Section (mobile) */}
    <section className="w-full py-8 px-4">
      <div className="max-w-full mx-auto space-y-4">
        <h2 className="text-left text-[20px] font-black leading-7">
          <span className="bg-gradient-to-r from-[#04C495] to-[#04C495] text-transparent bg-clip-text">
            Welcome to GetVisaGo — your trusted partner in fast, secure, and fully online e-Visa processing for over 30 countries.
          </span>
        </h2>
        <div className="text-gray-800 text-[14px] leading-6 text-left">
          <p>
            We are a UK-registered visa assistance company founded with a simple mission: to make international travel easier for Indian citizens. Whether you're planning a family holiday in Thailand, a honeymoon in the Maldives, a business trip to Dubai, or a spiritual journey to Israel — we're here to ensure your visa is never a roadblock.
          </p>
        </div>
      </div>
    </section>

    {/* Who We Are (mobile exact mock) */}
    <section className="w-full px-4 pt-6 pb-20 sm:pb-24">
      <h2 className="text-[28px] font-black mb-4">
        <span className="bg-gradient-to-r from-teal-400 via-cyan-500 to-violet-500 bg-clip-text text-transparent">
          Who We Are
        </span>
      </h2>
      <p className="text-gray-900 text-[16px] leading-7">
        We are a team of travel professionals, legal experts, and tech enthusiasts united by one goal — to simplify the visa process. With years of experience, our founders saw how confusing and stressful visa applications could be. That’s why we built GetVisaGo: a transparent, mobile-friendly, 100% online visa service designed for real people — like you.
      </p>
      <div className="mt-8 mx-auto w-[320px] h-[320px] sm:w-[360px] sm:h-[360px] rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center shadow-xl">
        <FaUsers className="text-white text-6xl sm:text-7xl" />
      </div>
    </section>

    {/* Highlight card with hand up (mobile) */}
    <section className="w-full px-4 pt-8">
      <div className="relative max-w-full">
        <div className="bg-white rounded-[28px] shadow-[0_24px_80px_rgba(0,0,0,0.12)] px-5 py-6 sm:px-7 sm:py-7">
          <p className="font-black text-left text-[22px] sm:text-[24px] leading-[1.35] tracking-[-0.01em] bg-clip-text text-transparent bg-gradient-to-r from-[#04C495] to-[#04C495]">
            Our operations are based in the United Kingdom, but our heart beats for India’s smart and ambitious travelers, especially those aged 25 to 45 who value speed, clarity, and real-time support.
          </p>
        </div>
        <img src={handUp} alt="hand up" className="absolute -bottom-10 right-6 w-28 sm:w-32 h-auto drop-shadow-[0_16px_40px_rgba(0,0,0,0.25)] select-none pointer-events-none" />
      </div>
    </section>







    {/* What Makes Us Different Mobile */}
    <WhatMakesUsDifferent />

    {/* Our Promise Mobile (simple per mock) */}
    <section className="w-full py-10 px-4">
      <h2 className="text-[28px] font-black mb-4">
        <span className="bg-gradient-to-r from-teal-400 via-cyan-500 to-violet-500 bg-clip-text text-transparent">Our Promise</span>
      </h2>
      <p className="text-gray-800 text-[16px] leading-7">
        We know your time is valuable. We also know how important your travel plans are — whether it’s for love, work, family, or adventure. That’s why we handle your application as if it were our own. With GetVisaGo, you're not just filling out a form — you're partnering with a reliable service that’s always on your side.
      </p>
      <div className="my-6 flex justify-center">
        <img src={laggageIcon} alt="Travel luggage with heart sticker" className="w-[210px] h-auto" />
      </div>
      <p className="text-gray-900 text-[20px] font-black leading-7">
        We double-check your documents, keep you updated, and handle any rejections or errors as fast as possible. If we ever make a mistake — we take full responsibility.
      </p>
    </section>

    {/* Countries We Cover Mobile */}
    <section className="w-full py-8 px-4 bg-white">
      <div className="max-w-full mx-auto">
        <h2 className="text-2xl font-extrabold bg-gradient-to-r from-[#04C495] to-[#8A7FFF] bg-clip-text text-transparent mb-6 text-center">
          Countries We Cover
        </h2>
        <div className="space-y-4">
          {/* Row 1 */}
          <div className="flex flex-wrap gap-2 justify-center">
            <CountryButton country="UAE" countryCode="AE" />
            <CountryButton country="Oman" countryCode="OM" />
            <CountryButton country="Saudi Arabia" countryCode="SA" />
          </div>
          {/* Row 2 */}
          <div className="flex flex-wrap gap-2 justify-center">
            <CountryButton country="Israel" countryCode="IL" />
            <CountryButton country="Turkey" countryCode="TR" />
            <CountryButton country="Egypt" countryCode="EG" />
          </div>
          {/* Row 3 */}
          <div className="flex flex-wrap gap-2 justify-center">
            <CountryButton country="Thailand" countryCode="TH" />
            <CountryButton country="Malaysia" countryCode="MY" />
            <CountryButton country="Singapore" countryCode="SG" />
          </div>
          {/* Row 4 */}
          <div className="flex flex-wrap gap-2 justify-center">
            <CountryButton country="Vietnam" countryCode="VN" />
            <CountryButton country="Cambodia" countryCode="KH" />
            <CountryButton country="Sri Lanka" countryCode="LK" />
          </div>
          {/* Row 5 */}
          <div className="flex flex-wrap gap-2 justify-center">
            <CountryButton country="Indonesia" countryCode="ID" />
            <CountryButton country="Philippines" countryCode="PH" />
            <CountryButton country="Maldives" countryCode="MV" />
          </div>
        </div>

        {/* Hint to check visas page */}
        <div className="mt-6 text-center px-2">
          <p className="text-gray-900 font-semibold leading-6">
            Looking for a specific country? Just check our
          </p>
          <Link to="/visas" className="text-[#7C4DFF] font-extrabold underline">visas page</Link>
        </div>
      </div>
    </section>

    {/* Join Thousands of Happy Travelers (mobile) */}
    <section className="w-full mt-6 px-4">
      <div className="relative w-full overflow-hidden rounded-2xl">
        <img src={backgroundAboutUs} alt="office background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(131deg,rgba(4,196,149,0.95)_0%,rgba(140,74,255,0.92)_100%)]" />
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative z-10 px-5 py-10 text-center text-white">
          <h3 className="text-[24px] font-black leading-[1.22] tracking-[-0.01em] mb-5">Join Thousands of Happy Travelers</h3>
          <p className="text-[20px] font-black leading-[1.55] tracking-[0]">
            We've already helped thousands of Indian travelers get their visas faster and with less stress. Our average processing time is under 48 hours, and our support team answers most queries in under 15 minutes.
          </p>
        </div>
      </div>
    </section>

    {/* Stats block removed on mobile as requested */}
  </main>
);

const About = () => {
  const { width } = useWindowSize();
  const isDesktop = width >= 1024;
  return isDesktop ? <DesktopAboutPage /> : <MobileAboutPage />;
};

export default About;

