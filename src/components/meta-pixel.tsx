
'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

// This is a global type declaration. It tells TypeScript that the `fbq` function exists on the `window` object.
declare global {
  interface Window {
    fbq: (...args: any[]) => void;
  }
}

export function MetaPixelEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // The `fbq` function might not be available immediately, so we check for its existence.
    // The initial PageView is fired by the script in `layout.tsx`, so this hook handles subsequent navigations.
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'PageView');
    }
  }, [pathname, searchParams]); // The effect runs every time the path or search parameters change.

  return null; // This component does not render anything visible.
}
