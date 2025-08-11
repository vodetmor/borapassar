import { Button } from '@/components/ui/button';

export function VslSection() {
  return (
    <section id="vsl" className="py-12 sm:py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl font-black sm:text-4xl lg:text-5xl tracking-tight">
          O Método Secreto para ser Aprovado em{' '}
          <span className="text-primary">qualquer</span> Vestibular
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground sm:text-xl">
          Mesmo que você procrastine, não consiga se concentrar e acredite que não é inteligente o suficiente. Assista ao vídeo abaixo para entender.
        </p>

        <div className="mt-8 mb-8 aspect-video max-w-4xl mx-auto">
          <div className="w-full h-full bg-muted rounded-lg flex items-center justify-center">
             <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="mt-10">
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 animate-pulse-cta rounded-full text-lg font-bold shadow-xl shadow-accent/20 px-10 py-6"
          >
            <a href="#cta">QUERO ACESSO AO MÉTODO</a>
          </Button>
          <p className="mt-2 text-sm text-muted-foreground">Vagas quase preenchidas!</p>
        </div>
      </div>
    </section>
  );
}
