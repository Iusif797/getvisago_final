import React from 'react';
import Header from './components/Header/Header';
import DesktopHeader from './components/Header/DesktopHeader';
import Hero from './components/Hero/Hero';
import DesktopHero from './components/Hero/DesktopHero';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import HowItWorks from './components/HowItWorks/HowItWorks';
import AboutUs from './components/AboutUs/AboutUs';
import Reviews from './components/Reviews/Reviews';
import FAQ from './components/FAQ/FAQ';
import Contact from './components/Contact/Contact';
import SocialMediaDocs from './components/SocialMediaDocs/SocialMediaDocs';
import Footer from './components/Footer/Footer';
import VisaSection from './components/Visas/VisaSection';
import useWindowSize from './hooks/useWindowSize';

function App() {
  const { width } = useWindowSize();
  const isDesktop = width >= 1024; // Определяем десктоп от ширины 1024px
  
  return (
    <div className="w-full min-h-screen bg-white">
      <div className={isDesktop ? "w-full" : "container-app"}>
        {/* Рендерим или мобильную, или десктопную версию в зависимости от ширины экрана */}
        {!isDesktop ? (
          // Мобильная версия
          <>
            <Header />
            <Hero />
            <VisaSection />
          </>
        ) : (
          // Десктопная версия
          <>
            <DesktopHeader />
            <DesktopHero />
            <VisaSection />
          </>
        )}
        
        {/* Общие компоненты */}
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
