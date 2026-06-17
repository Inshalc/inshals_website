"use client";

import { motion } from "framer-motion";
import { networkNodes, networkEdges } from "@/data/collaborations";
import { useTheme } from "@/components/theme/ThemeProvider";

interface NetworkGraphCanvasProps {
  variant?: "card" | "background";
  className?: string;
  animate?: boolean;
}

export function NetworkGraphCanvas({
  variant = "card",
  className,
  animate = true,
}: NetworkGraphCanvasProps) {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const nodeMap = Object.fromEntries(networkNodes.map((n) => [n.id, n]));
  const isBackground = variant === "background";

  const lineStroke = isLight
    ? isBackground
      ? "rgba(0, 0, 0, 0.1)"
      : "rgba(0, 0, 0, 0.15)"
    : isBackground
      ? "rgba(255, 255, 255, 0.22)"
      : "rgba(255, 255, 255, 0.28)";
  const lineWidth = isBackground ? 1.25 : 1;
  const lineOpacity = isBackground ? 0.9 : 1;
  const personRadius = isBackground ? 14 : 12;
  const orgRadius = isBackground ? 9 : 8;
  const labelClass = isLight
    ? isBackground
      ? "fill-foreground/35 text-[10px] font-mono"
      : "fill-foreground/55 text-[8px] font-mono"
    : isBackground
      ? "fill-white/25 text-[10px] font-mono"
      : "fill-white/60 text-[8px] font-mono";
  const personFill = isBackground
    ? isLight
      ? "rgba(224,37,37,0.25)"
      : "rgba(255,45,45,0.35)"
    : "#ff2d2d";
  const orgFill = isBackground
    ? isLight
      ? "rgba(0,0,0,0.08)"
      : "rgba(255,255,255,0.2)"
    : isLight
      ? "#525252"
      : "#ffffff";

  return (
    <svg
      viewBox="0 0 400 320"
      className={className}
      role="img"
      aria-hidden={isBackground}
      aria-label={isBackground ? undefined : "Collaboration network graph"}
    >
      {networkEdges.map((edge, i) => {
        const from = nodeMap[edge.from];
        const to = nodeMap[edge.to];
        if (!from || !to) return null;
        return (
          <motion.line
            key={`${edge.from}-${edge.to}`}
            x1={from.x}
            y1={from.y}
            x2={to.x}
            y2={to.y}
            stroke={lineStroke}
            strokeWidth={lineWidth}
            strokeLinecap="round"
            initial={animate ? { opacity: 0 } : false}
            animate={{ opacity: lineOpacity }}
            transition={{ delay: i * 0.04, duration: 0.6 }}
          />
        );
      })}
      {networkNodes.map((node, i) => (
        <g key={node.id}>
          <motion.circle
            cx={node.x}
            cy={node.y}
            r={node.type === "person" ? personRadius : orgRadius}
            fill={node.type === "person" ? personFill : orgFill}
            initial={animate ? { scale: 0, opacity: 0 } : false}
            animate={animate ? { scale: 1, opacity: 1 } : { opacity: isBackground ? 0.6 : 1 }}
            transition={{ delay: 0.3 + i * 0.06, type: "spring", stiffness: 120 }}
          />
          <text
            x={node.x}
            y={node.y + (node.type === "person" ? 28 : 22)}
            textAnchor="middle"
            className={labelClass}
          >
            {node.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

export function NetworkGraphBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 network-fade" />
      <div className="absolute left-1/2 top-[42%] h-[min(130vw,1100px)] w-[min(130vw,1100px)] -translate-x-1/2 -translate-y-1/2 scale-[0.72] opacity-40 sm:scale-[0.78]">
        <NetworkGraphCanvas
          variant="background"
          className="h-full w-full"
          animate
        />
      </div>
      <div className="absolute inset-0 network-vignette" />
    </div>
  );
}
