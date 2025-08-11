import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'O que vou receber exatamente?',
    answer: 'Você receberá acesso imediato a um guia completo e direto ao ponto em formato PDF. Ele é otimizado para ler em qualquer dispositivo: celular, tablet ou computador, para você estudar onde e quando quiser.',
  },
  {
    question: 'Isso funciona para quem procrastina até para decidir o que comer?',
    answer: 'Com certeza! Este guia foi criado especificamente para estudantes que se sentem travados pela procrastinação. As técnicas são simples, práticas e fáceis de aplicar, mesmo que você se considere um caso perdido.',
  },
  {
    question: 'A compra é segura?',
    answer: 'Sim, 100% segura. Usamos a principal plataforma de pagamentos do mercado, com criptografia de ponta para proteger seus dados. Sua segurança é nossa prioridade.',
  },
  {
    question: 'E se não funcionar para mim? Tenho alguma garantia?',
    answer: 'Sim! Oferecemos uma garantia incondicional de 7 dias. Se, por qualquer motivo, você não sentir uma melhora drástica nos seus estudos e na sua motivação, basta nos enviar um e-mail e devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia. O risco é todo nosso.',
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="py-20 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Perguntas Frequentes</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Ainda tem dúvidas? A gente resolve isso agora.
          </p>
        </div>
        <div className="mt-12 max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
