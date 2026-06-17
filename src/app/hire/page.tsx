import { PageLayout } from "@/components/layout/PageLayout";
import { MissionReports } from "@/components/hire/MissionReports";

export const metadata = {
  title: "Mission Reports — Inshal Chaudhry",
  description: "Structured work experience for recruiters and hiring managers.",
};

export default function HirePage() {
  return (
    <PageLayout>
      <MissionReports />
    </PageLayout>
  );
}
