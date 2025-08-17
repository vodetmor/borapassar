
import { BrainCircuit, PenSquare, Rocket, TimerOff, ShieldCheck, Target, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const benefits = [
  { icon: Target, text: 'Metodologia 30-35-35: Otimize seu tempo de forma cirúrgica para absorver, fixar e aplicar o conhecimento.' },
  { icon: BrainCircuit, text: 'Neurociência Aplicada: Use técnicas como Active Recall e Spaced Repetition para transformar seu cérebro em uma máquina de aprender.' },
  { icon: PenSquare, text: 'Redação Estratégica: Um guia para construir uma redação nota 1000, mesmo que você odeie escrever.' },
  { icon: Rocket, text: 'Planos de Estudo Adaptáveis: Cronogramas prontos para qualquer rotina, seja você iniciante ou avançado.' },
  { icon: TimerOff, text: 'O Fim da Procrastinação: Comandos práticos para vencer a preguiça e a ansiedade que te paralisam.' },
  { icon: ShieldCheck, text: 'Blindagem Emocional: Controle o nervosismo e o medo de dar "branco" na hora H.' },
];

export function DesireSection() {
  return (
    <section id="desejo" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">O Arsenal Completo para a sua <span className="text-primary">Aprovação</span></h2>
          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground">
            Isso não é um livro, é um sistema de aprovação. Veja tudo o que você vai dominar:
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1 p-2 bg-primary/10 rounded-full">
                  <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <p className="text-sm sm:text-lg"><strong className="font-bold text-foreground">{benefit.text.split(':')[0]}:</strong><span className="text-muted-foreground">{benefit.text.split(':')[1]}</span></p>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Image
              src="https://i.imgur.com/V9Dpx2L.png"
              alt="Visual do Guia"
              width={500}
              height={600}
              className="rounded-lg shadow-2xl shadow-primary/20 transform"
              data-ai-hint="book study guide"
            />
          </div>
        </div>
        <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-sm sm:text-lg font-bold shadow-xl shadow-accent/20 px-6 py-4 sm:px-8 sm:py-6 rounded-full animate-pulse-cta">
                <a href="#oferta">
                    QUERO O ARSENAL COMPLETO
                </a>
            </Button>
        </div>
      </div>
    </section>
  );
}
