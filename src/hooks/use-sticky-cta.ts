
"use client";

import { useState, useEffect } from 'react';

export function useStickyCta() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = window.scrollY;
      const offerSection = document.getElementById('oferta');
      
      let offerSectionVisible = false;
      if (offerSection) {
        const { top, bottom } = offerSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        offerSectionVisible = top < windowHeight && bottom > 0;
      }
      
      if (scrolled > 400 && !offerSectionVisible) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    toggleVisibility(); // Run on mount to set initial state

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return { isVisible };
}
