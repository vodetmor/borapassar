
"use client";

import { Button } from '@/components/ui/button';
import { VslPlayer } from './vsl-player';
import Link from 'next/link';
import { LogIn, ShieldCheck } from 'lucide-react';

export function VslSection() {

  return (
    <section id="vsl" className="pt-12 pb-12 sm:pt-16 sm:pb-16 bg-background">
      <div className="container mx-auto px-4 text-center">

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight mt-8">
          Metodologia validada +400 resumos para <span className="text-primary">DOBRAR</span> sua nota no <span className="text-primary">ENEM</span>
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-base sm:text-xl text-muted-foreground">
          Descubra no vídeo o atalho para a aprovação com o método exclusivo e 400 mapas mentais que economizam meses de estudo.
        </p>

        <div className="mt-8 mb-8 mx-auto max-w-sm aspect-[9/16]">
            <VslPlayer videoSrc="https://i.imgur.com/woTizNZ.mp4" />
        </div>

        <div className="mt-10 flex flex-col items-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full text-base sm:text-lg font-bold shadow-xl shadow-primary/20 px-8 py-4 sm:px-10 sm:py-6 animate-pulse-cta"
          >
            <a href="#oferta">
              QUERO O MÉTODO SECRETO
            </a>
          </Button>
           <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/50 px-4 py-1.5 text-xs sm:text-sm font-semibold text-primary-foreground">
                <ShieldCheck className="w-5 h-5 text-accent" />
                <span>+1700 alunos aprovados</span>
            </div>
        </div>
      </div>
    </section>
  );
}
