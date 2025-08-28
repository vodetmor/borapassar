
import { BrainCircuit, PenSquare, Rocket, TimerOff, ShieldCheck, Target, ArrowRight, MapPin } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const benefits = [
  { icon: Target, text: 'Metodologia de Estudo Validada: Um sistema de estudos completo, baseado em neurociência, para você absorver o conteúdo e aplicá-lo com eficácia.' },
  { icon: MapPin, text: '+400 Mapas Mentais Prontos: Um material visual para otimizar a memorização e revisar o conteúdo de 1 ano em poucas horas.'},
  { icon: PenSquare, text: 'Modelo de Redação +960: Um modelo de redação validado para você alcançar uma nota excelente, mesmo que não saiba por onde começar.' },
  { icon: ShieldCheck, text: 'Controle Emocional e Foco: Técnicas para gerenciar o nervosismo, vencer a procrastinação e evitar o "branco" na hora da prova.' },
];

export function DesireSection() {
  return (
    <section id="desejo" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">O Material Completo para Sua <span className="text-primary">Aprovação</span></h2>
          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground">
            Este é o seu material de estudo. Cada item abaixo é uma ferramenta para você alcançar seus objetivos.
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
