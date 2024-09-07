import HeroSection from './components/HeroSection';
import SnippetsSection from './components/SnippetsSection';
import FeaturesSection from './components/FeaturesSection';
import AccessAnywhereSection from './components/AccessAnywhereSection';
import SuperchargeSection from './components/SuperchargeSection';
import ReferencesSection from './components/ReferencesSection';
import BottomCTASection from './components/BottomCTASection';
import Footer from './components/Footer';

export default function Page() {
  return (
    <div>
      <HeroSection />
      <SnippetsSection />
      <FeaturesSection />
      <AccessAnywhereSection />
      <SuperchargeSection />
      <ReferencesSection />
      <BottomCTASection />
      <Footer />
    </div>
  );
}
