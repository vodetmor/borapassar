
"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

declare global {
  interface Window {
    fbq: (...args: any[]) => void;
  }
}

export function MetaPixelEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // The first page view is tracked in layout.tsx's script
    // This hook is for tracking subsequent client-side navigations
    if (typeof window.fbq !== 'function') {
      return;
    }
    window.fbq('track', 'PageView');

  }, [pathname, searchParams]);

  // This component doesn't render anything to the DOM
  return null;
}
