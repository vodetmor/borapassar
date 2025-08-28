import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Os mapas mentais são um produto separado?',
    answer: 'Eles eram vendidos separadamente por R$67, mas ao garantir seu acesso ao Plano Premium hoje, você os recebe como um bônus, totalmente de graça. É um arsenal completo que se integra ao método principal.',
  },
  {
    question: 'Como eu acesso os +400 mapas mentais?',
    answer: 'Assim que você adquire o Plano Premium, eles são liberados instantaneamente na sua Área de Membros, junto com o guia principal. Estão organizados por matéria para você encontrar exatamente o que precisa, de forma rápida e fácil.',
  },
  {
    question: 'Os mapas cobrem todas as matérias do ENEM?',
    answer: 'Sim. O pacote inclui mais de 400 mapas mentais que cobrem os tópicos de maior incidência em todas as áreas do conhecimento: Ciências da Natureza, Ciências Humanas, Linguagens e Matemática. É a cobertura completa que você precisa.',
  },
  {
    question: 'Eu realmente preciso dos mapas ou só o guia já basta?',
    answer: 'O guia principal é a estratégia, o "como" estudar. Os mapas mentais são a aceleração, o "o quê" estudar de forma visual e rápida. Usar os dois juntos é a combinação que coloca você na frente de 99% dos concorrentes. Um potencializa o outro.',
  },
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
    answer: 'Totalmente segura. Utilizamos a principal plataforma de pagamentos, a mesma usada por gigantes do mercado. Seu único foco deve ser em seguir o método rumo à aprovação. Deixe a tecnologia de segurança conosco.',
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
