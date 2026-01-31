import React, { useState, useEffect } from 'react';
import { siteContent } from '../content/siteContent';

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.pageYOffset > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToWaitlist = (e) => {
    e.preventDefault();
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed w-full z-30 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex-shrink-0" aria-label="YoinkHub">
            <span className="font-jakarta text-xl md:text-2xl">
              <span className="font-extrabold text-primary">Yoink</span>
              <span className="font-semibold text-secondary">Hub</span>
            </span>
          </a>

          {/* CTA */}
          <nav>
            <button
              onClick={scrollToWaitlist}
              className="btn-sm bg-primary text-white hover:bg-primary-dark shadow-orange hover:shadow-orange-lg"
            >
              {siteContent.nav.cta}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
