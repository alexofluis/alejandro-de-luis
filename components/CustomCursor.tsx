"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLImageElement>(null);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const moveCursor = (e: MouseEvent) => {
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
    };

    const isFadeTarget = (el: EventTarget | null) => {
      if (!(el instanceof Element)) return false;
      return !!el.closest(
        "a, img, button, [role='button'], input, textarea, select, .cursor-zoom-in, .cursor-zoom-out"
      );
    };

    const handleOver = (e: MouseEvent) => {
      if (isFadeTarget(e.target)) setFading(true);
    };

    const handleOut = (e: MouseEvent) => {
      if (isFadeTarget(e.target)) setFading(false);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleOver);
    window.addEventListener("mouseout", handleOut);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleOver);
      window.removeEventListener("mouseout", handleOut);
    };
  }, []);

  return (
    <img
      ref={cursorRef}
      src="/icons/calvo.png"
      alt=""
      aria-hidden
      className={`custom-cursor ${fading ? "custom-cursor--fade" : ""}`}
    />
  );
}
