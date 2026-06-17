"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { growthStats } from "@/data/profile";
import { useTheme } from "@/components/theme/ThemeProvider";

export function GrowthChart() {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const gridStroke = isLight ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.05)";
  const labelClass = isLight
    ? "fill-foreground/40 text-[8px] font-mono"
    : "fill-white/30 text-[8px] font-mono";
  const yearClass = isLight
    ? "fill-foreground/55 text-[9px] font-mono"
    : "fill-white/50 text-[9px] font-mono";
  const data = [
    { year: "2022", value: 35 },
    { year: "2023", value: 52 },
    { year: "2024", value: 68 },
    { year: "2025", value: 82 },
    { year: "2026", value: 91 },
  ];

  const maxVal = 100;
  const width = 500;
  const height = 200;
  const padding = 40;
  const chartW = width - padding * 2;
  const chartH = height - padding * 2;

  const points = data.map((d, i) => ({
    x: padding + (i / (data.length - 1)) * chartW,
    y: padding + chartH - (d.value / maxVal) * chartH,
    ...d,
  }));

  const pathD = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
    .join(" ");

  const areaD =
    pathD +
    ` L ${points[points.length - 1].x} ${padding + chartH} L ${points[0].x} ${padding + chartH} Z`;

  return (
    <GlassCard>
      <p className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">
        Growth Trajectory
      </p>
      <div className="overflow-x-auto">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full max-w-xl">
          <defs>
            <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ff2d2d" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#ff2d2d" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[0, 25, 50, 75, 100].map((v) => {
            const y = padding + chartH - (v / maxVal) * chartH;
            return (
              <g key={v}>
                <line
                  x1={padding}
                  y1={y}
                  x2={width - padding}
                  y2={y}
                  stroke={gridStroke}
                />
                <text
                  x={padding - 8}
                  y={y + 3}
                  textAnchor="end"
                  className={labelClass}
                >
                  {v}
                </text>
              </g>
            );
          })}
          <motion.path
            d={areaD}
            fill="url(#areaGrad)"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />
          <motion.path
            d={pathD}
            fill="none"
            stroke="#ff2d2d"
            strokeWidth={2}
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          {points.map((p, i) => (
            <motion.circle
              key={p.year}
              cx={p.x}
              cy={p.y}
              r={4}
              fill="#ff2d2d"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.1 }}
            />
          ))}
          {points.map((p) => (
            <text
              key={`label-${p.year}`}
              x={p.x}
              y={height - 10}
              textAnchor="middle"
              className={yearClass}
            >
              {p.year}
            </text>
          ))}
        </svg>
      </div>
    </GlassCard>
  );
}

export function StatGrid() {
  return (
    <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {growthStats.map((stat, i) => (
        <GlassCard key={stat.category} delay={i * 0.08}>
          <p className="font-mono text-xs text-muted">{stat.category}</p>
          <div className="mt-2 flex items-end justify-between">
            <span className="text-2xl font-semibold text-foreground">
              {stat.value}
            </span>
            <span className="font-mono text-xs text-green-400">{stat.trend}</span>
          </div>
          <div className="mt-2 h-1 overflow-hidden rounded-full bg-track">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${stat.value}%` }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="h-full rounded-full bg-accent/70"
            />
          </div>
        </GlassCard>
      ))}
    </div>
  );
}
