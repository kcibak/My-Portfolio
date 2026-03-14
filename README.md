# Kira Cibak Portfolio

This repository contains the source for my personal site: a fast, static-first Astro build with a custom visual system, thoughtful motion, and focused project storytelling.

## What This Codebase Showsw
- Product-minded frontend engineering, not just page styling
- Reusable UI primitives and page-level composition in Astro
- Light and dark mode with persisted user preference
- Project data modeled in TypeScript and rendered into reusable cards
- Strong structure discipline with a custom section-rhythm validator

## Stack

- Astro 5
- Preact (for interactive islands)
- TypeScript (strict)
- CSS custom properties + scoped component styles

Main app lives in [Kira-Cibak](Kira-Cibak).

## Quick Start

From repository root:

```bash
cd Kira-Cibak
npm install
npm run dev
```

Then open `http://localhost:4321`.

## Scripts

Run inside [Kira-Cibak](Kira-Cibak):

- `npm run dev` - start local dev server
- `npm run build` - production build to `dist/`
- `npm run preview` - preview production output locally
- `npm run check:rhythm` - catch manual vertical spacing overrides and section/container structure violations

## Deep Dive: Architecture Snapshot

### Routing

- Home: [Kira-Cibak/src/pages/index.astro](Kira-Cibak/src/pages/index.astro)
- About: [Kira-Cibak/src/pages/about.astro](Kira-Cibak/src/pages/about.astro)
- Skills: [Kira-Cibak/src/pages/skills.astro](Kira-Cibak/src/pages/skills.astro)
- Projects: [Kira-Cibak/src/pages/projects/index.astro](Kira-Cibak/src/pages/projects/index.astro)
- Contact: [Kira-Cibak/src/pages/contact.astro](Kira-Cibak/src/pages/contact.astro)
- Blog scaffold: [Kira-Cibak/src/pages/blog/index.astro](Kira-Cibak/src/pages/blog/index.astro), [Kira-Cibak/src/pages/blog/[slug].astro](Kira-Cibak/src/pages/blog/[slug].astro)

### Layout + UI System

- Global layout and metadata: [Kira-Cibak/src/layouts/MainLayout.astro](Kira-Cibak/src/layouts/MainLayout.astro)
- Design tokens: [Kira-Cibak/src/styles/global.css](Kira-Cibak/src/styles/global.css)
- Reusable UI: [Kira-Cibak/src/components/ui](Kira-Cibak/src/components/ui)
- Page sections: [Kira-Cibak/src/components/pages](Kira-Cibak/src/components/pages)

### Interactive Islands (Preact)

- Theme toggle: [Kira-Cibak/src/components/ui/ThemeToggle.tsx](Kira-Cibak/src/components/ui/ThemeToggle.tsx)
- Project carousel: [Kira-Cibak/src/components/project/ProjectCarousel.tsx](Kira-Cibak/src/components/project/ProjectCarousel.tsx)
- Lightbox gallery: [Kira-Cibak/src/components/project/LightboxGallery.tsx](Kira-Cibak/src/components/project/LightboxGallery.tsx)

### Content Model

- Project source of truth: [Kira-Cibak/src/data/projects.ts](Kira-Cibak/src/data/projects.ts)
- Includes featured flags, stack tags, categories, years, and live/repo links

### Quality Guardrail

- Section rhythm checker: [Kira-Cibak/scripts/check-section-rhythm.mjs](Kira-Cibak/scripts/check-section-rhythm.mjs)
- Prevents layout drift by flagging manual vertical spacing and invalid page structure patterns

## Notes

- The site is prerendered for static deployment.
- Blog routes are scaffolded and ready for real article content.
- Canonical/sitemap quality depends on setting a real production domain in [Kira-Cibak/astro.config.mjs](Kira-Cibak/astro.config.mjs).

## Contact

- LinkedIn: <https://www.linkedin.com/in/kira-cibak/>
- GitHub: <https://github.com/kcibak>
- Email: kiracibakcodes@gmail.com