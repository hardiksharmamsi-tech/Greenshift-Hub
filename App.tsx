
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import HowItWorksSection from './components/HowItWorksSection';
import FeaturesSection from './components/FeaturesSection';
import AudienceSection from './components/AudienceSection';
import CTASection from './components/CTASection';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-white font-sans text-gs-text">
      <Header isScrolled={isScrolled} />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <FeaturesSection />
        <AudienceSection />
        <CTASection />
      </main>
      <footer className="bg-gs-deep-green text-white py-8 text-center">
        <p>&copy; 2024 GreenShift Hub. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
