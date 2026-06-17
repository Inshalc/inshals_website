import { PageLayout } from "@/components/layout/PageLayout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { OperationsGrid } from "@/components/operations/OperationsGrid";

export const metadata = {
  title: "Operations — Inshal Chaudhry",
  description: "Active missions and project dossiers.",
};

export default function OperationsPage() {
  return (
    <PageLayout>
      <SectionHeader
        title="OPERATIONS"
        subtitle="Active missions — click any operation to open the mission dossier."
      />
      <OperationsGrid />
    </PageLayout>
  );
}
