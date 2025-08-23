
"use client";

import { useEffect, useState, useRef } from 'react';
import { ShoppingCart } from 'lucide-react';
import { cn } from '@/lib/utils';

const notifications = [
    "Mariana, Rio de Janeiro",
    "Carlos, São Paulo",
    "Fernanda, Belo Horizonte",
    "Rafael, Curitiba",
    "Ana Paula, Porto Alegre",
    "Gustavo, Salvador",
    "Juliana, Recife",
    "Pedro, Fortaleza",
    "Camila, Manaus",
    "Lucas, Belém",
    "Isabela, Vitória",
    "André, Goiânia",
    "Patrícia, Florianópolis",
    "Vinícius, Natal",
    "Beatriz, Maceió",
    "Rodrigo, Aracaju",
    "Letícia, Campo Grande",
    "Marcelo, João Pessoa",
    "Tatiane, Cuiabá",
    "Eduardo, Teresina",
    "Luana, Palmas",
    "João, Londrina",
    "Sofia, Maringá",
    "Gabriel, Santos",
    "Paula, Niterói",
    "Felipe, Ribeirão Preto",
    "Larissa, Uberlândia",
    "Thiago, Juiz de Fora",
    "Aline, Sorocaba",
    "Henrique, Blumenau",
    "Carolina, Joinville",
    "Mateus, Piracicaba",
    "Vanessa, Bauru",
    "Igor, Montes Claros",
    "Renata, Petrópolis",
    "Bruno, Caxias do Sul",
    "Débora, Franca",
    "Leandro, Volta Redonda",
    "Michele, Jundiaí",
    "César, São José dos Campos",
    "Tatiana, Santo André",
    "Vitor, Campinas",
    "Daniele, Osasco",
    "Caio, São Bernardo do Campo",
    "Elaine, Guarulhos",
    "Ricardo, Diadema",
    "Roberta, Taboão da Serra",
    "Cristiano, Mauá",
    "Fábio, Barueri",
    "Sandra, Carapicuíba",
    "Diego, Mogi das Cruzes",
    "Lívia, São Caetano do Sul",
    "Douglas, Suzano",
    "Priscila, Itapecerica da Serra",
    "Hugo, Cotia",
    "Marcos, Itaquaquecetuba",
    "Kelly, Guarujá",
    "Alex, São Vicente",
    "Natália, Praia Grande",
    "Luciano, Taubaté",
    "Silvia, Marília",
    "Cláudia, Ponta Grossa",
    "Wagner, Cascavel",
    "Mônica, Foz do Iguaçu",
    "Antônio, Pelotas",
    "Daniela, Santa Maria",
    "Márcio, Canoas",
    "Elaisa, Passo Fundo",
    "José, Dourados",
    "Cristina, Rondonópolis",
    "Elias, Rio Branco",
    "Fabiana, Porto Velho",
    "Hélio, Boa Vista",
    "Rute, Macapá",
    "Joice, Anápolis",
    "Maurício, Aparecida de Goiânia",
    "Eliane, Mossoró",
    "Samuel, Petrolina",
    "Viviane, Feira de Santana",
    "Alexandre, Juazeiro do Norte",
    "Cíntia, Sobral",
    "Paulo, Crato",
    "Valéria, Imperatriz",
    "Sandro, Marabá",
    "Tereza, Santarém",
    "Nathalia, Parauapebas",
    "Cauã, Sinop",
    "Regina, Cascavel",
    "Otávio, Chapecó",
    "Ingrid, Criciúma",
    "Clovis, Brusque",
    "Érica, Itajaí",
    "Jonas, Balneário Camboriú",
    "Gisele, Lages",
    "Mauricio, Novo Hamburgo",
    "Suelen, Gravataí",
    "Adriana, Betim",
    "Nelson, Contagem",
    "Rafaela, Ipatinga"
];

export function SocialProofToast() {
  const [activeNotification, setActiveNotification] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const lastIndex = useRef<number | null>(null);
  const mainTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const showRandomNotification = () => {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * notifications.length);
      } while (randomIndex === lastIndex.current);
      lastIndex.current = randomIndex;
      
      setActiveNotification(notifications[randomIndex]);
      setIsVisible(true);

      // Hide notification after 5 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 5000);

      // Schedule next notification
      const randomInterval = Math.random() * (30000 - 15000) + 15000;
      if (mainTimeoutRef.current) clearTimeout(mainTimeoutRef.current);
      mainTimeoutRef.current = setTimeout(showRandomNotification, randomInterval);
    };

    // Initial delay before first notification
    const initialTimeout = setTimeout(showRandomNotification, 5000);

    return () => {
      clearTimeout(initialTimeout);
      if (mainTimeoutRef.current) clearTimeout(mainTimeoutRef.current);
    };
  }, []);

  if (!activeNotification) {
    return null;
  }

  const [name, city] = activeNotification.split(', ');

  return (
    <div
      className={cn(
        'fixed bottom-4 left-4 z-50 w-full max-w-xs p-4 bg-background border border-border rounded-lg shadow-lg transition-transform duration-500 ease-in-out',
        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
      )}
    >
      <div className="flex items-center gap-3">
        <div className="flex-shrink-0 p-2 bg-primary/10 rounded-full">
          <ShoppingCart className="w-5 h-5 text-primary" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-foreground">{name} acabou de comprar</p>
          <p className="text-xs text-muted-foreground">{city}</p>
        </div>
      </div>
    </div>
  );
}
