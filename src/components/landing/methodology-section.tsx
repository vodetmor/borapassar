
"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Brain, Goal, ArrowRight, Book, Edit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const theoryPillar = {
  icon: Zap,
  title: '30% - Teoria Estratégica',
  description: 'Foco no essencial. Você vai aprender a identificar e absorver os 20% de conteúdo que geram 80% dos acertos. Chega de perder tempo com o que não cai na prova.',
};

const practicePillars = [
  {
    icon: Brain,
    title: '35% - Prática Ativa (Retrieval)',
    description: 'É aqui que a mágica acontece. Forçamos seu cérebro a buscar a informação ativamente com milhares de exercícios e simulados. É a forma mais poderosa de fixação, comprovada pela neurociência.',
  },
  {
    icon: Goal,
    title: '35% - Produção e Revisão',
    description: 'Você vai criar e revisar. Escrever redações, construir flashcards e usar nossos +400 mapas mentais para solidificar o conhecimento de uma forma que a leitura passiva jamais conseguirá.',
  },
];

export function MethodologySection() {
  const [isSeventyExpanded, setIsSeventyExpanded] = useState(false);

  return (
    <section id="metodologia" className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            A Ciência por Trás da <span className="text-primary">Aprovação</span>
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-base sm:text-lg text-muted-foreground">
            Nosso método não é achismo. É a Metodologia 30-70, fundamentada na neurociência da aprendizagem. Simples, direto e eficaz.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 30% Column */}
          <Card className="bg-background/50 border-border/50 text-center p-6 flex flex-col justify-center">
            <CardHeader className="p-0 flex flex-col items-center">
              <div className="p-4 bg-primary/10 rounded-full mb-4 inline-flex">
                <theoryPillar.icon className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-xl font-bold">{theoryPillar.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-0 mt-4">
              <p className="text-muted-foreground text-sm">{theoryPillar.description}</p>
            </CardContent>
          </Card>

          {/* 70% Column */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {!isSeventyExpanded ? (
                <motion.div
                  key="unexpanded"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="bg-primary/10 border-primary/50 text-center p-6 sm:p-8 flex flex-col justify-center items-center h-full">
                     <div className="p-4 bg-primary/20 rounded-full mb-4 inline-flex">
                        <Book className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl sm:text-3xl font-bold">70% - Prática e Revisão</CardTitle>
                    <p className="text-primary-foreground/80 mt-4 max-w-lg">
                      É aqui que a aprovação é construída. A maior parte do seu tempo deve ser dedicada a aplicar e solidificar o que você aprendeu.
                    </p>
                    <Button onClick={() => setIsSeventyExpanded(true)} className="mt-6">
                      Entenda os 70%
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Card>
                </motion.div>
              ) : (
                <motion.div
                  key="expanded"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full"
                >
                  {practicePillars.map((pillar) => (
                    <Card key={pillar.title} className="bg-background/50 border-border/50 text-center p-6 flex flex-col justify-center">
                      <CardHeader className="p-0 flex flex-col items-center">
                        <div className="p-4 bg-primary/10 rounded-full mb-4 inline-flex">
                          <pillar.icon className="w-8 h-8 text-primary" />
                        </div>
                        <CardTitle className="text-xl font-bold">{pillar.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-0 mt-4">
                        <p className="text-muted-foreground text-sm">{pillar.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="text-center mt-20">
          <p className="text-base sm:text-lg text-muted-foreground mb-8">
            Técnicas como <strong className="text-foreground">Repetição Espaçada</strong>, <strong className="text-foreground">Recordação Ativa</strong> e <strong className="text-foreground">Técnica Pomodoro</strong> são integradas para otimizar cada minuto do seu estudo.
          </p>
        </div>
      </div>
    </section>
  );
}
