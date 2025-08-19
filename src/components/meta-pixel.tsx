
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
    // The `fbq` function might not be available immediately on the first load, 
    // as it's initialized by the script in layout.tsx.
    // The initial PageView is fired there. This effect handles subsequent navigations.
    if (typeof window.fbq === 'function') {
      // We wrap this in a try-catch block to prevent any errors from crashing the app.
      try {
        window.fbq('track', 'PageView');
      } catch (error) {
        console.error('Failed to track PageView with Meta Pixel:', error);
      }
    }
  }, [pathname, searchParams]); // The effect runs every time the path or search parameters change.

  return null; // This component does not render anything visible.
}
