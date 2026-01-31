import React from 'react';
import { siteContent } from '../content/siteContent';

function WhatYouGet() {
  const { whatYouGet } = siteContent;

  return (
    <section className="section-padding bg-gray-50" id="what-you-get">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2
            className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4"
            data-aos="zoom-y-out"
          >
            {whatYouGet.heading}
          </h2>
          <p className="text-lg text-gray-500" data-aos="zoom-y-out" data-aos-delay="50">
            {whatYouGet.subheading}
          </p>
        </div>

        {/* Items grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto"
          data-aos="zoom-y-out"
          data-aos-delay="100"
        >
          {whatYouGet.items.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 border border-gray-100 shadow-sm"
            >
              {/* Checkmark */}
              <svg
                className="w-5 h-5 text-primary flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm font-medium text-gray-700">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-sm text-gray-400 mt-8" data-aos="zoom-y-out" data-aos-delay="150">
          All included. No add-ons. No upgrades. No fine print.
        </p>
      </div>
    </section>
  );
}

export default WhatYouGet;
