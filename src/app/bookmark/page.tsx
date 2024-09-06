'use client';

import { rubik } from '@/app/ui/fonts';
import NavMenu from './components/NavMenu';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import DownloadSection from './components/DownloadSection';
import FAQSection from './components/FAQSection';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';

export default function Page() {
  return (
    <div className={`${rubik.className} overflow-x-hidden`}>
      <NavMenu />
      <HeroSection />
      <FeaturesSection />
      <DownloadSection />
      <FAQSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
}
