"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { collaborations } from "@/data/collaborations";

export function CollaborationFiles() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div>
      <SectionHeader
        title="COLLABORATION FILES"
        subtitle="Leadership, teamwork, and cross-functional execution across organizations."
      />

      <div className="space-y-3">
        {collaborations.map((item, i) => (
          <GlassCard
            key={item.id}
            delay={i * 0.08}
            onClick={() => setExpanded(expanded === item.id ? null : item.id)}
            className="cursor-pointer"
          >
            <div className="flex items-start gap-3">
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-mono text-xs text-muted">
                      FILE://{item.id.toUpperCase()}
                    </p>
                    <h3 className="mt-0.5 text-base font-semibold sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="font-mono text-sm text-accent">
                      {item.organization}
                    </p>
                  </div>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-muted transition-transform ${
                      expanded === item.id ? "rotate-180" : ""
                    }`}
                  />
                </div>

                <AnimatePresence>
                  {expanded === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 space-y-3 border-t border-glass-border pt-4">
                        <p className="text-sm text-foreground/80">
                          {item.description}
                        </p>
                        <ul className="space-y-1.5">
                          {item.highlights.map((h) => (
                            <li
                              key={h}
                              className="flex items-start gap-2 text-sm text-muted"
                            >
                              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                              {h}
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded bg-chip px-2 py-0.5 font-mono text-xs text-muted"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
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
