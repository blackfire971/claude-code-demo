# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start Next.js development server (http://localhost:3000)
npm run build     # Production build
npm run lint      # Run ESLint
npm test          # Run all Vitest tests
npm test -- --run # Run tests once (single run, not watch mode)
```

## Project Architecture

**Next.js 16** App Router project with **React 19**, **TypeScript** (strict), **Tailwind CSS v4**, and **Vitest v4**.

### Route Groups

Two route groups separate auth-gated and public layouts without changing URLs:

- **`app/(public)/`** — Unauthenticated pages wrapped in a plain `<main>` layout. Includes splash page (`/`), login (`/login`), signup (`/signup`), and a UI preview sandbox (`/preview`).
- **`app/(dashboard)/`** — Authenticated pages wrapped in a layout that includes the `Navbar` component. Houses the heists feature: list (`/heists`), create (`/heists/create`), and details (`/heists/[id]`).

The root layout (`app/layout.tsx`) sets HTML shell, fonts, and global metadata; route group layouts provide per-section chrome.

### Heists Feature

The core domain — "heists" are mischievous office missions. The list page has three sections: active heists (missions you're running), assigned heists (missions others assigned to you), and expired heists. Currently all pages are structural skeletons.

### Styling Approach

- **Tailwind CSS v4** with a custom `@theme` block in `app/globals.css` defining brand colors (`--color-primary: #C27AFF`, `--color-secondary: #FB64B6`, dark background palette) and the Inter font.
- **CSS Modules** for component-scoped styles (see `components/Navbar/Navbar.module.css`), which references global theme tokens via `@reference`.

### Testing

- **Vitest** with **jsdom** environment and **@testing-library/react**.
- Path aliases (`@/`) resolve via `vite-tsconfig-paths`.
- Test setup in `vitest.setup.ts` imports `@testing-library/jest-dom/vitest` for DOM matchers.
- Tests live alongside components in `tests/` mirroring the source tree.

### Testing Patterns

Test files use Vitest's `describe`/`it`/`expect` globals (no import needed). Use `@testing-library/react`'s `render` and `screen` for component queries. Prefer `getByRole` for accessible queries.

```tsx
import { render, screen } from "@testing-library/react"
import Navbar from "@/components/Navbar"

describe("Navbar", () => {
  it("renders the main heading", () => {
    render(<Navbar />)
    const heading = screen.getByRole("heading", { level: 1 })
    expect(heading).toBeInTheDocument()
  })
})
```

### Additional Coding Preference
- Do NOT use semicolons for JavaScript or TypeScript code.
- Do NOT apply tailwind classes directly in component templates unless essential or just 1 at most. If an element needs more than a single tailwind class, combine them into a custom class using the `@apply` directive.
- Use minimal project dependencies where possible.

## Components

### Skeleton (`components/Skeleton/`)
Reusable loading placeholder component with pulse animation. Uses the project's dark theme (`bg-lighter` blocks).

Variants: `default` (rectangle), `text` (full-width line), `circle` (avatar).
Sizes: `sm` (h-2), `md` (h-3), `lg` (h-4), `xl` (h-6).
Accepts `width` and `height` as inline styles for custom dimensions.

```tsx
import Skeleton from "@/components/Skeleton"

// Basic
<Skeleton className="w-full" />

// Variants
<Skeleton variant="text" size="lg" />
<Skeleton variant="circle" size="xl" className="size-12" />

// Custom dimensions
<Skeleton width="60%" height="3rem" />
```