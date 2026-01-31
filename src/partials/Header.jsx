import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { siteContent } from '../content/siteContent';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.pageYOffset > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const handleCtaClick = (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#waitlist');
    }
  };

  return (
    <header
      className={`fixed w-full z-30 transition-all duration-300 ${
        scrolled || mobileOpen ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0" aria-label="YoinkHub">
            <span className="font-jakarta text-xl md:text-2xl">
              <span className="font-extrabold text-primary">Yoink</span>
              <span className="font-semibold text-secondary">Hub</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {siteContent.nav.links.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className={`text-sm font-medium transition-colors duration-150 ${
                  location.pathname === link.href
                    ? 'text-primary'
                    : 'text-gray-600 hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={handleCtaClick}
              className="btn-sm bg-primary text-white hover:bg-primary-dark shadow-orange hover:shadow-orange-lg"
            >
              {siteContent.nav.cta}
            </button>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-primary"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100">
            <nav className="flex flex-col gap-2 pt-4">
              {siteContent.nav.links.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150 ${
                    location.pathname === link.href
                      ? 'text-primary bg-primary-light'
                      : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={handleCtaClick}
                className="mt-2 btn-sm bg-primary text-white hover:bg-primary-dark shadow-orange text-center"
              >
                {siteContent.nav.cta}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
