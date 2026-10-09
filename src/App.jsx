import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProductCollection from './components/ProductCollection';
import LadooFeature from './components/LadooFeature';
import GlobalTradeSection from './components/GlobalTradeSection';
import FooterSection from './components/FooterSection';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-ivory font-sans text-brand-brown">
      {/* Slim, elegant navigation */}
      <Navbar />

      {/* Main content sections */}
      <main className="flex-1">
        {/* Section B: Hero */}
        <HeroSection />

        {/* Section C: Product Collection */}
        <ProductCollection />

        {/* Section D: Ladoo Craft Visual */}
        <LadooFeature />

        {/* Section E: Global Trade & Business Expansion */}
        <GlobalTradeSection />
      </main>

      {/* Section F: Compact Footer & Direct Contact Details */}
      <FooterSection />
    </div>
  );
}
