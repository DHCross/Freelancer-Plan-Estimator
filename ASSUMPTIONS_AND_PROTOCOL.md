# Hoskbrew Freelancer-Plan-Estimator

## Purpose of This Document

This file defines the **assumptions, governance rules, and operating protocol** for the Hoskbrew estimator (Freelancer-Plan-Estimator).

Treat this as:
- The *canonical description* of how estimates are produced.
- A **defensive record** in budget/political disputes.
- A checklist for any future changes to estimator logic or inputs.

---

## 1. Governance & Access

- **Source of truth**
  - This repository is the authoritative home of the estimator logic.
  - If alternate variants are needed (e.g. for specific stakeholders), they should be created as **branches or forks**, not ad‑hoc edits to `main`.

- **Access discipline**
  - Only trusted maintainers should edit core logic (`lib/calculations.ts`, `lib/types.ts`, `lib/constants.ts`).
  - Others who need different views should receive **JSON exports, PDFs, or read‑only links**, not direct edit rights.

- **Assumptions visibility**
  - This document must be kept **up to date** whenever global assumptions (rates, speeds, pacing rules, chaos buffers) change.
  - When presenting numbers to Finance/Ops/Leadership, reference this document as the baseline assumptions.

---

## 2. Change Protocol

Every time core estimator behavior or key assumptions change, follow this protocol.

### 2.1 Before Changing Anything

- **Snapshot current state**
  - Export the dashboard data via the built‑in Export button (JSON).
  - Optionally store snapshots under a `snapshots/` directory, e.g. `snapshots/2026-02-planning.json`.
  - Commit current code state with a clear message, e.g.:
    - `chore: snapshot 2026 budget before martin review`

### 2.2 While Making Changes

- **Edit assumptions deliberately**
  - Change **only** what is intended: draft speeds, chaos buffers, pacing mode, etc.
  - Avoid hidden or scattered overrides; keep role defaults centralized (e.g. `TEAM_ROSTER`, `ROLE_TEMPLATES`).

- **Log assumption changes**
  - In this file (append under a simple changelog section, if used) or another clearly linked log, record:
    - **Date**
    - **What changed** (e.g. "martin draftSpeed 400 → 250")
    - **Why** (empirical evidence, decision from meeting, risk mitigation, etc.)

### 2.3 After Changes

- **Recompute baseline scenarios**
  - Re‑run estimates for a small set of flagship projects (e.g. Eldritch 2E, A‑Series key adventures, GM Guide) under the new assumptions.
  - Save or export these outputs as the new **reference baseline**.

- **Commit with intent**
  - Example messages:
    - `feat: tighten chaos buffer defaults based on A1 actuals`
    - `refactor: unify estimator pacing engine (daily mode)`

---

## 3. Estimation Discipline

The estimator must be **conservative and defensible**, not optimistic wish‑casting.

- **Default to realism, not hope**
  - Use empirically grounded draft speeds and non‑zero chaos buffers.
  - Keep "heroic" pace settings only in explicitly labeled **aggressive scenarios**.

- **Separate global defaults vs scenario overrides**
  - **Global defaults**: live in code and this document (e.g. default draft speeds, chaos percent, standard daily hours).
  - **Scenario overrides**: live in UI inputs or JSON, clearly labeled as such.
  - Never silently change global defaults as a way to “make the numbers fit.”

- **Always create multiple scenarios for major decisions**
  - At minimum for large projects:
    - **Conservative**: realistic pacing, healthy buffer, no heroics.
    - **Nominal**: what is believed most likely.
    - **Aggressive**: only when requested; clearly flagged as higher risk.
  - Document which scenario was ultimately chosen.

---

## 4. In‑Meeting Protocol (Finance / Ops / Leadership)

When presenting outputs from the estimator:

- **Lead with assumptions**
  - Explicitly state:
    - Daily hours (and whether weekends are included).
    - Draft speed and chaos buffer.
    - Whether compile/layout support is assumed.

- **Explain structure, not magic**
  - Show the chain:
    - Effective words → hours → days → calendar dates.
  - For dual scenarios (draft vs draft+compile), describe in plain language:
    - "If Dan drafts *and* compiles, we finish here; if Dan only drafts and someone else compiles, the total system time is there."

- **Capture verbal overrides**
  - If, in discussion, someone requests more aggressive assumptions (e.g. "just assume 4 hours/day instead of 2"), treat that as a **new scenario**, not a silent tweak.
  - Note the change in meeting notes or changelog:
    - `2026‑02‑15: Kotz requested 4h/day aggressive scenario for A1.`

---

## 5. Handling Pressure and Blame

- **If asked to compress timelines**
  - Respond by creating a **distinct, labeled scenario**, e.g. `A1-aggressive`.
  - Keep the conservative scenario untouched as the internal guardrail.

- **If a project slips or overruns**
  - Refer back to:
    - Which scenario the decision‑makers selected.
    - What assumptions were documented at that time.
  - Frame post‑mortems around: "Given A/B/C assumptions, this outcome is within / outside the expected variance."

- **Avoid being the hidden "optimism source"**
  - Never change global defaults in response to external pressure without documentation.
  - Use the tool to *reveal* tradeoffs, not to obscure them.

---

## 6. Technical Safety Nets

- **Git tagging for key states**
  - Tag important milestones, e.g.:
    - `2026-budget-v1`
    - `pre-martin-review`
    - `post-kotz-feedback`

- **Snapshot exports**
  - For major planning cycles, export dashboard JSON and store it with a clear filename and (optional) short README explaining the context.

- **Centralized defaults**
  - Role and person defaults (rates, speeds, buffers) should live in predictable files such as:
    - `lib/constants.ts` (`TEAM_ROSTER`, `ROLE_TEMPLATES`)
  - Avoid duplicating these values in scattered components.

---

## 7. Day‑to‑Day Usage Pattern

When you are actively planning or updating:

1. **Pre‑meeting**
   - Refresh data in the dashboard.
   - Generate 2–3 scenarios per key project (conservative/nominal/aggressive).
   - Export or capture screenshots of those scenarios.
   - Note which scenario you intend to recommend.

2. **During the meeting**
   - Adjust **scenario inputs only** (word count, daily hours, buffer, assigned person).
   - Do **not** modify global defaults live unless that is the explicit purpose of the meeting.
   - Keep scenario names and labels clear and unambiguous.

3. **Post‑meeting**
   - Save the chosen scenario in JSON or as a taggable state.
   - Commit changes to code if global assumptions were updated.
   - Update this document if assumptions, pacing rules, or structural behavior changed.

---

## 8. Interpretation Guidelines

- **This tool is a model, not an oracle**
  - It encodes current understanding of:
    - Writing speeds.
    - Chaos / risk buffers.
    - Available hours.
  - It cannot account for all real‑world chaos (e.g. sudden staffing exits, executive direction changes).

- **Numbers are for decision‑making, not scapegoating**
  - Use outputs to:
    - Clarify tradeoffs between scope, time, and staffing.
    - Justify realistic budgets and timelines.
    - Illustrate the effect of adding/removing capacity.
  - The tool should not be used to retroactively assign personal blame when external assumptions were ignored or changed.

---

## 9. Future Extensions (Non‑binding)

The engine and protocol are designed to support later enhancements without breaking the core contract:

- Weekly pacing mode surfaced in UI.
- Multi‑phase workflows (concept → draft → compile → revise → proof).
- Per‑section weighting / complexity.
- Role‑specific scenario comparison across pods.
- Automatic PDF report generation for annual / quarterly planning.

When adding such features, ensure they:
- Respect this document’s governance rules.
- Keep conservative defaults intact.
- Maintain a clear distinction between **global configuration** and **per‑scenario overrides**.
