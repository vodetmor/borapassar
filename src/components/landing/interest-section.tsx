
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
    name: 'Letícia M.',
    avatar: 'LM',
    stars: 5,
    text: 'Eu me sentia uma completa idiota em matemática, travada nos 700 pontos e achando que era meu limite. O método de focar nos 20% do conteúdo que realmente importa e a forma como a prática ativa é ensinada simplesmente viraram o jogo. Saí de uma nota medíocre para 850. Meus professores não acreditaram. É surreal o quanto tempo eu perdi estudando do jeito errado.',
    image: 'https://i.imgur.com/0bC4Hzq.png',
  },
  {
    name: 'Mariana A.',
    avatar: 'MA',
    stars: 5,
    text: 'Minha maior barreira era a redação. Eu travava, não sabia argumentar. O guia me deu um modelo tão claro, um passo a passo tão eficiente que eu passei de 600 para 960 em menos de dois meses. A sensação de chegar na prova sabendo exatamente o que fazer, com a estrutura pronta na cabeça, não tem preço. Foi como se eu tivesse a chave do cofre.',
    image: 'https://i.imgur.com/CVyyH1u.png',
  },
  {
    name: 'Roberto F.',
    avatar: 'RF',
    stars: 5,
    text: 'Vou ser sincero: isso aqui não é para amadores. É uma máquina de moer concorrente. Eu era o cara que sempre batia na trave. Depois de aplicar o método, meus simulados pareciam piada de tão fáceis. Meus amigos do cursinho não entenderam nada quando viram meu nome na lista de aprovados e os deles não. É um sentimento de poder indescritível.',
    image: 'https://i.imgur.com/vwg85CN.png',
  },
  {
    name: 'Juliana S.',
    avatar: 'JS',
    stars: 5,
    text: 'Conciliar trabalho e estudo era meu pesadelo. Eu vivia cansada e sentia que não rendia nada. Os planos de estudo adaptáveis e a forma como a Técnica Pomodoro é integrada me deram o foco que eu NUNCA tive. Em 3 meses, meu desempenho dobrou. Dobrei a quantidade de acertos. Hoje, faço Medicina e ainda uso as técnicas para estudar.',
    image: 'https://i.imgur.com/YrKQVJD.png',
  },
  {
    name: 'Lucas T.',
    avatar: 'LT',
    stars: 5,
    text: 'Eu era o rei do "branco" na hora da prova. Estudava o ano todo para chegar no dia e esquecer fórmulas básicas. A parte de blindagem emocional e as técnicas de respiração e ancoragem do guia salvaram minha vida. Cheguei calmo, confiante e no controle total da situação. Fez toda a diferença entre a aprovação e mais um ano de frustração.',
    image: 'https://i.imgur.com/bXRWc4p.png',
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
        <p className="mt-4 max-w-3xl mx-auto text-base sm:text-lg text-muted-foreground">
          Este não é um "método fofinho". É uma arma de aprovação em massa. Validado por quem saiu do zero e hoje está na universidade dos sonhos.
        </p>
        <div className="mt-12">
            <Carousel
                plugins={[plugin.current]}
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-full max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto"
            >
                <CarouselContent className="-ml-4">
                    {testimonials.map((testimonial, index) => (
                        <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                            <Card className="bg-background/80 border-border/60 shadow-lg text-left h-full flex flex-col">
                                <CardContent className="p-6 flex-grow flex flex-col">
                                    <div className="flex items-center gap-4 mb-4">
                                        <Avatar>
                                            <AvatarImage src={testimonial.image || `https://placehold.co/100x100.png?text=${testimonial.avatar}`} alt={testimonial.name} data-ai-hint="person student" className="object-cover" />
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
                <CarouselPrevious className="absolute -left-2 sm:-left-8" />
                <CarouselNext className="absolute -right-2 sm:-right-8" />
            </Carousel>
        </div>
      </div>
    </section>
  );
}
