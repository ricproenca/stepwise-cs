# Cambridge International UI Kit

## Overview
A high-fidelity, interactive recreation of the Cambridge International Education website (`cambridgeinternational.org`), focused on the AS & A Level qualification product.

## Screens
| Screen | Description |
|---|---|
| **Home** | Hero, stats bar, subject cards, CTA banner |
| **Qualifications** | Subject catalogue with group filters |
| **Subject Detail** | Syllabus page with tabs (Overview, Syllabus, Past papers, Teacher resources, Results) |
| **Schools** | Registration journey, 4-step process, support info |
| **Resources** | Teacher & school resource catalogue |

## Navigation
Click any nav link or subject card to navigate. Uses `localStorage` to persist current page across reloads.

## Components
- `NavBar` — sticky dark-blue nav with logo, links, search, sign-in CTA
- `Footer` — four-column dark footer with links and legal row
- `Shield` — simplified Cambridge coat of arms mark (representative — not official)
- `HomePage` — hero, stats, subject grid, CTA section
- `QualificationsPage` — filterable subject grid
- `SubjectDetailPage` — tabbed detail view with sidebar
- `SchoolsPage` — how-to-register steps + support section
- `ResourcesPage` — resource card grid

## Design Tokens
All colours, fonts, and spacing reference the Cambridge brand:
- Primary font: Playfair Display (substitute for proprietary Feijoa)
- Body font: Open Sans
- Cambridge Dark Blue `#133844` for headers and CTAs
- Cambridge Blue `#8EE8D8` for accents
- Cambridge Warm Blue `#00BDB6` for interactive elements

## Notes
- The University of Cambridge shield in this kit is a representative/simplified mark.  
  **For production use, download official assets from** [cambridgeinternational.org](https://www.cambridgeinternational.org/support-and-training-for-schools/communications-toolkit/logos-and-guidelines/)
- Feijoa is the official Cambridge typeface — requires a license. Playfair Display is used as the closest freely available substitute.
