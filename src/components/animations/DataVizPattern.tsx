"use client";

import { m } from "framer-motion";
import { useReducedMotion } from "@/hooks";

type PatternType = "bars" | "nodes" | "waves" | "scatter" | "flow";

interface DataVizPatternProps {
  pattern?: PatternType;
  className?: string;
  animate?: boolean;
}

const BarsPattern = ({ animate }: { animate: boolean }) => {
  const barHeights = [60, 80, 45, 90, 70, 55, 85, 65];
  const barWidth = 8;
  const gap = 12;

  return (
    <svg
      viewBox="0 0 200 100"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
    >
      {barHeights.map((height, i) => (
        <m.rect
          key={i}
          x={20 + i * (barWidth + gap)}
          y={100 - height}
          width={barWidth}
          height={animate ? 0 : height}
          fill={
            i % 3 === 0
              ? "rgba(232, 124, 92, 0.3)"
              : i % 3 === 1
                ? "rgba(42, 157, 143, 0.4)"
                : "rgba(255, 255, 255, 0.1)"
          }
          initial={animate ? { height: 0 } : false}
          animate={animate ? { height } : false}
          transition={{
            duration: 0.8,
            delay: i * 0.1,
            ease: "easeOut",
          }}
        />
      ))}
    </svg>
  );
};

const NodesPattern = ({ animate }: { animate: boolean }) => {
  const nodes = [
    { x: 30, y: 30 },
    { x: 80, y: 20 },
    { x: 120, y: 40 },
    { x: 170, y: 35 },
    { x: 60, y: 70 },
    { x: 110, y: 80 },
    { x: 150, y: 75 },
  ];

  const connections = [
    [0, 1],
    [1, 2],
    [2, 3],
    [0, 4],
    [4, 5],
    [5, 6],
    [2, 6],
    [1, 5],
  ];

  return (
    <svg
      viewBox="0 0 200 100"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Connection lines */}
      {connections.map(([start, end], i) => (
        <m.line
          key={`line-${i}`}
          x1={nodes[start].x}
          y1={nodes[start].y}
          x2={nodes[end].x}
          y2={nodes[end].y}
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth="1"
          initial={animate ? { pathLength: 0, opacity: 0 } : false}
          animate={animate ? { pathLength: 1, opacity: 1 } : false}
          transition={{
            duration: 0.8,
            delay: i * 0.05,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Nodes */}
      {nodes.map((node, i) => (
        <m.circle
          key={`node-${i}`}
          cx={node.x}
          cy={node.y}
          r={4}
          fill={
            i % 3 === 0
              ? "rgba(232, 124, 92, 0.3)"
              : i % 3 === 1
                ? "rgba(42, 157, 143, 0.4)"
                : "rgba(255, 255, 255, 0.1)"
          }
          initial={animate ? { scale: 0 } : false}
          animate={animate ? { scale: 1 } : false}
          transition={{
            duration: 0.4,
            delay: 0.4 + i * 0.05,
            ease: "backOut",
          }}
        />
      ))}
    </svg>
  );
};

const WavesPattern = ({ animate }: { animate: boolean }) => {
  const createWavePath = (amplitude: number, frequency: number, yOffset: number) => {
    let path = `M 0 ${yOffset}`;
    for (let x = 0; x <= 200; x += 2) {
      const y = yOffset + amplitude * Math.sin((x / 200) * Math.PI * frequency);
      path += ` L ${x} ${y}`;
    }
    return path;
  };

  const waves = [
    { path: createWavePath(15, 2, 25), color: "rgba(232, 124, 92, 0.3)" },
    { path: createWavePath(12, 3, 50), color: "rgba(42, 157, 143, 0.4)" },
    { path: createWavePath(10, 4, 75), color: "rgba(255, 255, 255, 0.1)" },
  ];

  return (
    <svg
      viewBox="0 0 200 100"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
    >
      {waves.map((wave, i) => (
        <m.path
          key={i}
          d={wave.path}
          stroke={wave.color}
          strokeWidth="2"
          fill="none"
          initial={animate ? { pathLength: 0 } : false}
          animate={animate ? { pathLength: 1 } : false}
          transition={{
            duration: 1.5,
            delay: i * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}
    </svg>
  );
};

const ScatterPattern = ({ animate }: { animate: boolean }) => {
  const points = Array.from({ length: 20 }, (_, i) => ({
    x: 20 + (i * 37) % 160,
    y: 20 + (i * 53) % 60,
    size: 2 + (i % 3),
  }));

  return (
    <svg
      viewBox="0 0 200 100"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
    >
      {points.map((point, i) => (
        <m.circle
          key={i}
          cx={point.x}
          cy={point.y}
          r={point.size}
          fill={
            i % 3 === 0
              ? "rgba(232, 124, 92, 0.3)"
              : i % 3 === 1
                ? "rgba(42, 157, 143, 0.4)"
                : "rgba(255, 255, 255, 0.1)"
          }
          initial={animate ? { scale: 0, opacity: 0 } : false}
          animate={animate ? { scale: 1, opacity: 1 } : false}
          transition={{
            duration: 0.5,
            delay: i * 0.05,
            ease: "backOut",
          }}
        />
      ))}
    </svg>
  );
};

const FlowPattern = ({ animate }: { animate: boolean }) => {
  const flows = [
    {
      path: "M 20 20 Q 60 40, 100 30 T 180 40",
      color: "rgba(232, 124, 92, 0.3)",
      width: 8,
    },
    {
      path: "M 20 50 Q 70 60, 120 50 T 180 55",
      color: "rgba(42, 157, 143, 0.4)",
      width: 12,
    },
    {
      path: "M 20 80 Q 80 70, 140 75 T 180 70",
      color: "rgba(255, 255, 255, 0.1)",
      width: 6,
    },
  ];

  return (
    <svg
      viewBox="0 0 200 100"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
    >
      {flows.map((flow, i) => (
        <m.path
          key={i}
          d={flow.path}
          stroke={flow.color}
          strokeWidth={flow.width}
          fill="none"
          strokeLinecap="round"
          initial={animate ? { pathLength: 0, opacity: 0 } : false}
          animate={animate ? { pathLength: 1, opacity: 1 } : false}
          transition={{
            duration: 1.2,
            delay: i * 0.15,
            ease: "easeInOut",
          }}
        />
      ))}
    </svg>
  );
};

export function DataVizPattern({
  pattern = "bars",
  className = "",
  animate = true,
}: DataVizPatternProps) {
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = animate && !prefersReducedMotion;

  const renderPattern = () => {
    switch (pattern) {
      case "bars":
        return <BarsPattern animate={shouldAnimate} />;
      case "nodes":
        return <NodesPattern animate={shouldAnimate} />;
      case "waves":
        return <WavesPattern animate={shouldAnimate} />;
      case "scatter":
        return <ScatterPattern animate={shouldAnimate} />;
      case "flow":
        return <FlowPattern animate={shouldAnimate} />;
      default:
        return <BarsPattern animate={shouldAnimate} />;
    }
  };

  return (
    <div
      className={`aspect-video bg-bg-tertiary rounded-lg overflow-hidden ${className}`}
    >
      {renderPattern()}
    </div>
  );
}
