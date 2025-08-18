
"use client";

import Image from 'next/image';
import Link from 'next/link';

export function WhatsAppButton() {
  const phoneNumber = "5516989059392";
  const message = "Olá! Tenho uma dúvida sobre o Guia Definitivo e gostaria de suporte.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 group">
        <div className="bg-green-500 rounded-full p-3 shadow-lg transform group-hover:scale-110 transition-transform duration-200">
            <Image
                src="https://i.imgur.com/YxNIgA5.png"
                alt="WhatsApp Support"
                width={40}
                height={40}
                data-ai-hint="whatsapp logo"
            />
        </div>
        <span className="absolute bottom-1/2 right-full mr-4 translate-y-1/2 bg-black text-white text-xs font-semibold px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
            Falar com Suporte
        </span>
    </Link>
  );
}
