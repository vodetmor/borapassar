"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

// Define window.fbq for TypeScript
declare global {
  interface Window {
    fbq: (...args: any[]) => void;
  }
}

export function MetaPixelEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // This hook is used to track page views on client-side navigation.
    // The initial PageView is fired by the script in layout.tsx.
    // This is only for subsequent route changes.
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'PageView');
    }
  }, [pathname, searchParams]);

  // This component doesn't render anything to the DOM
  return null;
}
