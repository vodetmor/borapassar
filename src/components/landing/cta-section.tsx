import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function CtaSection() {
  return (
    <section id="cta" className="py-20 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-black sm:text-5xl lg:text-6xl tracking-tighter">
          A decisão é <span className="text-primary">sua</span>. O futuro também.
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground sm:text-xl">
         Continue perdendo tempo com métodos que não funcionam ou tome a decisão que vai colocar seu nome na lista de aprovados. O tempo está passando.
        </p>
        <div className="mt-10">
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 animate-pulse-cta rounded-full text-xl font-bold shadow-xl shadow-accent/20 px-12 py-8"
          >
            <a href="#">
              DESTRAVAR MINHA APROVAÇÃO AGORA!
              <ArrowRight className="ml-2" />
            </a>
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">Vagas se encerrando | Acesso imediato | Risco zero</p>
        </div>
      </div>
    </section>
  );
}
