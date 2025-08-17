
"use client"

import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const mainProofs = [
  { 
    src: "https://i.imgur.com/Z6Sia3c.png", 
    alt: "Notícia do G1 sobre como o cérebro aprende",
    hint: "news article brain",
  },
  { 
    src: "https://i.imgur.com/V49rVot.png", 
    alt: "Notícia sobre neurociência e aprendizado",
    hint: "news article",
  },
  { 
    src: "https://i.imgur.com/xJd5oF2.png", 
    alt: "Estudo sobre a curva do esquecimento de Ebbinghaus",
    hint: "scientific study curve",
  },
];

const logos = [
  { name: "G1", src: "https://i.imgur.com/WPzDXmR.png", hint: "G1 logo", bgColor: 'bg-[#C4170C]' },
  { name: "USP", src: "https://i.imgur.com/4nTFJ5E.png", hint: "USP logo", bgColor: 'bg-white', customClass: "h-24 w-auto p-2" },
  { name: "Harvard", src: "https://i.imgur.com/rUgRCaW.png", hint: "Harvard logo", bgColor: 'bg-white', customClass: "h-24 w-auto p-2" },
  { name: "Forbes", src: "https://i.imgur.com/WZOOTO8.png", hint: "Forbes logo", bgColor: 'bg-black' },
  { name: "Nature", src: "https://i.imgur.com/oeUjfFr.png", hint: "Nature logo", bgColor: 'bg-black' },
  { name: "UFRGS", src: "https://i.imgur.com/MsOOUBU.png", hint: "UFRGS logo", bgColor: 'bg-white', customClass: "h-24 w-auto p-2" },
  { name: "UnB", src: "https://i.imgur.com/Gs7pAdJ.png", hint: "UnB logo", bgColor: 'bg-white', customClass: "h-24 w-auto p-2" },
  { name: "Unicamp", src: "https://i.imgur.com/bh8WgxT.png", hint: "Unicamp logo", bgColor: 'bg-white', customClass: "h-24 w-auto p-2" },
];

export function CredibilitySection() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true })
    );

    return (
        <section id="credibilidade" className="py-16 sm:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                        Aprovado pela Ciência, Validado pela Mídia
                    </h2>
                    <p className="mt-4 max-w-3xl mx-auto text-base sm:text-lg text-muted-foreground">
                        Nosso método não foi inventado. Ele é baseado em pesquisas de neurocientistas e recomendado por especialistas. Veja as provas.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 max-w-2xl mx-auto">
                  {mainProofs.map((proof, index) => (
                    <div key={index} className="bg-zinc-900/50 p-2 rounded-lg shadow-lg border border-primary/20">
                      <Image
                        src={proof.src}
                        alt={proof.alt}
                        width={1280}
                        height={720}
                        className="rounded-md w-full h-auto object-cover"
                        data-ai-hint={proof.hint}
                      />
                    </div>
                  ))}
                </div>

                <div className="text-center mt-16 mb-12">
                    <p className="text-lg text-muted-foreground">E recomendado por especialistas nas maiores universidades e portais de notícias:</p>
                </div>
                
                <div className="w-full">
                     <Carousel
                        plugins={[plugin.current]}
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-8">
                             {logos.map((logo, index) => (
                                <CarouselItem key={index} className="pl-8 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                                    <div className={cn("flex justify-center items-center h-24 p-4 rounded-lg", logo.bgColor)}>
                                        <Image 
                                            src={logo.src}
                                            alt={`Logo ${logo.name}`}
                                            width={150}
                                            height={60}
                                            data-ai-hint={logo.hint}
                                            className={cn("object-contain h-full w-auto", (logo as any).customClass)}
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
        </section>
    );
}
