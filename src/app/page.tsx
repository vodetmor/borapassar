import { Header } from '@/components/landing/header';
import { HeroSection } from '@/components/landing/hero-section';
import { InterestSection } from '@/components/landing/interest-section';
import { DesireSection } from '@/components/landing/desire-section';
import { CtaSection } from '@/components/landing/cta-section';
import { FaqSection } from '@/components/landing/faq-section';
import { Footer } from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <InterestSection />
        <DesireSection />
        <CtaSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
