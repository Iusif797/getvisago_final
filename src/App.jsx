import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home';
import SaudiArabiaVisa from './pages/SaudiArabiaVisa';
import IsraelVisa from './pages/IsraelVisa';
import MalaysiaVisa from './pages/MalaysiaVisa'; // Импортируем новую страницу
import SriLankaVisa from './pages/SriLankaVisa'; // Импортируем новую страницу
import BahrainVisa from './pages/BahrainVisa'; // Импортируем новую страницу
import DubaiVisa from './pages/DubaiVisa'; // Импортируем новую страницу
import VisaStatus from './pages/VisaStatus';
import Blog from './pages/Blog';
import VisaApplication from './pages/VisaApplication';
import Visas from './pages/Visas';
import ScrollToTop from './components/ScrollToTop';
import MobileNavigation from './components/MobileNavigation/MobileNavigation';
import useWindowSize from './hooks/useWindowSize';
import About from './pages/About'; // Импортируем новую страницу About
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
import VisaDetailPage from './pages/VisaDetailPage';
import CambodiaVisa from './pages/CambodiaVisa';
import AustraliaVisa from './pages/AustraliaVisa';
import TurkeyVisa from './pages/TurkeyVisa';
import AzerbaijanVisa from './pages/AzerbaijanVisa';
import SouthKoreaVisa from './pages/SouthKoreaVisa';
import VietnamVisa from './pages/VietnamVisa';
import PrivacyPolicy from './pages/PrivacyPolicy';


function App() {
  const { width } = useWindowSize();
  const isMobile = width < 768;
  const location = useLocation();

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
        <Route path="/visa/sri-lanka" element={<><Header /><SriLankaVisa /></>} /> {/* Добавляем новый маршрут */}
        <Route path="/visa/bahrain" element={<><Header /><BahrainVisa /></>} /> {/* Добавляем новый маршрут */}
        <Route path="/visa/cambodia" element={<><Header /><CambodiaVisa /></>} />
        <Route path="/visa/australia" element={<><Header /><AustraliaVisa /></>} />
        <Route path="/visa/turkey" element={<><Header /><TurkeyVisa /></>} />
        <Route path="/visa/azerbaijan" element={<><Header /><AzerbaijanVisa /></>} />
        <Route path="/visa/south-korea" element={<><Header /><SouthKoreaVisa /></>} />
        <Route path="/vietnam-visa" element={<><Header /><VietnamVisa /></>} />
        <Route path="/visa-status" element={<><Header /><VisaStatus /></>} />
        <Route path="/blog" element={<><Header /><Blog /></>} />
        <Route path="/get-visa/:country" element={<><Header /><VisaApplication /></>} />
        <Route path="/about" element={<><Header /><About /><Footer /></>} />
        <Route path="/faq" element={<><Header /><FAQ /><Footer /></>} />
        <Route path="/documents/my-document-1" element={<><Header /><PrivacyPolicy /><Footer /></>} />

        {/* Routes without header (has its own header) */}
        <Route path="/visa/dubai" element={<><Header /><DubaiVisa /></>} />
        <Route path="/visa-detail/:country" element={<VisaDetailPage />} />
      </Routes>
      {isMobile && <MobileNavigation />}
    </div>
  );
}

export default App;
