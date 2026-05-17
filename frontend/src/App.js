import React from 'react';
import Navbar from './components/northgate/Navbar';
import Hero from './components/northgate/Hero';
import ValueProposition from './components/northgate/ValueProposition';
import Features from './components/northgate/Features';
import Services from './components/northgate/Services';
import About from './components/northgate/About';
import Footer from './components/northgate/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <ValueProposition />
        <Features />
        <Services />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
