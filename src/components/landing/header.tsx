import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <a href="#" className="text-xl font-bold text-primary">
          Exam Conqueror
        </a>
        <Button
          asChild
          className="bg-accent text-accent-foreground hover:bg-accent/90 animate-pulse-cta rounded-full shadow-lg shadow-accent/20"
        >
          <a href="#cta">QUERO MINHA APROVAÇÃO</a>
        </Button>
      </div>
    </header>
  );
}
