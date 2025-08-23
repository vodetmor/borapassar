
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
      "Bioquímica, Citologia, Fisiologia, Genética, Evolução e Ecologia. Explore sistemas do corpo humano, ciclos naturais, diversidade de espécies e processos celulares.",
  },
  {
    value: "fisica",
    title: "Física",
    icon: Microwave,
    pages: 51,
    description:
      "Cinemática, Dinâmica, Termodinâmica, Eletrostática e Gravitação Universal. Explore conceitos como calor, forças, ondas e trabalho para dominar os fenômenos físicos.",
  },
  {
    value: "quimica",
    title: "Química",
    icon: FlaskConical,
    pages: 61,
    description:
      "Química Orgânica e Inorgânica, Cinética, Termoquímica e Eletroquímica. Explore ligações, equilíbrio, gases e soluções, além de tópicos como poluição e propriedades periódicas.",
  },
  {
    value: "geografia",
    title: "Geografia",
    icon: Globe,
    pages: 63,
    description:
      "Clima, relevo, hidrografia e vegetação, além de globalização, urbanização e energia. Domine a dinâmica do espaço geográfico brasileiro e mundial.",
  },
  {
    value: "historia",
    title: "História",
    icon: Landmark,
    pages: 77,
    description:
      "Da História Antiga ao Brasil contemporâneo: Revoluções, Guerras Mundiais, Idade Média, Renascimento e Regime Militar. Entenda as transformações que moldaram o mundo.",
  },
  {
    value: "filosofia",
    title: "Filosofia",
    icon: BrainCircuit,
    pages: 24,
    description:
      "Epistemologia, Filosofia Moral e Política. Explore conceitos como ética, conhecimento e contrato social, com pensadores clássicos e modernos de Platão a Kant.",
  },
  {
    value: "sociologia",
    title: "Sociologia",
    icon: Scale,
    pages: 12,
    description:
      "Fundamentos da Sociologia, com Marx, Durkheim e Weber. Explore conceitos como democracia, direitos humanos, sociedade de consumo e influência da mídia.",
  },
  {
    value: "artes",
    title: "Artes",
    icon: Palette,
    pages: 40,
    description:
      "Da Arte Pré-Histórica ao Modernismo, explorando Barroco, Neoclassicismo, Realismo e Expressionismo. Domine as manifestações artísticas no Brasil e no mundo.",
  },
  {
    value: "literatura",
    title: "Literatura",
    icon: BookText,
    pages: 18,
    description:
      "As principais escolas literárias, do Trovadorismo ao Modernismo, explorando a evolução da Literatura Brasileira e suas fases até a contemporaneidade.",
  },
  {
    value: "portugues",
    title: "Português",
    icon: Atom,
    pages: 15,
    description:
      "Resumos objetivos de Gramática, de substantivos e adjetivos até sintaxe, crase e orações subordinadas. Essencial para a compreensão textual.",
  },
  {
    value: "matematica",
    title: "Matemática",
    icon: Percent,
    pages: 19,
    description:
      "Funções, estatística, geometria plana e trigonometria. Explore conceitos de porcentagem, razão e proporção, além de fórmulas essenciais para a aprovação.",
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

        {/* Mobile Layout with Tabs */}
        <div className="lg:hidden">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
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

                <div>
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
                                        Páginas
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

        {/* Desktop Layout with Grid */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {subjects.map((subject) => (
            <Card key={subject.value} className="border-primary/20 bg-zinc-900/50 flex flex-col">
              <CardHeader>
                <div className="flex justify-between items-start gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <subject.icon className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-bold">{subject.title}</CardTitle>
                  </div>
                   <div className="text-right flex-shrink-0">
                    <p className="text-2xl font-bold text-primary">{subject.pages}</p>
                    <p className="text-xs text-muted-foreground -mt-1">Páginas</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground">{subject.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
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
