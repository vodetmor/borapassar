
"use client";

import { Button } from '@/components/ui/button';
import { VslPlayer } from './vsl-player';
import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';

export function VslSection() {

  return (
    <section id="vsl" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 text-center bg-zinc-900/50 border border-border/50 rounded-xl shadow-2xl shadow-primary/10 py-12">

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight">
          Metodologia validada +400 resumos para <span className="text-primary">DOBRAR</span> sua nota no <span className="text-primary">ENEM</span>
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-base sm:text-xl text-muted-foreground">
          Veja o vídeo e aprenda como estudar menos, acertar mais, fazer uma redação 900+ e ter confiança no dia da prova.
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
              Quero dobrar minha nota
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
