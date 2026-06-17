"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { operations, type Operation } from "@/data/operations";

const statusLabels: Record<
  Operation["status"],
  { label: string; color: string }
> = {
  completed: { label: "COMPLETED", color: "text-blue-400" },
  stealth: { label: "STEALTH", color: "text-muted" },
};

function getStatus(status: Operation["status"]) {
  return (
    statusLabels[status] ?? {
      label: String(status).toUpperCase(),
      color: "text-muted",
    }
  );
}

export function OperationsGrid() {
  const [selected, setSelected] = useState<string | null>(null);
  const operation = operations.find((op) => op.id === selected);

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {operations.map((op, i) => (
          <GlassCard
            key={op.id}
            delay={i * 0.1}
            onClick={() => setSelected(op.id)}
            className="cursor-pointer group"
          >
            <div className="flex items-start justify-end">
              <span
                className={`font-mono text-xs ${getStatus(op.status).color}`}
              >
                {getStatus(op.status).label}
              </span>
            </div>
            <h3 className="mt-3 text-lg font-semibold transition-colors group-hover:text-accent">
              {op.codename}
            </h3>
            <p className="mt-2 line-clamp-2 text-sm text-muted">
              {op.objective}
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-1.5">
              {op.techStack.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="rounded bg-chip px-2 py-0.5 font-mono text-[10px] text-muted"
                >
                  {tech}
                </span>
              ))}
              {op.github && (
                <span className="font-mono text-[10px] text-muted/60">
                  · repo linked
                </span>
              )}
            </div>
          </GlassCard>
        ))}
      </div>

      <AnimatePresence>
        {operation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-overlay p-4 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg rounded-xl border border-accent/20 bg-surface-elevated p-6 shadow-2xl"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-mono text-xs text-accent">MISSION DOSSIER</p>
                  <h2 className="mt-1 text-xl font-semibold">
                    {operation.codename}
                  </h2>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="rounded px-2 py-1 font-mono text-xs text-muted hover:text-foreground"
                >
                  close
                </button>
              </div>

              <div className="mt-6 space-y-4">
                <div>
                  <p className="font-mono text-xs uppercase text-accent">
                    Objective
                  </p>
                  <p className="mt-1 text-sm text-foreground/80">
                    {operation.objective}
                  </p>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase text-accent">
                    Tech Stack
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {operation.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded bg-chip px-2.5 py-1 font-mono text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase text-accent">
                    Status
                  </p>
                  <p
                    className={`mt-1 font-mono text-sm ${getStatus(operation.status).color}`}
                  >
                    {getStatus(operation.status).label}
                  </p>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase text-accent">
                    Impact
                  </p>
                  <p className="mt-1 text-sm text-foreground/80">
                    {operation.impact}
                  </p>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase text-accent">
                    Briefing
                  </p>
                  <p className="mt-1 text-sm text-muted">
                    {operation.description}
                  </p>
                </div>

                {operation.github ? (
                  <a
                    href={operation.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-lg border border-glass-border bg-glass px-4 py-2.5 font-mono text-sm transition-all hover:border-accent/30 hover:bg-accent/5"
                  >
                    View on GitHub →
                  </a>
                ) : (
                  <p className="font-mono text-xs text-muted">
                    Repository classified — stealth mode active.
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
