# Austin Rose Portfolio

Personal portfolio website for Austin Rose, Head of People Analytics at The Aspen Group.

**Live:** [austinrose.io](https://austinrose.io)

## Tech Stack

| Technology | Purpose |
|------------|---------|
| [Next.js 16](https://nextjs.org) | React framework with App Router |
| [TypeScript](https://www.typescriptlang.org) | Type safety |
| [Tailwind CSS v4](https://tailwindcss.com) | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion) | Animations |
| [Vercel](https://vercel.com) | Hosting & deployment |

## Features

- **Dark mode design** with coral accent colors
- **Responsive layout** with mobile hamburger menu
- **Scroll-triggered animations** throughout
- **Interactive timeline** on Experience page with progress tracking
- **Skills radar chart** with animated SVG
- **Particle background** on hero section
- **Accessibility support** with reduced motion fallbacks

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── about/             # About page with skills radar
│   ├── work/              # Portfolio projects
│   ├── experience/        # Interactive career timeline
│   ├── playground/        # Coming soon
│   └── contact/           # Contact info & resume download
├── components/
│   ├── animations/        # Reusable animation components
│   ├── home/              # Homepage-specific components
│   └── layout/            # Header, Footer, Container
├── hooks/                 # Custom React hooks
└── lib/                   # Utilities and animation variants
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

## Deployment

Deployed automatically via Vercel on push to `main`.

- **Production:** https://austinrose.io
- **Preview:** Auto-generated for feature branches

## Documentation

- [ARCHITECTURE.md](./ARCHITECTURE.md) - Detailed technical documentation
- [WORKFLOW.md](./WORKFLOW.md) - Git workflow and deployment process

## Contact

- **Email:** austin@austinrose.io
- **LinkedIn:** [linkedin.com/in/roseaustin](https://linkedin.com/in/roseaustin)
- **GitHub:** [github.com/austinjamesrose](https://github.com/austinjamesrose)
