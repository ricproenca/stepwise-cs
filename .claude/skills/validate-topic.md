---
name: validate-topic
description: Runs the completion checklist against a 9618 topic and reports pass/fail; read-only. Triggered by "validate [slug]", "QA [slug]", or /validate-topic [slug]. Use before marking queue.md [x].
argument-hint: "[slug]"
arguments:
  - slug
disable-model-invocation: true
allowed-tools:
  - Read
  - Bash
---

# Validate Topic — Cambridge 9618

Run the CLAUDE.md completion checklist against slug: **$slug**.

Produces a pass/fail report. Never writes to content or queue.md directly — report only.

Every check has a status:
- **PASS** — automated check succeeded.
- **FAIL** — automated check failed. Fix before marking the topic complete.
- **REVIEW** — cannot be fully automated; the report surfaces the raw data for a human read.

---

## Step 1 — Preflight

```!
if [ ! -d "content/$slug" ]; then
  echo "FAIL: content/$slug/ does not exist. Stage 2 content must be generated before validation can run."
  exit 1
fi
echo "Validating content/$slug/"
```

---

## Step 2 — Automated checks

Run all checks in one block so the report stays together.

```!
slug="$slug"
cdir="content/$slug"
rdir="resources/scraped/$slug"
fail=0
review=0

hdr() { printf '\n── %s ──\n' "$1"; }
pass() { printf '  [PASS] %s\n' "$1"; }
fail_() { printf '  [FAIL] %s\n' "$1"; fail=$((fail+1)); }
rev()  { printf '  [REVIEW] %s\n' "$1"; review=$((review+1)); }

# 1. All four content files exist
hdr "1. Content files present"
missing=""
for f in meta.md notes.md glossary.md questions.md; do
  [ -f "$cdir/$f" ] || missing="$missing $f"
done
if [ -z "$missing" ]; then pass "meta.md, notes.md, glossary.md, questions.md all present"
else fail_ "missing:$missing"; fi

# 2. notes.md ends with ## Syllabus Coverage
hdr "2. Syllabus Coverage section"
if grep -q '^## Syllabus Coverage' "$cdir/notes.md" 2>/dev/null; then
  pass "section present in notes.md"
else fail_ "## Syllabus Coverage not found in notes.md"; fi

# 3. No Missing objective without a gaps.md entry
hdr "3. Missing objectives vs. gaps.md"
missing_lines=$(awk '/^## Syllabus Coverage/{p=1;next} p && /— Missing/' "$cdir/notes.md" 2>/dev/null)
if [ -z "$missing_lines" ]; then
  pass "no Missing objectives in Syllabus Coverage"
else
  count=$(printf '%s\n' "$missing_lines" | wc -l | tr -d ' ')
  logged=$(grep -c "^### $slug —" gaps.md 2>/dev/null || echo 0)
  echo "  Missing objectives: $count · gaps.md entries for $slug: $logged"
  if [ "$logged" -ge "$count" ]; then pass "each Missing has a gaps.md entry (heuristic)"
  else fail_ "$count Missing objective(s) but only $logged gaps.md entries for $slug"; fi
fi

# 4. Pseudocode uses Cambridge conventions (heuristic — flag Python/JS markers)
hdr "4. Pseudocode conventions"
bad=$(grep -nE '\bprint\(|\bdef [a-z_]+\(|\bconsole\.log|=\s*(?![=<>])|==|!=' "$cdir"/*.md 2>/dev/null | grep -vE 'DIAGRAM|glossary|Definition|Description' || true)
if [ -z "$bad" ]; then pass "no Python/JS/`==` markers detected"
else rev "possible non-Cambridge constructs — review:"; printf '%s\n' "$bad" | sed 's/^/    /'; fi

# 5. Diagram count (DIAGRAM + VISUAL NEEDED combined) ≥ 3
hdr "5. Diagrams"
dcount=$(grep -cE '<!-- DIAGRAM:|\[VISUAL NEEDED:' "$cdir/notes.md" 2>/dev/null || echo 0)
echo "  diagrams + placeholders: $dcount"
if [ "$dcount" -ge 3 ]; then pass "≥ 3 visuals present"
else fail_ "only $dcount — need ≥ 3"; fi

# 6. Each VISUAL NEEDED placeholder logged in gaps.md
hdr "6. Visual placeholders logged"
vplace=$(grep -cE '\[VISUAL NEEDED:' "$cdir/notes.md" 2>/dev/null || echo 0)
vlogged=$(grep -c 'Visual Placeholder' gaps.md 2>/dev/null || echo 0)
echo "  placeholders: $vplace · logged: $vlogged"
if [ "$vplace" -eq 0 ] || [ "$vlogged" -ge "$vplace" ]; then pass "all visual placeholders logged (or none exist)"
else fail_ "$vplace placeholder(s) but only $vlogged Visual-Placeholder entries in gaps.md"; fi

# 7. Past-paper cross-check — meta.md lists reviewed papers
hdr "7. Past-paper cross-check recorded"
if grep -q '^## Past Papers Checked' "$cdir/meta.md" 2>/dev/null && grep -qE '[0-9]{4}' "$cdir/meta.md"; then
  pass "Past Papers Checked block present in meta.md"
else fail_ "Past Papers Checked block missing or empty in meta.md"; fi

# 8. Model answers reference mark scheme (heuristic)
hdr "8. Model-answer mark-scheme alignment"
rev "automated check cannot verify wording match — spot-check 2–3 questions against resources/scraped/$slug/past-papers.md"

# 9. Questions: ≥ 10, with Difficulty + at least one past-paper
hdr "9. Questions count / tags"
qcount=$(grep -cE '^## Question ' "$cdir/questions.md" 2>/dev/null || echo 0)
diff_ok=$(grep -cE '^\*\*Difficulty:\*\*' "$cdir/questions.md" 2>/dev/null || echo 0)
pp_count=$(grep -cE 'Type:\*\* past-paper' "$cdir/questions.md" 2>/dev/null || echo 0)
echo "  questions: $qcount · Difficulty tags: $diff_ok · past-paper type: $pp_count"
if [ "$qcount" -ge 10 ] && [ "$diff_ok" -ge "$qcount" ] && [ "$pp_count" -ge 1 ]; then
  pass "≥ 10 questions, all tagged, ≥ 1 past-paper"
else fail_ "need: ≥10 questions (have $qcount), Difficulty on each (have $diff_ok), ≥1 past-paper (have $pp_count)"; fi

# 10. Glossary — ≥ 10 terms, ≤ 2 sentences per Definition
hdr "10. Glossary structure"
tcount=$(grep -cE '^## [A-Z][a-zA-Z]' "$cdir/glossary.md" 2>/dev/null || echo 0)
long_defs=$(awk '/^\*\*Definition:\*\*/{d=$0; gsub(/^\*\*Definition:\*\*[[:space:]]*/,"",d); n=gsub(/\. /,"",d); if(n>2) print NR": "d}' "$cdir/glossary.md" 2>/dev/null || true)
echo "  terms (approx): $tcount"
if [ "$tcount" -ge 10 ]; then pass "≥ 10 terms"
else fail_ "only $tcount terms — need ≥ 10"; fi
if [ -z "$long_defs" ]; then pass "no definitions exceed 2 sentences"
else rev "long definitions — review:"; printf '%s\n' "$long_defs" | sed 's/^/    /'; fi

# 11. Prohibited terms
hdr "11. Prohibited terms"
bad_terms=$(grep -inE '\bbasically\b|\bin simple terms\b|\bthis means that\b|\bsimply put\b|\betc\.\B|\bnow let.?s look at\b' "$cdir"/*.md 2>/dev/null || true)
if [ -z "$bad_terms" ]; then pass "no prohibited terms detected"
else fail_ "prohibited terms found:"; printf '%s\n' "$bad_terms" | sed 's/^/    /'; fi

# 12. HTML pages (skip if not yet built)
hdr "12. HTML pages"
hdir="frontend/topics/$slug"
if [ ! -d "$hdir" ]; then
  rev "no frontend/topics/$slug/ — frontend-builder has not run yet (skip if intentional)"
else
  missing_html=""
  for f in index.html questions.html glossary.html; do
    [ -f "$hdir/$f" ] || missing_html="$missing_html $f"
  done
  if [ -n "$missing_html" ]; then fail_ "missing HTML files:$missing_html"
  else
    broken=$(grep -lE '<svg[^>]*>[[:space:]]*</svg>|src="\s*"|href="\s*"' "$hdir"/*.html 2>/dev/null || true)
    if [ -z "$broken" ]; then pass "all three pages present and no obvious empty svg/src/href"
    else rev "possible broken references in: $broken"; fi
  fi
fi

# Summary
printf '\n══ SUMMARY ══\n  FAIL: %d · REVIEW: %d\n' "$fail" "$review"
if [ "$fail" -eq 0 ] && [ "$review" -eq 0 ]; then
  echo "  ✓ Topic $slug passes all automated checks."
elif [ "$fail" -eq 0 ]; then
  echo "  ○ No FAILs — topic may be complete once REVIEW items are spot-checked."
else
  echo "  ✗ $fail FAIL(s) — do not mark queue.md [x] until resolved."
fi
```

---

## Step 3 — Report to the user

After the block above runs, summarise in plain English:
1. The FAIL count and which specific checks failed.
2. The REVIEW count and which checks need a human read (with the exact file paths to open).
3. A recommendation: "ready to mark complete", "fix N items and re-run", or "frontend pages not yet built — re-run after generating HTML".

Do not update `queue.md`. The pipeline skills own that column; validate-topic is read-only.
