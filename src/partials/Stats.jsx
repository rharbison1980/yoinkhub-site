import React from 'react';
import { siteContent } from '../content/siteContent';

function Stats() {
  const { stats } = siteContent;

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
          data-aos="zoom-y-out"
        >
          {stats.items.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold font-jakarta text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-gray-500 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
