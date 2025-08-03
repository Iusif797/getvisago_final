import React from 'react';
import { FaRegClock, FaGlobeAmericas, FaRegSmile, FaRegCheckCircle } from 'react-icons/fa';
import useWindowSize from '../hooks/useWindowSize';
import aboutHero from '../assets/about_us.png';
import backgroundImg from '../assets/background.png';
import buttonApply from '../assets/button_visa_apply.svg';
import DesktopReviews from '../components/Reviews/DesktopReviews';

const stats = [
  { id: 1, value: '250K+', label: 'Visas Processed', icon: FaRegCheckCircle },
  { id: 2, value: '180+', label: 'Countries Served', icon: FaGlobeAmericas },
  { id: 3, value: '<12h', label: 'Avg. Approval Time', icon: FaRegClock },
  { id: 4, value: '99%', label: 'Approval Rate', icon: FaRegSmile },
];

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
  <main className="w-full bg-[#F8FAFF]">
    {/* Hero */}
    <section className="flex flex-col lg:flex-row items-center justify-between gap-8 max-w-5xl mx-auto mt-12 px-6">
      <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8 w-full lg:w-5/12 text-center lg:text-left">
        <p className="text-3xl lg:text-4xl font-extrabold text-[#00B09B] leading-tight">Travel Easy.</p>
        <p className="text-3xl lg:text-4xl font-extrabold text-[#8E2DE2] leading-tight">Travel Smart.</p>
        <p className="text-3xl lg:text-4xl font-extrabold text-[#5F30E2] leading-tight">Travel with GetVisaGo.</p>
      </div>
      <div className="w-full lg:w-7/12">
        <img src={aboutHero} alt="Travel Banner" className="w-full h-full object-cover rounded-r-3xl lg:rounded-l-none" />
      </div>
    </section>

    {/* Welcome Section */}
    <section className="w-full py-16 px-6">
      <div className="grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto items-start">
        <div className="lg:pr-8 mb-6 lg:mb-0 text-center lg:text-left">
          <h2 className="text-4xl font-bold leading-normal">
            <span className="bg-gradient-to-r from-teal-400 to-cyan-500 text-transparent bg-clip-text">
              Welcome to GetVisaGo — your trusted partner in fast, secure, and fully online e-Visa processing for over 30 countries.
            </span>
          </h2>
        </div>
        <div className="text-gray-600 text-base leading-relaxed lg:border-l-2 border-gray-200 lg:pl-8">
          <p>
            We are a UK-registered visa assistance company founded with a simple mission: to make international travel easier for Indian citizens. Whether you're planning a family holiday in Thailand, a honeymoon in the Maldives, a business trip to Dubai, or a spiritual journey to Israel — we're here to ensure your visa is never a roadblock.
          </p>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="w-full py-24 bg-gradient-to-b from-white via-[#F6F7FA] to-white">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl mx-auto px-6">
        {stats.map(({ id, value, label, icon }) => (
          <StatCard key={id} value={value} label={label} Icon={icon} />
        ))}
      </div>
    </section>

    {/* Mission */}
    <section className="py-24 px-6 max-w-5xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-500 to-violet-600 bg-clip-text text-transparent">
            Our Mission
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            We eliminate the complexity of visa applications so you can focus on planning your journey. Our cutting-edge platform, expert team, and customer-centric approach guarantee a seamless, secure, and lightning-fast experience for travellers worldwide.
          </p>
        </div>
        <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-white/40">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Why Choose GetVisaGo?</h3>
          <ul className="space-y-3 text-gray-700 list-inside">
            <li className="flex items-start"><FaRegCheckCircle className="text-emerald-500 mt-1 mr-2" />Transparent, flat pricing with no hidden fees.</li>
            <li className="flex items-start"><FaRegCheckCircle className="text-emerald-500 mt-1 mr-2" />AI-powered form validation to minimise errors.</li>
            <li className="flex items-start"><FaRegCheckCircle className="text-emerald-500 mt-1 mr-2" />24/7 multilingual human support.</li>
            <li className="flex items-start"><FaRegCheckCircle className="text-emerald-500 mt-1 mr-2" />Bank-level security & data encryption.</li>
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
  <main style={{ backgroundImage: `url(${backgroundImg})` }} className="flex flex-col items-center justify-start min-h-screen bg-cover bg-center text-white">
    <div className="bg-black/40 w-full pt-24 pb-16 px-6">
      <h1 className="text-4xl font-bold mb-6 text-center">About GetVisaGo</h1>
      <p className="text-center mb-8">
        We simplify visa applications so you can travel the world without barriers.
      </p>
      <img src={buttonApply} alt="Apply" className="mx-auto w-52" />
    </div>

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
