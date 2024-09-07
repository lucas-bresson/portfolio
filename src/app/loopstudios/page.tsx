'use client';

import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';
import CreationsSection from './components/CreationsSection';

export default function Page() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <CreationsSection />
      <Footer />
    </div>
  );
}
