import { PageLayout } from "@/components/layout/PageLayout";
import { CollaborationFiles } from "@/components/collaborate/CollaborationFiles";
import { NetworkGraph } from "@/components/collaborate/NetworkGraph";

export const metadata = {
  title: "Collaboration Files — Inshal Chaudhry",
  description: "Leadership, teamwork, and cross-functional execution.",
};

export default function CollaboratePage() {
  return (
    <PageLayout>
      <CollaborationFiles />
      <NetworkGraph />
    </PageLayout>
  );
}
