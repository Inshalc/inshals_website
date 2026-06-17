"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  Home,
  Terminal,
  Shield,
  Users,
  TrendingUp,
  GraduationCap,
  Crosshair,
  Radio,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const links: { href: string; label: string; icon: LucideIcon }[] = [
  { href: "/hire", label: "Hire", icon: Shield },
  { href: "/collaborate", label: "Collaborate", icon: Users },
  { href: "/invest", label: "Invest", icon: TrendingUp },
  { href: "/study", label: "Study", icon: GraduationCap },
  { href: "/operations", label: "Ops", icon: Crosshair },
  { href: "/contact", label: "Connect", icon: Radio },
];

interface NavigationProps {
  onTerminalOpen?: () => void;
}

export function Navigation({ onTerminalOpen }: NavigationProps) {
  const pathname = usePathname();

  const handleHomeClick = () => {
    sessionStorage.removeItem("ic-sys-booted");
    if (pathname === "/") {
      window.dispatchEvent(new Event("ic-sys-reset"));
    }
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-40 border-b border-glass-border bg-[#050505]/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link
          href="/"
          onClick={handleHomeClick}
          className="flex items-center gap-2 font-mono text-sm text-foreground transition-colors hover:text-accent"
        >
          <Home className="h-4 w-4" />
          <span className="hidden sm:inline">IC.SYS</span>
        </Link>

        <div className="flex items-center gap-0.5 sm:gap-2">
          {links.map((link) => {
            const Icon = link.icon;
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-label={link.label}
                className={cn(
                  "rounded-lg p-2 font-mono text-xs transition-all sm:px-3 sm:py-1.5 sm:text-sm",
                  active
                    ? "bg-accent/10 text-foreground"
                    : "text-muted hover:bg-glass hover:text-foreground"
                )}
              >
                <Icon
                  className={cn(
                    "h-4 w-4 sm:hidden",
                    active ? "text-foreground" : "text-muted"
                  )}
                  strokeWidth={1.75}
                />
                <span className="hidden sm:inline">{link.label}</span>
              </Link>
            );
          })}
          <button
            onClick={onTerminalOpen}
            className="ml-0.5 rounded-lg p-1.5 text-muted transition-colors hover:bg-glass hover:text-foreground sm:ml-2"
            aria-label="Open terminal"
            title="Terminal (`)"
          >
            <Terminal className="h-4 w-4" strokeWidth={1.75} />
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
