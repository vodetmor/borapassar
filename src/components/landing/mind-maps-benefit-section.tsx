
import { BrainCircuit, Clock, Layers, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const benefits = [
    {
        icon: Clock,
        title: 'Acelere seu Aprendizado',
        description: 'Um mapa mental condensa horas de aula em uma única página. Absorva o conteúdo de um ano inteiro em poucas horas, liberando tempo para o que realmente importa: a prática.'
    },
    {
        icon: BrainCircuit,
        title: 'Memorização de Longo Prazo',
        description: 'A estrutura visual dos mapas cria conexões neurais mais fortes. Diga adeus à "curva do esquecimento" e fixe o conhecimento até o dia da prova e além.'
    },
    {
        icon: Layers,
        title: 'Clareza Absoluta do Conteúdo',
        description: 'Veja o panorama completo de cada matéria. Entenda como os tópicos se conectam, identifique os pontos mais importantes e organize suas ideias de forma lógica e eficiente.'
    },
     {
        icon: Award,
        title: 'Qualidade Incomparável',
        description: 'Nossos mapas não são gerados por robôs. São feitos por especialistas em aprovação, com design impecável e conteúdo focado no que é cobrado nos vestibulares.'
    }
];

export function MindMapsBenefitSection() {
  return (
    <section id="beneficios-mapas" className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Por que os Mapas Mentais são sua <span className="text-primary">Arma Secreta</span>?
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-base sm:text-lg text-muted-foreground">
            Não se trata apenas de resumir. É sobre reestruturar a informação para que seu cérebro a absorva e a retenha de forma definitiva. É a diferença entre decorar e aprender de verdade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-background/50 border-border/50">
              <CardHeader className="flex flex-row items-center gap-4 pb-4">
                 <div className="p-3 bg-primary/10 rounded-full">
                   <benefit.icon className="w-6 h-6 text-primary" />
                 </div>
                <CardTitle className="text-xl font-bold">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
         <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-sm sm:text-lg font-bold shadow-xl shadow-accent/20 px-6 py-4 sm:px-8 sm:py-6 rounded-full animate-pulse-cta">
                <a href="#oferta">
                    QUERO MINHA ARMA SECRETA
                </a>
            </Button>
        </div>
      </div>
    </section>
  );
}
