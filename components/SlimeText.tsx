"use client";

import { useRef, useState } from "react";

export default function SlimeText({ text }: { text: string }) {
  const wrapperRef = useRef<HTMLSpanElement>(null);
  const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);
  const colorsRef = useRef<string[]>(
    text.split("").map(() => `hsl(${Math.floor(Math.random() * 360)}, 75%, 50%)`)
  );
  const [hovering, setHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLSpanElement>) => {
    lettersRef.current.forEach((el, i) => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      const radius = 26;
      const falloff = Math.max(0, 1 - distance / radius);

      const rotateY = (dx / radius) * 16 * falloff;
      const rotateX = (-dy / radius) * 16 * falloff;
      const scale = 1 + 0.22 * falloff;
      const translateY = -5 * falloff;

      el.style.transform = `perspective(300px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale}) translateY(${translateY}px)`;
      el.style.color = falloff > 0.05 ? colorsRef.current[i] : "";
    });
  };

  const handleMouseEnter = () => setHovering(true);

  const handleMouseLeave = () => {
    setHovering(false);
    lettersRef.current.forEach((el) => {
      if (!el) return;
      el.style.transform = "perspective(300px) rotateX(0deg) rotateY(0deg) scale(1) translateY(0px)";
      el.style.color = "";
    });
  };

  return (
    <span
      ref={wrapperRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
      data-hovering={hovering}
    >
      {text.split("").map((char, i) => (
        <span
          key={i}
          ref={(el) => {
            lettersRef.current[i] = el;
          }}
          className="slime-letter inline-block"
          style={char === " " ? { whiteSpace: "pre" } : undefined}
        >
          {char}
        </span>
      ))}
    </span>
  );
}
