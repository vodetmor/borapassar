import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function VslSection() {
  return (
    <section id="vsl" className="py-12 sm:py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl font-black sm:text-4xl lg:text-5xl tracking-tight">
          O Sistema de Estudo que Transforma <span className="text-primary">Perdedores de Tempo</span> em <span className="text-accent">Aprovados</span> em Tempo Recorde
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground sm:text-xl">
          Se você está cansado de se sentir um fracasso nos estudos, este vídeo de 1 minuto vai te mostrar a chave para destravar seu potencial. Assista AGORA.
        </p>

        <div className="mt-8 mb-8 aspect-video max-w-4xl mx-auto">
          <div className="w-full h-full bg-muted rounded-lg flex items-center justify-center shadow-2xl shadow-primary/20">
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
            <a href="#cta">
              QUERO MINHA APROVAÇÃO IMEDIATA
              <ArrowRight className="ml-2"/>
            </a>
          </Button>
          <p className="mt-2 text-sm text-muted-foreground">Aviso: o preço vai subir. Aja rápido.</p>
        </div>
      </div>
    </section>
  );
}
