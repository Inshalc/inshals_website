"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

const links = [
  { href: "/hire", label: "Hire", short: "Hire" },
  { href: "/collaborate", label: "Collaborate", short: "Work" },
  { href: "/invest", label: "Invest", short: "Invest" },
  { href: "/study", label: "Study", short: "Study" },
  { href: "/operations", label: "Ops", short: "Ops" },
  { href: "/contact", label: "Connect", short: "Connect" },
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
      className="fixed top-0 left-0 right-0 z-40 border-b border-glass-border bg-background/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-3 py-3 sm:px-6">
        <Link
          href="/"
          onClick={handleHomeClick}
          className="font-mono text-sm text-foreground transition-colors hover:text-accent"
        >
          IC.SYS
        </Link>

        <div className="flex items-center gap-0.5 sm:gap-2">
          {links.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-lg px-1.5 py-1.5 font-mono text-[10px] transition-all sm:px-3 sm:py-1.5 sm:text-sm",
                  active
                    ? "bg-accent/10 text-foreground"
                    : "text-muted hover:bg-glass hover:text-foreground"
                )}
              >
                <span className="sm:hidden">{link.short}</span>
                <span className="hidden sm:inline">{link.label}</span>
              </Link>
            );
          })}
          <ThemeToggle />
          <button
            onClick={onTerminalOpen}
            className="rounded-lg px-1.5 py-1.5 font-mono text-[10px] text-muted transition-colors hover:bg-glass hover:text-foreground sm:px-2 sm:text-sm"
            aria-label="Open terminal"
            title="Terminal (`)"
          >
            `
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
