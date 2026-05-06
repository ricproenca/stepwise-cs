# Code Review Standards

This is a Next.js 14+ App Router project with a frontend-only scope.
Styling is CSS Modules only. No backend, no API routes to review.

---

## Next.js App Router Conventions

- Components in `app/` must be Server Components by default
- `"use client"` must only appear when the component uses hooks, browser APIs, or event handlers
- Never use `"use client"` unnecessarily — flag it if a component has no client-side logic
- `layout.tsx` must not fetch data directly — use dedicated data-fetching components
- `loading.tsx` and `error.tsx` must exist for routes that fetch data
- Dynamic routes must use `generateStaticParams` where applicable
- `Image` from `next/image` must be used instead of `<img>` tags
- `Link` from `next/link` must be used instead of `<a>` tags for internal navigation
- Fonts must use `next/font`, not imported CSS or `<link>` tags

---

## React Best Practices

- No anonymous default exports — all components must be named
- Props must be typed with TypeScript interfaces, not inline types or `any`
- Avoid prop drilling more than 2 levels — flag it if deeper
- `useEffect` with missing or wrong dependencies must be flagged
- Keys in lists must be stable and unique — no array index as key
- Avoid large components — flag files over 200 lines
- No direct DOM manipulation (`document.querySelector`, etc.)

---

## Performance (Core Web Vitals)

- `next/image` must be used with explicit `width`, `height`, or `fill` — no missing dimensions
- Above-the-fold images must have `priority` prop
- Heavy components loaded conditionally must use `next/dynamic` with `ssr: false` where appropriate
- Avoid importing large libraries in Client Components — flag anything that significantly increases bundle size
- Avoid inline object/array creation inside JSX props (causes unnecessary re-renders)

---

## Accessibility (a11y)

- All `<img>` and `<Image>` elements must have descriptive `alt` text — not empty unless decorative
- Interactive elements (`button`, `a`) must have accessible labels
- Forms must have associated `<label>` for each input
- `onClick` must not be placed on non-interactive elements (`div`, `span`) — use `button` instead
- Color contrast issues must be flagged where identifiable
- Headings must follow a logical hierarchy (no skipping from h1 to h3)

---

## CSS Modules

- No global styles inside CSS Module files — use `globals.css` for that
- Class names must be camelCase
- No hardcoded pixel values for spacing — use CSS variables or a consistent scale
- No `!important` unless absolutely justified with a comment
- No duplicate class definitions within the same module file

---

## Out of Scope — Do Not Flag

- Backend logic, API routes, or server actions
- Test coverage
- Build configuration
- Third-party library internals