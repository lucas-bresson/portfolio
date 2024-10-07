'use client';

import { openSans } from '@/app/ui/fonts';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductiveSection from './components/ProductiveSection';
import TestimonialsSection from './components/TestimonialsSection';
import EarlyAccessSection from './components/EarlyAccessSection';
import Footer from './components/Footer';
import FeaturesSection from './components/FeaturesSection';
import { useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function Page() {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme('dark');

    return () => setTheme('light');
  }, []);

  return (
    <div
      className={`dark:bg-darkBlue dark:text-white ${openSans.className} pt-8`}
    >
      <Header />
      <HeroSection />
      <FeaturesSection />
      <ProductiveSection />
      <TestimonialsSection />
      <EarlyAccessSection />
      <Footer />
    </div>
  );
}
