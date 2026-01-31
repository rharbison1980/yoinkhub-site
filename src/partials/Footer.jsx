import React from 'react';
import { siteContent } from '../content/siteContent';

function Footer() {
  const { footer } = siteContent;

  return (
    <footer className="bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between py-8 border-t border-white/10">
          {/* Logo */}
          <a href="#" className="mb-4 md:mb-0" aria-label="YoinkHub">
            <span className="font-jakarta text-lg">
              <span className="font-extrabold text-primary">Yoink</span>
              <span className="font-semibold text-white">Hub</span>
            </span>
          </a>

          {/* Links */}
          <div className="flex items-center gap-6 mb-4 md:mb-0">
            {footer.links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-400">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
