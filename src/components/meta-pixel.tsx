
'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

declare global {
    interface Window {
        fbq?: (...args: any[]) => void;
    }
}


export const MetaPixel = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (typeof window.fbq !== 'function') {
      return;
    }
    window.fbq('track', 'PageView');
  }, [pathname, searchParams])

  return null;
}
