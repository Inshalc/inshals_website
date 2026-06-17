"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getTimelineByYear } from "@/data/timeline";

const typeColors = {
  education: "border-blue-400/50 bg-blue-400/10",
  leadership: "border-purple-400/50 bg-purple-400/10",
  internship: "border-green-400/50 bg-green-400/10",
  award: "border-yellow-400/50 bg-yellow-400/10",
  career: "border-accent/50 bg-accent/10",
};

export function EvolutionTimeline() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const yearGroups = getTimelineByYear();

  return (
    <div className="relative">
      <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-foreground/10 to-transparent sm:left-6" />

      <div className="space-y-10">
        {yearGroups.map((group, groupIndex) => (
          <div key={group.year} className="relative">
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIndex * 0.05 }}
              className="mb-5 pl-10 sm:pl-14"
            >
              <p className="font-mono text-2xl font-semibold tracking-tight text-foreground/90 sm:text-3xl">
                {group.year}
              </p>
              <div className="mt-1 h-px w-16 bg-accent/40" />
            </motion.div>

            <div className="space-y-6">
              {group.milestones.map((milestone, i) => (
                <motion.div
                  key={milestone.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: groupIndex * 0.05 + i * 0.08 }}
                  className="relative pl-10 sm:pl-14"
                >
                  <div
                    className={`absolute left-2.5 top-2 h-3 w-3 rounded-full border-2 sm:left-4.5 ${
                      typeColors[milestone.type]
                    }`}
                  />

                  <button
                    onClick={() =>
                      setExpanded(
                        expanded === milestone.id ? null : milestone.id
                      )
                    }
                    className="w-full text-left"
                  >
                    <h3 className="text-base font-semibold sm:text-lg">
                      {milestone.title}
                    </h3>
                    <p className="font-mono text-sm text-muted">
                      {milestone.subtitle}
                    </p>
                  </button>

                  <AnimatePresence>
                    {expanded === milestone.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-3 rounded-lg border border-glass-border bg-glass p-4">
                          <p className="text-sm leading-relaxed text-foreground/80">
                            {milestone.narrative}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
