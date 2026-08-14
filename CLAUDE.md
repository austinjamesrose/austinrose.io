# CLAUDE.md

This file helps Claude Code sessions quickly understand and work with this project.

## Project Overview

Austin Rose's portfolio and blog (austinrose.io) - a Next.js 16 app (App Router, React 19, Turbopack) with an MDX blog and MDX project portfolio, light/dark theme support, and minimal design inspired by [AstroPaper v5](https://astro-paper.pages.dev/). Features blog posts, a projects portfolio with data visualization patterns, a career timeline with animated nodes, dynamic Open Graph images, and a clean typography-focused aesthetic. The site conveys "I work with data" through subtle visual reinforcement.

Both blog posts and projects are file-driven MDX collections (no CMS or database) rendered as static pages.

## Quick Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build
npm run lint     # Run ESLint
```

## Site Structure

| Route | Purpose |
|-------|---------|
| `/` | Homepage - hero with headshot, featured (2 projects + 1 post), recent posts |
| `/posts` | Blog listing with tag filtering |
| `/posts/[slug]` | Individual blog post (MDX) |
| `/posts/tags/[tag]` | Posts filtered by tag |
| `/projects` | Portfolio projects with category filtering and data viz patterns |
| `/projects/[slug]` | Individual project detail page (MDX) |
| `/about` | About page with rounded headshot + skills |
| `/experience` | Career timeline |

**Navigation order:** Experience - Projects - Posts - About

## Key Files

| File | Purpose |
|------|---------|
| `src/app/globals.css` | Design tokens (light/dark mode colors, typography) |
| `src/app/layout.tsx` | Root layout with ThemeProvider, system mono fonts |
| `src/lib/posts.ts` | Blog post utilities (getAllPosts, getPostBySlug, tags, related posts) |
| `src/lib/projects.ts` | Project utilities (getAllProjects, getProjectBySlug, by category) |
| `content/posts/` | MDX blog posts with frontmatter |
| `content/projects/` | MDX project write-ups with frontmatter |
| `src/components/blog/` | PostCard, PostList, TagList, MDXComponents (shared by posts + projects) |
| `src/components/providers/ThemeProvider.tsx` | next-themes wrapper |
| `src/components/layout/ThemeToggle.tsx` | Light/dark/system toggle |
| `src/components/data-viz/DataVizPattern.tsx` | SVG patterns for project cards |
| `src/components/projects/ProjectsClient.tsx` | Project cards with category filtering |
| `src/app/opengraph-image.tsx` | Dynamic OG/Twitter images (also per-post and per-project) |

## Blog Posts

Posts are MDX files in `content/posts/`. Frontmatter schema:

```yaml
---
title: "Post Title"
date: "2025-01-01"
description: "Brief description"
tags: ["tag1", "tag2"]
featured: false
draft: false
# image: "/images/..."   # optional social/OG image
# author: "Austin Rose"  # optional
---
```

**Adding a new post:**
1. Create `content/posts/slug-name.mdx` with the frontmatter above
2. The filename becomes the URL slug (e.g., `my-post.mdx` → `/posts/my-post`)
3. Set `draft: false` to publish (drafts still render in `npm run dev`)
4. Set `featured: true` to surface it on the homepage (only the newest featured post is shown)

Posts drafted in Obsidian are kept in a local vault that is **not committed** to this repo — only the finished `.mdx` files under `content/posts/` live here.

## Projects

Projects are MDX files in `content/projects/`, read by `src/lib/projects.ts` (same file-driven pattern as posts). Frontmatter schema:

```yaml
---
title: "Project Title"
category: "Personal Project"   # drives the DataVizPattern (see mapping below)
description: "Brief description"
tags: ["Python", "Streamlit"]
featured: false
draft: false
externalUrl: "https://..."     # optional live/source link
pattern: "scatter"             # optional; overrides the category→pattern default
impact: "Personal project"     # optional
---
```

- `/projects` lists **all non-draft projects** (sorted by title); category is used for the interactive filter and the card's `DataVizPattern`.
- `/projects/[slug]` renders the project's MDX body via `next-mdx-remote/rsc` (`compileMDX`), reusing the blog `MDXComponents`.
- `featured` is currently unused on the projects page itself — it only feeds `getFeaturedProjects()` helper.

Current projects: Universal Orlando Wait Time Tracker, QB League Fantasy Football, Orlando Parks Family Planner, Recruiting Metrics Report Generator.

**Homepage featured projects:**
The two "Featured" projects on the homepage are **hardcoded** in `src/app/page.tsx` (currently Universal Wait Times + QB League, linking directly to their external URLs) — they are independent of the `content/projects/` MDX `featured` flag. To change what the homepage shows, edit the `featuredProjects` array in `src/app/page.tsx`.

## Design System

### Theme Inspiration
Minimal AstroPaper-style design with coral accent. Typography-focused, clean layouts.

### Color Palette (RGB format for opacity support)

**Light Mode:**
- Background: `251, 254, 251` (off-white)
- Foreground: `40, 39, 40` (near-black)
- Accent: `217, 99, 74` (coral)
- Border: `228, 225, 225`

**Dark Mode:**
- Background: `33, 39, 55` (navy)
- Foreground: `234, 237, 243` (off-white)
- Accent: `232, 124, 92` (coral)
- Border: `71, 85, 105`

### Typography

System mono font stack for AstroPaper-style aesthetic:
```css
font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
```

Used for both body text and headings (700 weight for headings).

### Data Visualization CSS Variables

```css
:root {
  --viz-pattern-opacity: 0.03;
  --viz-node-opacity: 0.3;
  --viz-line-opacity: 0.1;
}

.dark {
  --viz-pattern-opacity: 0.06;
  --viz-node-opacity: 0.4;
  --viz-line-opacity: 0.15;
}
```

### Key CSS Classes

- `.tag` - Pill-style tags with border
- `.card` - Project/content cards with hover effect
- `.social-icon` - Circular bordered icon links
- `.active-nav` - Wavy underline for active nav state
- `.prose` - Typography for blog content
- `.no-underline` - Remove link underline

## Data Visualization Components

The site uses subtle data visualization patterns to convey "I work with data."

### DataVizPattern Types

| Pattern | Category | Visual Metaphor |
|---------|----------|-----------------|
| `flow` | Process Optimization | Horizontal flow lines |
| `scatter` | Predictive Analytics | Scatter points with trend line |
| `bars` | Executive Reporting | Ascending bar chart |
| `nodes` | Data Infrastructure | Connected network nodes |
| `grid` | Data Governance | Organized dot grid |
| `network` | Personal Project, Tools & Automation | Connected network |

### Category Filter (Projects Page)

Interactive pill-shaped filter buttons at top of Projects page:
- "All" shows all projects (default)
- Category buttons filter to that category
- Active state: `bg-accent text-white`
- Inactive state: bordered with hover effect

### Homepage Headshot Styling
```tsx
className="w-40 h-40 rounded-full object-cover ring-4 ring-accent/30
           transition-all duration-300 group-hover:scale-105
           group-hover:shadow-xl group-hover:ring-accent/50"
```

## Theming

- Uses `next-themes` with system preference detection
- Three states: light, dark, system (default: system)
- CSS variables in `globals.css` under `:root` and `.dark`
- Colors use RGB format: `rgb(var(--background))` for opacity control

## Code Conventions

**Styling:**
- Tailwind CSS v4 with `@theme inline` block
- CSS variables for colors (supports light/dark)
- Prose styling for blog content

**Components:**
- Prefer server components (no `'use client'`)
- Use barrel exports (`index.ts`) in component folders
- Blog components in `src/components/blog/`
- Layout components in `src/components/layout/`

## Common Tasks

**Add a new blog post:**
1. Create `content/posts/slug-name.mdx` with frontmatter
2. Set `featured: true` to show on homepage

**Add a new page:**
1. Create `src/app/pagename/page.tsx`
2. Add nav link in `src/components/layout/Header.tsx`
3. Add footer link in `src/components/layout/Footer.tsx`

**Update design tokens:**
Edit CSS variables in `src/app/globals.css` under `:root` (light) and `.dark`

## Project Structure

```
src/
├── app/
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Design tokens + viz variables
│   ├── layout.tsx          # Root layout + site metadata
│   ├── opengraph-image.tsx # Dynamic OG image (root)
│   ├── twitter-image.tsx   # Dynamic Twitter image (root)
│   ├── posts/              # Blog pages
│   │   ├── page.tsx        # Posts listing
│   │   ├── [slug]/         # Post detail (+ opengraph-image.tsx)
│   │   └── tags/[tag]/     # Tag filtering
│   ├── projects/           # Projects portfolio
│   │   ├── page.tsx        # Projects listing
│   │   └── [slug]/         # Project detail (+ opengraph-image.tsx)
│   ├── about/              # About page
│   └── experience/         # Career timeline
├── components/
│   ├── blog/               # PostCard, PostList, TagList, MDXComponents
│   ├── layout/             # Header, Footer, Container, ThemeToggle
│   ├── providers/          # ThemeProvider
│   ├── animations/         # ScrollReveal, MotionProvider (minimal)
│   ├── data-viz/           # Data visualization components
│   │   ├── HeadshotDataRing.tsx  # Animated network ring for homepage
│   │   ├── DataVizPattern.tsx    # SVG patterns (bars, nodes, flow, scatter, grid, network)
│   │   ├── DataTypeIcon.tsx      # Category icons for featured cards
│   │   ├── TimelineNodes.tsx     # Animated nodes for the experience timeline
│   │   └── DataSignature.tsx     # Footer brand element
│   └── projects/           # Project page components
│       └── ProjectsClient.tsx    # Category filtering + project cards
├── hooks/                  # useReducedMotion, etc.
├── lib/
│   ├── posts.ts            # Blog utilities
│   ├── projects.ts         # Project utilities
│   └── animations/         # Framer Motion variants
content/
├── posts/                  # MDX blog posts
└── projects/               # MDX project write-ups
```

## Deployment

- **Production:** Vercel auto-deploys from `main` branch
- **Preview:** Push any branch for auto-generated preview URL

## Related Docs

- `ARCHITECTURE.md` - Detailed technical documentation
- `WORKFLOW.md` - Git workflow and deployment
