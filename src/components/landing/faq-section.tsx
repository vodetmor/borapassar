import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Isso é só mais um cursinho ou livro chato?',
    answer: 'Não. É um sistema de ataque. Uma área de membros com um guia estratégico, direto ao ponto, que você acessa na hora. Sem enrolação, sem conteúdo inútil. É o mapa da mina para a sua aprovação, para acessar no celular, tablet ou onde quiser.',
  },
  {
    question: 'Eu procrastino muito, vai funcionar pra mim?',
    answer: 'Este guia foi desenhado para procrastinadores crônicos. As técnicas são brutais e eficazes. Se você se sente um caso perdido, este é exatamente o método que vai reprogramar sua mente para a ação.',
  },
  {
    question: 'A compra é segura ou vou cair em golpe?',
    answer: 'Totalmente. Utilizamos a principal plataforma de pagamentos da América Latina, a mesma usada por gigantes do mercado. Seu único foco deve ser em seguir o método rumo à aprovação. Deixe a tecnologia de segurança conosco.',
  },
  {
    question: 'E se eu não gostar? Qual a garantia?',
    answer: 'Risco zero. Você tem 7 dias de garantia incondicional. Se você não sentir uma transformação na sua forma de estudar e nos seus resultados, é só pedir seu dinheiro de volta. Sem perguntas, sem estresse. Ou você ama, ou seu dinheiro volta. Simples assim.',
  },
    {
    question: 'Em quanto tempo vejo resultados?',
    answer: 'Se você aplicar o que está no guia, os resultados de foco e organização são imediatos. Em poucas semanas, sua retenção de conteúdo e velocidade de estudo terão aumentado drasticamente. A aprovação é uma consequência inevitável da aplicação do método.',
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Sem Desculpas. Sem Dúvidas.</h2>
          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground">
            Respostas rápidas para você parar de pensar e começar a agir.
          </p>
        </div>
        <div className="mt-12 max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-base sm:text-lg text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-muted-foreground">
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
