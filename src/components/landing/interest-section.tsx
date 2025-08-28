
"use client"
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '../ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

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
         <h2 
            className="inline-block rounded-full bg-primary/10 border border-primary px-8 py-3 text-2xl sm:text-3xl font-bold tracking-tight text-primary"
        >
            ✨ Veja a avaliação de quem já comprou
        </h2>
        
        {/* Desktop Grid */}
        <div className="mt-12 hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-zinc-900/50 p-2 rounded-lg shadow-lg border border-primary/20 hover:shadow-primary/30 hover:border-primary/40 transition-all">
                    <Image
                        src={testimonial.src}
                        alt={testimonial.alt}
                        width={400}
                        height={800}
                        className="rounded-md w-full h-auto object-cover"
                        data-ai-hint={testimonial.hint}
                    />
                </div>
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
                           <div className="bg-zinc-900/50 p-2 rounded-lg shadow-lg border border-primary/20">
                                <Image
                                    src={testimonial.src}
                                    alt={testimonial.alt}
                                    width={400}
                                    height={800}
                                    className="rounded-md w-full h-auto object-cover"
                                    data-ai-hint={testimonial.hint}
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10" />
                <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10" />
            </Carousel>
        </div>
      </div>
    </section>
  );
}
