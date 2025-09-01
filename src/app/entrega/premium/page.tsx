
"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Footer } from '@/components/landing/footer';
import { Key, Rocket, Star, Copy, Check } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';

export default function EntregaPremiumPage() {
    const [copiedField, setCopiedField] = useState<string | null>(null);

    const handleCopy = (text: string, field: string) => {
        navigator.clipboard.writeText(text);
        setCopiedField(field);
        setTimeout(() => {
            setCopiedField(null);
        }, 2000);
    };

    useEffect(() => {
        const duration = 3 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };

        function randomInRange(min: number, max: number) {
            return Math.random() * (max - min) + min;
        }

        const interval = setInterval(function() {
            const timeLeft = animationEnd - Date.now();
            if (timeLeft <= 0) return clearInterval(interval);
            const particleCount = 50 * (timeLeft / duration);
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
        }, 250);
        
        return () => clearInterval(interval);
    }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground selectable-text">
      <main className="flex-grow flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl bg-zinc-900/50 border-primary/20 shadow-2xl shadow-primary/10 text-center animate-in fade-in-50 zoom-in-95 duration-500">
          <CardHeader className="p-6 sm:p-8">
            <Star className="mx-auto h-16 w-16 text-yellow-400 mb-6" />
            <CardTitle className="text-3xl sm:text-4xl font-black text-primary tracking-tight">PACOTE COMPLETO LIBERADO!</CardTitle>
            <CardDescription className="mt-4 text-base sm:text-lg max-w-xl mx-auto text-muted-foreground">
              Parabéns! Aqui estão todas as suas informações de acesso. Guarde-as em um local seguro.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6 sm:p-8 pt-0 space-y-6">
             <div className="bg-background/50 border border-border/50 rounded-lg p-4 sm:p-6 text-left space-y-4">
                <div>
                    <p className="font-bold text-lg text-muted-foreground">Usuário:</p>
                     <div className="flex items-center gap-2">
                        <p className="font-mono text-xl sm:text-2xl font-bold text-yellow-400 tracking-wider bg-black/50 p-2 rounded-md flex-grow">futuroUniversitario</p>
                        <Button variant="outline" size="icon" onClick={() => handleCopy('futuroUniversitario', 'username')}>
                            {copiedField === 'username' ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                        </Button>
                    </div>
                </div>
                 <div>
                    <p className="font-bold text-lg text-muted-foreground">Senha:</p>
                    <div className="flex items-center gap-2">
                        <p className="font-mono text-xl sm:text-2xl font-bold text-yellow-400 tracking-wider bg-black/50 p-2 rounded-md flex-grow">#Aprovado2025!#</p>
                         <Button variant="outline" size="icon" onClick={() => handleCopy('#Aprovado2025!#', 'password')}>
                            {copiedField === 'password' ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                        </Button>
                    </div>
                </div>
            </div>

             <div className="bg-background/50 border border-border/50 rounded-lg p-4">
                <p className="font-bold text-lg">Seu Código de Acesso Premium:</p>
                 <div className="flex items-center gap-2 mt-2">
                    <p className="font-mono text-2xl sm:text-3xl font-bold text-yellow-400 tracking-widest bg-black/50 py-2 rounded-md flex-grow">ESTRATEGIAVIP</p>
                    <Button variant="outline" size="icon" onClick={() => handleCopy('ESTRATEGIAVIP', 'code')}>
                        {copiedField === 'code' ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                    </Button>
                </div>
                <p className="text-muted-foreground text-sm mt-2">Use este código para desbloquear TODOS os módulos do Pacote Completo na sua Área de Membros.</p>
            </div>
            
            <Button asChild size="lg" className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 text-base sm:text-lg font-bold shadow-xl shadow-accent/20 px-8 py-7 animate-pulse-cta">
              <Link href="/login">
                <Rocket className="mr-2 h-5 w-5" />
                ACESSAR E DESBLOQUEAR
              </Link>
            </Button>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
