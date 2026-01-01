# Austin Rose Portfolio

Personal portfolio and blog for Austin Rose, Head of People Analytics at The Aspen Group.

**Live:** [austinrose.io](https://austinrose.io)

## Tech Stack

| Technology | Purpose |
|------------|---------|
| [Next.js 16](https://nextjs.org) | React framework with App Router |
| [TypeScript](https://www.typescriptlang.org) | Type safety |
| [Tailwind CSS v4](https://tailwindcss.com) | Utility-first styling |
| [MDX](https://mdxjs.com) | Blog posts with JSX support |
| [next-themes](https://github.com/pacocoursey/next-themes) | Light/dark mode |
| [Vercel](https://vercel.com) | Hosting & deployment |

## Features

- **AstroPaper-inspired design** - Clean, typography-focused minimal aesthetic
- **Light/dark mode** - System preference detection with manual toggle
- **MDX blog** - Write posts in Markdown with tag filtering
- **Responsive layout** - Mobile hamburger menu
- **Coral accent color** - Consistent brand across both themes
- **Accessibility** - Reduced motion support, dashed focus outlines

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── posts/             # Blog listing and individual posts
│   ├── projects/          # Portfolio projects
│   ├── about/             # About page
│   └── experience/        # Career timeline
├── components/
│   ├── blog/              # PostCard, PostList, TagList, MDXComponents
│   ├── layout/            # Header, Footer, Container, ThemeToggle
│   └── providers/         # ThemeProvider
├── lib/                   # Utilities (posts.ts)
content/
└── posts/                 # MDX blog posts
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view locally.

## Adding Blog Posts

Create a new MDX file in `content/posts/`:

```mdx
---
title: "Post Title"
date: "2025-01-01"
description: "Brief description"
tags: ["tag1", "tag2"]
featured: false
draft: false
---

Your content here...
```

## Deployment

Deployed automatically via Vercel on push to `main`.

- **Production:** https://austinrose.io
- **Preview:** Auto-generated for feature branches

## Documentation

- [ARCHITECTURE.md](./ARCHITECTURE.md) - Detailed technical documentation
- [WORKFLOW.md](./WORKFLOW.md) - Git workflow and deployment process
- [CLAUDE.md](./CLAUDE.md) - Quick reference for AI assistants

## Contact

- **Email:** austin@austinrose.io
- **LinkedIn:** [linkedin.com/in/roseaustin](https://linkedin.com/in/roseaustin)
- **GitHub:** [github.com/austinjamesrose](https://github.com/austinjamesrose)
