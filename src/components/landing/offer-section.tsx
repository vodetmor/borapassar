
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Check, ArrowRight, Zap, BadgePercent } from "lucide-react";

const includedFeatures = [
  'Acesso VIP à Área de Membros Estratégica',
  'Metodologia 30-35-35 Validada',
  'Técnicas de Neurociência para Aprendizagem Acelerada',
  'Modelo de Redação +960 Pontos',
  'Planos de Estudo Flexíveis e Adaptáveis',
  'Guia Prático Anti-Procrastinação e Controle Emocional',
]

export function OfferSection() {
    return (
        <section id="oferta" className="py-16 sm:py-24 bg-secondary">
            <div className="container mx-auto px-4">
                <div className="text-center">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
                        Sua Vaga no ENEM por <span className="text-primary">Menos de Um Lanche</span>
                    </h2>
                    <p className="mt-6 max-w-2xl mx-auto text-base sm:text-xl text-muted-foreground">
                        Quanto vale a sua aprovação? Quanto custa mais um ano de cursinho e frustração? Hoje, você garante seu futuro por um valor simbólico.
                    </p>
                </div>

                <div className="mt-16 max-w-4xl mx-auto">
                    <Card className="border-primary/50 border-2 shadow-2xl shadow-primary/20 bg-background overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                             <div className="p-6 sm:p-8">
                                <CardHeader className="p-0 mb-6">
                                    <CardTitle className="text-xl sm:text-2xl font-bold">O que você leva na Área de Membros:</CardTitle>
                                </CardHeader>
                                <CardContent className="p-0">
                                    <ul className="space-y-3 sm:space-y-4 text-muted-foreground">
                                        {includedFeatures.map((feature) => (
                                            <li key={feature} className="flex items-start gap-3">
                                                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                                                <span className="text-sm sm:text-base">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </div>
                            <div className="flex flex-col text-center bg-zinc-900/50 p-6 sm:p-8 border-t md:border-t-0 md:border-l border-primary/20">
                                <p className="text-base sm:text-lg text-muted-foreground">De <span className="line-through text-red-400 text-lg sm:text-xl">R$47,00</span> por apenas:</p>
                                <p className="text-5xl sm:text-8xl font-black my-4 text-primary">
                                    R$17,90
                                </p>
                                <div className="mb-6 flex justify-center items-center gap-2 text-xs sm:text-sm font-semibold text-green-400 bg-green-900/30 border border-green-400/30 rounded-full px-3 py-1">
                                    <BadgePercent className="w-4 h-4"/>
                                    <span>Você economiza R$29,10 (62% OFF)</span>
                                </div>

                                <Button
                                    asChild
                                    size="lg"
                                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-base sm:text-xl font-bold shadow-lg shadow-accent/20 py-4 sm:py-7 animate-pulse-cta"
                                >
                                    <a href="/obrigado">
                                        
                                        QUERO MINHA APROVAÇÃO
                                    </a>
                                </Button>
                                <p className="mt-4 text-xs text-muted-foreground">Pagamento único, acesso vitalício. Garantia de 7 dias.</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
}
