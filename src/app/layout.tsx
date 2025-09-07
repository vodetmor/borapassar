
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { WhatsAppButton } from '@/components/landing/whatsapp-button';
import React, { Suspense } from 'react';
import Script from 'next/script';
import { SocialProofToast } from '@/components/landing/social-proof-toast';

export const metadata: Metadata = {
  title: 'Guia Definitivo',
  description: 'O método definitivo para vencer a procrastinação e garantir sua vaga no vestibular e ENEM.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" rel="stylesheet" />
        <Script
          id="utmify-script"
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-xcod-sck
          data-utmify-prevent-subids
          async
          defer
        />
      </head>
      <body className="font-body antialiased">
        {children}
        <WhatsAppButton />
        <Toaster/>
        <SocialProofToast />
      </body>
    </html>
  );
}
