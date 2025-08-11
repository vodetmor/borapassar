import { Button } from '@/components/ui/button';
import { ArrowRight, Zap } from 'lucide-react';

export function CtaSection() {
  return (
    <section id="cta" className="py-20 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-black sm:text-5xl lg:text-6xl tracking-tighter">
          Sua Vaga no ENEM por <span className="text-primary">Menos de um Lanche</span>.
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground sm:text-xl">
         Essa é a sua última chance de adquirir o método completo com um desconto absurdo. O preço vai subir. A decisão é sua, o futuro também.
        </p>
        <div className="mt-10">
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 animate-pulse-cta rounded-full text-xl font-bold shadow-xl shadow-accent/20 px-12 py-8"
          >
            <a href="#">
              <Zap className="mr-2 -ml-2" />
              QUERO MINHA APROVAÇÃO AGORA!
              <ArrowRight className="ml-2 -mr-2" />
            </a>
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">Vagas se encerrando | Acesso vitalício | 7 dias de garantia</p>
        </div>
      </div>
    </section>
  );
}
