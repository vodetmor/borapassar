
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
import { useEffect } from 'react';
import { MindMapsBenefitSection } from '@/components/landing/mind-maps-benefit-section';


export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground non-selectable">
      <Header />
      <main className="flex-grow">
        <VslSection />
        <CredibilitySection />
        <MethodologySection />
        <ComparisonSection />
        <DesireSection />
        <MindMapsBenefitSection />
        <MindMapsPreviewSection />
        <SubjectDetailsSection />
        <InterestSection />
        <OfferSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}


