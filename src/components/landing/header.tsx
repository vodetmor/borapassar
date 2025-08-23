
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { LogIn, Timer } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

function CountdownTimer() {
    const [timeLeft, setTimeLeft] = useState({
        minutes: 90,
        seconds: 0,
    });

    useEffect(() => {
        let endTime = localStorage.getItem('promoEndTime');
        if (!endTime) {
            endTime = String(Date.now() + 90 * 60 * 1000);
            localStorage.setItem('promoEndTime', endTime);
        }

        const interval = setInterval(() => {
            const now = Date.now();
            const remainingTime = Number(endTime) - now;

            if (remainingTime <= 0) {
                clearInterval(interval);
                setTimeLeft({ minutes: 0, seconds: 0 });
                return;
            }

            const minutes = Math.floor((remainingTime / 1000 / 60) % 60);
            const seconds = Math.floor((remainingTime / 1000) % 60);
            const totalMinutes = Math.floor(remainingTime / 1000 / 60);

            setTimeLeft({ minutes: totalMinutes, seconds: seconds });

        }, 1000);

        return () => clearInterval(interval);

    }, []);

    return (
        <div className="flex items-center gap-2 bg-red-600/20 border border-red-500 text-red-400 font-bold rounded-full px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm">
            <Timer className="w-4 h-4 sm:w-5 sm:h-5 animate-pulse" />
            <div className="flex flex-col sm:flex-row sm:gap-1 items-center">
                 <span className="hidden sm:inline">A oferta acaba em:</span>
                 <span className="font-mono tracking-widest">
                    {String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
                </span>
            </div>
        </div>
    );
}


export function Header() {
  return (
    <header className={cn("bg-transparent")}>
      <div className="container mx-auto px-4 flex justify-between items-center h-16 sm:h-20">
        <CountdownTimer />
        <Button 
          asChild 
          variant="outline" 
          className="border-primary/30 hover:bg-primary/10 hover:text-primary transition-all w-auto text-sm h-10 sm:h-10 px-3 sm:px-4"
        >
          <Link href="/login">
            <LogIn className="mr-2 h-4 w-4" />
            <span>Área de Membros</span>
          </Link>
        </Button>
      </div>
    </header>
  );
}
