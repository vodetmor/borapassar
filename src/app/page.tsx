
"use client";

import { ComparisonSection } from '@/components/landing/comparison-section';
import { CredibilitySection } from '@/components/landing/credibility-section';
import { DesireSection } from '@/components/landing/desire-section';
import { FaqSection } from '@/components/landing/faq-section';
import { Footer } from '@/components/landing/footer';
import { Header } from '@/components/landing/header';
import { InterestSection } from '@/components/landing/interest-section';
import { MethodologySection } from '@/components/landing/methodology-section';
import { MindMapsPreviewSection } from '@/components/landing/mindmaps-preview-section';
import { OfferSection } from '@/components/landing/offer-section';
import { StickyCtaButton } from '@/components/landing/sticky-cta-button';
import { SubjectDetailsSection } from '@/components/landing/subject-details-section';
import { VslSection } from '@/components/landing/vsl-section';
import { useEffect } from 'react';


export default function Home() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
