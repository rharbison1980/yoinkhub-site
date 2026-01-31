import React, { useState } from 'react';
import { siteContent } from '../content/siteContent';

function WaitlistForm() {
  const { waitlist } = siteContent;
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error | duplicate

  const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValidEmail(email)) return;

    setStatus('loading');

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus(data.message === 'already_subscribed' ? 'duplicate' : 'success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="section-padding bg-secondary" id="waitlist">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center" data-aos="zoom-y-out">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
            {waitlist.heading}
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            {waitlist.subheading}
          </p>

          {/* Form */}
          {status === 'success' ? (
            <div className="flex items-center justify-center gap-3 text-lg text-white">
              <svg className="w-6 h-6 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {waitlist.successMessage}
            </div>
          ) : status === 'duplicate' ? (
            <div className="flex items-center justify-center gap-3 text-lg text-white">
              <svg className="w-6 h-6 text-warning" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {waitlist.duplicateMessage}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={waitlist.placeholder}
                  required
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-base"
                />
                <button
                  type="submit"
                  disabled={status === 'loading' || !isValidEmail(email)}
                  className="btn btn-primary whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                  ) : (
                    waitlist.cta
                  )}
                </button>
              </div>

              {status === 'error' && (
                <p className="text-red-400 text-sm mt-3">{waitlist.errorMessage}</p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default WaitlistForm;
