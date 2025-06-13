import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import SaudiArabiaVisa from './pages/SaudiArabiaVisa';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/visa/saudi-arabia" element={<SaudiArabiaVisa />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


