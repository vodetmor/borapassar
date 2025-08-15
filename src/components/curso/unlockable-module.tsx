
"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Lock, Key, Sparkles, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import confetti from 'canvas-confetti';

interface UnlockableModuleProps {
    id: string;
    title: string;
    description: string;
    iframeContent: string;
    unlockCode: string;
}

export function UnlockableModule({ id, title, description, iframeContent, unlockCode }: UnlockableModuleProps) {
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const unlockedStatus = localStorage.getItem(`module_${id}_unlocked`);
        if (unlockedStatus === 'true') {
            setIsUnlocked(true);
        }
    }, [id]);

    const handleUnlock = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (inputValue.trim().toUpperCase() === unlockCode) {
            localStorage.setItem(`module_${id}_unlocked`, 'true');
            setIsUnlocked(true);
            
            // Fire confetti
            const duration = 2 * 1000;
            const animationEnd = Date.now() + duration;
            const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

            function randomInRange(min: number, max: number) {
                return Math.random() * (max - min) + min;
            }

            const interval = setInterval(function() {
                const timeLeft = animationEnd - Date.now();

                if (timeLeft <= 0) {
                    return clearInterval(interval);
                }

                const particleCount = 50 * (timeLeft / duration);
                // since particles fall down, start a bit higher than random
                confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
                confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
            }, 250);

        } else {
            setError('Código de acesso inválido. Verifique e tente novamente.');
        }
    };

    if (isUnlocked) {
        return (
            <Card className="border-accent/50 bg-accent/10">
                 <CardHeader>
                    <div className="flex items-center gap-4">
                        <Sparkles className="w-8 h-8 text-accent flex-shrink-0" />
                        <div>
                            <CardTitle className="text-xl font-bold">{title}</CardTitle>
                            <CardDescription className="mt-1">Parabéns! Você desbloqueou este conteúdo exclusivo.</CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="aspect-video" dangerouslySetInnerHTML={{ __html: iframeContent }} />
                </CardContent>
            </Card>
        );
    }

    return (
        <Card className="border-border/50 bg-background/80">
            <CardHeader>
                <div className="flex items-center gap-4">
                    <Lock className="w-8 h-8 text-muted-foreground flex-shrink-0" />
                    <div>
                        <CardTitle className="text-xl font-bold">{title}</CardTitle>
                        <CardDescription className="mt-1">{description}</CardDescription>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleUnlock} className="flex flex-col sm:flex-row gap-2">
                     <Input
                        type="text"
                        placeholder="Digite seu código de acesso"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        required
                        className="flex-grow bg-background/70"
                    />
                    <Button type="submit" className="bg-primary hover:bg-primary/90">
                        <Key className="mr-2 h-4 w-4" />
                        Desbloquear
                    </Button>
                </form>
                 {error && (
                    <Alert variant="destructive" className="mt-4">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>Erro</AlertTitle>
                        <AlertDescription>{error}</AlertDescription>
                    </Alert>
                )}
            </CardContent>
        </Card>
    );
}

