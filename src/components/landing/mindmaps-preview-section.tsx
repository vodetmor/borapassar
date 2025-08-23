
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const previews = [
    { src: 'https://i.imgur.com/kS9QW4q.png', alt: 'Mapa Mental de Biologia', hint: 'mind map biology' },
    { src: 'https://i.imgur.com/g8vB5iN.png', alt: 'Mapa Mental de Química', hint: 'mind map chemistry' },
    { src: 'https://i.imgur.com/Duvf8fg.png', alt: 'Mapa Mental de História', hint: 'mind map history' },
];

export function MindMapsPreviewSection() {
    return (
        <section id="previa-mapas" className="py-16 sm:py-24 bg-secondary">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                        <span className="text-primary">BÔNUS PREMIUM:</span> O Arsenal Visual com +400 Mapas Mentais
                    </h2>
                    <p className="mt-4 max-w-3xl mx-auto text-base sm:text-lg text-muted-foreground">
                        Absorva o conteúdo de um ano inteiro em poucas horas. Nossos mapas mentais transformam tópicos complexos em resumos visuais fáceis de memorizar.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                    {previews.map((preview, index) => (
                        <Card key={index} className="overflow-hidden group border-primary/20 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/20">
                            <CardContent className="p-0">
                                <Image
                                    src={preview.src}
                                    alt={preview.alt}
                                    width={800}
                                    height={800}
                                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                                    data-ai-hint={preview.hint}
                                />
                            </CardContent>
                        </Card>
                    ))}
                </div>
                 <div className="mt-12 text-center">
                    <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-sm sm:text-lg font-bold shadow-xl shadow-accent/20 px-6 py-4 sm:px-8 sm:py-6 rounded-full animate-pulse-cta">
                        <a href="#oferta">
                            QUERO OS MAPAS MENTAIS AGORA
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
}
