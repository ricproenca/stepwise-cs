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

```!
bash .claude/skills/references/validation-checks.sh "$slug"
```

Full check logic: `.claude/skills/references/validation-checks.sh`

---

## Step 3 — Report to the user

After the block above runs, summarise in plain English:
1. The FAIL count and which specific checks failed.
2. The REVIEW count and which checks need a human read (with the exact file paths to open).
3. A recommendation: "ready to mark complete", "fix N items and re-run", or "frontend pages not yet built — re-run after generating HTML".

Do not update `queue.md`. The pipeline skills own that column; validate-topic is read-only.
