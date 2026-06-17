"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  onClick?: () => void;
  hover?: boolean;
}

export function GlassCard({
  children,
  className,
  delay = 0,
  onClick,
  hover = true,
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={hover ? { scale: 1.01, borderColor: "rgba(255,45,45,0.2)" } : undefined}
      onClick={onClick}
      className={cn(
        "glass-card glow-accent rounded-xl p-5 sm:p-6 transition-all duration-300",
        onClick && "cursor-pointer",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
