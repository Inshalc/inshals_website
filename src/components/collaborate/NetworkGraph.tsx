"use client";

import { NetworkGraphCanvas } from "./NetworkGraphCanvas";
import { GlassCard } from "@/components/ui/GlassCard";

export function NetworkGraph() {
  return (
    <GlassCard className="mt-8">
      <p className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">
        Network Graph
      </p>
      <p className="mb-4 text-sm text-muted">
        People ↔ Organizations ↔ Projects — leadership and collaboration topology.
      </p>
      <div className="overflow-x-auto">
        <NetworkGraphCanvas
          variant="card"
          className="mx-auto w-full max-w-lg"
        />
      </div>
    </GlassCard>
  );
}
