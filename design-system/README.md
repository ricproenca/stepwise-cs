# AS Level Design System

## Overview

**Cambridge Assessment International Education** (CAIE) is a division of Cambridge University Press & Assessment, and part of the University of Cambridge. It is the world's leading provider of international education programmes and qualifications for students aged 3–19, operating in 160+ countries.

This design system is scoped specifically to **Cambridge International AS & A Level Computer Science (syllabus code 9618)** — covering all digital surfaces related to that qualification: subject pages, teacher resources, student-facing materials, and supporting tools.

### Product in Scope
- **Cambridge AS & A Level Computer Science (9618)** — subject pages, syllabus materials, teacher resources, and student-facing content on `cambridgeinternational.org`.

### Sources
- University of Cambridge Brand Guidelines: https://www.cam.ac.uk/brand-resources/guidelines/colour
- University of Cambridge Typography: https://www.cam.ac.uk/brand-resources/guidelines/typography
- Cambridge International Logo Guidelines PDF: https://www.cambridgeinternational.org/Images/278763-logo-usage-guidelines-for-cambridge-international-schools.pdf
- Cambridge International Website: https://www.cambridgeinternational.org
- Moving Brands case study (brand transformation): https://movingbrands.com/work/cambridge-university/

---

## CONTENT FUNDAMENTALS

### Tone of Voice
- **Authoritative yet accessible** — speaks as a globally respected institution, but never elitist or cold
- **Mission-driven** — language consistently returns to student potential, curiosity, and life preparation
- **Clear and direct** — no jargon; structured for international audiences (many non-native English speakers)
- **Optimistic and empowering** — phrases like "unlock potential", "love learning", "discover new abilities"

### Voice Characteristics
- Uses **"we/our"** for the organisation; uses **"you/your"** when addressing schools, teachers, and parents
- Avoids first-person singular ("I")
- **No emoji** in official communications
- Sentence case for most headings (not Title Case for body headers)
- Oxford English spelling (programme, not program; recognise, not recognize; organisation, not organization)

### Key Copy Examples
- *"Our programmes inspire students to love learning, helping them discover new abilities and a wider world."*
- *"The Cambridge Pathway gives students a clear path for educational success."*
- *"We shape its curriculum around how our students learn."*
- *"Fostering informed curiosity and a lasting passion for learning."*
- *"Recognised by top universities and employers worldwide."*

### Casing Rules
- Headlines: Sentence case
- Navigation items: Title Case
- Button labels: Sentence case
- Subject names: Title Case (e.g. Cambridge International AS Level Biology)
- Programme names: Always capitalised (Cambridge Pathway, Cambridge IGCSE, etc.)

---

## VISUAL FOUNDATIONS

### Colors
**Primary palette — Cambridge Blues:**
- Cambridge Blue: `#8EE8D8` (signature teal-mint — most prominent)
- Cambridge Light Blue: `#D1F9F1` (very light tint — backgrounds)
- Cambridge Warm Blue: `#00BDB6` (mid teal — accents, CTA highlights)
- Cambridge Dark Blue: `#133844` (deep navy-teal — text, dark backgrounds)

**Secondary palettes (used alongside primary, never alone):**
- Crest (warm orange/red): `#FD8153` / `#DD3025` (dark)
- Cherry (rose/magenta): `#CD3572` / `#911449` (dark)
- Purple: `#A368DF` / `#681FB1` (dark)
- Indigo: `#5366E0` / `#29347A` (dark)
- Green: `#4DB78C` / `#13553A` (dark)

**Greyscale:**
- White: `#FFFFFF`
- Slate 1: `#ECEEF1` (light backgrounds)
- Slate 2: `#B5BDC8` (borders, dividers)
- Slate 3: `#546072` (secondary text)
- Slate 4: `#232830` (primary text — use instead of black)

### Typography
- **Feijoa** — primary/display serif. Used for headlines, titles, and pull quotes. Makes visual impact. *(Proprietary — closest Google Fonts substitute: Playfair Display)*
- **Open Sans** — secondary/body sans-serif. Used for subheadings, body copy, navigation, labels, captions. Available on Google Fonts.
- Hierarchy: Feijoa Bold for hero headings → Open Sans Bold for subheadings → Open Sans Regular for body

### Backgrounds & Surfaces
- Maximum white space is mandated — clean, contemporary
- Cambridge Blue (`#8EE8D8`) used as hero/section background tint
- Cambridge Dark Blue (`#133844`) used for dark-mode banners and footers
- Light Crest/tinted peach used for warm accent sections
- Photography is full-bleed, candid, people-focused
- No gradients in the core brand; flat colour blocks with photo overlays

### Spacing & Layout
- Generous padding — wide gutters, lots of breathing room
- 12-column grid; max-width ~1280px
- Content sections use alternating light/dark backgrounds
- Section padding: typically 64–96px vertical

### Borders & Radius
- Very minimal border usage — separation via whitespace
- Cards: subtle border `1px solid #ECEEF1` or box-shadow
- Border radius: ~4px for inputs, ~6–8px for cards, 0 for hero blocks
- Navigation: flat, no borders between items

### Shadows & Elevation
- Cards use soft `box-shadow: 0 2px 8px rgba(0,0,0,0.08)`
- Elevated elements (modals, dropdowns): `0 8px 24px rgba(0,0,0,0.12)`
- No heavy drop shadows; elevation is restrained

### Imagery Style
- Candid, photographic — real students, teachers, classrooms
- Warm, diverse, international representation
- Cool-to-neutral colour temperature
- Overlaid with Cambridge Blue tint on hero sections
- Avoids stock-photo clichés

### Animation & Interaction
- Subtle and functional — no flashy transitions
- Hover states: slight colour deepening (Cambridge Blue → Cambridge Warm Blue)
- Link hover: underline or colour shift
- Button hover: darken background by ~10%
- Transitions: `200–300ms ease`
- No bouncy or spring animations; restrained and professional

### Corner Radii
- Buttons: 4px
- Cards: 6px
- Form inputs: 4px
- Badges/tags: 20px (pill shape)
- Hero sections: 0 (full-bleed, square)

### Cards
- White background, `border-radius: 6px`
- `border: 1px solid #ECEEF1` or soft shadow
- Internal padding: 24px
- Header image optional above content

### Iconography
See ICONOGRAPHY section below.

---

## ICONOGRAPHY

### Approach
Cambridge International uses a simple, clean line-icon style. No icon font is part of the core public brand identity — the website uses a mix of SVG icons and a standard icon set.

- **Style:** Line icons, 2px stroke, rounded caps — geometric and clean
- **Size:** 20–24px at standard density; 32–40px for feature icons
- **Color:** Inherits text color or uses Cambridge Dark Blue / Cambridge Warm Blue
- **No emoji** in UI contexts
- **Closest CDN match:** Lucide Icons (https://unpkg.com/lucide@latest) — matches the stroke weight and geometric style used on the site

### Key Icons Used
- Navigation: chevrons, hamburger menu, search, globe (international focus)
- Subject pages: subject-specific icons (science beaker, maths symbols, etc.)
- CTAs: arrow-right for navigation, download icon for resources
- Status: tick/checkmark for qualification features

### Logo
- Primary logo: Cambridge International wordmark + University of Cambridge shield
- The shield (coat of arms) is a protected asset — cannot be used standalone
- Available as colour (on light backgrounds) and white (on dark/Cambridge Blue backgrounds)
- Clear space: equal to the height of the 'C' in Cambridge around all sides
- Do not resize shield independently from text

---

## INDEX / MANIFEST

```
/
├── README.md                          ← This file
├── SKILL.md                           ← Agent skill definition
├── colors_and_type.css                ← CSS variables: colors, type, spacing
├── assets/
│   ├── logo-shield.svg                ← Cambridge shield (simplified)
│   └── logo-wordmark.svg              ← Cambridge International wordmark
├── preview/
│   ├── colors-primary.html            ← Primary color swatches
│   ├── colors-secondary.html          ← Secondary color palettes
│   ├── colors-greyscale.html          ← Greyscale palette
│   ├── colors-semantic.html           ← Semantic color usage
│   ├── type-display.html              ← Display / heading typography
│   ├── type-body.html                 ← Body typography specimens
│   ├── type-scale.html                ← Full type scale
│   ├── spacing-tokens.html            ← Spacing tokens
│   ├── spacing-radius-shadow.html     ← Border radius + shadow system
│   ├── components-buttons.html        ← Button states
│   ├── components-cards.html          ← Card variants
│   ├── components-badges.html         ← Badges and tags
│   ├── components-nav.html            ← Navigation bar
│   └── components-forms.html         ← Form inputs
└── ui_kits/
    └── cambridge-international/
        ├── README.md
        └── index.html                 ← Cambridge International UI kit
```
