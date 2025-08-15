
"use client";

import Image from 'next/image';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { UnlockableModule } from '@/components/curso/unlockable-module';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Lock } from 'lucide-react';
import { useEffect, useState } from 'react';

export interface Module {
    id: string;
    type: 'main' | 'order_bump';
    title: string;
    description: string;
    iframeContent: string;
    coverImage: string;
    coverImageHint: string;
    unlockCode?: string;
}

interface ModuleCardProps {
    module: Module;
}

export function ModuleCard({ module }: ModuleCardProps) {
    const [isUnlocked, setIsUnlocked] = useState(module.type === 'main');
    const [isClient, setIsClient] = useState(false);
    
    useEffect(() => {
        setIsClient(true);
        if (module.type === 'order_bump') {
            const unlockedStatus = localStorage.getItem(`module_${module.id}_unlocked`);
            if (unlockedStatus === 'true') {
                setIsUnlocked(true);
            }
        }
    }, [module.id, module.type]);

    const handleUnlock = () => {
        setIsUnlocked(true);
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Card className="group cursor-pointer overflow-hidden bg-zinc-900/50 border-primary/20 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/20">
                    <CardHeader className="p-0 relative">
                        <Image
                            src={module.coverImage}
                            alt={`Capa do módulo ${module.title}`}
                            width={720}
                            height={1200}
                            className="w-full group-hover:scale-105 transition-transform duration-300"
                            data-ai-hint={module.coverImageHint}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                    </CardHeader>
                    <CardContent className="p-4 relative">
                        <CardTitle className="text-base font-bold line-clamp-2">{module.title}</CardTitle>
                        <CardDescription className="text-xs mt-1 text-muted-foreground line-clamp-2">{module.description}</CardDescription>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                         {isClient && (isUnlocked ? (
                            <div className="flex items-center gap-2 text-xs font-semibold text-green-400">
                                <CheckCircle className="w-4 h-4" />
                                Acessar Conteúdo
                            </div>
                        ) : (
                            <div className="flex items-center gap-2 text-xs font-semibold text-yellow-400">
                                <Lock className="w-4 h-4" />
                                Desbloquear
                            </div>
                        ))}
                         {!isClient && (
                             <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                                <Lock className="w-4 h-4" />
                                Carregando...
                            </div>
                         )}
                    </CardFooter>
                </Card>
            </DialogTrigger>
            <DialogContent className="max-w-4xl p-0 border-primary/30 bg-background">
                <UnlockableModule 
                    id={module.id}
                    title={module.title}
                    description={module.description}
                    iframeContent={module.iframeContent}
                    unlockCode={module.unlockCode}
                    isUnlockedInitial={isUnlocked}
                    onUnlockSuccess={handleUnlock}
                />
            </DialogContent>
        </Dialog>
    );
}
