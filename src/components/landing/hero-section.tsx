import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section id="atencao" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-black sm:text-6xl lg:text-7xl tracking-tighter">
          Seu futuro está sendo{' '}
          <span className="text-primary">cancelado</span> a cada minuto que você perde.
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground sm:text-xl">
          O relógio está correndo. Cada dia sem estudar é um passo para trás. A faculdade dos seus sonhos não vai esperar por você. Acorde agora ou se arrependa depois.
        </p>
        <div className="mt-10">
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 animate-pulse-cta rounded-full text-lg font-bold shadow-xl shadow-accent/20 px-10 py-6"
          >
            <a href="#cta">DESTRAVE SUA APROVAÇÃO AGORA</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
