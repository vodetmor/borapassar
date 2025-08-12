import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import FallingCaps from '@/components/landing/falling-caps';

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
      </head>
      <body className="font-body antialiased">
        <FallingCaps />
        {children}
        <Toaster/>
      </body>
    </html>
  );
}