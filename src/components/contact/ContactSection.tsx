"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import { profile } from "@/data/profile";

function mailtoHref(subject?: string) {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  const query = params.toString();
  return query
    ? `mailto:${profile.contact.email}?${query}`
    : `mailto:${profile.contact.email}`;
}

const channels = [
  {
    label: "Email",
    value: profile.contact.email,
    href: mailtoHref(),
    external: false,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/inshalch",
    href: profile.contact.linkedin,
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/Inshalc",
    href: profile.contact.github,
    external: true,
  },
];

export function ContactSection() {
  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        {channels.map((ch, i) => (
          <motion.div
            key={ch.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <a
              href={ch.href}
              target={ch.external ? "_blank" : undefined}
              rel={ch.external ? "noopener noreferrer" : undefined}
              className="block"
            >
              <GlassCard hover className="h-full">
                <p className="font-mono text-xs text-muted">{ch.label}</p>
                <p className="mt-2 text-sm text-foreground">{ch.value}</p>
              </GlassCard>
            </a>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <a
          href={mailtoHref("Let's start a conversation")}
          className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 font-mono text-sm text-white transition-all hover:bg-accent/90"
        >
          Start Conversation
        </a>
        <Link
          href="/collaborate"
          className="inline-flex items-center justify-center rounded-lg border border-glass-border bg-glass px-6 py-3 font-mono text-sm transition-all hover:border-accent/30 hover:bg-accent/5"
        >
          Initiate Collaboration
        </Link>
      </div>

      <GlassCard className="mt-8">
        <p className="font-mono text-xs text-muted">CONNECTION STATUS</p>
        <div className="mt-2 flex items-center gap-2">
          <div className="h-2 w-2 animate-pulse-glow rounded-full bg-green-400" />
          <span className="font-mono text-sm text-green-400">
            Channel open — awaiting transmission
          </span>
        </div>
      </GlassCard>
    </div>
  );
}
