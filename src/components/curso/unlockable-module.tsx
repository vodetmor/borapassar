
"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Lock, Key, Sparkles, AlertCircle, BookOpen } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import confetti from 'canvas-confetti';

interface UnlockableModuleProps {
    id: string;
    title: string;
    description: string;
    iframeContent: string;
    unlockCode?: string;
    isUnlockedInitial: boolean;
    onUnlockSuccess: () => void;
}

export function UnlockableModule({ id, title, description, iframeContent, unlockCode, isUnlockedInitial, onUnlockSuccess }: UnlockableModuleProps) {
    const [isUnlocked, setIsUnlocked] = useState(isUnlockedInitial);
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        // This keeps the state in sync if the prop changes (e.g. from localStorage check on parent)
        setIsUnlocked(isUnlockedInitial);
    }, [isUnlockedInitial]);

    const handleUnlock = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (unlockCode && inputValue.trim().toUpperCase() === unlockCode) {
            localStorage.setItem(`module_${id}_unlocked`, 'true');
            setIsUnlocked(true);
            onUnlockSuccess(); // Notify parent component
            
            // Fire confetti
            const duration = 2 * 1000;
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
            <Card className="border-0 bg-transparent shadow-none">
                 <CardHeader className="p-6">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-primary/10 rounded-full">
                           <BookOpen className="w-6 h-6 text-primary flex-shrink-0" />
                        </div>
                        <div>
                            <CardTitle className="text-xl font-bold">{title}</CardTitle>
                            <CardDescription className="mt-1 text-muted-foreground">{isUnlockedInitial ? description : 'Parabéns! Você desbloqueou este conteúdo exclusivo.'}</CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                    <div className="aspect-video" dangerouslySetInnerHTML={{ __html: iframeContent }} />
                </CardContent>
            </Card>
        );
    }

    return (
        <Card className="border-0 bg-transparent shadow-none">
            <CardHeader className="p-6">
                 <div className="flex items-center gap-4">
                    <div className="p-3 bg-muted rounded-full">
                        <Lock className="w-6 h-6 text-muted-foreground flex-shrink-0" />
                    </div>
                    <div>
                        <CardTitle className="text-xl font-bold">{title}</CardTitle>
                        <CardDescription className="mt-1 text-muted-foreground">Este conteúdo é exclusivo para alunos com acesso VIP. Insira seu código para desbloquear.</CardDescription>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="p-6 pt-0">
                <form onSubmit={handleUnlock} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
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
                    <Alert variant="destructive" className="mt-4 max-w-md mx-auto">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>Erro</AlertTitle>
                        <AlertDescription>{error}</AlertDescription>
                    </Alert>
                )}
            </CardContent>
        </Card>
    );
}
