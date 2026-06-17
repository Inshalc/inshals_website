"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/theme/ThemeProvider";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={!isDark}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      onClick={toggleTheme}
      className={cn(
        "relative flex h-6 w-11 shrink-0 items-center rounded-full border border-glass-border bg-glass p-0.5 transition-colors hover:border-foreground/15",
        className
      )}
    >
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className={cn(
          "absolute top-0.5 h-5 w-5 rounded-full shadow-sm",
          isDark ? "left-0.5 bg-foreground/90" : "left-[calc(100%-1.375rem)] bg-accent"
        )}
      />
      <span className="flex w-full justify-between px-1 font-mono text-[8px] leading-none text-muted">
        <span className={cn(isDark && "text-foreground/70")}>D</span>
        <span className={cn(!isDark && "text-foreground/70")}>L</span>
      </span>
    </button>
  );
}
