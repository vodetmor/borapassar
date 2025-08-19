
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
    // The initial PageView is fired by the script in layout.tsx
    // This useEffect is to track subsequent client-side navigations
    if (typeof window.fbq !== 'function') {
      return;
    }
    // We trigger a page view event every time the path changes.
    window.fbq('track', 'PageView');

  }, [pathname, searchParams]);

  // This component doesn't render anything to the DOM
  return null;
}
