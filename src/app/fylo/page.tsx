'use client';

import { openSans } from '@/app/ui/fonts';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductiveSection from './components/ProductiveSection';
import TestimonialsSection from './components/TestimonialsSection';
import EarlyAccessSection from './components/EarlyAccessSection';
import Footer from './components/Footer';

export default function Page() {
  return (
    <div className={`dark:bg-darkBlue dark:text-white ${openSans.className}`}>
      <Header />
      <HeroSection />
      <ProductiveSection />
      <TestimonialsSection />
      <EarlyAccessSection />
      <Footer />
    </div>
  );
}
