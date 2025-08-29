
"use client";

import { Button } from '@/components/ui/button';
import { VslPlayer } from './vsl-player';
import Link from 'next/link';
import { LogIn } from 'lucide-react';

export function VslSection() {

  return (
    <section id="vsl" className="pt-12 pb-12 sm:pt-16 sm:pb-16 bg-background">
      <div className="container mx-auto px-4 text-center">

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight mt-8">
          Metodologia <span className="text-primary">VALIDADA</span> + 400 resumos para a <span className="text-primary">MELHOR</span> nota no ENEM
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-base sm:text-xl text-muted-foreground">
          Descubra no vídeo o atalho para a aprovação com o método exclusivo e 400 mapas mentais que economizam meses de estudo.
        </p>

        <div className="mt-8 mb-8 mx-auto max-w-sm aspect-[9/16]">
            <VslPlayer videoSrc="https://i.imgur.com/woTizNZ.mp4" />
        </div>

        <div className="mt-10">
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full text-base sm:text-lg font-bold shadow-xl shadow-primary/20 px-8 py-4 sm:px-10 sm:py-6 animate-pulse-cta"
          >
            <a href="#oferta">
              QUERO O MÉTODO SECRETO
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
