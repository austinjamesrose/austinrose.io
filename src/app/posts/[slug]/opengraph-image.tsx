import { ImageResponse } from "next/og";
import { getPostBySlug } from "@/lib/posts";

export const runtime = "nodejs";

export const alt = "Blog Post";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  const title = post?.frontmatter.title || "Blog Post";

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
          padding: 60,
        }}
      >
        {/* Decorative grid */}
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
            textAlign: "center",
          }}
        >
          {/* Category label */}
          <div
            style={{
              fontSize: 20,
              color: "#E87C5C",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: 24,
            }}
          >
            Blog Post
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: title.length > 50 ? 48 : 56,
              fontWeight: 700,
              color: "#EAEDF3",
              lineHeight: 1.2,
              maxWidth: 1000,
              textAlign: "center",
            }}
          >
            {title}
          </div>

          {/* Author */}
          <div
            style={{
              fontSize: 24,
              color: "#8B95A5",
              marginTop: 40,
            }}
          >
            Austin Rose
          </div>
        </div>

        {/* Accent bar */}
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
