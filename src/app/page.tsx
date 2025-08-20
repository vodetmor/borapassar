
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
import Script from 'next/script';
import { useEffect } from 'react';

declare global {
    interface Window {
        fbq?: (...args: any[]) => void;
        _fbq_loaded?: boolean;
    }
}

export default function Home() {
  
  useEffect(() => {
    if (window.fbq && !window._fbq_loaded) {
      window.fbq('track', 'PageView');
      window._fbq_loaded = true;
    }
  }, []);

  return (
    <>
      <Script id="meta-pixel-init" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '2208909466198043');
        `}
      </Script>
      <div className="flex flex-col min-h-screen bg-background text-foreground non-selectable">
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
    </>
  );
}
