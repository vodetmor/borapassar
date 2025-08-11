import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, ArrowRight, Zap, BrainCircuit, Target, PenSquare } from "lucide-react";

const TABS_CONTENT = {
    strategy: {
        icon: Target,
        title: "Estudo Estratégico",
        features: [
            "Metodologia 30-35-35: Otimize seu tempo de forma cirúrgica.",
            "Planos de Estudo Adaptáveis: Cronogramas prontos para qualquer rotina.",
            "Foco nos 20% que geram 80% dos acertos.",
            "Técnica Pomodoro integrada para máxima concentração.",
        ],
    },
    neuroscience: {
        icon: BrainCircuit,
        title: "Neurociência Aplicada",
        features: [
            "Active Recall: Force seu cérebro a lembrar e fixar o conteúdo.",
            "Repetição Espaçada: O segredo para nunca mais esquecer o que estudou.",
            "Guia Anti-Procrastinação: Comandos práticos para vencer a preguiça.",
            "Blindagem Emocional: Controle o nervosismo e o medo do 'branco'.",
        ],
    },
    writing: {
        icon: PenSquare,
        title: "Redação Nota 1000",
        features: [
            "Modelo de Redação validado para +960 pontos.",
            "Estrutura de parágrafos que impressiona qualquer corretor.",
            "Como argumentar de forma clara e persuasiva.",
            "Análise de redações nota máxima para inspiração.",
        ],
    },
};

export function OfferSection() {
    return (
        <section id="oferta" className="py-20 sm:py-24 bg-secondary/50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <Card className="border-primary/50 border-2 shadow-2xl shadow-primary/20 bg-background overflow-hidden">
                        <CardHeader className="text-center p-8">
                            <h2 className="text-3xl font-black tracking-tight sm:text-4xl text-foreground">O Arsenal da Sua Aprovação</h2>
                            <p className="mt-4 text-lg text-muted-foreground">Clique nas abas e descubra o poder do nosso método. Tudo o que você precisa está aqui.</p>
                        </CardHeader>
                        <CardContent className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                            <Tabs defaultValue="strategy" className="w-full">
                                <TabsList className="grid w-full grid-cols-3 mb-6">
                                    <TabsTrigger value="strategy">Estratégia</TabsTrigger>
                                    <TabsTrigger value="neuroscience">Mente</TabsTrigger>
                                    <TabsTrigger value="writing">Redação</TabsTrigger>
                                </TabsList>
                                {Object.entries(TABS_CONTENT).map(([key, tab]) => (
                                    <TabsContent key={key} value={key}>
                                        <div className="flex items-center gap-4 mb-4">
                                             <div className="flex-shrink-0 p-2 bg-primary/10 rounded-full">
                                                <tab.icon className="w-6 h-6 text-primary" />
                                            </div>
                                            <h3 className="font-bold text-xl text-foreground">{tab.title}</h3>
                                        </div>
                                        <ul className="space-y-3 text-muted-foreground">
                                            {tab.features.map((feature) => (
                                                <li key={feature} className="flex items-start gap-3">
                                                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </TabsContent>
                                ))}
                            </Tabs>
                            <div className="text-center bg-secondary/50 rounded-lg p-8 border-2 border-primary/20 sticky top-10">
                                <p className="text-muted-foreground">De <span className="line-through text-destructive">R$47,00</span> por apenas:</p>
                                <p className="text-6xl sm:text-7xl font-black my-2">
                                    <span className="text-primary animate-pulse">R$17</span>
                                </p>
                                <p className="text-muted-foreground mb-6">Pagamento único, acesso vitalício.</p>
                                <Button
                                    asChild
                                    size="lg"
                                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-xl font-bold shadow-lg shadow-accent/20 py-7"
                                >
                                    <a href="#cta">
                                        <Zap className="mr-2"/>
                                        QUERO APROVAÇÃO
                                        <ArrowRight className="ml-2"/>
                                    </a>
                                </Button>
                                <p className="mt-3 text-xs text-muted-foreground">Garantia incondicional de 7 dias.</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
