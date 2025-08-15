"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, LogOut, Award } from 'lucide-react';
import { Footer } from '@/components/landing/footer';
import { Skeleton } from '@/components/ui/skeleton';
import { UnlockableModule } from '@/components/curso/unlockable-module';

const mainContent = {
  title: "Ebook: Passar não é sorte, Aprovação é Método",
  description: "Seu guia central para a aprovação. Acesse o material completo que já te colocou à frente de 99% dos candidatos.",
  iframe: '<iframe src="https://drive.google.com/file/d/1y8okZ9QItbveXfSVbA6z-1lvJ8bcsDOn/preview" width="100%" height="480" allow="autoplay" class="rounded-lg"></iframe>'
};

const orderBumps = [
  { 
    id: 'plano30dias',
    title: "Plano de Estudo Express: Sua Rotina de 30 Dias para o ENEM",
    description: "Desbloqueie o cronograma de 30 dias para uma preparação focada e de alta performance.",
    iframe: '<iframe src="https://drive.google.com/file/d/1r8TclGN2tsVOluUOmOXrJtkOUoTkqZ46/preview" width="100%" height="480" allow="autoplay" class="rounded-lg"></iframe>',
    unlockCode: 'PLANO30'
  },
  { 
    id: 'guiaredacao',
    title: "Guia para Redação de Vestibulares", 
    description: "Acesse o guia completo para estruturar redações nota 1000 em qualquer vestibular.",
    iframe: '<iframe src="https://drive.google.com/file/d/1wESZbF9Nydpm6qKraGz8yjcVCAT8b2k5/preview" width="100%" height="480" allow="autoplay" class="rounded-lg"></iframe>',
    unlockCode: 'REDACAO1000'
  },
  { 
    id: 'flashcards',
    title: "Flashcards Essenciais ENEM - 100 Conceitos Chave",
    description: "Memorize os 100 conceitos que mais caem no ENEM com este conjunto de flashcards prontos.",
    iframe: '<iframe src="https://drive.google.com/file/d/1SrGNsR8pnc9loE3CWmaZLLJp0797x3Te/preview" width="100%" height="480" allow="autoplay" class="rounded-lg"></iframe>',
    unlockCode: 'FLASH100'
  },
  {
    id: 'procrastinacao',
    title: "Como Vencer a Procrastinação em 7 Dias",
    description: "Um guia prático com desafios diários para construir uma disciplina inabalável.",
    iframe: '<iframe src="https://drive.google.com/file/d/1q3U2ZcD68mwWAQBHfNQijDJac36GVhFO/preview" width="100%" height="480" allow="autoplay" class="rounded-lg"></iframe>',
    unlockCode: 'ADEUSPREGUICA'
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
    // Also clear unlocked modules on logout
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
                </Card>
                <div className="space-y-4">
                    {[...Array(5)].map((_, i) => (
                         <Card key={i} className="border-border/50 bg-background/80">
                            <CardContent className="p-4 sm:p-6 flex justify-between items-center">
                                <div className='w-full'>
                                    <Skeleton className="h-6 w-1/2 mb-2" />
                                    <Skeleton className="h-4 w-3/4" />
                                </div>
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
              Você está no caminho certo. Continue focado(a), o sucesso é uma consequência do seu esforço diário.
            </CardDescription>
          </CardHeader>
        </Card>

        <div className="space-y-8">
            {/* Main Content */}
            <Card className="border-border/50 bg-background/80 overflow-hidden">
                <CardHeader>
                    <div className="flex items-center gap-4">
                        <BookOpen className="w-8 h-8 text-primary flex-shrink-0" />
                        <div>
                            <CardTitle className="text-xl font-bold">{mainContent.title}</CardTitle>
                            <CardDescription className="mt-1">{mainContent.description}</CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="aspect-video" dangerouslySetInnerHTML={{ __html: mainContent.iframe }} />
                </CardContent>
            </Card>

            {/* Order Bumps */}
            {orderBumps.map((bump) => (
                <UnlockableModule 
                    key={bump.id}
                    id={bump.id}
                    title={bump.title}
                    description={bump.description}
                    iframeContent={bump.iframe}
                    unlockCode={bump.unlockCode}
                />
            ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
