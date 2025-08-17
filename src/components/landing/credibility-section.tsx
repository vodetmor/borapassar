
"use client"

import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Image from 'next/image';

const logos = [
  { name: "G1", src: "https://i.imgur.com/39lpm6D.png", hint: "G1 logo" },
  { name: "USP", src: "https://i.imgur.com/j5gU245.png", hint: "USP logo" },
  { name: "Unicamp", src: "https://i.imgur.com/g8n3A0u.png", hint: "Unicamp logo" },
  { name: "Forbes", src: "https://i.imgur.com/kH1V6w2.png", hint: "Forbes logo" },
  { name: "Nature", src: "https://i.imgur.com/z6mJ31e.png", hint: "Nature logo" },
  { name: "UFRGS", src: "https://i.imgur.com/Y1j4G3p.png", hint: "UFRGS logo" },
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
                        Nosso método não foi inventado. Ele é baseado em pesquisas de neurocientistas e recomendado por especialistas nas maiores universidades e portais de notícias.
                    </p>
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
                                    <div className="flex justify-center items-center h-24 p-4 rounded-lg bg-zinc-800/50">
                                        <Image 
                                            src={logo.src}
                                            alt={`Logo ${logo.name}`}
                                            width={120}
                                            height={50}
                                            data-ai-hint={logo.hint}
                                            className="object-contain h-full w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
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
