
"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Atom,
  BookText,
  BrainCircuit,
  ChevronLeft,
  ChevronRight,
  Dna,
  FlaskConical,
  Globe,
  Landmark,
  Microwave,
  Palette,
  Percent,
  Scale,
} from "lucide-react";
import React, { useRef, useState } from "react";
import { Button } from "../ui/button";

const subjects = [
  {
    value: "biologia",
    title: "Biologia",
    icon: Dna,
    pages: 108,
    description:
      "Resumos completos sobre Bioquímica, Citologia, Fisiologia, Genética, Evolução e Ecologia. Explore sistemas do corpo humano, ciclos naturais, diversidade de espécies e processos celulares, com foco em temas essenciais para o estudo biológico.",
  },
  {
    value: "fisica",
    title: "Física",
    icon: Microwave,
    pages: 51,
    description:
      "Resumos essenciais de Física, abordando Cinemática, Dinâmica, Termodinâmica, Eletrostática e Gravitação Universal. Explore conceitos como calor, forças, ondas e trabalho, além de fórmulas para compreender os fenômenos físicos.",
  },
  {
    value: "quimica",
    title: "Química",
    icon: FlaskConical,
    pages: 61,
    description:
      "Resumos claros sobre Química Orgânica e Inorgânica, Cinética, Termoquímica e Eletroquímica. Explore ligações químicas, equilíbrio, gases e soluções, além de tópicos como poluição ambiental e propriedades periódicas essenciais.",
  },
  {
    value: "geografia",
    title: "Geografia",
    icon: Globe,
    pages: 63,
    description:
      "Resumos completos sobre clima, relevo, hidrografia e vegetação, além de temas como globalização, urbanização e recursos energéticos. Explore a dinâmica do espaço geográfico brasileiro e global, com foco em agricultura, indústria e regionalização.",
  },
  {
    value: "historia",
    title: "História",
    icon: Landmark,
    pages: 77,
    description:
      "Resumos que exploram desde a História Antiga até o Brasil contemporâneo, com temas como Revoluções, Guerras Mundiais, Idade Média, Renascimento e Regime Militar. Entenda transformações políticas, sociais e econômicas que moldaram o mundo e o Brasil.",
  },
  {
    value: "filosofia",
    title: "Filosofia",
    icon: BrainCircuit,
    pages: 24,
    description:
      "Resumos que abrangem Epistemologia, Filosofia Moral e Política, explorando conceitos como ética, conhecimento, contrato social e feminismo. Destaque para pensadores clássicos e modernos, como Platão, Kant, Maquiavel e Arendt.",
  },
  {
    value: "sociologia",
    title: "Sociologia",
    icon: Scale,
    pages: 12,
    description:
      "Resumos sobre a origem e os fundamentos da Sociologia, com destaque para teóricos como Marx, Durkheim e Weber. Explore conceitos como democracia, direitos humanos, sociedade de consumo e influência midiática.",
  },
  {
    value: "artes",
    title: "Artes",
    icon: Palette,
    pages: 40,
    description:
      "Resumos que percorrem desde a Arte Pré-Histórica até o Modernismo, explorando estilos como Barroco, Neoclassicismo, Realismo e Expressionismo. Destaque para manifestações artísticas no Brasil e no mundo.",
  },
  {
    value: "literatura",
    title: "Literatura",
    icon: BookText,
    pages: 18,
    description:
      "Resumos sobre as principais escolas literárias, do Trovadorismo ao Modernismo, explorando a evolução da Literatura Brasileira e suas fases no Brasil Colônia, Império e República, até a Literatura Contemporânea.",
  },
  {
    value: "portugues",
    title: "Português",
    icon: Atom,
    pages: 15,
    description:
      "Resumos objetivos de Gramática, abordando desde substantivos e adjetivos até sintaxe, crase e orações subordinadas. Destaque para funções e variações da linguagem, essenciais para a compreensão textual.",
  },
  {
    value: "matematica",
    title: "Matemática",
    icon: Percent,
    pages: 19,
    description:
      "Resumos que abrangem funções, estatística, geometria plana e trigonometria. Explore conceitos de porcentagem, razão e proporção, além de fórmulas essenciais para resolução de problemas matemáticos.",
  },
];

export function SubjectDetailsSection() {
  const tabsListRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState(subjects[0].value);

  const handleArrowClick = (direction: 'left' | 'right') => {
    const scrollAmount = direction === 'left' ? -200 : 200;
    if (tabsListRef.current) {
      tabsListRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }

    const currentIndex = subjects.findIndex(
      (subject) => subject.value === activeTab
    );
    let nextIndex;

    if (direction === 'left') {
      nextIndex = currentIndex === 0 ? subjects.length - 1 : currentIndex - 1;
    } else {
      nextIndex = currentIndex === subjects.length - 1 ? 0 : currentIndex + 1;
    }
    
    const nextTabValue = subjects[nextIndex].value;
    setActiveTab(nextTabValue);
  };

  return (
    <section id="detalhes-mapas" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Veja em Detalhes o que Você Leva em Cada Matéria
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-base sm:text-lg text-muted-foreground">
            Explore os tópicos abordados em cada disciplina. São centenas de
            páginas de conteúdo visual e direto ao ponto para acelerar sua
            aprovação.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            {/* Mobile Layout */}
            <div className="lg:hidden">
                <div className="relative flex items-center">
                    <Button
                        variant="outline"
                        size="icon"
                        className="h-full absolute left-0 z-10 bg-background/80 hover:bg-background rounded-none border-y border-l"
                        onClick={() => handleArrowClick('left')}
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </Button>
                    <div ref={tabsListRef} className="overflow-x-auto no-scrollbar">
                        <TabsList className="inline-flex h-auto">
                            {subjects.map((subject) => (
                            <TabsTrigger
                                key={subject.value}
                                value={subject.value}
                                className="flex flex-col sm:flex-row gap-2 items-center text-xs sm:text-sm p-3"
                            >
                                <subject.icon className="w-4 h-4" />
                                {subject.title}
                            </TabsTrigger>
                            ))}
                        </TabsList>
                    </div>
                    <Button
                        variant="outline"
                        size="icon"
                        className="h-full absolute right-0 z-10 bg-background/80 hover:bg-background rounded-none border-y border-r"
                        onClick={() => handleArrowClick('right')}
                    >
                        <ChevronRight className="w-5 h-5" />
                    </Button>
                </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:grid lg:grid-cols-12 lg:gap-8">
                <div className="lg:col-span-4 xl:col-span-3">
                    <TabsList className="flex flex-col h-auto w-full items-stretch bg-transparent p-0">
                         {subjects.map((subject) => (
                        <TabsTrigger
                            key={subject.value}
                            value={subject.value}
                            className="flex justify-start gap-3 items-center text-base p-4 data-[state=active]:bg-zinc-900/80 data-[state=active]:shadow-lg data-[state=active]:border-primary/50 data-[state=active]:border-l-4"
                        >
                            <subject.icon className="w-5 h-5 text-primary" />
                            {subject.title}
                        </TabsTrigger>
                        ))}
                    </TabsList>
                </div>

                <div className="lg:col-span-8 xl:col-span-9">
                     {subjects.map((subject) => (
                        <TabsContent key={subject.value} value={subject.value} className="m-0">
                            <Card className="border-primary/30 bg-zinc-900/50 h-full">
                                <CardHeader>
                                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                                    <div className="flex items-center gap-4">
                                    <div className="p-3 bg-primary/10 rounded-full">
                                        <subject.icon className="w-8 h-8 text-primary" />
                                    </div>
                                    <CardTitle className="text-3xl font-bold">
                                        {subject.title}
                                    </CardTitle>
                                    </div>
                                    <div className="text-center sm:text-right">
                                    <p className="text-4xl font-bold text-primary">
                                        {subject.pages}
                                    </p>
                                    <p className="text-sm text-muted-foreground -mt-1">
                                        Páginas de Conteúdo
                                    </p>
                                    </div>
                                </div>
                                </CardHeader>
                                <CardContent>
                                <p className="text-lg text-muted-foreground">
                                    {subject.description}
                                </p>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    ))}
                </div>
            </div>

            {/* Mobile Content */}
             <div className="lg:hidden">
                {subjects.map((subject) => (
                    <TabsContent key={subject.value} value={subject.value}>
                        <Card className="mt-6 border-primary/30 bg-zinc-900/50">
                            <CardHeader>
                            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                                <div className="flex items-center gap-4">
                                <div className="p-3 bg-primary/10 rounded-full">
                                    <subject.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                                </div>
                                <CardTitle className="text-2xl sm:text-3xl font-bold">
                                    {subject.title}
                                </CardTitle>
                                </div>
                                <div className="text-center sm:text-right">
                                <p className="text-2xl sm:text-4xl font-bold text-primary">
                                    {subject.pages}
                                </p>
                                <p className="text-sm text-muted-foreground -mt-1">
                                    Páginas de Conteúdo
                                </p>
                                </div>
                            </div>
                            </CardHeader>
                            <CardContent>
                            <p className="text-base sm:text-lg text-muted-foreground">
                                {subject.description}
                            </p>
                            </CardContent>
                        </Card>
                    </TabsContent>
                ))}
            </div>
        </Tabs>
      </div>
       <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
