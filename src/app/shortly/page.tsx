'use client';

import { poppins } from '@/app/ui/fonts';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ShortenSection from './components/ShortenSection';
import StatsSection from './components/StatsSection';
import FeaturesSection from './components/FeaturesSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function Page() {
  return (
    <div className={poppins.className}>
      <Header />
      <HeroSection />
      <ShortenSection />
      <StatsSection />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </div>
  );
}
