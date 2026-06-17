"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Terminal as TerminalIcon } from "lucide-react";
import { profile, skills } from "@/data/profile";
import { operations } from "@/data/operations";

interface SecretTerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

const commands: Record<string, () => string | string[]> = {
  help: () => [
    "Available commands:",
    "  help     — Show this message",
    "  whoami   — Identity summary",
    "  projects — List active operations",
    "  skills   — Display skill levels",
    "  contact  — Connection details",
    "  future   — Peek ahead",
    "  clear    — Clear terminal",
    "  exit     — Close terminal",
  ],
  whoami: () =>
    "Software Engineer | AI Builder | System in progress",
  projects: () =>
    operations.map((op) => `→ ${op.codename} [${op.status}]`),
  skills: () =>
    skills.map((s) => `${s.name.padEnd(22)} ${s.level}%`),
  contact: () => [
    `Email:    ${profile.contact.email}`,
    `LinkedIn: ${profile.contact.linkedin}`,
    `GitHub:   ${profile.contact.github}`,
  ],
  future: () => "ERROR: Future data not available. Continue building.",
  "sudo hire inshal": () =>
    "ACCESS GRANTED. Initiating connection protocol...\n→ Redirect to /contact recommended.",
};

export function SecretTerminal({ isOpen, onClose }: SecretTerminalProps) {
  const [history, setHistory] = useState<string[]>([
    "Inshal OS Terminal v1.0 — type 'help' for commands",
    "Press ` or Ctrl+` to toggle. Type 'exit' to close.",
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const execute = useCallback(
    (cmd: string) => {
      const trimmed = cmd.trim().toLowerCase();
      if (!trimmed) return;

      const newLines = [`> ${cmd}`];

      if (trimmed === "clear") {
        setHistory([]);
        return;
      }
      if (trimmed === "exit") {
        onClose();
        return;
      }

      const handler = commands[trimmed];
      if (handler) {
        const result = handler();
        if (Array.isArray(result)) {
          newLines.push(...result);
        } else {
          newLines.push(result);
        }
      } else {
        newLines.push(`Command not found: ${trimmed}. Type 'help'.`);
      }

      setHistory((prev) => [...prev, ...newLines]);
    },
    [onClose]
  );

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    execute(input);
    setInput("");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-4 backdrop-blur-sm sm:items-center"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="flex h-[70vh] w-full max-w-2xl flex-col overflow-hidden rounded-xl border border-accent/20 bg-[#0a0a0a] shadow-2xl shadow-accent/10"
          >
            <div className="flex items-center justify-between border-b border-glass-border px-4 py-3">
              <div className="flex items-center gap-2">
                <TerminalIcon className="h-4 w-4 text-accent" />
                <span className="font-mono text-sm text-foreground">secret_terminal</span>
              </div>
              <button
                onClick={onClose}
                className="rounded p-1 text-muted transition-colors hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 font-mono text-sm leading-relaxed">
              {history.map((line, i) => (
                <p
                  key={i}
                  className={
                    line.startsWith(">")
                      ? "text-accent"
                      : line.startsWith("ERROR")
                        ? "text-red-400"
                        : "text-foreground/80"
                  }
                >
                  {line}
                </p>
              ))}
              <div ref={bottomRef} />
            </div>

            <form onSubmit={handleSubmit} className="border-t border-glass-border p-3">
              <div className="flex items-center gap-2">
                <span className="font-mono text-accent">$</span>
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 bg-transparent font-mono text-sm text-foreground outline-none placeholder:text-muted"
                  placeholder="Enter command..."
                  autoComplete="off"
                  spellCheck={false}
                />
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function useTerminal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "`" || (e.ctrlKey && e.key === "`")) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return {
    isOpen,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
    toggle: () => setIsOpen((prev) => !prev),
  };
}
