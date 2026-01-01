"use client";

import { motion, useReducedMotion } from "framer-motion";

export type PatternType = "bars" | "nodes" | "flow" | "scatter" | "grid" | "network";

interface DataVizPatternProps {
  pattern: PatternType;
  className?: string;
  animate?: boolean;
  subtle?: boolean; // For background patterns at lower opacity
}

// Bar chart pattern - for Executive Reporting
function BarsPattern({ animate, subtle }: { animate: boolean; subtle: boolean }) {
  const barHeights = [45, 65, 35, 80, 55, 70, 40, 75];
  const barWidth = 8;
  const gap = 14;
  // Highlight the tallest bars with accent
  const accentBars = [3, 7]; // indices of bars to highlight

  return (
    <svg viewBox="0 0 200 100" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      {barHeights.map((height, i) => {
        const isAccent = accentBars.includes(i);
        return (
          <motion.rect
            key={i}
            x={12 + i * (barWidth + gap)}
            y={100 - height}
            width={barWidth}
            height={animate ? 0 : height}
            fill={subtle ? "currentColor" : isAccent ? "rgb(var(--accent))" : "currentColor"}
            opacity={subtle ? "var(--viz-pattern-opacity)" : isAccent ? 0.85 : 0.25}
            rx={2}
            initial={animate ? { height: 0, y: 100 } : false}
            animate={animate ? { height, y: 100 - height } : false}
            transition={{
              duration: 0.6,
              delay: i * 0.08,
              ease: "easeOut",
            }}
          />
        );
      })}
    </svg>
  );
}

// Network node pattern - for Data Infrastructure
function NodesPattern({ animate, subtle }: { animate: boolean; subtle: boolean }) {
  const nodes = [
    { x: 30, y: 25 },
    { x: 85, y: 18 },
    { x: 130, y: 35 },
    { x: 170, y: 22 },
    { x: 55, y: 60 },
    { x: 100, y: 75 },
    { x: 150, y: 68 },
  ];

  const connections = [
    [0, 1], [1, 2], [2, 3],
    [0, 4], [4, 5], [5, 6],
    [2, 6], [1, 5],
  ];

  // Primary nodes get accent color
  const accentNodes = [1, 5];

  return (
    <svg viewBox="0 0 200 100" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      {/* Connection lines */}
      {connections.map(([start, end], i) => (
        <motion.line
          key={`line-${i}`}
          x1={nodes[start].x}
          y1={nodes[start].y}
          x2={nodes[end].x}
          y2={nodes[end].y}
          stroke="currentColor"
          strokeWidth="1"
          opacity={subtle ? "var(--viz-pattern-opacity)" : "var(--viz-line-opacity)"}
          initial={animate ? { pathLength: 0, opacity: 0 } : false}
          animate={animate ? { pathLength: 1, opacity: subtle ? 0.04 : 0.15 } : false}
          transition={{
            duration: 0.5,
            delay: i * 0.04,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Nodes */}
      {nodes.map((node, i) => {
        const isAccent = accentNodes.includes(i);
        return (
          <motion.circle
            key={`node-${i}`}
            cx={node.x}
            cy={node.y}
            r={subtle ? 3 : isAccent ? 5 : 4}
            fill={subtle ? "currentColor" : isAccent ? "rgb(var(--accent))" : "currentColor"}
            opacity={subtle ? "var(--viz-pattern-opacity)" : isAccent ? 0.9 : 0.3}
            initial={animate ? { scale: 0 } : false}
            animate={animate ? { scale: 1 } : false}
            transition={{
              duration: 0.3,
              delay: 0.3 + i * 0.04,
              ease: "backOut",
            }}
          />
        );
      })}
    </svg>
  );
}

// Flow pattern - for Process Optimization
function FlowPattern({ animate, subtle }: { animate: boolean; subtle: boolean }) {
  const flows = [
    { path: "M 10 25 Q 50 35, 100 28 T 190 32", width: 6, accent: false },
    { path: "M 10 50 Q 60 58, 110 50 T 190 54", width: 10, accent: true }, // Main flow
    { path: "M 10 75 Q 70 68, 130 72 T 190 70", width: 5, accent: false },
  ];

  return (
    <svg viewBox="0 0 200 100" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      {flows.map((flow, i) => (
        <motion.path
          key={i}
          d={flow.path}
          stroke={subtle ? "currentColor" : flow.accent ? "rgb(var(--accent))" : "currentColor"}
          strokeWidth={flow.width}
          fill="none"
          strokeLinecap="round"
          opacity={subtle ? "var(--viz-pattern-opacity)" : flow.accent ? 0.7 : 0.2}
          initial={animate ? { pathLength: 0, opacity: 0 } : false}
          animate={animate ? { pathLength: 1, opacity: subtle ? 0.04 : flow.accent ? 0.7 : 0.2 } : false}
          transition={{
            duration: 1,
            delay: i * 0.12,
            ease: "easeInOut",
          }}
        />
      ))}
    </svg>
  );
}

// Scatter pattern - for Predictive Analytics (with trend line)
function ScatterPattern({ animate, subtle }: { animate: boolean; subtle: boolean }) {
  // Points roughly following an upward trend
  const points = [
    { x: 20, y: 75 }, { x: 35, y: 68 }, { x: 45, y: 72 },
    { x: 60, y: 58 }, { x: 75, y: 52 }, { x: 85, y: 55 },
    { x: 100, y: 45 }, { x: 115, y: 40 }, { x: 130, y: 38 },
    { x: 145, y: 32 }, { x: 160, y: 28 }, { x: 175, y: 25 },
  ];

  return (
    <svg viewBox="0 0 200 100" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      {/* Trend line - accent colored */}
      <motion.path
        d="M 15 78 Q 100 45, 180 22"
        stroke={subtle ? "currentColor" : "rgb(var(--accent))"}
        strokeWidth="2"
        fill="none"
        strokeDasharray="4 4"
        opacity={subtle ? "var(--viz-pattern-opacity)" : 0.6}
        initial={animate ? { pathLength: 0 } : false}
        animate={animate ? { pathLength: 1 } : false}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      {/* Scatter points - accent colored */}
      {points.map((point, i) => (
        <motion.circle
          key={i}
          cx={point.x}
          cy={point.y}
          r={subtle ? 2.5 : 3.5}
          fill={subtle ? "currentColor" : "rgb(var(--accent))"}
          opacity={subtle ? "var(--viz-pattern-opacity)" : 0.75}
          initial={animate ? { scale: 0, opacity: 0 } : false}
          animate={animate ? { scale: 1, opacity: subtle ? 0.04 : 0.75 } : false}
          transition={{
            duration: 0.3,
            delay: 0.4 + i * 0.04,
            ease: "backOut",
          }}
        />
      ))}
    </svg>
  );
}

// Grid pattern - for Data Governance (organized dots)
function GridPattern({ subtle }: { subtle: boolean }) {
  const rows = 5;
  const cols = 10;
  const spacing = 18;
  // Highlight diagonal dots with accent
  const isAccentDot = (row: number, col: number) =>
    (row === 1 && col >= 2 && col <= 4) ||
    (row === 2 && col >= 4 && col <= 6) ||
    (row === 3 && col >= 6 && col <= 8);

  return (
    <svg viewBox="0 0 200 100" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      {Array.from({ length: rows }).map((_, row) =>
        Array.from({ length: cols }).map((_, col) => {
          const accent = isAccentDot(row, col);
          return (
            <circle
              key={`${row}-${col}`}
              cx={15 + col * spacing}
              cy={12 + row * spacing}
              r={subtle ? 1.5 : accent ? 2.5 : 2}
              fill={subtle ? "currentColor" : accent ? "rgb(var(--accent))" : "currentColor"}
              opacity={subtle ? "var(--viz-pattern-opacity)" : accent ? 0.85 : 0.2}
            />
          );
        })
      )}
    </svg>
  );
}

// Connected network - for Personal Projects
function NetworkPattern({ animate, subtle }: { animate: boolean; subtle: boolean }) {
  const nodes = [
    { x: 40, y: 50 },
    { x: 100, y: 25 }, // Central/main node - accent
    { x: 160, y: 50 },
    { x: 70, y: 75 },
    { x: 130, y: 75 },
  ];

  const connections = [
    [0, 1], [1, 2], [0, 3], [2, 4], [3, 4], [1, 3], [1, 4],
  ];

  // Central node (index 1) gets accent
  const accentNodes = [1];

  return (
    <svg viewBox="0 0 200 100" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      {/* Connections */}
      {connections.map(([start, end], i) => (
        <motion.line
          key={`conn-${i}`}
          x1={nodes[start].x}
          y1={nodes[start].y}
          x2={nodes[end].x}
          y2={nodes[end].y}
          stroke="currentColor"
          strokeWidth="1"
          opacity={subtle ? "var(--viz-pattern-opacity)" : "var(--viz-line-opacity)"}
          initial={animate ? { pathLength: 0 } : false}
          animate={animate ? { pathLength: 1 } : false}
          transition={{ duration: 0.4, delay: i * 0.05 }}
        />
      ))}

      {/* Nodes with varying sizes */}
      {nodes.map((node, i) => {
        const isAccent = accentNodes.includes(i);
        return (
          <motion.circle
            key={`node-${i}`}
            cx={node.x}
            cy={node.y}
            r={isAccent ? 7 : i % 2 === 0 ? 5 : 4}
            fill={subtle ? "currentColor" : isAccent ? "rgb(var(--accent))" : "currentColor"}
            opacity={subtle ? "var(--viz-pattern-opacity)" : isAccent ? 0.9 : 0.3}
            initial={animate ? { scale: 0 } : false}
            animate={animate ? { scale: 1 } : false}
            transition={{ duration: 0.3, delay: 0.25 + i * 0.05, ease: "backOut" }}
          />
        );
      })}
    </svg>
  );
}

export function DataVizPattern({
  pattern,
  className = "",
  animate = true,
  subtle = false,
}: DataVizPatternProps) {
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = animate && !prefersReducedMotion;

  const renderPattern = () => {
    switch (pattern) {
      case "bars":
        return <BarsPattern animate={shouldAnimate} subtle={subtle} />;
      case "nodes":
        return <NodesPattern animate={shouldAnimate} subtle={subtle} />;
      case "flow":
        return <FlowPattern animate={shouldAnimate} subtle={subtle} />;
      case "scatter":
        return <ScatterPattern animate={shouldAnimate} subtle={subtle} />;
      case "grid":
        return <GridPattern subtle={subtle} />;
      case "network":
        return <NetworkPattern animate={shouldAnimate} subtle={subtle} />;
      default:
        return <BarsPattern animate={shouldAnimate} subtle={subtle} />;
    }
  };

  return (
    <div
      className={`aspect-video rounded-lg overflow-hidden ${
        subtle ? "" : "bg-card"
      } ${className}`}
    >
      {renderPattern()}
    </div>
  );
}
