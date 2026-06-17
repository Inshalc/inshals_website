"use client";

import { motion } from "framer-motion";

interface SkillBarProps {
  name: string;
  level: number;
  delay?: number;
}

export function SkillBar({ name, level, delay = 0 }: SkillBarProps) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between font-mono text-xs">
        <span className="text-foreground/80">{name}</span>
        <span className="text-muted">{level}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ delay, duration: 1, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-white/25 to-white/45"
        />
      </div>
    </div>
  );
}
