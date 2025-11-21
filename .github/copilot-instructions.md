## Purpose

This file gives concise, repository-specific guidance so an AI coding agent can be productive quickly in this React + Vite project.

## Quick facts
- Framework: React 19 + Vite (see `vite.config.js`).
- Styling: Tailwind CSS (see `tailwind.config.js` and `src/index.css`).
- Router: client-side routing in `src/App.jsx` using `react-router-dom` with a nested `MainLayout` (`src/Components/Layouts/MainLayout.jsx`).
- Package manager: pnpm preferred (repo includes `pnpm-lock.yaml`), but `npm` works too.
- Deployment: `vercel.json` exists — the project is Vercel-ready.

## Quick start (Windows PowerShell)
```powershell
pnpm install
pnpm dev       # starts Vite dev server with HMR
pnpm build     # production build
pnpm preview   # preview build locally
pnpm lint      # run eslint
```

If `pnpm` isn’t available, use `npm install` and `npm run dev` instead.

## Where things live (important files to reference)
- `src/App.jsx` — declares routes and mounts `MainLayout`.
- `src/main.jsx` — React entry (StrictMode + root render).
- `src/Components/Layouts/MainLayout.jsx` — global layout: `<NavBar />`, `<Outlet />`, `<Footer />`.
- `src/Components/NavBar.jsx` — fixed top navigation; contains both desktop and mobile menu markup.
- `src/Components/pages/*` — page components (Home, AboutUs, Contact, Events, location, Prayers).
- `src/assets/` — static image assets imported directly into components (e.g. `AboutUs.jsx`).
- `tailwind.config.js`, `src/index.css` — Tailwind is used via `@tailwind` directives.
- `package.json` — scripts and third-party deps (emailjs, swiper, framer-motion, react-router-dom, heroicons).

## Project conventions & gotchas (do not assume defaults)
- Layout & routing: Pages are rendered inside `MainLayout` using `<Outlet />`. To add a page, place it in `src/Components/pages`, add a `<Route>` in `src/App.jsx` under the `MainLayout` nested route, and add a `Link` in `NavBar.jsx` (both desktop and mobile menu blocks).
- Fixed NavBar: `NavBar` is `fixed` at top. Pages typically add a top padding on the main content (e.g. `pt-10` in `AboutUs.jsx` and `Contact.jsx`) to avoid being hidden behind the navbar — preserve this pattern when creating pages.
- Asset imports: images live in `src/assets` and are imported directly (e.g. `import PastorJohn from '../../assets/david.jpg'`). Avoid dynamic or runtime-only paths for images.
- Tailwind pattern: components use `container mx-auto px-4` widely — follow the container + padding pattern for consistent layout.
- File naming: Most components use PascalCase but `location.jsx` is lowercase. Prefer PascalCase for new files (e.g. `Location.jsx`) to stay consistent, but keep existing filenames unchanged unless you update imports.

## Common tasks — concrete examples
- Add a new page `src/Components/pages/Team.jsx`, then in `src/App.jsx`:
  - Import and add a route within the `<Route path="/" element={<MainLayout />}>` nested routes.
  - Add a `Link` in `src/Components/NavBar.jsx` (desktop and mobile sections).
- Change global layout: Edit `src/Components/Layouts/MainLayout.jsx` (it wraps every page). Avoid moving NavBar out of layout unless you update routing.

## External integrations to watch
- `@emailjs/browser` is listed in `package.json`. If the contact form needs server-side credentials, prefer environment variables and Vercel Secrets rather than hardcoding.
- `swiper` and `framer-motion` are used for UI/animation; check pages using them before changing shared CSS or layout.

## Linting & tests
- Linting: `pnpm lint` runs ESLint. There are no unit tests in the repo.

## Debugging tips
- HMR: use `pnpm dev` (Vite) for fast reloads.
- Routing: to debug route issues, open `src/App.jsx` and confirm the `<Route>` nesting under `MainLayout`. If a page is blank, check for missing `pt-...` top padding when NavBar is `fixed`.
- Build issues: run `pnpm build` locally and then `pnpm preview` to reproduce production behavior.

## Safety & small fixes an AI can safely apply
- Small UI/text updates in pages (copy, Tailwind classes, images) are low-risk.
- Adding a new route + component is safe when imports and NavBar links are updated.
- Avoid large refactors of routing/layout without running `pnpm dev` or `pnpm build` and testing pages visually.

## Where to look for more context
- Start with `src/App.jsx` (routing) → `src/Components/Layouts/MainLayout.jsx` (layout) → `src/Components/NavBar.jsx` (navigation and menu) → `src/Components/pages/*` (page implementations).

If any section above is unclear or you want me to expand examples (route diff, new page template, or a PR-ready change), tell me which piece to generate next.
