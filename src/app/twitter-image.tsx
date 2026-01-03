import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Austin Rose - People Analytics Leader";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #212737 0%, #1a1f2e 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Decorative elements - subtle data viz feel */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            opacity: 0.1,
          }}
        >
          {/* Grid pattern */}
          <svg width="100%" height="100%" style={{ position: "absolute" }}>
            <defs>
              <pattern
                id="grid"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="30" cy="30" r="2" fill="#E87C5C" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
          }}
        >
          {/* Name */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "#EAEDF3",
              marginBottom: 16,
              letterSpacing: "-0.02em",
            }}
          >
            Austin Rose
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: 32,
              color: "#E87C5C",
              fontWeight: 500,
            }}
          >
            People Analytics Leader
          </div>

          {/* URL */}
          <div
            style={{
              fontSize: 24,
              color: "#8B95A5",
              marginTop: 40,
              fontFamily: "monospace",
            }}
          >
            austinrose.io
          </div>
        </div>

        {/* Accent bar at bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "linear-gradient(90deg, #E87C5C 0%, #D9634A 100%)",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
