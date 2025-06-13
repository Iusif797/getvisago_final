import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import SaudiArabiaVisa from './pages/SaudiArabiaVisa';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/visa/saudi-arabia" element={<SaudiArabiaVisa />} />
        <Route path="/visa-status" element={<Home />} />
        <Route path="/contacts" element={<Home />} />
        <Route path="/get-visa" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;


