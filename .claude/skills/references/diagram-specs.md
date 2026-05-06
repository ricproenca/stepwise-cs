# Diagram Specs — Cambridge 9618

## notes.md — diagram comment format

Embed as HTML comments in the relevant section of notes.md:

```
<!-- DIAGRAM: [type] — [description] — explains [concept] -->
```

Available types: `flowchart` · `comparison-table` · `binary-diagram` · `network-diagram` · `memory-map` · `timeline` · `tree-diagram`

Minimum 3 diagrams or placeholders per topic.

## VISUAL NEEDED placeholder (notes.md)

When a concept cannot be rendered in markdown, insert this placeholder:

```
> [VISUAL NEEDED: type — what it shows — labels required — why it helps here]
```

Log every VISUAL NEEDED entry in `gaps.md` before marking the topic complete.

## frontend-builder — diagram rendering table

For each `<!-- DIAGRAM: -->` comment, convert to inline SVG using the corresponding template. Do not generate SVG from scratch.

| Type | Approach | Template |
|------|----------|----------|
| `flowchart` | Adapt flowchart.svg — adjust box labels, add/remove steps | `svg-templates/flowchart.svg` |
| `comparison-table` | Styled HTML table using `.table` class (preferred over SVG) | `svg-templates/comparison-table.svg` (SVG fallback) |
| `binary-diagram` | Adapt binary-diagram.svg — set bit values and column weights | `svg-templates/binary-diagram.svg` |
| `network-diagram` | **Always use `diagram-placeholder`** — do not attempt SVG | — |
| `memory-map` | Adapt memory-map.svg — adjust segment labels and heights | `svg-templates/memory-map.svg` |
| `timeline` | Adapt timeline.svg — adjust node labels and count | `svg-templates/timeline.svg` |
| `tree-diagram` | Adapt tree-diagram.svg — adjust hierarchy labels | `svg-templates/tree-diagram.svg` |

If a diagram cannot be accurately represented as SVG, use the SVG fallback placeholder in `.claude/skills/references/html-templates.md`.
