"use client";

import React, { useState, useEffect } from 'react';

const GraduationCap = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-graduation-cap"
  >
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3.33 1.67 6.67 1.67 10 0v-5" />
  </svg>
);

const FallingCaps = () => {
  const [caps, setCaps] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    const generateCaps = () => {
      const capCount = 20; 
      const newCaps = Array.from({ length: capCount }).map((_, i) => {
        const style = {
          left: `${Math.random() * 100}vw`,
          animationDuration: `${Math.random() * 5 + 8}s`,
          animationDelay: `${Math.random() * 5}s`,
          transform: `scale(${Math.random() * 0.5 + 0.5})`,
        };
        return (
          <div key={i} className="cap" style={style}>
            <GraduationCap />
          </div>
        );
      });
      setCaps(newCaps);
    };
    
    generateCaps();
  }, []);

  return <div className="falling-caps-container">{caps}</div>;
};

export default FallingCaps;
