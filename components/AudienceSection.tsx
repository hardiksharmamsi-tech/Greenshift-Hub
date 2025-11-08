
import React from 'react';

interface AudienceCardProps {
  title: string;
  description: string;
  delay?: string;
}

const AudienceCard: React.FC<AudienceCardProps> = ({ title, description }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 h-full">
    <h3 className="text-xl font-bold text-gs-deep-green">{title}</h3>
    <p className="mt-2 text-gs-text">{description}</p>
  </div>
);

const AudienceSection: React.FC = () => {
  return (
    <section id="audience" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gs-deep-green">
            Built for Your Entire Organization
          </h2>
          <p className="mt-4 text-lg text-gs-text max-w-2xl mx-auto">
            We align financial incentives with environmental impact, creating value for everyone.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AudienceCard 
            title="CEOs & CFOs"
            description="Turn energy from a fixed cost into a flexible asset. Lower operational expenses and enhance your brand's reputation."
          />
          <AudienceCard 
            title="Sustainability Officers"
            description="Move beyond estimates with granular, real-time data. Automate reporting and focus on strategic initiatives."
          />
          <AudienceCard 
            title="Investors & Regulators"
            description="Access transparent, auditable, and compliant ESG data that stands up to scrutiny and builds trust."
          />
          <AudienceCard 
            title="Employees"
            description="Participate directly in your company's sustainability goals through engaging, gamified experiences."
          />
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
