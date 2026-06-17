"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Background } from "@/components/layout/Background";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { BootSequence } from "@/components/home/BootSequence";
import { PathNavigation } from "@/components/home/PathNavigation";
import { PlayerProfile } from "@/components/home/PlayerProfile";
import { ProfileHero } from "@/components/home/ProfileHero";
import { NetworkGraphBackground } from "@/components/collaborate/NetworkGraphCanvas";
import {
  SecretTerminal,
  useTerminal,
} from "@/components/terminal/SecretTerminal";

const BOOT_KEY = "ic-sys-booted";

export default function Home() {
  const [booted, setBooted] = useState(false);
  const [ready, setReady] = useState(false);
  const terminal = useTerminal();

  useEffect(() => {
    setReady(true);
    if (sessionStorage.getItem(BOOT_KEY) === "true") {
      setBooted(true);
    }
  }, []);

  useEffect(() => {
    const handleReset = () => setBooted(false);
    window.addEventListener("ic-sys-reset", handleReset);
    return () => window.removeEventListener("ic-sys-reset", handleReset);
  }, []);

  const handleBootComplete = useCallback(() => {
    setBooted(true);
    sessionStorage.setItem(BOOT_KEY, "true");
  }, []);

  if (!ready) return null;

  return (
    <>
      <Background />
      <Navigation onTerminalOpen={terminal.open} />
      <main className="relative min-h-screen pt-16 pb-12">
        <AnimatePresence>
          {!booted && (
            <motion.div
              key="network-bg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 z-[1]"
            >
              <NetworkGraphBackground />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
          <AnimatePresence mode="wait">
            {!booted ? (
              <BootSequence key="boot" onComplete={handleBootComplete} />
            ) : (
              <motion.div
                key="main"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <ProfileHero />

                <div className="mb-12">
                  <PlayerProfile />
                </div>

                <PathNavigation />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
      <Footer />
      <SecretTerminal isOpen={terminal.isOpen} onClose={terminal.close} />
    </>
  );
}
