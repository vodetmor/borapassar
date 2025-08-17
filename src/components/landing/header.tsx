"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { LogIn } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Header() {
  return (
    <header className={cn("bg-transparent")}>
      <div className="container mx-auto px-4 flex justify-end items-center h-16 sm:h-20">
        <Button asChild variant="outline" className="border-primary/30 hover:bg-primary/10 hover:text-primary transition-all text-xs sm:text-sm h-8 sm:h-10 px-3 sm:px-4">
          <Link href="/login">
            <LogIn className="mr-0 sm:mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Área de Membros</span>
          </Link>
        </Button>
      </div>
    </header>
  );
}
