import { PageLayout } from "@/components/layout/PageLayout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { EvolutionTimeline } from "@/components/study/EvolutionTimeline";

export const metadata = {
  title: "Evolution Timeline — Inshal Chaudhry",
  description: "The growth journey from engineer to future founder.",
};

export default function StudyPage() {
  return (
    <PageLayout>
      <SectionHeader
        title="EVOLUTION TIMELINE"
        subtitle="A vertical progression through growth, learning, and accelerating impact."
      />
      <EvolutionTimeline />
    </PageLayout>
  );
}
