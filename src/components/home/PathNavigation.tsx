"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";

const paths = [
  {
    href: "/hire",
    title: "Hire Her",
    subtitle: "Mission Reports",
    description: "Structured work experience for recruiters and hiring managers.",
  },
  {
    href: "/collaborate",
    title: "Work With Her",
    subtitle: "Collaboration Files",
    description: "Leadership, teamwork, and cross-functional execution.",
  },
  {
    href: "/invest",
    title: "Invest In Her",
    subtitle: "Growth Analytics",
    description: "Trajectory, capabilities, and accelerating momentum.",
  },
  {
    href: "/study",
    title: "Study Her",
    subtitle: "Evolution Timeline",
    description: "The growth journey from engineer to future founder.",
  },
];

export function PathNavigation() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      <p className="mb-6 text-center font-mono text-xs uppercase tracking-[0.3em] text-muted">
        Select Interface Layer
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        {paths.map((path, i) => (
          <Link key={path.href} href={path.href}>
            <GlassCard delay={i * 0.1} className="group h-full">
              <div className="flex items-start justify-end">
                <ArrowRight className="h-4 w-4 text-muted transition-transform group-hover:translate-x-1 group-hover:text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {path.title}
              </h3>
              <p className="mt-1 font-mono text-xs text-accent">{path.subtitle}</p>
              <p className="mt-2 text-sm text-muted">{path.description}</p>
            </GlassCard>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}
