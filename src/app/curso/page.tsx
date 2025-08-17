
"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { LogOut, Award } from 'lucide-react';
import { Footer } from '@/components/landing/footer';
import { Skeleton } from '@/components/ui/skeleton';
import { ModuleCard } from '@/components/curso/module-card';
import type { Module } from '@/components/curso/module-card';
import { CardContent } from '@/components/ui/card';

const mainContent: Module = {
  id: 'ebook',
  type: 'main',
  title: "Ebook: Passar não é sorte, Aprovação é Método",
  description: "Seu guia central para a aprovação. Acesse o material completo que já te colocou à frente de 99% dos candidatos.",
  iframeContent: '<iframe src="https://heyzine.com/flip-book/75831e3e6e.html" style="border:0px;width:100%;height:480px" allowFullScreen="true" class="rounded-lg"></iframe>',
  coverImage: 'https://i.imgur.com/PfHqNDi.png',
  coverImageHint: 'book cover',
  downloadLink: "https://drive.google.com/uc?export=download&id=16Hq21Gen20NdU9EEA-mgojN6oy3Y6o4Z"
};

const orderBumps: Module[] = [
  { 
    id: 'plano30dias',
    type: 'order_bump',
    title: "Plano de Estudo Express: Sua Rotina de 30 Dias para o ENEM",
    description: "Desbloqueie o cronograma de 30 dias para uma preparação focada e de alta performance.",
    iframeContent: '<iframe src="https://heyzine.com/flip-book/0d1da9756f.html" style="border:0px;width:100%;height:480px" allowFullScreen="true" class="rounded-lg"></iframe>',
    unlockCode: 'PLANO30',
    coverImage: 'https://i.imgur.com/OF7AWQT.png',
    coverImageHint: 'study plan',
    downloadLink: 'https://drive.google.com/uc?export=download&id=1ZXE4IIDX7sNtvdllsCH8QhNrWagczBR9'
  },
  { 
    id: 'guiaredacao',
    type: 'order_bump',
    title: "Guia para Redação de Vestibulares", 
    description: "Acesse o guia completo para estruturar redações nota 1000 em qualquer vestibular.",
    iframeContent: '<iframe src="https://heyzine.com/flip-book/29dc031449.html" style="border:0px;width:100%;height:480px" allowFullScreen="true" class="rounded-lg"></iframe>',
    unlockCode: 'REDACAO1000',
    coverImage: 'https://i.imgur.com/DRLVZOB.png',
    coverImageHint: 'writing guide',
    downloadLink: "https://drive.google.com/uc?export=download&id=1qB_m8XXInrelGC7AsRxrY_YHnb933Dvy"
  },
  { 
    id: 'flashcards',
    type: 'order_bump',
    title: "Flashcards Essenciais ENEM - 100 Conceitos Chave",
    description: "Memorize os 100 conceitos que mais caem no ENEM com este conjunto de flashcards prontos.",
    iframeContent: '<iframe src="https://heyzine.com/flip-book/697f91c274.html" style="border:0px;width:100%;height:480px" allowFullScreen="true" class="rounded-lg"></iframe>',
    unlockCode: 'FLASH100',
    coverImage: 'https://i.imgur.com/5ngfrrn.png',
    coverImageHint: 'flashcards education',
    downloadLink: "https://drive.google.com/uc?export=download&id=1Fslc7mtwucHxMLwuePvyblUxvkl3lFGu"
  },
  {
    id: 'procrastinacao',
    type: 'order_bump',
    title: "Como Vencer a Procrastinação em 7 Dias",
    description: "Um guia prático com desafios diários para construir uma disciplina inabalável.",
    iframeContent: '<iframe src="https://heyzine.com/flip-book/9c64933456.html" style="border:0px;width:100%;height:480px" allowFullScreen="true" class="rounded-lg"></iframe>',
    unlockCode: 'ADEUSPREGUICA',
    coverImage: 'https://i.imgur.com/tqIsznO.png',
    coverImageHint: 'motivation guide',
    downloadLink: "https://drive.google.com/uc?export=download&id=17qLysjHtFZBvhHKh9FhMvr0mR8T3tRMJ"
  }
];

export default function CoursePage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    } else {
      router.replace('/login');
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    orderBumps.forEach(bump => localStorage.removeItem(`module_${bump.id}_unlocked`));
    router.push('/login');
  };

  if (isAuthenticated === null) {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <main className="flex-grow container mx-auto px-4 py-8 sm:py-16">
                 <div className="flex justify-between items-center mb-8">
                    <Skeleton className="h-10 w-64" />
                    <Skeleton className="h-10 w-24" />
                </div>
                <Card className="mb-8 border-primary/20 bg-zinc-900/50">
                    <CardHeader>
                        <Skeleton className="h-8 w-3/4 mb-2" />
                        <Skeleton className="h-5 w-1/2" />
                    </CardHeader>
                    <CardContent className="p-6">
                       <Skeleton className="aspect-video w-full" />
                    </CardContent>
                </Card>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[...Array(5)].map((_, i) => (
                         <Card key={i} className="border-border/50 bg-background/80">
                            <CardContent className="p-4 sm:p-6">
                               <Skeleton className="aspect-video w-full mb-4" />
                               <Skeleton className="h-6 w-3/4 mb-2" />
                               <Skeleton className="h-4 w-1/2" />
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-grow container mx-auto px-4 py-8 sm:py-16">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-8">
            <h1 className="text-2xl sm:text-4xl font-bold text-primary">Área do Aluno Estratégico</h1>
            <Button onClick={handleLogout} variant="outline">
                <LogOut className="mr-2 h-4 w-4" />
                Sair
            </Button>
        </div>

        <Card className="mb-12 border-primary/20 bg-zinc-900/50 p-6 sm:p-8 text-center">
          <CardHeader className="p-0">
            <Award className="mx-auto h-12 w-12 text-accent mb-4" />
            <CardTitle className="text-xl sm:text-2xl font-bold">Bem-vindo(a) de volta, Futuro(a) Aprovado(a)!</CardTitle>
            <CardDescription className="mt-2 text-base text-muted-foreground max-w-2xl mx-auto">
              Você está no caminho certo. Explore seus materiais e acelere sua aprovação.
            </CardDescription>
          </CardHeader>
        </Card>

        <div>
            <h2 className="text-2xl font-bold mb-2">Seu Material Principal</h2>
             <p className="text-muted-foreground mb-6">Comece por aqui! Este é o guia que vai nortear toda a sua preparação.</p>
            <div className="mb-12 max-w-md mx-auto">
                 <ModuleCard module={mainContent} />
            </div>

            <h2 className="text-2xl font-bold mb-2">Módulos Complementares</h2>
            <p className="text-muted-foreground mb-6">Desbloqueie estes arsenais para potencializar ainda mais seus resultados.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {orderBumps.map((bump) => (
                    <ModuleCard key={bump.id} module={bump} />
                ))}
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
