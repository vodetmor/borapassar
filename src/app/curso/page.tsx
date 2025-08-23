
"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { LogOut, Award, Star, Key } from 'lucide-react';
import { Footer } from '@/components/landing/footer';
import { Skeleton } from '@/components/ui/skeleton';
import { ModuleCard } from '@/components/curso/module-card';
import type { Module } from '@/components/curso/module-card';
import { CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { UnlockableModule } from '@/components/curso/unlockable-module';

const mainContent: Module[] = [
  {
    id: 'ebook',
    type: 'main',
    title: "Ebook: Passar não é sorte, Aprovação é Método",
    description: "Seu guia central para a aprovação. Acesse o material completo que já te colocou à frente de 99% dos candidatos.",
    iframeContent: '<iframe src="https://heyzine.com/flip-book/75831e3e6e.html" style="border:0px;width:100%;height:480px" allowFullScreen="true" class="rounded-lg"></iframe>',
    coverImage: 'https://i.imgur.com/PfHqNDi.png',
    coverImageHint: 'book cover',
    downloadLink: "https://drive.google.com/uc?export=download&id=16Hq21Gen20NdU9EEA-mgojN6oy3Y6o4Z"
  },
];

const premiumModules: Module[] = [
  {
    id: 'mapasmentais',
    type: 'premium',
    title: "+400 Resumos em Mapas Mentais",
    description: "O arsenal visual para absorver o conteúdo de um ano em poucas horas. Tudo o que você precisa para o ENEM e vestibulares.",
    iframeContent: '',
    coverImage: 'https://i.imgur.com/xkVqPhD.png',
    coverImageHint: 'mind maps collection',
    downloadLink: 'https://drive.google.com/drive/folders/1-5lWYcxZFr47R97cGFkqKMQ5Lpugtk0o?usp=sharing',
    unlockCode: 'ESTRATEGIAVIP',
    checkoutLink: 'https://www.ggcheckout.com/checkout/v2/g5OAn42lZ6qL3P2bQWJ7'
  },
  { 
    id: 'plano30dias',
    type: 'premium',
    title: "Plano de Estudo Express: Sua Rotina de 30 Dias para o ENEM",
    description: "Seu cronograma de 30 dias para uma preparação focada e de alta performance.",
    iframeContent: '<iframe src="https://heyzine.com/flip-book/0d1da9756f.html" style="border:0px;width:100%;height:480px" allowFullScreen="true" class="rounded-lg"></iframe>',
    coverImage: 'https://i.imgur.com/OF7AWQT.png',
    coverImageHint: 'study plan',
    downloadLink: 'https://drive.google.com/uc?export=download&id=1ZXE4IIDX7sNtvdllsCH8QhNrWagczBR9',
    unlockCode: 'ESTRATEGIAVIP',
    checkoutLink: 'https://www.ggcheckout.com/checkout/v2/g5OAn42lZ6qL3P2bQWJ7'
  },
  { 
    id: 'guiaredacao',
    type: 'premium',
    title: "Guia para Redação de Vestibulares", 
    description: "O guia completo para estruturar redações nota 1000 em qualquer vestibular.",
    iframeContent: '<iframe src="https://heyzine.com/flip-book/29dc031449.html" style="border:0px;width:100%;height:480px" allowFullScreen="true" class="rounded-lg"></iframe>',
    coverImage: 'https://i.imgur.com/DRLVZOB.png',
    coverImageHint: 'writing guide',
    downloadLink: "https://drive.google.com/uc?export=download&id=1qB_m8XXInrelGC7AsRxrY_YHnb933Dvy",
    unlockCode: 'ESTRATEGIAVIP',
    checkoutLink: 'https://www.ggcheckout.com/checkout/v2/g5OAn42lZ6qL3P2bQWJ7'
  },
];


const orderBumps: Module[] = [
  { 
    id: 'flashcards',
    type: 'order_bump',
    title: "Flashcards Essenciais ENEM - 100 Conceitos Chave",
    description: "Memorize os 100 conceitos que mais caem no ENEM com este conjunto de flashcards prontos.",
    iframeContent: '<iframe src="https://heyzine.com/flip-book/697f91c274.html" style="border:0px;width:100%;height:480px" allowFullScreen="true" class="rounded-lg"></iframe>',
    unlockCode: 'FLASH100',
    coverImage: 'https://i.imgur.com/5ngfrrn.png',
    coverImageHint: 'flashcards education',
    downloadLink: "https://drive.google.com/uc?export=download&id=1Fslc7mtwucHxMLwuePvyblUxvkl3lFGu",
    checkoutLink: 'https://www.ggcheckout.com/checkout/v2/utkXMnLyl71TRxkJ1JeM'
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
    downloadLink: "https://drive.google.com/uc?export=download&id=17qLysjHtFZBvhHKh9FhMvr0mR8T3tRMJ",
    checkoutLink: 'https://www.ggcheckout.com/checkout/v2/J8rriInSgPPY2ZJU7A95'
  }
];

export default function CoursePage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [arePremiumModulesUnlocked, setArePremiumModulesUnlocked] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
      // Check if premium modules are unlocked
      const premiumUnlocked = localStorage.getItem('module_premium_unlocked') === 'true';
      setArePremiumModulesUnlocked(premiumUnlocked);
    } else {
      router.replace('/login');
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.clear(); // Limpa tudo para garantir
    router.push('/login');
  };

  const handlePremiumUnlock = () => {
      setArePremiumModulesUnlocked(true);
      // This will cause a page reload via the UnlockableModule component,
      // which will then read the new state from localStorage.
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
    <div className="flex flex-col min-h-screen bg-background text-foreground non-selectable">
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
            <div className="mb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {mainContent.map((module) => (
                    <ModuleCard key={module.id} module={module} />
                ))}
            </div>
            
            <h2 className="text-2xl font-bold mb-2">Módulos Premium</h2>
            <p className="text-muted-foreground mb-6">Desbloqueie os bônus do Plano Estrategista Completo com seu código de acesso.</p>
             
            {arePremiumModulesUnlocked ? (
                 <div className="mb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {premiumModules.map((module) => (
                        <ModuleCard key={module.id} module={module} />
                    ))}
                </div>
            ) : (
                <Dialog>
                    <DialogTrigger asChild>
                        <Card className="mb-12 border-primary/50 border-2 bg-primary/10 text-center p-8 cursor-pointer hover:bg-primary/20 transition-all transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/20">
                            <Star className="mx-auto h-12 w-12 text-yellow-400 mb-4" />
                            <CardTitle className="text-2xl sm:text-3xl font-bold">Você é um Aluno Estratégico?</CardTitle>
                            <CardDescription className="mt-2 text-base text-primary-foreground/80 max-w-2xl mx-auto">
                                Clique aqui e insira seu código de acesso para liberar todos os bônus do plano premium.
                            </CardDescription>
                            <Button className="mt-6 animate-pulse-cta" size="lg">
                                <Key className="mr-2 h-5 w-5" />
                                Liberar Acesso Premium
                            </Button>
                        </Card>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl p-0 border-primary/30 bg-background">
                         <UnlockableModule 
                            id="premium"
                            title="Acesso Premium"
                            description="Insira seu código para desbloquear todos os módulos premium."
                            iframeContent=""
                            unlockCode="ESTRATEGIAVIP"
                            isUnlockedInitial={false}
                            onUnlockSuccess={handlePremiumUnlock}
                            checkoutLink="https://www.ggcheckout.com/checkout/v2/g5OAn42lZ6qL3P2bQWJ7"
                        />
                    </DialogContent>
                </Dialog>
            )}


            <h2 className="text-2xl font-bold mb-2">Módulos Complementares</h2>
            <p className="text-muted-foreground mb-6">Comprou um material extra? Desbloqueie seu arsenal para potencializar ainda mais seus resultados.</p>
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
