import React from 'react';
import { siteContent } from '../content/siteContent';

function HeroHome() {
  const { hero } = siteContent;

  const scrollToWaitlist = (e) => {
    e.preventDefault();
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-primary-light via-white to-white pointer-events-none"
        aria-hidden="true"
      />

      {/* Decorative circles */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-12 -left-12 w-72 h-72 bg-primary/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-16 md:pt-44 md:pb-24">
          {/* Content */}
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="mb-6" data-aos="zoom-y-out">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary">
                {hero.badge}
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tighter mb-6"
              data-aos="zoom-y-out"
              data-aos-delay="50"
            >
              {hero.headline}
            </h1>

            {/* Subheadline */}
            <p
              className="text-lg md:text-xl text-gray-500 mb-8 max-w-3xl mx-auto"
              data-aos="zoom-y-out"
              data-aos-delay="100"
            >
              {hero.subheadline}
            </p>

            {/* CTA */}
            <div data-aos="zoom-y-out" data-aos-delay="150">
              <button
                onClick={scrollToWaitlist}
                className="btn btn-primary text-lg px-8 py-4"
              >
                {hero.cta}
              </button>
              <p className="text-sm text-gray-400 mt-4">{hero.ctaSubtext}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
