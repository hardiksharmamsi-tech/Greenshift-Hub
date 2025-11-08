
import React from 'react';
import { ConnectIcon, OptimizeIcon, ReportIcon } from './IconComponents';

interface StepCardProps {
  icon: React.ReactNode;
  step: number;
  title: string;
  description: string;
}

const StepCard: React.FC<StepCardProps> = ({ icon, step, title, description }) => (
  <div className="text-center p-6">
    <div className="flex items-center justify-center h-20 w-20 bg-green-100 rounded-full mx-auto mb-4 text-gs-bright-green">
      {icon}
    </div>
    <h3 className="text-lg font-bold text-gs-deep-green mb-2">
      <span className="text-gs-bright-green">Step {step}:</span> {title}
    </h3>
    <p className="text-gs-text">{description}</p>
  </div>
);

const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-gs-deep-green">
          How It Works
        </h2>
        <p className="mt-4 text-lg text-gs-text max-w-2xl mx-auto">
          A simple, powerful process to automate your sustainability goals.
        </p>
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <StepCard
            icon={<ConnectIcon />}
            step={1}
            title="CONNECT"
            description="We securely link to your assets (EVs, HVAC) and the live Electricity Maps API."
          />
          <StepCard
            icon={<OptimizeIcon />}
            step={2}
            title="OPTIMIZE"
            description="Our 'Eco-Engine' finds the cheapest, cleanest times to run your high-energy loads."
          />
          <StepCard
            icon={<ReportIcon />}
            step={3}
            title="REPORT"
            description="All savings are automatically captured in your real-time ESG dashboard."
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
