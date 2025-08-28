
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { XCircle, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ComparisonSection() {
  return (
    <section id="comparacao" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Existem dois caminhos. Qual o seu?</h2>
          <p className="mt-4 max-w-3xl mx-auto text-base sm:text-lg text-muted-foreground">
            De um lado, o método tradicional da força bruta. Do outro, a estratégia que GERA RESULTADOS.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="border-destructive/50 border-2 bg-destructive/10">
            <CardHeader>
              <div className="flex items-center gap-4">
                <XCircle className="w-8 h-8 sm:w-10 sm:h-10 text-destructive" />
                <CardTitle className="text-xl sm:text-2xl font-bold">O Estudante Comum</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 text-sm sm:text-base text-muted-foreground">
              <p>❌ Estuda 10h por dia e sente que não aprendeu nada.</p>
              <p>❌ Lê, relê, grifa... e esquece tudo na semana seguinte.</p>
              <p>❌ Tira 500 em matemática e acha que é "de humanas".</p>
              <p>❌ Zera a redação por não saber argumentar.</p>
              <p>❌ Nem quer saber dos +400 resumos, prefere procurar material por conta própria.</p>
              <p>❌ Chega na prova exausto, ansioso e sem confiança.</p>
              <p className="text-sm sm:text-lg font-bold text-center text-red-400 pt-4">Resultado: Mais um ano de cursinho em vão.</p>
            </CardContent>
          </Card>
          <Card className="border-primary/50 border-2 bg-primary/10">
            <CardHeader>
               <div className="flex items-center gap-4">
                <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                <CardTitle className="text-xl sm:text-2xl font-bold">O Aluno Estratégico</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 text-sm sm:text-base text-foreground">
              <p>✅ Usa a metodologia 30-70 para estudar com foco total.</p>
              <p>✅ Aplica Active Recall e fixa o conteúdo para sempre.</p>
              <p>✅ Salta para +800 em matemática usando a lógica certa.</p>
              <p>✅ Tira +960 na redação com um modelo validado.</p>
              <p>✅ Compra e usa os +400 resumos para aprender toda a matéria em tempo recorde.</p>
              <p>✅ Chega na prova calmo, no controle e pronto para destruir.</p>
               <p className="text-sm sm:text-lg font-bold text-center text-primary pt-4">Resultado: Aprovado na Universidade dos Sonhos.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
