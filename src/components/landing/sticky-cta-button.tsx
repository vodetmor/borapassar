
"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

export function StickyCtaButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = window.scrollY;
      const offerSection = document.getElementById('oferta');
      
      let offerSectionVisible = false;
      if (offerSection) {
        const { top, bottom } = offerSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        // Considera a seção visível se pelo menos uma parte dela estiver na tela
        offerSectionVisible = top < windowHeight && bottom > 0;
      }
      
      // Aparece depois de rolar um pouco, e desaparece se a seção de oferta estiver visível
      if (scrolled > 400 && !offerSectionVisible) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

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
