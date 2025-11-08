
import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section id="cta" className="py-20 lg:py-28 bg-gs-deep-green text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl lg:text-5xl font-extrabold">
          Stop Reporting. Start Reducing.
        </h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto opacity-90">
          See how the GreenShift Hub can transform your company's energy strategy and deliver immediate results.
        </p>
        <div className="mt-8">
          <a
            href="#"
            className="inline-block bg-gs-bright-green text-white font-bold py-4 px-10 rounded-full hover:opacity-90 transition-opacity text-xl shadow-lg"
          >
            Request Your Live Demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
