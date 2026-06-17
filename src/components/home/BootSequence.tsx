"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Typewriter } from "@/components/ui/Typewriter";
import { profile } from "@/data/profile";

const bootLines = [
  "INITIALIZING PROFILE SYSTEM...",
  "",
  "USER IDENTIFIED",
  "",
  `NAME: ${profile.name.toUpperCase()}`,
  `CLASS: ${profile.class.toUpperCase()}`,
  `SUBCLASS: ${profile.subclass.toUpperCase()}`,
  `ALIGNMENT: ${profile.alignment.toUpperCase()}`,
  "",
  "CURRENT MISSION:",
  profile.currentMission,
  "",
  "EVOLUTION PATH:",
  profile.evolutionPath.join(" → "),
];

interface BootSequenceProps {
  onComplete: () => void;
}

export function BootSequence({ onComplete }: BootSequenceProps) {
  const [finished, setFinished] = useState(false);

  return (
    <AnimatePresence>
      {!finished && (
        <motion.div
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.6 }}
          className="flex min-h-[60vh] flex-col items-center justify-center px-4"
        >
          <div className="w-full max-w-2xl rounded-xl border border-glass-border bg-glass p-6 sm:p-8">
            <div className="mb-4 flex items-center gap-2">
              <div className="h-2 w-2 animate-pulse-glow rounded-full bg-accent" />
              <span className="font-mono text-xs text-muted">SYSTEM BOOT</span>
            </div>
            <Typewriter
              lines={bootLines}
              speed={25}
              onComplete={() => {
                setTimeout(() => {
                  setFinished(true);
                  onComplete();
                }, 800);
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
