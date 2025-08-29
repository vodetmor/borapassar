
import { BrainCircuit, PenSquare, ShieldCheck, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const argumentsList = [
  { 
    icon: Target, 
    title: 'Metodologia Validada', 
    text: 'Um sistema de estudos completo, baseado em neurociência, para você absorver o conteúdo e aplicá-lo com eficácia na prova.' 
  },
  { 
    icon: BrainCircuit, 
    title: 'Memorização Acelerada', 
    text: 'Com +400 Mapas Mentais, você otimiza a memorização e revisa o conteúdo de 1 ano em poucas horas, fixando o que realmente importa.' 
  },
  { 
    icon: PenSquare, 
    title: 'Redação Nota +960', 
    text: 'Receba um modelo de redação validado para você alcançar uma nota excelente, mesmo que não saiba por onde começar a escrever.' 
  },
  { 
    icon: ShieldCheck, 
    title: 'Controle Emocional', 
    text: 'Aprenda técnicas práticas para gerenciar o nervosismo, vencer a procrastinação e evitar o temido "branco" na hora da prova.' 
  },
];

export function DesireSection() {
  return (
    <section id="desejo" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Descubra Por Que Nossa Metodologia é a <span className="text-primary">Escolha Certa</span></h2>
          <p className="mt-4 max-w-3xl mx-auto text-base sm:text-lg text-muted-foreground">
            Argumentos claros que mostram por que nosso método é o caminho mais rápido e seguro para a sua aprovação.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {argumentsList.map((arg, index) => (
                <Card key={index} className="bg-zinc-900/50 border-primary/20 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10">
                    <CardHeader>
                        <div className='flex items-center gap-4'>
                            <div className="p-3 bg-primary/10 rounded-full">
                                <arg.icon className="w-8 h-8 text-primary" />
                            </div>
                            <CardTitle className="text-xl font-bold">{arg.title}</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">{arg.text}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
