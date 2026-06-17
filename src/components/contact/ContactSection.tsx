"use client";

import { motion } from "framer-motion";
import { Mail, ExternalLink, Code2, MessageSquare, Handshake } from "lucide-react";
import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import { profile } from "@/data/profile";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: profile.contact.email,
    href: `mailto:${profile.contact.email}`,
  },
  {
    icon: ExternalLink,
    label: "LinkedIn",
    value: "linkedin.com/in/inshalch",
    href: profile.contact.linkedin,
  },
  {
    icon: Code2,
    label: "GitHub",
    value: "github.com/inshalch",
    href: profile.contact.github,
  },
];

export function ContactSection() {
  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        {channels.map((ch, i) => (
          <motion.a
            key={ch.label}
            href={ch.href}
            target={ch.label !== "Email" ? "_blank" : undefined}
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <GlassCard hover className="h-full">
              <ch.icon className="h-5 w-5 text-accent" />
              <p className="mt-3 font-mono text-xs text-muted">{ch.label}</p>
              <p className="mt-1 text-sm text-foreground">{ch.value}</p>
            </GlassCard>
          </motion.a>
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <a
          href={`mailto:${profile.contact.email}?subject=Let's start a conversation`}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 font-mono text-sm text-white transition-all hover:bg-accent/90"
        >
          <MessageSquare className="h-4 w-4" />
          Start Conversation
        </a>
        <Link
          href="/collaborate"
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-glass-border bg-glass px-6 py-3 font-mono text-sm transition-all hover:border-accent/30 hover:bg-accent/5"
        >
          <Handshake className="h-4 w-4" />
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
