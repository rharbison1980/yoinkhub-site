import React from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../content/siteContent';

const statusColors = {
  connected: 'bg-emerald-100 text-emerald-700',
  building: 'bg-amber-100 text-amber-700',
  planned: 'bg-gray-100 text-gray-500',
};

const statusDots = {
  connected: 'bg-emerald-500',
  building: 'bg-amber-500',
  planned: 'bg-gray-400',
};

function IntegrationsPage() {
  const { integrationsPage } = siteContent;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-light via-white to-white pointer-events-none" aria-hidden="true" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" aria-hidden="true" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-8 md:pt-44 md:pb-12">
            <div className="text-center max-w-4xl mx-auto">
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tighter mb-6"
                data-aos="zoom-y-out"
              >
                {integrationsPage.hero.headline}
              </h1>
              <p
                className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="50"
              >
                {integrationsPage.hero.subheadline}
              </p>
            </div>

            {/* Status Legend */}
            <div
              className="flex flex-wrap items-center justify-center gap-4 md:gap-6"
              data-aos="zoom-y-out"
              data-aos-delay="100"
            >
              {Object.entries(integrationsPage.statusLegend).map(([key, label]) => (
                <div key={key} className="flex items-center gap-2">
                  <span className={`w-2.5 h-2.5 rounded-full ${statusDots[key]}`} />
                  <span className="text-sm text-gray-500 font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="pb-12 md:pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div
            className="bg-gray-50 rounded-2xl p-8 md:p-10 border border-gray-100"
            data-aos="zoom-y-out"
          >
            <h2 className="text-xl md:text-2xl font-extrabold tracking-tight mb-3">
              {integrationsPage.philosophy.heading}
            </h2>
            <p className="text-gray-500 leading-relaxed">
              {integrationsPage.philosophy.text}
            </p>
          </div>
        </div>
      </section>

      {/* Integration Categories */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="space-y-12 md:space-y-16">
            {integrationsPage.categories.map((category, catIndex) => (
              <div
                key={catIndex}
                data-aos="zoom-y-out"
                data-aos-delay={catIndex * 30}
              >
                {/* Category header */}
                <div className="mb-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-2">
                    {category.name}
                  </h2>
                  <p className="text-gray-500">
                    {category.description}
                  </p>
                </div>

                {/* Integration cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {category.integrations.map((integration, intIndex) => (
                    <div
                      key={intIndex}
                      className="bg-white rounded-xl p-6 border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all duration-200"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-bold text-gray-900">
                          {integration.name}
                        </h3>
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${statusColors[integration.status]}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${statusDots[integration.status]}`} />
                          {integrationsPage.statusLegend[integration.status]}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {integration.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
            {integrationsPage.cta.heading}
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            {integrationsPage.cta.text}
          </p>
          <Link
            to={integrationsPage.cta.buttonHref}
            className="btn btn-primary text-lg px-8 py-4"
          >
            {integrationsPage.cta.buttonLabel}
          </Link>
        </div>
      </section>
    </>
  );
}

export default IntegrationsPage;
