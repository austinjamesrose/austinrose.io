# CLAUDE.md

This file helps Claude Code sessions quickly understand and work with this project.

## Project Overview

Austin Rose's portfolio and blog (austinrose.io) - a Next.js 16 app with MDX blog, light/dark theme support, and minimal design inspired by [AstroPaper](https://astro-paper.pages.dev/). Features blog posts (from Obsidian markdown), projects portfolio, career timeline, and a clean typography-focused aesthetic.

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
| `/projects` | Portfolio projects (cards) |
| `/about` | About page with rectangular headshot + skills |
| `/experience` | Career timeline |

**Navigation order:** Experience - Projects - Posts - About

## Key Files

| File | Purpose |
|------|---------|
| `src/app/globals.css` | Design tokens (light/dark mode colors, typography) |
| `src/app/layout.tsx` | Root layout with ThemeProvider, IBM Plex fonts |
| `src/lib/posts.ts` | Blog post utilities (getAllPosts, getPostBySlug, etc.) |
| `content/posts/` | MDX blog posts with frontmatter |
| `src/components/blog/` | PostCard, PostList, TagList, MDXComponents |
| `src/components/providers/ThemeProvider.tsx` | next-themes wrapper |
| `src/components/layout/ThemeToggle.tsx` | Light/dark/system toggle |

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
---
```

**Adding a new post:**
1. Create `content/posts/my-post.mdx` with frontmatter
2. Build will auto-generate routes

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

| Font | Variable | Usage |
|------|----------|-------|
| IBM Plex Mono | `--font-mono` | Body text (monospace feel) |
| IBM Plex Serif | `--font-serif` | Headings (display) |

### Key CSS Classes

- `.tag` - Pill-style tags with border
- `.card` - Project/content cards with hover effect
- `.social-icon` - Circular bordered icon links
- `.active-nav` - Wavy underline for active nav state
- `.prose` - Typography for blog content
- `.no-underline` - Remove link underline

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
│   ├── page.tsx        # Homepage
│   ├── globals.css     # Design tokens
│   ├── layout.tsx      # Root layout
│   ├── posts/          # Blog pages
│   │   ├── page.tsx    # Posts listing
│   │   ├── [slug]/     # Post detail
│   │   └── tags/[tag]/ # Tag filtering
│   ├── projects/       # Projects portfolio
│   ├── about/          # About page
│   └── experience/     # Career timeline
├── components/
│   ├── blog/           # PostCard, PostList, TagList, MDXComponents
│   ├── layout/         # Header, Footer, Container, ThemeToggle
│   ├── providers/      # ThemeProvider
│   └── animations/     # ScrollReveal, MotionProvider (minimal)
├── lib/
│   └── posts.ts        # Blog utilities
content/
└── posts/              # MDX blog posts
```

## Deployment

- **Production:** Vercel auto-deploys from `main` branch
- **Preview:** Push any branch for auto-generated preview URL

## Related Docs

- `ARCHITECTURE.md` - Detailed technical documentation
- `WORKFLOW.md` - Git workflow and deployment
