"use client";

import { motion, useReducedMotion } from "framer-motion";

interface TimelineNode {
  id: string;
  isCurrent?: boolean;
  size?: "large" | "medium" | "small";
}

interface TimelineNodesProps {
  nodes: TimelineNode[];
  className?: string;
}

export function TimelineNodes({ nodes, className = "" }: TimelineNodesProps) {
  const prefersReducedMotion = useReducedMotion();

  const getNodeSize = (size: TimelineNode["size"] = "medium") => {
    switch (size) {
      case "large": return 14;
      case "medium": return 12;
      case "small": return 10;
    }
  };

  return (
    <div className={`absolute left-0 top-0 bottom-0 flex flex-col items-center ${className}`}>
      {nodes.map((node, index) => {
        const nodeSize = getNodeSize(node.size);
        const isLast = index === nodes.length - 1;

        return (
          <div key={node.id} className="flex flex-col items-center flex-1">
            {/* Node circle */}
            <motion.div
              className={`relative rounded-full ${
                node.isCurrent
                  ? "bg-accent"
                  : "bg-foreground"
              }`}
              style={{
                width: nodeSize,
                height: nodeSize,
                opacity: node.isCurrent ? 1 : 0.3,
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 0.3,
                delay: index * 0.1,
                ease: "backOut",
              }}
            >
              {/* Pulse ring for current role */}
              {node.isCurrent && !prefersReducedMotion && (
                <motion.div
                  className="absolute inset-0 rounded-full bg-accent"
                  initial={{ scale: 1, opacity: 0.5 }}
                  animate={{
                    scale: [1, 1.8, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              )}
            </motion.div>

            {/* Connecting line (except for last node) */}
            {!isLast && (
              <motion.div
                className="w-px flex-1 bg-foreground"
                style={{ opacity: 0.15 }}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1 + 0.15,
                  ease: "easeOut",
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
