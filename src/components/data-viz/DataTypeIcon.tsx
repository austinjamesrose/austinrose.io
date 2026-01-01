interface DataTypeIconProps {
  type: "chart" | "scatter" | "flow";
  className?: string;
  size?: number;
}

export function DataTypeIcon({ type, className = "", size = 16 }: DataTypeIconProps) {
  const iconProps = {
    width: size,
    height: size,
    viewBox: "0 0 16 16",
    fill: "currentColor",
    className,
  };

  switch (type) {
    case "chart":
      // Mini bar chart - 3 ascending bars
      return (
        <svg {...iconProps}>
          <rect x="2" y="10" width="3" height="4" rx="0.5" opacity="0.7" />
          <rect x="6.5" y="6" width="3" height="8" rx="0.5" opacity="0.85" />
          <rect x="11" y="2" width="3" height="12" rx="0.5" opacity="1" />
        </svg>
      );

    case "scatter":
      // Mini scatter plot - 4 dots with implied trend
      return (
        <svg {...iconProps}>
          <circle cx="3" cy="12" r="1.5" opacity="0.6" />
          <circle cx="6.5" cy="9" r="1.5" opacity="0.75" />
          <circle cx="10" cy="6" r="1.5" opacity="0.85" />
          <circle cx="13" cy="3.5" r="1.5" opacity="1" />
        </svg>
      );

    case "flow":
      // Mini flow lines
      return (
        <svg {...iconProps}>
          <path
            d="M2 4 Q6 6, 10 4 T14 5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.7"
          />
          <path
            d="M2 8 Q7 10, 11 8 T14 9"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.9"
          />
          <path
            d="M2 12 Q5 11, 9 12 T14 11"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.6"
          />
        </svg>
      );

    default:
      return null;
  }
}
