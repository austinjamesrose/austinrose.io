"use client";

import { motion, useReducedMotion } from "framer-motion";

interface HeadshotDataRingProps {
  size?: number;
  className?: string;
}

export function HeadshotDataRing({ size = 160, className = "" }: HeadshotDataRingProps) {
  const prefersReducedMotion = useReducedMotion();

  // Node positions around the circle (in degrees)
  const nodeAngles = [0, 40, 85, 130, 180, 220, 270, 315];
  const radius = (size / 2) + 12; // Slightly larger than the image
  const nodeRadius = 3;

  // Convert angle to x,y coordinates
  const getPosition = (angle: number) => {
    const rad = (angle - 90) * (Math.PI / 180); // -90 to start from top
    return {
      x: radius + radius * Math.cos(rad),
      y: radius + radius * Math.sin(rad),
    };
  };

  // Define which nodes connect
  const connections = [
    [0, 1], [1, 2], [2, 3], [3, 4],
    [4, 5], [5, 6], [6, 7], [7, 0],
    [0, 3], [2, 5], [4, 7], // Cross connections
  ];

  const nodes = nodeAngles.map(getPosition);
  const svgSize = radius * 2;
  const center = radius;

  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        width: svgSize,
        height: svgSize,
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <motion.svg
        width={svgSize}
        height={svgSize}
        viewBox={`0 0 ${svgSize} ${svgSize}`}
        className="w-full h-full"
        initial={{ rotate: 0 }}
        animate={prefersReducedMotion ? {} : { rotate: 360 }}
        transition={{
          duration: 120, // Very slow rotation - 2 minutes per revolution
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* Connection lines */}
        {connections.map(([start, end], i) => (
          <motion.line
            key={`line-${i}`}
            x1={nodes[start].x}
            y1={nodes[start].y}
            x2={nodes[end].x}
            y2={nodes[end].y}
            className="stroke-foreground"
            strokeWidth="0.5"
            opacity="var(--viz-line-opacity)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.12 }}
            transition={{
              duration: 0.8,
              delay: 0.5 + i * 0.05,
              ease: "easeOut",
            }}
          />
        ))}

        {/* Nodes */}
        {nodes.map((node, i) => (
          <motion.circle
            key={`node-${i}`}
            cx={node.x}
            cy={node.y}
            r={nodeRadius}
            className="fill-accent"
            opacity="var(--viz-node-opacity)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.4 }}
            transition={{
              duration: 0.4,
              delay: 0.3 + i * 0.06,
              ease: "backOut",
            }}
          />
        ))}

        {/* Subtle outer ring guide */}
        <circle
          cx={center}
          cy={center}
          r={radius - 4}
          fill="none"
          className="stroke-accent"
          strokeWidth="0.5"
          opacity="0.08"
        />
      </motion.svg>
    </div>
  );
}
