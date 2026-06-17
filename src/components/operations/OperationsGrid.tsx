"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Crosshair, X } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { operations } from "@/data/operations";

const statusLabels = {
  active: { label: "ACTIVE", color: "text-green-400" },
  completed: { label: "COMPLETED", color: "text-blue-400" },
  "in-progress": { label: "IN PROGRESS", color: "text-yellow-400" },
};

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
            <div className="flex items-start justify-between">
              <Crosshair className="h-5 w-5 text-accent" />
              <span
                className={`font-mono text-xs ${statusLabels[op.status].color}`}
              >
                {statusLabels[op.status].label}
              </span>
            </div>
            <h3 className="mt-3 text-lg font-semibold group-hover:text-accent transition-colors">
              {op.codename}
            </h3>
            <p className="mt-2 line-clamp-2 text-sm text-muted">
              {op.objective}
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {op.techStack.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="rounded bg-white/5 px-2 py-0.5 font-mono text-[10px] text-muted"
                >
                  {tech}
                </span>
              ))}
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg rounded-xl border border-accent/20 bg-[#0a0a0a] p-6 shadow-2xl"
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
                  className="rounded p-1 text-muted hover:text-foreground"
                >
                  <X className="h-5 w-5" />
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
                        className="rounded bg-white/5 px-2.5 py-1 font-mono text-xs"
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
                    className={`mt-1 font-mono text-sm ${statusLabels[operation.status].color}`}
                  >
                    {statusLabels[operation.status].label}
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
                  <p className="mt-1 text-sm text-muted">{operation.description}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
