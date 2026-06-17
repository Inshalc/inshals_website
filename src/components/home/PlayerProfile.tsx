"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { SkillBar } from "@/components/ui/SkillBar";
import { profile, skills, traits } from "@/data/profile";

export function PlayerProfile() {
  const xpPercent = Math.round((profile.xp / profile.xpToNext) * 100);

  return (
    <GlassCard className="w-full">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            Player Profile
          </p>
          <h2 className="mt-1 text-xl font-semibold sm:text-2xl">{profile.name}</h2>
          <div className="mt-2 flex flex-wrap gap-2 font-mono text-xs text-muted">
            <span className="rounded bg-white/5 px-2 py-0.5">{profile.class}</span>
            <span className="rounded bg-accent/10 px-2 py-0.5 text-accent">
              {profile.subclass}
            </span>
          </div>
        </div>
        <div className="text-right">
          <p className="font-mono text-3xl font-bold text-muted">
            LVL {profile.level}
          </p>
          <p className="font-mono text-xs text-muted">
            {profile.xp.toLocaleString()} / {profile.xpToNext.toLocaleString()} XP
          </p>
        </div>
      </div>

      <div className="mb-4 h-2 overflow-hidden rounded-full bg-white/5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${xpPercent}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-white/30 to-white/50"
        />
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {skills.map((skill, i) => (
          <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={i * 0.05} />
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3 border-t border-glass-border pt-4">
        <div className="flex flex-wrap gap-2">
          <span className="font-mono text-xs text-muted">Buffs:</span>
          {traits.buffs.map((buff) => (
            <span
              key={buff}
              className="rounded-full bg-green-500/10 px-2.5 py-0.5 font-mono text-xs text-green-400"
            >
              +{buff}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="font-mono text-xs text-muted">Debuff:</span>
          <span className="rounded-full bg-yellow-500/10 px-2.5 py-0.5 font-mono text-xs text-yellow-400">
            {traits.debuff}
          </span>
        </div>
      </div>
    </GlassCard>
  );
}
