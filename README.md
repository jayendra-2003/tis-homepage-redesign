# Tula's International School — Homepage Redesign

A modern, animated, responsive homepage redesign built for the TIS frontend assessment.

## Stack
- Next.js 14 App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- Vercel-ready

## Features
- Responsive mobile navigation
- Scroll-triggered section reveals
- Scroll progress indicator
- Desktop-only custom cursor
- Accessible semantic sections
- Responsive 375px / tablet / desktop layouts
- Real TIS homepage content and current public contact/admission details

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production check

```bash
npm run build
npm start
```

## Deployment

Push the repository to GitHub and import it into Vercel. No environment variables are required.

## Architecture

`app/` contains routing and global styles. `components/sections/` contains page sections, `components/animation/` contains reusable animation behavior, `components/layout/` contains navigation/footer, and `data/` keeps content separate from presentation.
