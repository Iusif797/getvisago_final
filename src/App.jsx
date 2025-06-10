import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import HowItWorks from './components/HowItWorks/HowItWorks';
import AboutUs from './components/AboutUs/AboutUs';
import Reviews from './components/Reviews/Reviews';
import FAQ from './components/FAQ/FAQ';
import Contact from './components/Contact/Contact';
import SocialMediaDocs from './components/SocialMediaDocs/SocialMediaDocs';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="w-full min-h-screen bg-white">
      <div className="container-app">
        <Header />
        <Hero />
        <WhyChooseUs />
        <HowItWorks />
        <AboutUs />
        <Reviews />
        <FAQ />
        <Contact />
        <SocialMediaDocs />
        <Footer />
      </div>
    </div>
  );
}

export default App;
