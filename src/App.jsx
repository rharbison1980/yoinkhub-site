import React, { useEffect } from 'react';

import 'aos/dist/aos.css';
import './css/style.css';

import AOS from 'aos';

import Header from './partials/Header';
import HeroHome from './partials/HeroHome';
import Features from './partials/Features';
import HowItWorks from './partials/HowItWorks';
import Stats from './partials/Stats';
import SocialProof from './partials/SocialProof';
import WaitlistForm from './partials/WaitlistForm';
import Footer from './partials/Footer';

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
      <Header />

      <main className="flex-grow">
        <HeroHome />
        <Features />
        <HowItWorks />
        <Stats />
        <SocialProof />
        <WaitlistForm />
      </main>

      <Footer />
    </div>
  );
}

export default App;
