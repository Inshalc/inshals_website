"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ActiveMissionRunner } from "@/components/hire/ActiveMissionRunner";
import { missions } from "@/data/missions";

const statusColors = {
  active: "text-green-400 bg-green-400/10",
  completed: "text-blue-400 bg-blue-400/10",
  incoming: "text-accent bg-accent/10",
};

export function MissionReports() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div>
      <SectionHeader
        title="MISSION REPORTS"
        subtitle="Verified work experience."
      />

      <div className="space-y-4">
        {missions.map((mission, i) => {
          const expandable = !mission.minimal && Boolean(mission.objective);
          const isActive = mission.status === "active";

          return (
            <GlassCard
              key={mission.id}
              delay={i * 0.1}
              onClick={
                expandable
                  ? () => setExpanded(expanded === mission.id ? null : mission.id)
                  : undefined
              }
              className={`relative overflow-hidden ${expandable ? "cursor-pointer" : ""}`}
              hover={expandable}
            >
              {isActive && <ActiveMissionRunner />}

              <div className="relative z-[1]">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-mono text-xs text-accent">
                      MISSION {mission.id}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold">{mission.role}</h3>
                    <p className="font-mono text-sm text-muted">{mission.company}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {mission.status && (
                      <span
                        className={`rounded-full px-2.5 py-0.5 font-mono text-xs uppercase ${statusColors[mission.status]}`}
                      >
                        {mission.status}
                      </span>
                    )}
                    {expandable && (
                      <ChevronDown
                        className={`h-4 w-4 text-muted transition-transform ${
                          expanded === mission.id ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </div>
                </div>

                <AnimatePresence>
                  {expandable && expanded === mission.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 space-y-3 border-t border-glass-border pt-4">
                        <div>
                          <p className="font-mono text-xs uppercase text-accent">
                            Objective
                          </p>
                          <p className="mt-1 text-sm text-foreground/80">
                            {mission.objective}
                          </p>
                        </div>
                        <div>
                          <p className="font-mono text-xs uppercase text-accent">
                            Outcome
                          </p>
                          <p className="mt-1 text-sm text-foreground/80">
                            {mission.outcome}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </GlassCard>
          );
        })}
      </div>

      <div className="mt-10">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 font-mono text-sm text-white transition-all hover:bg-accent/90"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
