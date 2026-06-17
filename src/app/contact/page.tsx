import { PageLayout } from "@/components/layout/PageLayout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContactSection } from "@/components/contact/ContactSection";

export const metadata = {
  title: "Establish Connection — Inshal Chaudhry",
  description: "Secure system connection — email, LinkedIn, and GitHub.",
};

export default function ContactPage() {
  return (
    <PageLayout>
      <SectionHeader
        title="ESTABLISH CONNECTION"
        subtitle="Secure channel for conversation, collaboration, and opportunity."
      />
      <ContactSection />
    </PageLayout>
  );
}
