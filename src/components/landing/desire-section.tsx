import { Flame, BrainCircuit, PenSquare, Rocket, TimerOff, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

const benefits = [
  { icon: Flame, text: 'Foco Absoluto: Aprenda a eliminar distrações e entrar em "hiperfoco" em menos de 5 minutos.' },
  { icon: BrainCircuit, text: 'Memorização Acelerada: Técnicas para gravar qualquer matéria com o mínimo esforço.' },
  { icon: PenSquare, text: 'Redação Nota 1000: O passo a passo exato para uma redação que impressiona avaliadores.' },
  { icon: Rocket, text: 'Estudo 2x mais Rápido: Cubra todo o edital sem surtar e com tempo de sobra.' },
  { icon: TimerOff, text: 'Fim da Procrastinação: Vença a preguiça e transforme ansiedade em energia para estudar.' },
  { icon: ShieldCheck, text: 'Controle Emocional: Domine o nervosismo e o "branco" na hora da prova.' },
];

export function DesireSection() {
  return (
    <section id="desejo" className="py-20 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Sua caixa de ferramentas para a <span className="text-primary">Aprovação</span></h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Apresentamos o guia definitivo que vai reprogramar sua mente para o sucesso. Não é mágica, é método.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <benefit.icon className="w-6 h-6 text-accent" />
                </div>
                <p className="text-lg"><strong className="font-bold text-foreground">{benefit.text.split(':')[0]}:</strong><span className="text-muted-foreground">{benefit.text.split(':')[1]}</span></p>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Image
              src="https://placehold.co/500x600.png"
              alt="Visual do Guia"
              width={500}
              height={600}
              className="rounded-lg shadow-2xl shadow-primary/20 transform rotate-3"
              data-ai-hint="book study guide"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
