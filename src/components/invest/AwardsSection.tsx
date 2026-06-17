"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ChevronDown } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { awards } from "@/data/awards";

export function AwardsSection() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="mt-10">
      <p className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">
        Verified Awards
      </p>
      <div className="space-y-3">
        {awards.map((award, i) => (
          <GlassCard
            key={award.id}
            delay={i * 0.1}
            onClick={() => setExpanded(expanded === award.id ? null : award.id)}
            className="cursor-pointer"
          >
            <div className="flex items-start gap-3">
              <Award className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-base font-semibold sm:text-lg">
                      {award.title}
                    </h3>
                    <p className="font-mono text-sm text-muted">
                      {award.issuer} · {award.year}
                    </p>
                  </div>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-muted transition-transform ${
                      expanded === award.id ? "rotate-180" : ""
                    }`}
                  />
                </div>
                <AnimatePresence>
                  {expanded === award.id && (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="mt-3 overflow-hidden text-sm text-foreground/80"
                    >
                      {award.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
