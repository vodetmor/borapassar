import { VslSection } from '@/components/landing/vsl-section';
import { InterestSection } from '@/components/landing/interest-section';
import { ComparisonSection } from '@/components/landing/comparison-section';
import { DesireSection } from '@/components/landing/desire-section';
import { FaqSection } from '@/components/landing/faq-section';
import { Footer } from '@/components/landing/footer';
import { MethodologySection } from '@/components/landing/methodology-section';
import { OfferSection } from '@/components/landing/offer-section';
import { CredibilitySection } from '@/components/landing/credibility-section';
import { Header } from '@/components/landing/header';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <VslSection />
        <CredibilitySection />
        <MethodologySection />
        <ComparisonSection />
        <DesireSection />
        <InterestSection />
        <OfferSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
