
"use client";

import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';
import { Timer } from 'lucide-react';

function CountdownTimer() {
    const [timeLeft, setTimeLeft] = useState({
        hours: 1,
        minutes: 30,
        seconds: 0,
    });

    useEffect(() => {
        let endTime = localStorage.getItem('promoEndTime');
        if (!endTime) {
            endTime = String(Date.now() + 90 * 60 * 1000); // 90 minutes from now
            localStorage.setItem('promoEndTime', endTime);
        }

        const interval = setInterval(() => {
            const now = Date.now();
            const remainingTime = Number(endTime) - now;

            if (remainingTime <= 0) {
                clearInterval(interval);
                setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((remainingTime / 1000 / 60) % 60);
            const seconds = Math.floor((remainingTime / 1000) % 60);

            setTimeLeft({ hours, minutes, seconds });

        }, 1000);

        return () => clearInterval(interval);

    }, []);

    return (
        <div className="flex items-center justify-center gap-2 sm:gap-4 text-sm sm:text-base">
            <Timer className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse" />
            <span>A OFERTA TERMINA EM:</span>
            <span className="font-mono tracking-widest text-base sm:text-lg">
                {String(timeLeft.hours).padStart(2, '0')}:
                {String(timeLeft.minutes).padStart(2, '0')}:
                {String(timeLeft.seconds).padStart(2, '0')}
            </span>
        </div>
    );
}


export function Header() {
  return (
    <header className={cn("bg-red-600 text-white font-bold w-full z-20")}>
      <div className="container mx-auto px-4 flex justify-center items-center h-12">
        <CountdownTimer />
      </div>
    </header>
  );
}
