# Austin Rose Portfolio - Architecture Overview

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.1.0 | React framework with App Router |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 4.x | Utility-first styling (CSS-based config) |
| React | 19.x | UI library |
| next-themes | 0.4.x | Light/dark mode switching |
| MDX | 3.x | Blog posts with JSX support |
| gray-matter | - | Frontmatter parsing |
| reading-time | - | Reading time estimation |

## Project Structure

```
austin-portfolio/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx          # Root layout (fonts, header, footer, ThemeProvider)
│   │   ├── page.tsx            # Homepage
│   │   ├── globals.css         # Design tokens & base styles
│   │   ├── posts/
│   │   │   ├── page.tsx        # Blog listing with tag filter
│   │   │   ├── [slug]/
│   │   │   │   └── page.tsx    # Individual post (MDX)
│   │   │   └── tags/
│   │   │       └── [tag]/
│   │   │           └── page.tsx # Posts filtered by tag
│   │   ├── projects/
│   │   │   └── page.tsx        # Portfolio projects grid
│   │   ├── about/
│   │   │   └── page.tsx        # About page
│   │   └── experience/
│   │       └── page.tsx        # Career timeline
│   │
│   ├── lib/                    # Utility libraries
│   │   └── posts.ts            # Blog utilities (getAllPosts, getPostBySlug, etc.)
│   │
│   └── components/
│       ├── layout/
│       │   ├── index.ts        # Barrel export
│       │   ├── Header.tsx      # Navigation with mobile menu
│       │   ├── Footer.tsx      # Site footer with social links
│       │   ├── Container.tsx   # Max-width wrapper (768px)
│       │   └── ThemeToggle.tsx # Light/dark/system toggle
│       │
│       ├── blog/               # Blog components
│       │   ├── index.ts        # Barrel export
│       │   ├── PostCard.tsx    # Blog post preview card
│       │   ├── PostList.tsx    # List of post cards
│       │   ├── TagList.tsx     # Horizontal tag pills
│       │   └── MDXComponents.tsx # Custom MDX component mappings
│       │
│       ├── providers/
│       │   ├── index.ts
│       │   └── ThemeProvider.tsx # next-themes wrapper
│       │
│       ├── animations/         # Minimal animation components
│       │   ├── index.ts
│       │   ├── MotionProvider.tsx # LazyMotion wrapper (optional)
│       │   └── ScrollReveal.tsx   # Scroll-triggered animations (optional)
│       │
│       ├── data-viz/           # Data visualization components
│       │   ├── index.ts
│       │   ├── HeadshotDataRing.tsx  # Animated network ring for homepage
│       │   ├── DataVizPattern.tsx    # SVG patterns (6 types with accent colors)
│       │   ├── DataTypeIcon.tsx      # Category icons for featured cards
│       │   └── DataSignature.tsx     # Footer brand element
│       │
│       └── projects/           # Project page components
│           ├── index.ts
│           └── ProjectsClient.tsx    # Category filter + project cards
│
├── content/                    # Blog content (outside src)
│   └── posts/                  # MDX blog posts
│       └── hello-world.mdx     # Example post
│
├── public/                     # Static assets
│   ├── images/
│   │   ├── headshot.jpg        # Homepage profile photo (circular)
│   │   └── headshot-about.jpg  # About page photo (rectangular)
│   └── resume.pdf              # Resume download
│
├── package.json
├── tsconfig.json
├── next.config.ts
└── postcss.config.mjs
```

## Design System

### Aesthetic: AstroPaper-Inspired

Clean, typography-focused minimal design. Monospace body font creates a technical/developer feel. Light/dark mode with system preference detection.

**Reference:** [AstroPaper Theme](https://astro-paper.pages.dev/)

### Color Palette

Colors defined in `globals.css` as RGB values (for opacity support):

```css
/* Light Mode */
:root {
  --background: 251, 254, 251;  /* Off-white */
  --foreground: 40, 39, 40;      /* Near-black */
  --accent: 217, 99, 74;         /* Coral */
  --muted: 230, 230, 230;        /* Light gray */
  --card: 230, 230, 230;         /* Card bg */
  --border: 228, 225, 225;       /* Borders */
}

/* Dark Mode */
.dark {
  --background: 33, 39, 55;      /* Navy */
  --foreground: 234, 237, 243;   /* Off-white */
  --accent: 232, 124, 92;        /* Coral (brighter) */
  --muted: 52, 63, 96;           /* Muted navy */
  --card: 63, 75, 90;            /* Card bg */
  --border: 71, 85, 105;         /* Borders */
}

/* Data Visualization Variables */
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

**Usage in Tailwind:**
```tsx
className="bg-background text-foreground border-border"
// or with opacity:
className="bg-[rgb(var(--background)/0.5)]"
```

### Typography

System mono font stack (AstroPaper-style):

```css
font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
```

Used for both body text and headings. Headings use font-weight 700.

**Base Styles:**
- Body: 0.9375rem (15px), line-height 1.7
- Headings: font-weight 700 (bold)

## Components

### Layout Components

#### `Header` (`src/components/layout/Header.tsx`)
- Sticky navigation with blur background
- Logo ("Austin Rose") links to home
- 4 nav links: Experience, Projects, Posts, About
- Active state: wavy coral underline (`.active-nav`)
- Mobile: hamburger menu with slide-down nav
- Theme toggle on right side
- Client component (uses `usePathname`)

#### `Footer` (`src/components/layout/Footer.tsx`)
- Vertically stacked layout (centered)
- Nav links row
- Social icons row (GitHub, LinkedIn, Email) with `.social-icon` styling
- Copyright with dynamic year
- Server component

#### `Container` (`src/components/layout/Container.tsx`)
- Max-width wrapper (768px - `max-w-3xl`)
- Horizontal padding (1rem)
- Polymorphic `as` prop for semantic HTML

#### `ThemeToggle` (`src/components/layout/ThemeToggle.tsx`)
- Circular button with border
- Cycles through: system → light → dark → system
- Icons: monitor (system), sun (light), moon (dark)
- Uses `useIsMounted` to prevent hydration mismatch
- Client component

### Blog Components

#### `PostCard` (`src/components/blog/PostCard.tsx`)
- Displays post title, date, reading time, description
- Title links to post with accent color on hover
- Tags displayed as pill buttons
- Server component

#### `PostList` (`src/components/blog/PostList.tsx`)
- Renders list of PostCard components
- Accepts posts array prop
- Server component

#### `TagList` (`src/components/blog/TagList.tsx`)
- Horizontal list of tag pills with counts
- "All" link to `/posts`
- Each tag links to `/posts/tags/[tag]`
- Uses `.tag` CSS class

#### `MDXComponents` (`src/components/blog/MDXComponents.tsx`)
- Custom component mappings for MDX
- Styled headings, links, code blocks, images
- Used by individual post pages

### Provider Components

#### `ThemeProvider` (`src/components/providers/ThemeProvider.tsx`)
- Wraps `next-themes` ThemeProvider
- Configuration: `enableSystem: true`, `defaultTheme: "system"`
- Uses `attribute: "class"` for dark mode detection
- Handles `suppressHydrationWarning`

### Data Visualization Components

#### `DataVizPattern` (`src/components/data-viz/DataVizPattern.tsx`)
- SVG-based animated patterns for project cards
- 6 pattern types: `bars`, `nodes`, `flow`, `scatter`, `grid`, `network`
- Accent color highlighting on key elements
- Props: `pattern`, `animate`, `subtle`, `className`
- Uses Framer Motion for animations
- Respects `prefers-reduced-motion` via `useReducedMotion` hook
- Client component

#### `HeadshotDataRing` (`src/components/data-viz/HeadshotDataRing.tsx`)
- Animated network visualization orbiting homepage headshot
- 8-12 nodes with connecting lines
- Slow orbital rotation (60s per revolution)
- Client component

#### `DataTypeIcon` (`src/components/data-viz/DataTypeIcon.tsx`)
- Small icons for featured cards (chart, scatter)
- 16x16px, accent color
- Server component

#### `DataSignature` (`src/components/data-viz/DataSignature.tsx`)
- Footer brand element
- Small abstract pattern (vertical bars or connected dots)
- Server component

### Project Components

#### `ProjectsClient` (`src/components/projects/ProjectsClient.tsx`)
- Category filter with pill-shaped buttons
- Project card grid with DataVizPattern headers
- Maintains filter state via `useState`
- Category-to-pattern mapping for visual variety
- Client component (uses state for filtering)

## Pages

### Homepage (`/`)
Layout: Centered, narrow content (768px)
1. **Hero** - Circular headshot (160px) with coral ring, hover animation (scale + shadow), links to /about
   - "Hi, I'm Austin." (italic serif), tagline, 2-sentence intro
2. **Social Links** - GitHub, LinkedIn, Email with circular icons
3. **Featured Section** - 3-column grid with 2 featured projects + 1 featured blog post
   - Cards have PROJECT/POST labels in accent color
   - Only titles are underlined for clickability
4. **Recent Posts** - Latest 5 posts with titles, dates, descriptions

### Posts (`/posts`)
Layout: Blog listing with tag filter
1. **Page Title** - "Posts" with description
2. **Tag Filter** - Horizontal pills: All, [tags with counts]
3. **Posts List** - Chronological, each with title, date, reading time, description, tags

### Post Detail (`/posts/[slug]`)
Layout: Prose-styled content
1. **Title** - Large heading
2. **Meta** - Date, reading time, tags
3. **Content** - MDX with custom components
4. **Back Link** - Return to posts listing

### Tag Filtered (`/posts/tags/[tag]`)
Layout: Same as Posts page, filtered to specific tag

### Projects (`/projects`)
Layout: Card grid (2 columns on desktop)
1. **Category Filter** - Pill-shaped buttons to filter by category
   - "All" (default), Process Optimization, Predictive Analytics, Executive Reporting, Data Infrastructure, Data Governance, Tools & Automation, Personal Project
   - Active: coral background, white text
   - Inactive: bordered with hover effect
2. **Project Cards** - Each card includes:
   - DataVizPattern header (animated SVG based on category)
   - Category label, title, description, impact metric
   - Optional tags for technical projects
   - External link icon for live projects

**Category to Pattern Mapping:**
| Category | Pattern Type |
|----------|-------------|
| Process Optimization | `flow` |
| Predictive Analytics | `scatter` |
| Executive Reporting | `bars` |
| Data Infrastructure | `nodes` |
| Data Governance | `grid` |
| Tools & Automation | `network` |
| Personal Project | `network` |

### About (`/about`)
Layout: Centered narrative
1. **Profile** - Rectangular headshot (220x280px, rounded corners) with career narrative alongside
2. **Skills & Tools** - 3-column grid: Technical, Platforms, Analytical
3. **What Makes Me Different** - Strategic Partnership, Curiosity-Driven, Hands-On Builder
4. **Contact Links** - Email, LinkedIn, GitHub

### Experience (`/experience`)
Layout: Vertical timeline with CSS styling
1. **Hero** - Title + subtitle
2. **Career Narrative** - First-person story
3. **Timeline** - Positions with dates, descriptions
   - TAG (Head of People Analytics)
   - Chime, Vineti, NextRoll, Delivery Hero
   - Earlier Roles (collapsed)
4. **Education** - Mercer University, 2016

## CSS Architecture

### Tailwind v4 Configuration

Uses new CSS-based configuration with `@theme inline`:

```css
/* globals.css */
@import "tailwindcss";

@theme inline {
  --color-background: rgb(var(--background));
  --color-foreground: rgb(var(--foreground));
  --color-accent: rgb(var(--accent));
  /* etc. */
}
```

### Key CSS Classes

```css
/* Links - dashed underline by default */
a {
  text-decoration-style: dashed;
  text-underline-offset: 4px;
}

/* Active nav - wavy coral underline */
.active-nav {
  text-decoration-style: wavy;
  text-decoration-color: rgb(var(--accent));
}

/* No underline utility */
.no-underline { text-decoration: none !important; }

/* Card style */
.card {
  border: 1px solid rgb(var(--border));
  border-radius: 8px;
  /* hover: border-accent */
}

/* Tag pills */
.tag {
  border: 1px solid rgb(var(--border));
  border-radius: 9999px;
  /* hover: border-accent, color-accent */
}

/* Social icons - circular with border */
.social-icon {
  width: 2.5rem;
  height: 2.5rem;
  border: 1px solid rgb(var(--border));
  border-radius: 9999px;
}

/* Prose for MDX content */
.prose { /* Tailwind typography overrides */ }

/* Focus states - dashed outline */
:focus-visible {
  outline: 2px dashed rgb(var(--accent));
}
```

### Accessibility

- Reduced motion: `@media (prefers-reduced-motion: reduce)` disables animations
- Focus visible: Dashed coral outline on keyboard navigation
- Color contrast: Tested for WCAG AA compliance

## Blog System

### Content Location

MDX files in `content/posts/` (outside `src/` for clean separation)

### Frontmatter Schema

```yaml
---
title: "Post Title"       # Required
date: "2025-01-01"        # Required, ISO format
description: "Brief..."   # Required, for listings
tags: ["tag1", "tag2"]    # Optional, for filtering
featured: false           # Optional, shows on homepage
draft: false              # Optional, hides from listings
---
```

### Post Utilities (`src/lib/posts.ts`)

```typescript
getAllPosts()           // Get all published posts, sorted by date
getPostBySlug(slug)     // Get single post by slug
getPostsByTag(tag)      // Filter posts by tag
getAllTags()            // Get unique tags with counts
getFeaturedPosts()      // Get posts marked featured: true
```

### Reading Time

Uses `reading-time` package. Returns `{ text: "3 min read", minutes: 2.5, words: 500 }`.

## Development

```bash
# Install dependencies
npm install

# Start dev server (hot reload)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint
npm run lint
```

## Deployment

Optimized for Vercel:
- Zero-config Next.js support
- Static page generation for blog posts
- Edge-optimized font loading
- Preview deployments for feature branches

```bash
# Deploy via CLI
npx vercel --prod

# Or connect GitHub repo at vercel.com/new
```

## Future Enhancements

- [ ] Search functionality for posts
- [ ] Individual project pages (`/projects/[slug]`)
- [ ] OG image generation for social sharing
- [ ] Analytics integration
- [ ] Contact form
- [ ] Syntax highlighting for code blocks
