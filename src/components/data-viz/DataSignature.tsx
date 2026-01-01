interface DataSignatureProps {
  className?: string;
  variant?: "bars" | "constellation";
}

export function DataSignature({ className = "", variant = "bars" }: DataSignatureProps) {
  if (variant === "constellation") {
    // Small connected dots
    return (
      <svg
        width="40"
        height="24"
        viewBox="0 0 40 24"
        className={`text-accent ${className}`}
        fill="currentColor"
      >
        {/* Connecting lines */}
        <line x1="8" y1="16" x2="20" y2="8" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        <line x1="20" y1="8" x2="32" y2="14" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        <line x1="8" y1="16" x2="32" y2="14" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />

        {/* Nodes */}
        <circle cx="8" cy="16" r="2.5" opacity="0.5" />
        <circle cx="20" cy="8" r="3" opacity="0.6" />
        <circle cx="32" cy="14" r="2" opacity="0.4" />
      </svg>
    );
  }

  // Default: mini bar chart signature
  return (
    <svg
      width="32"
      height="20"
      viewBox="0 0 32 20"
      className={`text-accent ${className}`}
      fill="currentColor"
    >
      <rect x="2" y="14" width="4" height="4" rx="0.5" opacity="0.35" />
      <rect x="8" y="10" width="4" height="8" rx="0.5" opacity="0.45" />
      <rect x="14" y="6" width="4" height="12" rx="0.5" opacity="0.55" />
      <rect x="20" y="8" width="4" height="10" rx="0.5" opacity="0.5" />
      <rect x="26" y="2" width="4" height="16" rx="0.5" opacity="0.6" />
    </svg>
  );
}
