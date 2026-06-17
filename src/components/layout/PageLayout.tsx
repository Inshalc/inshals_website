"use client";

import { Background } from "@/components/layout/Background";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import {
  SecretTerminal,
  useTerminal,
} from "@/components/terminal/SecretTerminal";

interface PageLayoutProps {
  children: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  const terminal = useTerminal();

  return (
    <>
      <Background />
      <Navigation onTerminalOpen={terminal.open} />
      <main className="relative min-h-screen pt-16 pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">{children}</div>
      </main>
      <Footer />
      <SecretTerminal isOpen={terminal.isOpen} onClose={terminal.close} />
    </>
  );
}
