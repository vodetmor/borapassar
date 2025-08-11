import { Button } from '@/components/ui/button';

export function CtaSection() {
  return (
    <section id="cta" className="py-20 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-black sm:text-5xl lg:text-6xl tracking-tighter">
          Sua aprovação está a <span className="text-primary">um clique</span> de distância.
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground sm:text-xl">
          Chega de desculpas. Chega de "amanhã eu começo". Seu futuro é decidido AGORA.
        </p>
        <div className="mt-10">
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 animate-pulse-cta rounded-full text-xl font-bold shadow-xl shadow-accent/20 px-12 py-8"
          >
            <a href="#">QUERO MEU GUIA AGORA!</a>
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">Compra segura | Acesso imediato | Garantia de 7 dias</p>
        </div>
      </div>
    </section>
  );
}
