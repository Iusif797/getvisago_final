import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home';
import SaudiArabiaVisa from './pages/SaudiArabiaVisa';
import VisaStatus from './pages/VisaStatus';
import Blog from './pages/Blog';
import VisaApplication from './pages/VisaApplication';
import Visas from './pages/Visas';
import ScrollToTop from './components/ScrollToTop';
import MobileNavigation from './components/MobileNavigation/MobileNavigation';
import useWindowSize from './hooks/useWindowSize';
import AboutUs from './components/AboutUs/AboutUs';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';

function App() {
  const { width } = useWindowSize();
  const isMobile = width < 1024;

  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/visas" element={<Visas />} />
        <Route path="/visa/saudi-arabia" element={<SaudiArabiaVisa />} />
        <Route path="/visa-status" element={<VisaStatus />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/visa-application" element={<VisaApplication />} />
        <Route path="/get-visa" element={<VisaApplication />} />
        <Route path="/about" element={<><Header /><AboutUs /><Footer /></>} />
        <Route path="/faq" element={<><Header /><FAQ /><Footer /></>} />
      </Routes>
      {isMobile && <MobileNavigation />}
    </div>
  );
}

export default App;


