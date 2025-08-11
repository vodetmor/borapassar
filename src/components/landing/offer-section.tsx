import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Check, ArrowRight, Zap } from "lucide-react";

const includedFeatures = [
  'Metodologia 30-35-35 Validada',
  'Técnicas de Neurociência para Aprendizagem Acelerada',
  'Modelo de Redação +960 Pontos',
  'Planos de Estudo Flexíveis e Adaptáveis',
  'Guia Prático Anti-Procrastinação',
  'Estratégias para Controle Emocional e Foco Total',
]

export function OfferSection() {
    return (
        <section id="oferta" className="py-20 sm:py-24 bg-secondary">
            <div className="container mx-auto px-4">
                <div className="text-center">
                    <h2 className="text-4xl font-black sm:text-5xl lg:text-6xl tracking-tighter">
                        Sua Vaga no ENEM por <span className="text-primary">Menos de um Lanche</span>.
                    </h2>
                    <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground sm:text-xl">
                        Quanto vale a sua aprovação? Quanto custa mais um ano de cursinho e frustração? Hoje, você garante seu futuro por um valor simbólico.
                    </p>
                </div>

                <div className="mt-16 max-w-4xl mx-auto">
                    <Card className="border-primary/50 border-2 shadow-2xl shadow-primary/20 bg-background overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                             <div className="p-8">
                                <CardHeader className="p-0 mb-6">
                                    <CardTitle className="text-2xl font-bold">O que você leva no Guia Definitivo:</CardTitle>
                                </CardHeader>
                                <CardContent className="p-0">
                                    <ul className="space-y-4 text-muted-foreground">
                                        {includedFeatures.map((feature) => (
                                            <li key={feature} className="flex items-start gap-3">
                                                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </div>
                            <div className="flex flex-col text-center bg-zinc-900/50 p-8 border-t md:border-t-0 md:border-l border-primary/20">
                                <p className="text-lg text-muted-foreground">De <span className="line-through text-destructive text-xl">R$47,00</span> por apenas:</p>
                                <p className="text-7xl sm:text-8xl font-black my-4 text-primary animate-pulse">
                                    R$17
                                </p>
                                <p className="text-muted-foreground mb-6">Pagamento único, acesso vitalício.</p>
                                <Button
                                    asChild
                                    size="lg"
                                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-xl font-bold shadow-lg shadow-accent/20 py-7"
                                >
                                    <a href="#">
                                        <Zap className="mr-2"/>
                                        QUERO MINHA APROVAÇÃO
                                        <ArrowRight className="ml-2"/>
                                    </a>
                                </Button>
                                <p className="mt-4 text-xs text-muted-foreground">Garantia incondicional de 7 dias. Seu risco é zero.</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
}
