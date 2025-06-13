import React from 'react';
import Hero from '../components/Hero/Hero';
import AboutUs from '../components/AboutUs/AboutUs';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import Visas from '../components/Visas/Visas';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import Reviews from '../components/Reviews/Reviews';
import FAQ from '../components/FAQ/FAQ';
import Contact from '../components/Contact/Contact';
import SocialMediaDocs from '../components/SocialMediaDocs/SocialMediaDocs';
import useWindowSize from '../hooks/useWindowSize';

const Home = () => {
  const { width } = useWindowSize();
  const isMobile = width < 1024;

  return (
    <>
      <Hero />
      <AboutUs />
      <HowItWorks />
      <Visas />
      <WhyChooseUs />
      <Reviews />
      <FAQ />
      <Contact />
      {isMobile && <SocialMediaDocs />}
    </>
  );
};

export default Home; 