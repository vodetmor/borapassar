import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Carlos R.',
    avatar: 'CR',
    image: 'https://placehold.co/100x100.png',
    dataAiHint: 'person student',
    text: 'Saí de 400 para 850 em matemática. Achei que era impossível. O método é brutal.',
  },
  {
    name: 'Mariana A.',
    avatar: 'MA',
    image: 'https://placehold.co/100x100.png',
    dataAiHint: 'person student',
    text: 'Eu tinha pânico de redação. Depois do guia, fiz 960 sem nem suar. surreal.',
  },
  {
    name: 'Pedro H.',
    avatar: 'PH',
    image: 'https://placehold.co/100x100.png',
    dataAiHint: 'person student',
    text: 'Passei em 3 Federais pra Engenharia. Meus amigos que estudavam 12h/dia, não. A diferença? Estratégia.',
  },
];

export function InterestSection() {
  return (
    <section id="interesse" className="py-20 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Enquanto você está pensando, outros estão sendo <span className="text-primary">aprovados</span>.</h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Este não é um "método fofinho". É uma arma de aprovação em massa. Validado por quem saiu do zero e hoje está na universidade dos sonhos.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="bg-background border-border/60 shadow-lg text-left">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.dataAiHint} />
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <div className="flex text-primary">
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-muted-foreground">"{testimonial.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
