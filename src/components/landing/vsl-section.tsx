
"use client";

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { VslPlayer } from './vsl-player';

export function VslSection() {
  return (
    <section id="vsl" className="pt-16 pb-12 sm:pt-24 sm:pb-16 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight">
          Aprovação <span className="text-red-500">Não é Sorte</span>, é <span className="text-primary">Método</span>
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-base sm:text-xl text-muted-foreground">
          Se você está cansado de se sentir um fracasso nos estudos, este vídeo de 1 minuto vai te mostrar a chave para destravar seu potencial. Assista AGORA.
        </p>

        <div className="mt-8 mb-8 aspect-video max-w-4xl mx-auto">
            <VslPlayer videoSrc="https://i.imgur.com/fKBWa6S.mp4" />
        </div>

        <div className="mt-10">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full text-base sm:text-lg font-bold shadow-xl shadow-primary/20 px-8 py-4 sm:px-10 sm:py-6 animate-pulse-cta"
          >
            <a href="#oferta">
              QUERO CONHECER O MÉTODO
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
