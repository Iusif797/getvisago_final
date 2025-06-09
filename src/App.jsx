import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <div className="w-full min-h-screen bg-white">
      <div className="container-app">
        <Header />
        <Hero />
      </div>
    </div>
  );
}

export default App;
