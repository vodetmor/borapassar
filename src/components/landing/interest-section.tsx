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
    stars: 5,
    text: 'Eu estava completamente estagnado nos 700 pontos em matemática. O método de focar nos 20% de conteúdo que mais caem e a prática ativa simplesmente viraram o jogo. Saí de 400 para 850. É brutal, mas funciona.',
  },
  {
    name: 'Mariana A.',
    avatar: 'MA',
    stars: 5,
    text: 'Minha maior barreira era a redação. O guia me deu um modelo tão claro e eficiente que passei de 600 para 960 em dois meses. A sensação de segurança na hora de escrever não tem preço. Surreal.',
  },
  {
    name: 'Roberto F.',
    avatar: 'RF',
    stars: 4,
    text: 'O método é denso e exige disciplina. Não é uma fórmula mágica. Nas primeiras semanas achei pesado, mas depois que peguei o ritmo, meus resultados nos simulados melhoraram 70%. Valeu a pena, mas esteja preparado para se dedicar.',
  },
  {
    name: 'Juliana S.',
    avatar: 'JS',
    stars: 5,
    text: 'Conciliar trabalho e estudo era meu pesadelo. Os planos de estudo adaptáveis e a técnica Pomodoro integrada me deram o foco que faltava. Em 3 meses, meu desempenho dobrou. Aprovada em Medicina!',
  },
  {
    name: 'Lucas T.',
    avatar: 'LT',
    stars: 5,
    text: 'Sempre tive "branco" na hora da prova. A parte de blindagem emocional e as técnicas de respiração do guia salvaram minha prova. Cheguei calmo e confiante. Fez toda a diferença no meu resultado final.',
  },
];

export function InterestSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  return (
    <section id="interesse" className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Enquanto você está <span className="text-red-500">pensando</span>, outros estão <span className="text-primary">passando</span>.</h2>
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
                                            <AvatarImage src={`https://placehold.co/100x100.png?text=${testimonial.avatar}`} alt={testimonial.name} data-ai-hint="person student" />
                                            <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className="font-bold">{testimonial.name}</p>
                                            <div className="flex text-yellow-400">
                                                {Array.from({ length: testimonial.stars }).map((_, i) => (
                                                    <Star key={i} className="w-4 h-4 fill-current" />
                                                ))}
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
