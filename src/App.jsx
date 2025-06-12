import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import AboutUs from './components/AboutUs/AboutUs';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Visas from './components/Visas/Visas';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import Reviews from './components/Reviews/Reviews';
import FAQ from './components/FAQ/FAQ';
import Contact from './components/Contact/Contact';
import SocialMediaDocs from './components/SocialMediaDocs/SocialMediaDocs';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <AboutUs />
      <HowItWorks />
      <Visas />
      <WhyChooseUs />
      <Reviews />
      <FAQ />
      <Contact />
      <SocialMediaDocs />
      <Footer />
    </div>
  );
}

export default App;


