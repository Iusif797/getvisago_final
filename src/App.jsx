import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import HowItWorks from './components/HowItWorks/HowItWorks';

function App() {
  return (
    <div className="w-full min-h-screen bg-white">
      <div className="container-app">
        <Header />
        <Hero />
        <WhyChooseUs />
        <HowItWorks />
      </div>
    </div>
  );
}

export default App;
