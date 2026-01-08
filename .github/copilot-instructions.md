# Anawim English Codebase Guide

## Project Overview

This is a Next.js 16 web application for Anawim English language courses. The project uses **pnpm** as the package manager with a root-level workspace structure that delegates to `src/` subdirectory.

## Key Architecture

### Workspace Structure

- **Root** (`package.json`): Controls pnpm workspaces and uses nodemon to reload `src/` during development
- **App** (`src/`): Contains the actual Next.js application with TypeScript and Tailwind CSS v4
- **Entry Points**: `src/app/layout.tsx` (root layout with Navbar) → `src/app/page.tsx` (homepage) → `src/app/components/`

### Tech Stack

- **Framework**: Next.js 16.1.1 (App Router)
- **Language**: TypeScript 5 (strict mode enabled)
- **Styling**: Tailwind CSS v4 with `@tailwindcss/postcss`
- **Icons**: lucide-react v0.562.0
- **Type Safety**: React 19 with strict TypeScript

### Directory Layout

```
src/app/
  ├── layout.tsx          # Root layout (imports Navbar, sets metadata)
  ├── page.tsx            # Homepage
  ├── components/
  │   └── Navbar.tsx      # Multi-level dropdown menu (client component)
  ├── data/               # [Empty] - For static content/constants
  ├── lib/                # [Empty] - For utilities/helpers
  ├── types/              # [Empty] - For TypeScript interfaces
  └── globals.css         # Tailwind directives
```

## Critical Developer Workflows

### Development

```bash
pnpm run dev
# Runs nodemon watching for changes, which triggers: npm run dev --prefix src
# This starts: next dev (auto-reload at localhost:3000)
```

### Building & Deployment

```bash
pnpm run build        # Compiles Next.js app
pnpm run start        # Runs production server
pnpm run lint         # Runs ESLint (must fix errors before deployment)
```

### Important

- Always run commands from **root directory** (`anawim-english/`), not from `src/`
- The root `package.json` proxies commands to `src/` subdirectory via `--prefix src`
- When adding dependencies, they go in `src/package.json`, not root

## Project-Specific Conventions

### Component Patterns

1. **Server vs Client Components**

   - `layout.tsx`: Server component (default)
   - `Navbar.tsx`: Client component (`"use client"` directive) - required for state & interactivity
   - All new interactive components should be marked `"use client"`

2. **Navigation Structure**

   - Defined as data objects in components (see `menuItems` in Navbar)
   - Uses Next.js `<Link>` for client-side navigation
   - Supports nested submenus with optional `submenu` field

3. **Styling Approach**
   - Tailwind CSS utility classes (not CSS modules)
   - Responsive prefixes: `sm:`, `md:`, etc. for mobile-first design
   - Dark mode support via `dark:` prefix
   - Example: `className="dark:text-zinc-50"` (Vietnamese comments in code are normal)

### Content Language

- UI rendered in **Vietnamese** (see `lang="vi"` in layout.html tag)
- Comments in code are Vietnamese - preserve these for clarity
- Content domain: IELTS courses, SAT, and Catholic-themed English education

## External Dependencies

- **lucide-react**: Icon library (ChevronDown, Menu, X used in Navbar)
- **Next.js Font**: Imports from `next/font/google` for optimized font loading (currently unused `Merriweather` import)
- **Next.js Image**: Optimized image component from `next/image`

## Configuration Notes

### TypeScript (`tsconfig.json`)

- `strict: true` (enforce strict type checking)
- Path alias: `@/*` → `./src/*` (use `@/components`, `@/lib`, etc.)
- Target: ES2017

### ESLint

- Extends `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`
- Ignores: `.next/`, `out/`, `build/`, `next-env.d.ts`

### Metadata Management

- Set in `layout.tsx` via Next.js `Metadata` API
- Title: "Anawim English - Tiếng Anh Công Giáo"
- Description: "Học tiếng Anh qua Lời Chúa"

## Common Patterns to Follow

### Adding New Pages

1. Create file in `src/app/` (e.g., `src/app/courses/page.tsx`)
2. Next.js auto-routes via file structure
3. Use `@/components` import aliases

### Adding Components

1. Place in `src/app/components/`
2. Use `"use client"` if component has state, event handlers, or hooks
3. Import icons from `lucide-react` as needed
4. Apply Tailwind classes for styling

### Navigation Updates

- Navbar menu structure lives in `Navbar.tsx` as `menuItems` object
- To add course pages, add entries to the "Khoá học" submenu with href pattern `/khoa-hoc/course-name`

## Git & Version Control

- Project uses pnpm-lock.yaml for dependency locking
- Ensure lock file is committed; don't manually edit
- TypeScript strict mode prevents runtime errors - always fix type errors

## Next Steps for Expansion

- `data/` folder: Ready for course listings, testimonials, FAQs
- `lib/` folder: Ready for utility functions (date formatting, course filters, etc.)
- `types/` folder: Ready for shared TypeScript interfaces (Course, User, etc.)
