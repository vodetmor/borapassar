
"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Footer } from '@/components/landing/footer';
import { CheckCircle, Rocket } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';
import confetti from 'canvas-confetti';

export default function ObrigadoPage() {

    useEffect(() => {
        // Fire confetti on mount
        const duration = 3 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };

        function randomInRange(min: number, max: number) {
            return Math.random() * (max - min) + min;
        }

        const interval = setInterval(function() {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
        }, 250);
        
        return () => clearInterval(interval);
    }, []);


  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-grow flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl bg-zinc-900/50 border-primary/20 shadow-2xl shadow-primary/10 text-center animate-in fade-in-50 zoom-in-95 duration-500">
          <CardHeader className="p-6 sm:p-8">
            <CheckCircle className="mx-auto h-16 w-16 text-green-400 mb-6" />
            <CardTitle className="text-3xl sm:text-4xl font-black text-primary tracking-tight">A DECISÃO FOI TOMADA!</CardTitle>
            <CardDescription className="mt-4 text-base sm:text-lg max-w-xl mx-auto text-muted-foreground">
              Parabéns! Você acaba de dar o passo mais importante para deixar a concorrência para trás e conquistar sua vaga na universidade. A procrastinação ficou no passado.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6 sm:p-8 pt-0">
             <div className="bg-background/50 border border-border/50 rounded-lg p-4 mb-6">
                <p className="font-bold text-lg">Seu acesso foi enviado!</p>
                <p className="text-muted-foreground text-sm">Verifique sua caixa de entrada (e a pasta de spam) no e-mail informado durante a compra. Lá estão suas credenciais para acessar o portal do aluno.</p>
            </div>
            <Button asChild size="lg" className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 text-base sm:text-lg font-bold shadow-xl shadow-accent/20 px-8 py-7">
              <Link href="/login">
                <Rocket className="mr-2 h-5 w-5" />
                ACESSAR MINHA ÁREA DE MEMBROS
              </Link>
            </Button>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
