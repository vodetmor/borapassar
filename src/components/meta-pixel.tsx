'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export function MetaPixel() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // The initial 'PageView' is fired in the script in layout.tsx.
    // This effect is responsible for tracking subsequent page views in the SPA.
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'PageView');
    }
  }, [pathname, searchParams])

  return null
}
