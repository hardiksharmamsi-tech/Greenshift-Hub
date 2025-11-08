
import React from 'react';
import CountUp from './CountUp';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gray-50 pt-32 pb-20 lg:pt-48 lg:pb-28">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl font-extrabold text-gs-deep-green leading-tight">
            From Passive Reporting to Active Reduction
          </h1>
          <p className="mt-6 text-lg lg:text-xl text-gs-text max-w-xl mx-auto lg:mx-0">
            The GreenShift Hub is an all-in-one platform that automates your company's energy use, engages your employees, and delivers real-time, auditable ESG reports.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a href="#cta" className="bg-gs-bright-green text-white font-bold py-3 px-8 rounded-full hover:opacity-90 transition-opacity text-lg">
                Request a Demo
              </a>
              <a href="#how-it-works" className="text-gs-deep-green font-semibold py-3 px-8">
                Learn More &rarr;
              </a>
          </div>
        </div>
        
        <div className="flex flex-col gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 animate-fade-in-up">
            <h3 className="font-semibold text-gs-deep-green">Your Fleet's Status (Live from Berlin Grid):</h3>
            <p className="text-sm text-gray-500 mt-1">Grid Carbon Intensity: <span className="font-bold text-gs-text">150 gCO₂/kWh</span></p>
            <div className="mt-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4 rounded-r-lg">
              <p className="font-bold">CHARGING PAUSED</p>
              <p>Waiting for cleaner energy at 2:00 AM.</p>
            </div>
          </div>

          <div className="bg-gs-deep-green text-white p-6 rounded-lg shadow-lg animate-fade-in-up" style={{animationDelay: '200ms'}}>
             <p className="text-lg opacity-80">CO₂e Avoided This Month</p>
             <div className="text-4xl lg:text-5xl font-bold text-gs-bright-green mt-2">
                <CountUp end={4.2} duration={2000} decimals={1} /> Tons
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
