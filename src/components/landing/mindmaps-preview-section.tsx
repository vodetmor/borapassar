
"use client"

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const mindMaps = [
  { src: 'https://studyet.com.br/wp-content/uploads/2024/03/6-724x1024.jpg', alt: 'Mapa Mental de Circulatório', hint: 'mind map biology' },
  { src: 'https://studyet.com.br/wp-content/uploads/2024/03/9-731x1024.jpg', alt: 'Mapa Mental de Genital Feminino', hint: 'mind map biology' },
  { src: 'https://studyet.com.br/wp-content/uploads/2024/03/10-731x1024.jpg', alt: 'Mapa Mental de 1ª Lei de Mendel', hint: 'mind map genetics' },
  { src: 'https://studyet.com.br/wp-content/uploads/2024/03/8-731x1024.jpg', alt: 'Mapa Mental de Ecologia', hint: 'mind map ecology' },
  { src: 'https://studyet.com.br/wp-content/uploads/2024/03/7-731x1024.jpg', alt: 'Mapa Mental de Química Orgânica', hint: 'mind map chemistry' },
  { src: 'https://studyet.com.br/wp-content/uploads/2024/03/2-731x1024.jpg', alt: 'Mapa Mental de História do Brasil', hint: 'mind map history' },
  { src: 'https://studyet.com.br/wp-content/uploads/2024/03/1-731x1024.jpg', alt: 'Mapa Mental de Filosofia', hint: 'mind map philosophy' },
  { src: 'https://studyet.com.br/wp-content/uploads/2024/03/4-732x1024.jpg', alt: 'Mapa Mental de Física', hint: 'mind map physics' },
  { src: 'https://studyet.com.br/wp-content/uploads/2024/03/5-731x1024.jpg', alt: 'Mapa Mental de Literatura', hint: 'mind map literature' },
];


export function MindMapsPreviewSection() {
    return (
        <section id="previa-mapas" className="py-16 sm:py-24 bg-secondary">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                        <span className="text-primary">BÔNUS PREMIUM:</span> O Arsenal Visual com +400 Mapas Mentais
                    </h2>
                    <p className="mt-4 max-w-3xl mx-auto text-base sm:text-lg text-muted-foreground">
                        Absorva o conteúdo de um ano inteiro em poucas horas. Nossos mapas mentais transformam tópicos complexos em resumos visuais fáceis de memorizar.
                    </p>
                </div>
                <div className="relative flex justify-center items-center">
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        slidesPerView={3}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5,
                        }}
                        pagination={{ el: '.swiper-pagination', clickable: true }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        modules={[EffectCoverflow, Pagination, Navigation]}
                        className="w-full max-w-xs sm:max-w-xl md:max-w-4xl lg:max-w-6xl h-[500px] relative"
                    >
                        {mindMaps.map((map, index) => (
                            <SwiperSlide key={index}>
                                <Card className="overflow-hidden group border-primary/20 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/20 h-full">
                                    <CardContent className="p-0 h-full">
                                        <Image
                                            src={map.src}
                                            alt={map.alt}
                                            width={800}
                                            height={1200}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            data-ai-hint={map.hint}
                                        />
                                    </CardContent>
                                </Card>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                     <div className="swiper-button-prev absolute left-0 sm:-left-8 top-1/2 -translate-y-1/2 z-10 cursor-pointer">
                        <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                            <ChevronLeft className="h-4 w-4" />
                        </Button>
                    </div>
                    <div className="swiper-button-next absolute right-0 sm:-right-8 top-1/2 -translate-y-1/2 z-10 cursor-pointer">
                       <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
                 <div className="mt-12 text-center">
                    <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-sm sm:text-lg font-bold shadow-xl shadow-accent/20 px-6 py-4 sm:px-8 sm:py-6 rounded-full animate-pulse-cta">
                        <a href="#oferta">
                            QUERO OS MAPAS MENTAIS AGORA
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
}
