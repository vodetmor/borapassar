
"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Footer } from '@/components/landing/footer';
import { Key, Rocket } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { sendServerEvent } from '@/services/meta-api';

export default function EntregaProcrastinacaoPage() {

    useEffect(() => {
        // Fire conversion event
        sendServerEvent('Purchase', {
            value: 9.90, // Example value for this specific product
            currency: 'BRL',
        }).catch(console.error);

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
            <Key className="mx-auto h-16 w-16 text-yellow-400 mb-6" />
            <CardTitle className="text-3xl sm:text-4xl font-black text-primary tracking-tight">COMPRA CONFIRMADA!</CardTitle>
            <CardDescription className="mt-4 text-base sm:text-lg max-w-xl mx-auto text-muted-foreground">
              Parabéns por investir em sua preparação! Você acaba de adquirir o guia "Como Vencer a Procrastinação em 7 Dias".
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6 sm:p-8 pt-0">
             <div className="bg-background/50 border border-border/50 rounded-lg p-4 mb-6">
                <p className="font-bold text-lg">Seu Código de Acesso Exclusivo:</p>
                <p className="font-mono text-2xl sm:text-3xl font-bold my-2 text-yellow-400 tracking-widest bg-black/50 py-2 rounded-md">ADEUSPREGUICA</p>
                <p className="text-muted-foreground text-sm">Use este código para desbloquear o módulo na sua Área de Membros.</p>
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
