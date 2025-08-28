
import { BrainCircuit, PenSquare, Rocket, TimerOff, ShieldCheck, Target, ArrowRight, MapPin } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const benefits = [
  { icon: Target, text: 'Método 30-70: Pare de estudar igual um idiota. Absorva, fixe e aplique o conhecimento de forma brutal.' },
  { icon: BrainCircuit, text: 'Neurociência de Combate: Transforme seu cérebro numa máquina de aprender. Esqueça o esquecimento.' },
  { icon: MapPin, text: '+400 Mapas Mentais Prontos: Sua arma visual para hackear a memorização e aprender o conteúdo de 1 ano em poucas horas.'},
  { icon: PenSquare, text: 'Redação Destruidora: Um modelo de +960 pontos para aniquilar a prova de redação, mesmo que você não saiba por onde começar.' },
  { icon: TimerOff, text: 'O Fim da Procrastinação: Um comando de execução imediata para vencer a preguiça e a ansiedade que te paralisam.' },
  { icon: ShieldCheck, text: 'Blindagem Emocional Anti-Branco: Controle o nervosismo e anule qualquer chance de dar "branco" na hora H.' },
  { icon: Rocket, text: 'Planos de Execução: Não são apenas "planos", são ordens de batalha diárias para qualquer rotina. É só seguir e executar.' },
];

export function DesireSection() {
  return (
    <section id="desejo" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">O Arsenal de Guerra para a sua <span className="text-primary">Aprovação</span></h2>
          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground">
            Isto não é um "livrinho de dicas". É o seu arsenal. Cada item abaixo é uma arma para você usar contra seus concorrentes.
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
      </div>
    </section>
  );
}
