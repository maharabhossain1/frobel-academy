"use client";

import { useEffect, useRef, useState } from "react";

export function SpotlightReveal() {
  const spotlightRef = useRef<HTMLDivElement>(null);
  const [isUserMotion, setIsUserMotion] = useState(false);

  useEffect(() => {
    const spotlight = spotlightRef.current;
    if (!spotlight) return;

    // Mouse/Touch move handler
    const move = (e: MouseEvent | TouchEvent) => {
      setIsUserMotion(true);

      const x = "touches" in e ? e.touches[0].clientX : e.clientX;
      const y = "touches" in e ? e.touches[0].clientY : e.clientY;

      spotlight.style.setProperty("--x", `${x}px`);
      spotlight.style.setProperty("--y", `${y}px`);
    };

    // Auto-run animation on first load
    const startTime = Date.now();
    let animationFrame: number;

    const autorun = () => {
      const now = Date.now();
      if (!isUserMotion && now <= startTime + 3000) {
        const progress = (now - startTime) / 6000;
        spotlight.style.setProperty("--x", `${progress * 100}%`);
        spotlight.style.setProperty("--y", "50%");
        animationFrame = requestAnimationFrame(autorun);
      }
    };

    autorun();

    // Event listeners
    if (window.PointerEvent) {
      spotlight.addEventListener("pointermove", move as any);
    } else {
      spotlight.addEventListener("touchmove", move as any);
      spotlight.addEventListener("mousemove", move as any);
    }

    return () => {
      cancelAnimationFrame(animationFrame);
      spotlight.removeEventListener("pointermove", move as any);
      spotlight.removeEventListener("touchmove", move as any);
      spotlight.removeEventListener("mousemove", move as any);
    };
  }, [isUserMotion]);

  return (
    <div
      ref={spotlightRef}
      className="spotlight-reveal"
      style={
        {
          "--x": "50%",
          "--y": "50%",
        } as React.CSSProperties
      }
    />
  );
}
