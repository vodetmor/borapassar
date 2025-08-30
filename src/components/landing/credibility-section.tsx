
"use client"

import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"

const mainProofs = [
  { 
    src: "https://i.imgur.com/Z6Sia3c.png", 
    alt: "Notícia do G1 sobre como o cérebro aprende",
    hint: "news article brain",
  },
  { 
    src: "https://i.imgur.com/jy32QXq.png", 
    alt: "Notícia sobre neurociência e aprendizado",
    hint: "news article",
  },
  { 
    src: "https://i.imgur.com/xiMA308.png", 
    alt: "Estudo sobre a curva do esquecimento de Ebbinghaus",
    hint: "scientific study curve",
  },
];

const logos: { name: string; src: string; hint: string; bgColor: string; needsPadding?: boolean; paddingClass?: string; }[] = [
  { name: "G1", src: "https://i.imgur.com/WPzDXmR.png", hint: "G1 logo", bgColor: 'bg-[#C4170C]' },
  { name: "USP", src: "https://i.imgur.com/4nTFJ5E.png", hint: "USP logo", bgColor: 'bg-white', needsPadding: true },
  { name: "Harvard", src: "https://i.imgur.com/rUgRCaW.png", hint: "Harvard logo", bgColor: 'bg-white', paddingClass: 'p-8' },
  { name: "Forbes", src: "https://i.imgur.com/WZOOTO8.png", hint: "Forbes logo", bgColor: 'bg-black' },
  { name: "Nature", src: "https://i.imgur.com/oeUjfFr.png", hint: "Nature logo", bgColor: 'bg-black' },
  { name: "UFRGS", src: "https://i.imgur.com/MsOOUBU.png", hint: "UFRGS logo", bgColor: 'bg-white', needsPadding: true },
  { name: "UnB", src: "https://i.imgur.com/Gs7pAdJ.png", hint: "UnB logo", bgColor: 'bg-white', paddingClass: 'p-8' },
  { name: "Unicamp", src: "https://i.imgur.com/bh8WgxT.png", hint: "Unicamp logo", bgColor: 'bg-white', needsPadding: true },
];

const duplicatedLogos = [...logos, ...logos];

export function CredibilitySection() {
     const pluginProofs = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
    );

    return (
        <section id="credibilidade" className="py-16 sm:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                        Aprovado pela Ciência, Validado pela <span className="text-primary">Mídia</span>
                    </h2>
                    <p className="mt-4 max-w-3xl mx-auto text-base sm:text-lg text-muted-foreground">
                        Nosso método não foi inventado. Ele é baseado em pesquisas de neurocientistas e recomendado por especialistas. Veja as provas.
                    </p>
                </div>

                 <div className="max-w-3xl mx-auto">
                    <Carousel
                        plugins={[pluginProofs.current]}
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent>
                            {mainProofs.map((proof, index) => (
                                <CarouselItem key={index}>
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <div className="bg-zinc-900/50 p-2 rounded-lg shadow-lg border border-primary/20 cursor-pointer hover:border-primary/50 transition-all">
                                                <Image
                                                    src={proof.src}
                                                    alt={proof.alt}
                                                    width={1280}
                                                    height={720}
                                                    className="rounded-md w-full h-auto object-cover"
                                                    data-ai-hint={proof.hint}
                                                />
                                            </div>
                                        </DialogTrigger>
                                        <DialogContent className="max-w-4xl p-2 sm:p-4 bg-background/80 backdrop-blur-sm border-primary/30 w-[95vw] sm:w-full">
                                            <Image
                                                src={proof.src}
                                                alt={proof.alt}
                                                width={1920}
                                                height={1080}
                                                className="w-full object-contain max-h-[85vh] rounded-md"
                                            />
                                        </DialogContent>
                                    </Dialog>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="absolute left-2 sm:-left-12 top-1/2 -translate-y-1/2 z-10" />
                        <CarouselNext className="absolute right-2 sm:-right-12 top-1/2 -translate-y-1/2 z-10" />
                    </Carousel>
                </div>


                <div className="text-center mt-16 mb-12">
                    <p className="text-lg text-muted-foreground">E recomendado por especialistas nas maiores universidades e portais de notícias:</p>
                </div>
                
                <div 
                    className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
                >
                    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll">
                         {duplicatedLogos.map((logo, index) => (
                            <li key={index} className={cn("flex-shrink-0 flex justify-center items-center h-24 w-48 rounded-lg", logo.bgColor)}>
                                <Image 
                                    src={logo.src}
                                    alt={`Logo ${logo.name}`}
                                    width={150}
                                    height={60}
                                    data-ai-hint={logo.hint}
                                    className={cn("object-contain h-full w-auto", logo.needsPadding && "p-4", logo.paddingClass)}
                                />
                            </li>
                        ))}
                    </ul>
                     <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                         {duplicatedLogos.map((logo, index) => (
                            <li key={index} className={cn("flex-shrink-0 flex justify-center items-center h-24 w-48 rounded-lg", logo.bgColor)}>
                                <Image 
                                    src={logo.src}
                                    alt={`Logo ${logo.name}`}
                                    width={150}
                                    height={60}
                                    data-ai-hint={logo.hint}
                                    className={cn("object-contain h-full w-auto", logo.needsPadding && "p-4", logo.paddingClass)}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
