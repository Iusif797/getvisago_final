import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <div className="max-w-[375px] mx-auto bg-white min-h-screen relative font-montserrat">
      <Header />
      <Hero />
    </div>
  );
}

export default App;
