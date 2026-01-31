import React from 'react';
import { siteContent } from '../content/siteContent';

function SocialProof() {
  const { socialProof } = siteContent;

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center" data-aos="zoom-y-out">
          {/* Quote mark */}
          <svg
            className="w-12 h-12 text-primary/20 mx-auto mb-6"
            fill="currentColor"
            viewBox="0 0 32 32"
            aria-hidden="true"
          >
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>

          {/* Quote */}
          <blockquote className="text-xl md:text-2xl font-jakarta text-gray-800 leading-relaxed mb-6">
            &ldquo;{socialProof.quote}&rdquo;
          </blockquote>

          {/* Attribution */}
          <p className="text-sm font-semibold text-primary">
            &mdash; {socialProof.attribution}
          </p>
        </div>
      </div>
    </section>
  );
}

export default SocialProof;
