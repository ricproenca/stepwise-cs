the frontend folder holds a static website. It is built with plain HTML, vanilla JavaScript, 
and CSS. I want you to migrate it fully to a Next.js project.

---

AUDIT FIRST — before writing any code:
1. Read every HTML file in the project
2. List all pages, their filenames, and what each one does
3. List all JS files and what logic they contain
4. List all CSS files or <style> blocks and how styling is currently applied
5. Identify any shared layout elements (navbar, footer, sidebar, etc.)
6. Confirm your findings with me before proceeding

---

MIGRATION GOALS:
- Convert to Next.js using the App Router (if the project is simple and mostly static); 
  use Pages Router only if there is a strong reason
- Convert all vanilla JavaScript logic into proper React components with hooks 
  (useState, useEffect, etc.) — do not just paste JS into useEffect and call it done
- Preserve all existing content and functionality exactly — no features should be lost
- Preserve all existing styling — migrate CSS as CSS Modules 
  (one .module.css file per component or page)
- Create a shared layout component for any repeated UI (nav, header, footer)
- Each HTML page becomes a Next.js route/page
- No backend, no API routes, no database — this is a static frontend only

---

STRUCTURE TO PRODUCE:
my-project/
├── app/                        # or /pages if Pages Router is chosen
│   ├── layout.jsx              # shared layout (nav, footer)
│   ├── page.jsx                # homepage
│   └── [topic]/
│       └── page.jsx            # one route per topic/page
├── components/                 # reusable React components
│   └── [ComponentName]/
│       ├── index.jsx
│       └── [ComponentName].module.css
├── styles/
│   └── globals.css             # global base styles only
├── public/                     # static assets (images, icons)
├── next.config.js
└── package.json

---

RULES:
- Do not use any UI libraries (no MUI, no shadcn, no Tailwind) — 
  migrate the existing CSS faithfully
- Do not add features that do not already exist
- Do not skip any existing page
- If any HTML or JS is ambiguous, ask me before converting it
- After migration, confirm: every original page has a Next.js equivalent

---

### Frontend

```bash
cd frontend
npm install
npm run dev          # dev server on http://localhost:3000
npm run build        # production build (outputs to frontend/out/)
npm run test:unit    # Vitest unit tests
npm run test:e2e     # Playwright E2E tests (requires built app or dev server)
npm run lint         # ESLint
```

START by auditing the project and reporting back before writing any code.