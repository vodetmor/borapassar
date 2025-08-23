
"use client"
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '../ui/button';
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const testimonials = [
  { src: 'https://i.imgur.com/24ZYd7c.png', alt: 'Depoimento de cliente no WhatsApp 1', hint: 'whatsapp testimonial' },
  { src: 'https://i.imgur.com/wF6Xi1V.png', alt: 'Depoimento de cliente no WhatsApp 2', hint: 'whatsapp testimonial' },
  { src: 'https://i.imgur.com/ZGIYl1R.png', alt: 'Depoimento de cliente no WhatsApp 3', hint: 'whatsapp testimonial' },
  { src: 'https://i.imgur.com/L0rlzzh.png', alt: 'Depoimento de cliente no WhatsApp 4', hint: 'whatsapp testimonial' },
];

export function InterestSection() {
  return (
    <section id="interesse" className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Enquanto você está <span className="text-red-500">pensando</span>, outros estão <span className="text-primary">passando</span>.</h2>
        <p className="mt-4 max-w-3xl mx-auto text-base sm:text-lg text-muted-foreground">
          Este não é um "método fofinho". É uma arma de aprovação em massa. Validado por quem saiu do zero e hoje está na universidade dos sonhos.
        </p>
        
        {/* Desktop Grid */}
        <div className="mt-12 hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {testimonials.map((testimonial, index) => (
               <Dialog key={index}>
                <DialogTrigger asChild>
                    <div className="bg-zinc-900/50 p-2 rounded-lg shadow-lg border border-primary/20 cursor-pointer hover:shadow-primary/30 hover:border-primary/40 transition-all">
                        <Image
                            src={testimonial.src}
                            alt={testimonial.alt}
                            width={400}
                            height={800}
                            className="rounded-md w-full h-auto object-cover"
                            data-ai-hint={testimonial.hint}
                        />
                    </div>
                </DialogTrigger>
                <DialogContent className="max-w-md p-2 bg-background/80 backdrop-blur-sm border-primary/30">
                    <Image
                        src={testimonial.src}
                        alt={testimonial.alt}
                        width={600}
                        height={1200}
                        className="w-full h-auto object-contain rounded-md"
                    />
                </DialogContent>
            </Dialog>
            ))}
        </div>

        {/* Mobile Carousel */}
        <div className="mt-12 lg:hidden">
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-full max-w-xs sm:max-w-md mx-auto"
            >
                <CarouselContent>
                    {testimonials.map((testimonial, index) => (
                        <CarouselItem key={index} className="sm:basis-1/2">
                             <Dialog>
                                <DialogTrigger asChild>
                                    <div className="bg-zinc-900/50 p-2 rounded-lg shadow-lg border border-primary/20 cursor-pointer hover:shadow-primary/30 hover:border-primary/40 transition-all">
                                        <Image
                                            src={testimonial.src}
                                            alt={testimonial.alt}
                                            width={400}
                                            height={800}
                                            className="rounded-md w-full h-auto object-cover"
                                            data-ai-hint={testimonial.hint}
                                        />
                                    </div>
                                </DialogTrigger>
                                <DialogContent className="max-w-md p-2 bg-background/80 backdrop-blur-sm border-primary/30">
                                    <Image
                                        src={testimonial.src}
                                        alt={testimonial.alt}
                                        width={600}
                                        height={1200}
                                        className="w-full h-auto object-contain rounded-md"
                                    />
                                </DialogContent>
                            </Dialog>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="hidden sm:flex" />
                <CarouselNext className="hidden sm:flex" />
            </Carousel>
        </div>

        <div className="mt-16 text-center">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-sm sm:text-lg font-bold shadow-xl shadow-accent/20 px-6 py-4 sm:px-8 sm:py-6 rounded-full animate-pulse-cta">
                <a href="#oferta">
                    EU QUERO ESSES RESULTADOS
                </a>
            </Button>
        </div>
      </div>
    </section>
  );
}
