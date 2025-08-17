"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { LogIn } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check scroll position on initial load
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-sm border-b border-border/50" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center h-16 sm:h-20">
        <Link href="/" className="text-xl sm:text-2xl font-bold text-primary tracking-tight transition-transform hover:scale-105">
            Guia Definitivo
        </Link>
        <Button asChild variant="outline" className="border-primary/30 hover:bg-primary/10 hover:text-primary transition-all text-xs sm:text-sm h-8 sm:h-10 px-3 sm:px-4">
          <Link href="/login">
            <LogIn className="mr-0 sm:mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Área de Membros</span>
          </Link>
        </Button>
      </div>
    </header>
  );
}
