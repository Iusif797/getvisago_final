import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home';
import SaudiArabiaVisa from './pages/SaudiArabiaVisa';
import IsraelVisa from './pages/IsraelVisa';
import MalaysiaVisa from './pages/MalaysiaVisa'; // Импортируем новую страницу
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
import VisaDetailPage from './pages/VisaDetailPage';

function App() {
  const { width } = useWindowSize();
  const isMobile = width < 768;

  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        {/* Routes with header */}
        <Route path="/" element={<><Header /><Home /></>} />
        <Route path="/visas" element={<><Header /><Visas /></>} />
        <Route path="/visa/saudi-arabia" element={<><Header /><SaudiArabiaVisa /></>} />
        <Route path="/visa/israel" element={<><Header /><IsraelVisa /></>} />
        <Route path="/visa/malaysia" element={<><Header /><MalaysiaVisa /></>} /> {/* Добавляем новый маршрут */}
        <Route path="/visa-status" element={<><Header /><VisaStatus /></>} />
        <Route path="/blog" element={<><Header /><Blog /></>} />
        <Route path="/visa-application" element={<><Header /><VisaApplication /></>} />
        <Route path="/get-visa/:country?" element={<><Header /><VisaApplication /></>} />
        <Route path="/about" element={<><Header /><AboutUs /><Footer /></>} />
        <Route path="/faq" element={<><Header /><FAQ /><Footer /></>} />

        {/* Routes without header (has its own header) */}
        <Route path="/visa/dubai" element={<VisaDetailPage />} />
        <Route path="/visa-detail/:country" element={<VisaDetailPage />} />
      </Routes>
      {isMobile && <MobileNavigation />}
    </div>
  );
}

export default App;


