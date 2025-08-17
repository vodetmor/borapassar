import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Brain, Goal, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const pillars = [
  {
    icon: Zap,
    title: '30% - Teoria Estratégica',
    description: 'Foco no essencial. Você vai aprender a identificar e absorver os 20% de conteúdo que geram 80% dos acertos. Chega de perder tempo com o que não cai na prova.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'graph efficiency',
  },
  {
    icon: Brain,
    title: '35% - Prática Ativa (Retrieval)',
    description: 'É aqui que a mágica acontece. Forçamos seu cérebro a buscar a informação ativamente com milhares de exercícios e simulados. É a forma mais poderosa de fixação, comprovada pela neurociência.',
    image: 'https://i.imgur.com/jy32QXq.png',
    imageHint: 'retention graph',
  },
  {
    icon: Goal,
    title: '35% - Produção e Revisão',
    description: 'Você vai criar e revisar. Escrever redações, construir flashcards, ensinar o que aprendeu. Isso solidifica o conhecimento de uma forma que a leitura passiva jamais conseguirá.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'study notes',
  },
];

export function MethodologySection() {
  return (
    <section id="metodologia" className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            A Ciência por Trás da <span className="text-primary">Aprovação</span>
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-base sm:text-lg text-muted-foreground">
            Nosso método não é achismo. É a Metodologia 30-35-35, fundamentada em estudos da USP e na neurociência da aprendizagem. Simples, brutal e absurdamente eficaz.
          </p>
        </div>
        
        <div className="space-y-20">
          {pillars.map((pillar, index) => (
            <div key={pillar.title} className={`grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center ${index === 1 ? 'md:grid-flow-col-dense' : ''}`}>
              <div className={`space-y-4 ${index === 1 ? 'md:col-start-2' : ''}`}>
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                        <pillar.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">{pillar.title}</h3>
                </div>
                <p className="text-muted-foreground text-base sm:text-lg">{pillar.description}</p>
              </div>
              <div className={`flex items-center justify-center ${index === 1 ? 'md:col-start-1' : ''}`}>
                 <Image
                    src={pillar.image}
                    alt={`Imagem ilustrativa para ${pillar.title}`}
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg border border-border/50 object-cover"
                    data-ai-hint={pillar.imageHint}
                />
              </div>
            </div>
          ))}
        </div>

         <div className="text-center mt-20">
            <p className="text-base sm:text-lg text-muted-foreground mb-8">
                Técnicas como <strong className="text-foreground">Repetição Espaçada</strong>, <strong className="text-foreground">Recordação Ativa</strong> e <strong className="text-foreground">Técnica Pomodoro</strong> são integradas para otimizar cada minuto do seu estudo.
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-sm sm:text-lg font-bold shadow-xl shadow-accent/20 px-6 py-4 sm:px-8 sm:py-6 rounded-full">
                <a href="#oferta">
                    QUERO APLICAR O MÉTODO
                </a>
            </Button>
        </div>
      </div>
    </section>
  );
}
