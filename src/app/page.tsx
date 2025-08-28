
"use client";

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
import { MindMapsPreviewSection } from '@/components/landing/mindmaps-preview-section';
import { SubjectDetailsSection } from '@/components/landing/subject-details-section';
import { StickyCtaButton } from '@/components/landing/sticky-cta-button';


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground non-selectable">
      <Header />
      <main className="flex-grow">
        <VslSection />
        <ComparisonSection />
        <DesireSection />
        <CredibilitySection />
        <MethodologySection />
        <MindMapsPreviewSection />
        <InterestSection />
        <OfferSection />
        <SubjectDetailsSection />
        <FaqSection />
      </main>
      <Footer />
      <StickyCtaButton />
    </div>
  );
}
