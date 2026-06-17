import { PageLayout } from "@/components/layout/PageLayout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GrowthChart, StatGrid } from "@/components/invest/GrowthDashboard";
import { AwardsSection } from "@/components/invest/AwardsSection";
import { NetworkGraph } from "@/components/collaborate/NetworkGraph";
import { GlassCard } from "@/components/ui/GlassCard";

export const metadata = {
  title: "Growth Analytics — Inshal Chaudhry",
  description: "Trajectory, capabilities, and accelerating momentum.",
};

export default function InvestPage() {
  return (
    <PageLayout>
      <SectionHeader
        title="GROWTH ANALYTICS DASHBOARD"
        subtitle="High-growth builder profile — engineering depth meets leadership velocity."
      />

      <GrowthChart />
      <StatGrid />

      <GlassCard className="mt-8">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">
          Why This Trajectory Is Accelerating
        </p>
        <div className="mt-4 space-y-3 text-sm text-foreground/80">
          <p>
            <strong className="text-foreground">Enterprise + Startup duality:</strong>{" "}
            Production ML at RBC combined with startup agility from Heartline
            creates a rare blend of scale and speed.
          </p>
          <p>
            <strong className="text-foreground">Leadership at every layer:</strong>{" "}
            From campus organizations to hosting own hackathon at TechnisaHacks and growth at Scouty — consistent
            pattern of stepping up, organizing, and executing.
          </p>
          <p>
            <strong className="text-foreground">Recognition compounds:</strong>{" "}
            Hydro One WiE Award and OPEFE Scholarship validate both technical
            excellence and community impact.
          </p>
          <p>
            <strong className="text-foreground">Builder instinct:</strong>{" "}
            Multiple completed operations (NewLeaf, EduLift, OpenHeart) and stealth build Vantage signal
            entrepreneurial momentum beyond traditional career paths.
          </p>
        </div>
      </GlassCard>

      <AwardsSection />

      <NetworkGraph />
    </PageLayout>
  );
}
