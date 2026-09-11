"use client";

import { useEffect, useState } from "react";

const PHRASE = "alejandrodeluis";

export default function LoadingScreen({ children }: { children: React.ReactNode }) {
  const [phrase, setPhrase] = useState("");
  const [loading, setLoading] = useState(true);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    setPhrase(PHRASE);
    const fadeTimer = setTimeout(() => setFadingOut(true), 2000);
    const hideTimer = setTimeout(() => setLoading(false), 2400);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const letters = phrase.split("");

  return (
    <>
      {loading && (
        <div
          className={`fixed inset-0 z-[9999] bg-white flex items-center justify-center px-6 transition-opacity duration-[400ms] ease-in-out ${
            fadingOut ? "opacity-0" : "opacity-100"
          }`}
        >
          <span className="loading-headline text-black font-bold text-center">
            {letters.map((char, i) => (
              <span key={i} className="loading-letter" style={{ animationDelay: `${i * 0.03}s` }}>
                {char === " " ? " " : char}
              </span>
            ))}
          </span>
        </div>
      )}
      <div className={loading ? "invisible" : "visible"}>{children}</div>
    </>
  );
}
