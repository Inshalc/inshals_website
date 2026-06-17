"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";

export function ProfileHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-10 flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-center sm:gap-10"
    >
      <div className="relative shrink-0">
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-accent/30 to-white/10 opacity-60 blur-sm" />
        <div className="relative h-28 w-28 overflow-hidden rounded-2xl border border-glass-border bg-glass sm:h-36 sm:w-36">
          <Image
            src={profile.profileImage}
            alt={profile.name}
            fill
            className="object-cover object-top"
            sizes="(max-width: 640px) 112px, 144px"
            priority
          />
        </div>
      </div>

      <div className="text-center sm:text-left">
        <p className="font-mono text-xs uppercase tracking-[0.4em] text-accent">
          Profile System Online
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-gradient sm:text-5xl">
          {profile.name}
        </h1>
        <p className="mt-2 font-mono text-sm text-muted">
          {profile.class} · {profile.subclass} · {profile.alignment}
        </p>
      </div>
    </motion.div>
  );
}
