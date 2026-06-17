"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Home, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/hire", label: "Hire", icon: "🛡" },
  { href: "/collaborate", label: "Collaborate", icon: "🤝" },
  { href: "/invest", label: "Invest", icon: "📈" },
  { href: "/study", label: "Study", icon: "🎓" },
  { href: "/operations", label: "Ops", icon: "🧠" },
  { href: "/contact", label: "Connect", icon: "📡" },
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

        <div className="flex items-center gap-1 sm:gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-lg px-2 py-1.5 font-mono text-xs transition-all sm:px-3 sm:text-sm",
                pathname === link.href
                  ? "bg-accent/10 text-accent"
                  : "text-muted hover:bg-glass hover:text-foreground"
              )}
            >
              <span className="sm:hidden">{link.icon}</span>
              <span className="hidden sm:inline">{link.label}</span>
            </Link>
          ))}
          <button
            onClick={onTerminalOpen}
            className="ml-1 rounded-lg p-1.5 text-muted transition-colors hover:bg-glass hover:text-accent sm:ml-2"
            aria-label="Open terminal"
            title="Terminal (`)"
          >
            <Terminal className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
