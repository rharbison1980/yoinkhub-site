import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import 'aos/dist/aos.css';
import './css/style.css';

import AOS from 'aos';
import { Analytics } from '@vercel/analytics/react';

import Header from './partials/Header';
import HeroHome from './partials/HeroHome';
import PainPoints from './partials/PainPoints';
import WhatYouGet from './partials/WhatYouGet';
import HowItWorks from './partials/HowItWorks';
import Stats from './partials/Stats';
import SocialProof from './partials/SocialProof';
import WaitlistForm from './partials/WaitlistForm';
import Footer from './partials/Footer';
import FeaturesPage from './pages/FeaturesPage';
import CommunityPage from './pages/CommunityPage';
import IntegrationsPage from './pages/IntegrationsPage';
import ThreadPage from './pages/ThreadPage';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function Home() {
  return (
    <>
      <HeroHome />
      <PainPoints />
      <WhatYouGet />
      <HowItWorks />
      <Stats />
      <SocialProof />
      <WaitlistForm />
    </>
  );
}

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <ScrollToTop />
      <Header />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<><FeaturesPage /><WaitlistForm /></>} />
          <Route path="/integrations" element={<><IntegrationsPage /><WaitlistForm /></>} />
          <Route path="/community" element={<><CommunityPage /><WaitlistForm /></>} />
          <Route path="/community/thread/:id" element={<ThreadPage />} />
        </Routes>
      </main>

      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
