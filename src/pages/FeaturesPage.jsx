import React from 'react';
import { siteContent } from '../content/siteContent';

const statusColors = {
  live: 'bg-emerald-100 text-emerald-700',
  beta: 'bg-amber-100 text-amber-700',
  development: 'bg-blue-100 text-blue-700',
  planned: 'bg-gray-100 text-gray-500',
};

const statusDots = {
  live: 'bg-emerald-500',
  beta: 'bg-amber-500',
  development: 'bg-blue-500',
  planned: 'bg-gray-400',
};

function FeaturesPage() {
  const { featuresPage } = siteContent;

  const scrollToWaitlist = (e) => {
    e.preventDefault();
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-light via-white to-white pointer-events-none" aria-hidden="true" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" aria-hidden="true" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-44 md:pb-16">
            <div className="text-center max-w-4xl mx-auto">
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tighter mb-6"
                data-aos="zoom-y-out"
              >
                {featuresPage.hero.headline}
              </h1>
              <p
                className="text-lg md:text-xl text-gray-500 mb-8 max-w-3xl mx-auto"
                data-aos="zoom-y-out"
                data-aos-delay="50"
              >
                {featuresPage.hero.subheadline}
              </p>
            </div>

            {/* Status Legend */}
            <div
              className="flex flex-wrap items-center justify-center gap-4 md:gap-6"
              data-aos="zoom-y-out"
              data-aos-delay="100"
            >
              {Object.entries(featuresPage.statusLegend).map(([key, label]) => (
                <div key={key} className="flex items-center gap-2">
                  <span className={`w-2.5 h-2.5 rounded-full ${statusDots[key]}`} />
                  <span className="text-sm text-gray-500 font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Feature Categories */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="space-y-12 md:space-y-16">
            {featuresPage.categories.map((category, catIndex) => (
              <div
                key={catIndex}
                className={`rounded-2xl p-6 md:p-10 ${catIndex % 2 === 0 ? 'bg-white border border-gray-100' : 'bg-gray-50'}`}
                data-aos="zoom-y-out"
                data-aos-delay={catIndex * 30}
              >
                {/* Category header */}
                <div className="mb-6 md:mb-8">
                  <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-2">
                    {category.name}
                  </h2>
                  <p className="text-primary font-medium italic">
                    {category.hook}
                  </p>
                </div>

                {/* Features grid */}
                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                  {category.features.map((feature, featIndex) => (
                    <div
                      key={featIndex}
                      className="flex gap-4 p-4 rounded-lg bg-white border border-gray-50 hover:border-primary/20 hover:shadow-sm transition-all duration-200"
                    >
                      {/* Status badge */}
                      <div className="flex-shrink-0 pt-0.5">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${statusColors[feature.status]}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${statusDots[feature.status]}`} />
                          {featuresPage.statusLegend[feature.status]}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-bold text-gray-900 mb-1">
                          {feature.name}
                        </h3>
                        <p className="text-sm text-gray-500 leading-relaxed">
                          {feature.benefit}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
            Seen enough?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Get early access to every feature listed above. Free during early access. No credit card. No contract.
          </p>
          <button
            onClick={scrollToWaitlist}
            className="btn btn-primary text-lg px-8 py-4"
          >
            Get Early Access
          </button>
        </div>
      </section>
    </>
  );
}

export default FeaturesPage;
