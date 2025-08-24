
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
          Método <span className="text-red-500">Secreto</span> que quem Passa no <span className="text-primary">ENEM</span> Não Quer que Você Descubra
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-base sm:text-xl text-muted-foreground">
          Existe um atalho para a <span className="text-primary font-bold">aprovação</span> que a maioria <span className="text-red-500 font-bold">esconde</span>. Assista ao vídeo e veja como ter acesso não só ao método, mas ao arsenal de +400 mapas mentais que vai te poupar meses de estudo.
        </p>

        <div className="mt-8 mb-8 aspect-video max-w-4xl mx-auto">
            <VslPlayer videoSrc="https://i.imgur.com/fKBWa6S.mp4" />
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
