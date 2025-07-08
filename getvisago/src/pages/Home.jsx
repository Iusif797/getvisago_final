import React from 'react';
import Hero from '../components/Hero/Hero';
import AboutUs from '../components/AboutUs/AboutUs';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import Visas from '../components/Visas/Visas';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import Reviews from '../components/Reviews/Reviews';
import FAQ from '../components/FAQ/FAQ';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <>
      <Hero />
      <Visas />
      <WhyChooseUs />
      <HowItWorks />
      <AboutUs />
      <Reviews />
      <FAQ />
      <Footer />
    </>
  );
};

export default Home; 