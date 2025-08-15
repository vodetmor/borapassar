"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, BookOpen, Film, LogOut } from 'lucide-react';
import { Footer } from '@/components/landing/footer';
import { Skeleton } from '@/components/ui/skeleton';

const modules = [
  { title: "Módulo 1: A Mentalidade da Aprovação", description: "Reprograme sua mente para o sucesso e vença a procrastinação.", type: "video" },
  { title: "Módulo 2: Metodologia 30-35-35 na Prática", description: "Domine a teoria, a prática e a revisão de forma estratégica.", type: "pdf" },
  { title: "Módulo 3: Redação Nota 1000", description: "O passo a passo para uma redação que impressiona os corretores.", type: "video" },
  { title: "Módulo 4: Matemática para quem tem Medo", description: "Desbloqueie seu potencial em exatas com o método certo.", type: "video" },
  { title: "Módulo 5: Blindagem Emocional", description: "Controle a ansiedade e chegue no dia da prova com confiança total.", type: "pdf" },
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
                                <Skeleton className="h-10 w-32 ml-4" />
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
            <h1 className="text-2xl sm:text-4xl font-bold text-primary">Passar não é sorte, Aprovação é Método</h1>
            <Button onClick={handleLogout} variant="outline">
                <LogOut className="mr-2 h-4 w-4" />
                Sair
            </Button>
        </div>

        <Card className="mb-8 border-primary/20 bg-zinc-900/50 p-6 sm:p-8 text-center">
          <CardHeader className="p-0">
            <CheckCircle className="mx-auto h-12 w-12 text-accent mb-4" />
            <CardTitle className="text-xl sm:text-2xl font-bold">Bem-vindo(a), Aluno(a) VIP!</CardTitle>
            <CardDescription className="mt-2 text-base text-muted-foreground max-w-2xl mx-auto">
              Você deu o passo mais importante para a sua aprovação. Explore o método, siga o plano e prepare-se para conquistar sua vaga.
            </CardDescription>
          </CardHeader>
        </Card>

        <div className="space-y-4">
          {modules.map((mod, index) => (
            <Card key={index} className="border-border/50 hover:border-primary/50 transition-colors duration-300 bg-background/80">
              <CardContent className="p-4 sm:p-6 flex flex-col sm:flex-row justify-between sm:items-center">
                <div className="flex-grow mb-4 sm:mb-0">
                  <h3 className="text-base sm:text-lg font-bold flex items-center">
                    {mod.type === 'video' ? <Film className="w-5 h-5 mr-3 text-primary" /> : <BookOpen className="w-5 h-5 mr-3 text-primary" />}
                    {mod.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1 sm:pl-8">{mod.description}</p>
                </div>
                <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90">
                  Acessar Conteúdo
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
