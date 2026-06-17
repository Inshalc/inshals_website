"use client";

import { useState, useEffect, useRef } from "react";

interface TypewriterProps {
  lines: string[];
  speed?: number;
  onComplete?: () => void;
  className?: string;
}

export function Typewriter({
  lines,
  speed = 40,
  onComplete,
  className,
}: TypewriterProps) {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayed, setDisplayed] = useState<string[]>([]);
  const completedRef = useRef(false);

  const done = lineIndex >= lines.length;

  useEffect(() => {
    if (done && !completedRef.current) {
      completedRef.current = true;
      onComplete?.();
    }
  }, [done, onComplete]);

  useEffect(() => {
    if (done) return;

    const currentLine = lines[lineIndex];
    if (charIndex < currentLine.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => {
          const updated = [...prev];
          updated[lineIndex] = currentLine.slice(0, charIndex + 1);
          return updated;
        });
        setCharIndex((c) => c + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setLineIndex((l) => l + 1);
      setCharIndex(0);
    }, 300);
    return () => clearTimeout(timeout);
  }, [lineIndex, charIndex, lines, speed, done]);

  return (
    <div className={className}>
      {displayed.map((line, i) => (
        <p key={i} className="font-mono text-sm leading-relaxed text-foreground/90 sm:text-base">
          {line}
          {i === lineIndex && !done && <span className="cursor-blink" />}
        </p>
      ))}
    </div>
  );
}
