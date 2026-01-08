README — src/app

This file explains the purpose and structure of files found under `src/app/` in this repository.

Goal: provide a single, readable place describing what each file does so contributors can quickly understand the app layout and components.

---

## Top-level files

- `layout.tsx`

  - Root layout for the Next.js App Router. Imports the global `Navbar` and sets fonts/metadata. This is a server component by default and wraps all pages. If you need client-side interactivity in layout, add `"use client"` at the top.

- `page.tsx`

  - The homepage route. This file composes the app by importing sections from `components/` (Hero, Programs, Values, Locations, Reviews, Teachers, Signup, Footer).

- `globals.css`
  - Global styles and Tailwind directives. Use this to add app-wide CSS variables, base styles or to centralize utility overrides.

## `components/` folder

All interactive components that use React hooks or browser-only APIs should include `"use client"` at the top of the file.

- `Navbar.tsx`

  - The site header. Implements the desktop menu, mobile menu toggle, and top-level navigation. Uses the `lucide-react` icons for the menu UI.

- `HeroSection.tsx`

  - Top-of-page hero content: big title, summary bullets, and optional CTA. Usually server component unless it contains state.

- `ProgramsSection.tsx`

  - Shows the program list (buttons with icons). Program data and tiny badges (e.g. "Mới +") live here.

- `AchievementsSection.tsx` / `ValuesSection.tsx`

  - Present static or near-static content (cards or lists) describing achievements and core values.

- `LocationsSection.tsx`

  - Grid of locations / branches. Contains address and optionally a CTA button to view branch details.

- `ReviewsSection.tsx` / `ReviewsSection2.tsx`

  - Testimonials and reviews. One section may show cards; the other shows a two-column feed. They contain small UI elements like avatars, date text and "Xem chi tiết" links.

- `TeachersSection.tsx`

  - Grid of teacher cards, a short summary text and a CTA button to view all teachers.

- `SignupSection.tsx`

  - Contact area (messenger, hotline, address) and a large visual. Useful for capturing leads.

- `Footer.tsx`

  - Site footer: branch lists, course quick links, contact info and social icons. Small bottom bar contains copyright and legal links.

- `programIcons.ts`
  - Small mapping file exporting icon components used by `ProgramsSection`.

## `data/`, `lib/`, `types/`

- `data/`

  - Place for static data or content constants.

- `lib/`

  - App utilities and helper functions used by multiple components.

- `types/`
  - Shared TypeScript interfaces and types for components and data.

## Notes & conventions

- Tailwind CSS: the project uses Tailwind utility classes (mobile-first). Adjust breakpoints using `sm:`, `md:`, `lg:`, `xl:`.
- Server vs Client components: prefer server components for static UI. Add `"use client"` only for components needing state, effects, or browser-only APIs.
- Adding packages: most scripts are proxied to `src/` by root `package.json` — check `package.json` at the root and in `src/` to decide where to install new dependencies.
- Fonts: Inter is loaded via `next/font/google` in `layout.tsx` and applied as a CSS variable.

## Troubleshooting

- If `src/` appears empty on GitHub: it may have been added as an embedded git repo (submodule) or files got ignored via `.gitignore` inside `src`. Ensure `src/.git` is not present and force-add files with `git add -f` if necessary.
- If UI looks broken after layout changes, check for `max-w-7xl mx-auto` wrappers — these control centered content width. Reverting to these wrappers will restore the centered layout.

## Quick dev commands

From repository root:

```bash
pnpm install
pnpm run dev
```

If the project scripts are located inside `src/` (check `package.json`), run:

```bash
pnpm --prefix src install
pnpm --prefix src run dev
```

Next dev server defaults to `http://localhost:3000`.

---

If you want inline header comments inside every file instead of this central README, tell me and I will add consistent header blocks (purpose, client/server note, props, and usage) to each file in `src/app/components` and top-level files.
