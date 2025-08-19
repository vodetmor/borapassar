
'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import Script from 'next/script'
import { useEffect, useState } from 'react'

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || '2208909466198043';

export const MetaPixel = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!isLoaded) return;
    
    const fbq = (window as any).fbq;
    if(fbq) {
        fbq('track', 'PageView');
    }

  }, [pathname, searchParams, isLoaded]);

  return (
    <>
      <Script
        id="meta-pixel"
        src="https://connect.facebook.net/en_US/fbevents.js"
        onLoad={() => {
            const fbq = (window as any).fbq;
            if (fbq) return;
            
            const newFbq = function(...args: any[]) {
                (newFbq as any).callMethod ?
                (newFbq as any).callMethod.apply(newFbq, args) : (newFbq as any).queue.push(args)
            };
            
            if (!(window as any)._fbq) {
                (window as any)._fbq = newFbq;
                newFbq.push = newFbq;
                newFbq.loaded = true;
                newFbq.version = '2.0';
                newFbq.queue = [];
            }
            
            (window as any).fbq = (window as any).fbq || newFbq;

            (window as any).fbq('init', PIXEL_ID);
            (window as any).fbq('track', 'PageView');

            setIsLoaded(true);
        }}
        strategy="afterInteractive"
      />
      <noscript>
          <img height="1" width="1" style={{display: 'none'}}
            src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
          />
      </noscript>
    </>
  );
};
