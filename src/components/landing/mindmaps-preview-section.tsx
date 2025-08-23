
"use client"

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const mindMaps = [
  { src: 'https://studyet.com.br/wp-content/uploads/2024/03/6-724x1024.jpg', alt: 'Mapa Mental de Circulatório', hint: 'mind map biology' },
  { src: 'https://studyet.com.br/wp-content/uploads/2024/03/9-731x1024.jpg', alt: 'Mapa Mental de Genital Feminino', hint: 'mind map biology' },
  { src: 'https://studyet.com.br/wp-content/uploads/2024/03/10-731x1024.jpg', alt: 'Mapa Mental de 1ª Lei de Mendel', hint: 'mind map genetics' },
  { src: 'https://studyet.com.br/wp-content/uploads/2024/03/8-731x1024.jpg', alt: 'Mapa Mental de Ecologia', hint: 'mind map ecology' },
  { src: 'https://studyet.com.br/wp-content/uploads/2024/03/7-731x1024.jpg', alt: 'Mapa Mental de Química Orgânica', hint: 'mind map chemistry' },
  { src: 'https://studyet.com.br/wp-content/uploads/2024/03/2-731x1024.jpg', alt: 'Mapa Mental de História do Brasil', hint: 'mind map history' },
  { src: 'https://studyet.com.br/wp-content/uploads/2024/03/3-731x1024.jpg', alt: 'Mapa Mental de Geografia', hint: 'mind map geography' },
  { src: 'https://studyet.com.br/wp-content/uploads/2024/03/1-731x1024.jpg', alt: 'Mapa Mental de Filosofia', hint: 'mind map philosophy' },
  { src: 'https://studyet.com.br/wp-content/uploads/2024/03/4-732x1024.jpg', alt: 'Mapa Mental de Física', hint: 'mind map physics' },
  { src: 'https://studyet.com.br/wp-content/uploads/2024/03/5-731x1024.jpg', alt: 'Mapa Mental de Literatura', hint: 'mind map literature' },
];


export function MindMapsPreviewSection() {
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true, stopOnMouseEnter: true })
    );

    return (
        <section id="previa-mapas" className="py-16 sm:py-24 bg-secondary">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                        <span className="text-primary">BÔNUS PREMIUM:</span> O Arsenal Visual com +400 Mapas Mentais
                    </h2>
                    <p className="mt-4 max-w-3xl mx-auto text-base sm:text-lg text-muted-foreground">
                        Absorva o conteúdo de um ano inteiro em poucas horas. Nossos mapas mentais transformam tópicos complexos em resumos visuais fáceis de memorizar.
                    </p>
                </div>
                <div className="flex justify-center">
                    <Carousel
                        plugins={[plugin.current]}
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full max-w-xs sm:max-w-xl md:max-w-4xl lg:max-w-6xl"
                    >
                        <CarouselContent className="-ml-4">
                            {mindMaps.map((map, index) => (
                                <CarouselItem key={index} className="pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                                     <Card className="overflow-hidden group border-primary/20 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/20">
                                        <CardContent className="p-0">
                                            <Image
                                                src={map.src}
                                                alt={map.alt}
                                                width={730}
                                                height={1024}
                                                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                                                data-ai-hint={map.hint}
                                            />
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="absolute -left-2 sm:-left-8" />
                        <CarouselNext className="absolute -right-2 sm:-right-8" />
                    </Carousel>
                </div>
                 <div className="mt-12 text-center">
                    <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-sm sm:text-lg font-bold shadow-xl shadow-accent/20 px-6 py-4 sm:px-8 sm:py-6 rounded-full animate-pulse-cta">
                        <a href="#oferta">
                            QUERO OS MAPAS MENTAIS AGORA
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
}
