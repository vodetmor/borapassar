import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Lucas M.',
    avatar: 'LM',
    image: 'https://placehold.co/100x100.png',
    dataAiHint: 'person student',
    text: 'Eu era o rei da procrastinação. Esse método mudou tudo. Passei em Medicina na USP!',
  },
  {
    name: 'Julia S.',
    avatar: 'JS',
    image: 'https://placehold.co/100x100.png',
    dataAiHint: 'person student',
    text: 'Deixei de zerar a redação para tirar 980 no ENEM. Simplesmente incrível.',
  },
  {
    name: 'Fernanda P.',
    avatar: 'FP',
    image: 'https://placehold.co/100x100.png',
    dataAiHint: 'person student',
    text: 'Pensei que não tinha mais salvação. Hoje, estou cursando Direito na Federal. Obrigada!',
  },
];

export function InterestSection() {
  return (
    <section id="interesse" className="py-20 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">E se eu te dissesse que existe um atalho?</h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Um método comprovado, rápido e direto ao ponto que transforma procrastinadores em máquinas de aprovação. Centenas de estudantes como você já usaram esse segredo para conquistar notas que pareciam impossíveis e redações nota mil.
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
