"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({ title, subtitle, className }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className={cn("mb-8 sm:mb-12", className)}
    >
      <p className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-accent">
        System Module
      </p>
      <h1 className="text-2xl font-semibold tracking-tight text-gradient sm:text-4xl">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-2 max-w-2xl text-sm text-muted sm:text-base">{subtitle}</p>
      )}
    </motion.div>
  );
}
