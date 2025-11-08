
import React, { useState } from 'react';
import { FeatureTab } from '../types';

const FeaturesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<FeatureTab>(FeatureTab.EcoEngine);

  const tabData = {
    [FeatureTab.EcoEngine]: {
      title: 'The Eco-Engine',
      subtitle: 'For Machines',
      content: "Automate your demand-side response. Our AI-powered engine schedules your EV fleet charging and building HVAC systems to run only when energy is clean and cheap, directly lowering your Scope 2 emissions and energy bills."
    },
    [FeatureTab.EngageApp]: {
      title: 'The Engage App',
      subtitle: 'For Employees',
      content: "Turn sustainability into a team sport. Our employee app uses gamification and real-time grid alerts ('The grid is dirty right now!') to encourage behavior change and track your company's Scope 3 emissions."
    },
    [FeatureTab.EsgDashboard]: {
      title: 'The ESG Dashboard',
      subtitle: 'For Executives',
      content: "Ditch the static PDFs. Get a real-time, auditable dashboard of your entire carbon footprint. Generate one-click reports for CSRD, SFDR, and investor relations."
    }
  };

  const TabButton: React.FC<{tabId: FeatureTab; children: React.ReactNode}> = ({tabId, children}) => (
    <button
      onClick={() => setActiveTab(tabId)}
      className={`px-6 py-3 font-semibold rounded-t-lg transition-all duration-300 ${
        activeTab === tabId
          ? 'bg-white text-gs-deep-green border-b-4 border-gs-bright-green'
          : 'bg-transparent text-gs-text hover:bg-green-100'
      }`}
    >
      {children}
    </button>
  );

  return (
    <section id="features" className="py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gs-deep-green">
            A Feature for Every Stakeholder
          </h2>
          <p className="mt-4 text-lg text-gs-text max-w-2xl mx-auto">
            From the plant room to the boardroom, GreenShift provides the tools you need.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex border-b border-gray-300">
            <TabButton tabId={FeatureTab.EcoEngine}>The Eco-Engine</TabButton>
            <TabButton tabId={FeatureTab.EngageApp}>The Engage App</TabButton>
            <TabButton tabId={FeatureTab.EsgDashboard}>The ESG Dashboard</TabButton>
          </div>
          <div className="bg-white p-8 lg:p-12 rounded-b-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gs-deep-green">{tabData[activeTab].title}</h3>
            <span className="text-sm font-semibold text-gs-bright-green uppercase">{tabData[activeTab].subtitle}</span>
            <p className="mt-4 text-gs-text text-lg leading-relaxed">
              {tabData[activeTab].content}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
