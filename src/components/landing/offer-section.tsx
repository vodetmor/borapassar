import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight, Zap } from "lucide-react";

const includedFeatures = [
    "Metodologia 30-35-35",
    "Técnicas de Neurociência",
    "Modelo de Redação +960",
    "Planos de Estudo Adaptáveis",
    "Guia Anti-Procrastinação",
    "Blindagem Emocional",
];

export function OfferSection() {
    return (
        <section id="oferta" className="py-20 sm:py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <Card className="border-accent/50 border-4 shadow-2xl shadow-accent/20 bg-secondary overflow-hidden">
                        <CardHeader className="text-center p-8 bg-secondary">
                            <h2 className="text-3xl font-black tracking-tight sm:text-4xl text-foreground">OFERTA ÚNICA E ABSURDA</h2>
                            <p className="mt-4 text-lg text-muted-foreground">Tenha acesso vitalício ao arsenal completo que vai garantir sua aprovação.</p>
                        </CardHeader>
                        <CardContent className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h3 className="font-bold text-lg text-foreground mb-4">O que você recebe:</h3>
                                <ul className="space-y-3 text-muted-foreground">
                                    {includedFeatures.map((feature) => (
                                        <li key={feature} className="flex items-center gap-3">
                                            <Check className="h-5 w-5 text-primary flex-shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="text-center bg-background/50 rounded-lg p-8 border border-border">
                                <p className="text-muted-foreground">De <span className="line-through text-destructive">R$47,00</span> por apenas:</p>
                                <p className="text-5xl sm:text-6xl font-black my-2">
                                    <span className="text-primary animate-pulse">R$17</span>
                                </p>
                                <p className="text-muted-foreground mb-6">Pagamento único, acesso vitalício.</p>
                                <Button
                                    asChild
                                    size="lg"
                                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg font-bold shadow-lg"
                                >
                                    <a href="#cta">
                                        <Zap className="mr-2"/>
                                        DESTRAVAR MEU DESCONTO
                                        <ArrowRight className="ml-2"/>
                                    </a>
                                </Button>
                                <p className="mt-3 text-xs text-muted-foreground">Garantia de 7 dias. Risco zero.</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
