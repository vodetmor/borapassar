"use client"
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const testimonials = [
  {
    name: 'Carlos R.',
    avatar: 'CR',
    image: 'https://images.unsplash.com/photo-1590237563976-797e6130b3e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxwZXJzb24lMjBzdHVkZW50fGVufDB8fHx8MTc1NDk1NjM1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'person student',
    text: 'Saí de 400 para 850 em matemática. Achei que era impossível. O método é brutal.',
  },
  {
    name: 'Mariana A.',
    avatar: 'MA',
    image: 'https://images.unsplash.com/photo-1604155474859-2ab7937a5658?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxwZXJzb24lMjBzdHVkZW50fGVufDB8fHx8MTc1NDk1NjM1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'person student',
    text: 'Eu tinha pânico de redação. Depois do guia, fiz 960 sem nem suar. Surreal.',
  },
  {
    name: 'Pedro H.',
    avatar: 'PH',
    image: 'https://images.unsplash.com/photo-1651407765255-153ab5dc62ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxwZXJzb24lMjBzdHVkZW50fGVufDB8fHx8MTc1NDk1NjM1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'person student',
    text: 'Passei em 3 Federais pra Engenharia. Meus amigos que estudavam 12h/dia, não. A diferença? Estratégia.',
  },
  {
    name: 'Juliana S.',
    avatar: 'JS',
    image: 'https://images.unsplash.com/photo-1651407765255-153ab5dc62ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxwZXJzb24lMjBzdHVkZW50fGVufDB8fHx8MTc1NDk1NjM1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'person student',
    text: 'O guia me deu o foco que faltava. Em 3 meses meu desempenho nos simulados dobrou. Aprovada em Medicina!',
  },
  {
    name: 'Lucas T.',
    avatar: 'LT',
    image: 'https://images.unsplash.com/photo-1530099486328-e021101a494a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxwZXJzb24lMjBzdHVkZW50fGVufDB8fHx8MTc1NDk1NjM1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'person student',
    text: 'A parte de blindagem emocional salvou minha prova. Cheguei calmo e confiante. Fez toda a diferença.',
  },
];

export function InterestSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  return (
    <section id="interesse" className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Enquanto você está <span className="text-red-500">pensando</span>, outros estão sendo <span className="text-primary">aprovados</span>.</h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Este não é um "método fofinho". É uma arma de aprovação em massa. Validado por quem saiu do zero e hoje está na universidade dos sonhos.
        </p>
        <div className="mt-12">
            <Carousel
                plugins={[plugin.current]}
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-full max-w-5xl mx-auto"
            >
                <CarouselContent>
                    {testimonials.map((testimonial, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-4">
                            <Card className="bg-background/80 border-border/60 shadow-lg text-left h-full flex flex-col">
                                <CardContent className="p-6 flex-grow flex flex-col">
                                    <div className="flex items-center gap-4 mb-4">
                                        <Avatar>
                                            <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.dataAiHint} />
                                            <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className="font-bold">{testimonial.name}</p>
                                            <div className="flex text-yellow-500">
                                                <Star className="w-4 h-4 fill-current" />
                                                <Star className="w-4 h-4 fill-current" />
                                                <Star className="w-4 h-4 fill-current" />
                                                <Star className="w-4 h-4 fill-current" />
                                                <Star className="w-4 h-4 fill-current" />
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-muted-foreground flex-grow text-sm sm:text-base">"{testimonial.text}"</p>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute -left-4 sm:-left-8" />
                <CarouselNext className="absolute -right-4 sm:-right-8" />
            </Carousel>
        </div>
      </div>
    </section>
  );
}
