
"use client";

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { useStickyCta } from '@/hooks/use-sticky-cta';

export function StickyCtaButton() {
  const { isVisible } = useStickyCta();

  return (
    <div className={cn(
        "fixed bottom-0 left-0 w-full z-40 transition-transform duration-300 ease-in-out",
        "bg-black/90 backdrop-blur-sm border-t border-border/50",
        isVisible ? 'translate-y-0' : 'translate-y-full'
    )}>
        <div className="container mx-auto px-4 py-3 flex justify-center items-center">
            <Button 
                asChild 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-sm sm:text-lg font-bold shadow-2xl shadow-accent/30 px-6 py-4 sm:px-8 sm:py-6 rounded-full animate-pulse-cta"
            >
                <a href="#oferta">
                    GARANTIR OFERTA AGORA
                    <ArrowRight className="ml-2 h-5 w-5"/>
                </a>
            </Button>
      </div>
    </div>
  );
}
