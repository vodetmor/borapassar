
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Check, ShieldCheck, X, Star, Map } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const planoCompletoFeatures = [
  'Acesso VIP à Área de Membros Estratégica',
  'Metodologia 30-35-35 Validada',
  'Técnicas de Neurociência para Aprendizagem',
  'Modelo de Redação +960 Pontos',
  'Guia Anti-Procrastinação e Controle Emocional',
];

const bonusFeatures = [
    { name: 'BÔNUS #1: +400 Mapas Mentais do ENEM', value: 'R$67' },
    { name: 'BÔNUS #2: Plano de Estudo Express 30 Dias', value: 'R$13' },
    { name: 'BÔNUS #3: Guia para Redação de Vestibulares', value: 'R$17' },
]

export function OfferSection() {

    return (
        <section id="oferta" className="py-16 sm:py-24 bg-secondary">
            <div className="container mx-auto px-4">
                <div className="text-center">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
                        Escolha o Plano que Vai Garantir Sua <span className="text-primary">Aprovação</span>
                    </h2>
                    <p className="mt-6 max-w-3xl mx-auto text-base sm:text-xl text-muted-foreground">
                        Quanto vale o seu futuro? Hoje, você tem duas opções para deixar a concorrência para trás. A decisão é sua.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-start">
                    
                    {/* Plano Completo */}
                    <div className="relative">
                        <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full flex justify-center z-10">
                            <div className="bg-primary text-primary-foreground text-sm font-bold px-6 py-2 rounded-full uppercase flex items-center gap-2 shadow-lg">
                                <Star className="w-4 h-4" />
                                Mais Vendido
                            </div>
                        </div>
                        <Card className="border-primary/80 border-2 shadow-2xl shadow-primary/20 bg-background overflow-hidden flex flex-col h-full pt-6">
                            <div className="p-6 sm:p-8 flex-grow">
                                <CardHeader className="p-0 mb-6 text-center">
                                    <CardTitle className="text-2xl sm:text-3xl font-bold">Plano Estrategista Completo</CardTitle>
                                    <CardDescription>O arsenal completo para a aprovação em tempo recorde.</CardDescription>
                                </CardHeader>
                                <CardContent className="p-0">
                                    <p className="text-sm text-muted-foreground mb-4">Acesso ao método principal:</p>
                                    <ul className="space-y-3 text-muted-foreground mb-6">
                                        {planoCompletoFeatures.map((feature) => (
                                            <li key={feature} className="flex items-start gap-3">
                                                <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                                                <span className="text-sm sm:text-base text-foreground">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                     <p className="text-sm text-muted-foreground mb-4">E você ainda leva <span className="font-bold text-primary">GRÁTIS</span> 3 bônus exclusivos:</p>
                                     <ul className="space-y-3 text-muted-foreground">
                                        {bonusFeatures.map((bonus) => (
                                            <li key={bonus.name} className="flex items-start gap-3">
                                                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                                <span className="text-sm sm:text-base text-foreground">{bonus.name} <span className="line-through text-muted-foreground/80">({bonus.value})</span></span>
                                            </li>
                                        ))}
                                     </ul>
                                </CardContent>
                            </div>
                            <div className="flex flex-col text-center bg-zinc-900/50 p-6 sm:p-8 mt-auto border-t border-primary/20">
                                    <p className="text-base sm:text-lg text-muted-foreground">De <span className="line-through text-red-400 text-lg sm:text-xl">R$97,00</span> por apenas:</p>
                                    <p className="text-5xl sm:text-8xl font-black my-2 text-primary">
                                        R$37,90
                                    </p>
                                    <p className="font-bold text-lg text-accent -mt-2 mb-4">Você economiza R$59,10 (61% OFF)</p>
                                    <Button asChild size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-base sm:text-xl font-bold shadow-lg shadow-accent/20 py-4 sm:py-7 animate-pulse-cta">
                                        <Link href="https://www.ggcheckout.com/checkout/v2/SQykU01oXNvbkC6PPoGh">
                                            QUERO O PLANO COMPLETO
                                        </Link>
                                    </Button>
                                    <p className="mt-4 text-xs text-muted-foreground">Pagamento único, acesso vitalício a tudo.</p>
                                </div>
                        </Card>
                    </div>

                    {/* Plano Essencial */}
                    <Card className="border-border/50 border bg-zinc-900/80 overflow-hidden flex flex-col h-full mt-6 lg:mt-0">
                        <div className="p-6 sm:p-8 flex-grow">
                             <CardHeader className="p-0 mb-6 text-center">
                                <CardTitle className="text-2xl sm:text-3xl font-bold">Plano Essencial</CardTitle>
                                <CardDescription>O método principal para começar seus estudos.</CardDescription>
                            </CardHeader>
                            <CardContent className="p-0">
                                 <p className="text-sm text-muted-foreground mb-4">Acesso ao método principal:</p>
                                <ul className="space-y-3 text-muted-foreground mb-6">
                                    {planoCompletoFeatures.map((feature) => (
                                        <li key={feature} className="flex items-start gap-3">
                                            <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                                            <span className="text-sm sm:text-base text-foreground">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-sm text-muted-foreground mb-4">O que você <span className="font-bold text-red-400">NÃO</span> leva neste plano:</p>
                                 <ul className="space-y-3 text-muted-foreground">
                                    {bonusFeatures.map((bonus) => (
                                        <li key={bonus.name} className="flex items-start gap-3">
                                            <X className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                                            <span className="text-sm sm:text-base text-muted-foreground/80">{bonus.name}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </div>
                        <div className="flex flex-col text-center bg-zinc-900/50 p-6 sm:p-8 mt-auto border-t border-border/50">
                                <p className="text-base sm:text-lg text-muted-foreground">De <span className="line-through text-red-400 text-lg sm:text-xl">R$47,00</span> por apenas:</p>
                                <p className="text-5xl sm:text-8xl font-black my-2 text-primary/80">
                                    R$27,90
                                </p>
                                <p className="font-bold text-lg text-accent/80 -mt-2 mb-4">Você economiza R$19,10 (41% OFF)</p>
                                <Button asChild size="lg" className="w-full bg-primary/80 text-primary-foreground hover:bg-primary/70 text-base sm:text-xl font-bold shadow-lg shadow-primary/10 py-4 sm:py-7">
                                    <Link href="https://www.ggcheckout.com/checkout/v2/2rEYiE7T5GkEJ7NSqKPQ">
                                        QUERO O PLANO ESSENCIAL
                                    </Link>
                                </Button>
                               <p className="mt-4 text-xs text-muted-foreground">Pagamento único, acesso vitalício ao método.</p>
                            </div>
                    </Card>
                </div>

                 <div className="mt-12 flex justify-center">
                        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 bg-background/50 border border-border/50 rounded-lg p-4 max-w-2xl">
                             <ShieldCheck className="w-16 h-16 text-primary flex-shrink-0" />
                             <div>
                                <h3 className="text-lg sm:text-xl font-bold text-center sm:text-left">Garantia Incondicional de 7 Dias</h3>
                                <p className="text-muted-foreground text-sm sm:text-base text-center sm:text-left">Teste o método. Se em 7 dias você não sentir que está no caminho certo para a <span className="font-bold text-primary">aprovação</span>, devolvemos 100% do seu dinheiro. O risco é todo nosso.</p>
                             </div>
                        </div>
                    </div>
            </div>
        </section>
    );
}
