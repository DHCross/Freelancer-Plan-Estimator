# Cartography Module Specification

## 0. Purpose

This document defines the **Cartography module** for the Hoskbrew Freelancer‑Plan‑Estimator.

Goals:
- Treat **cartography as a first‑class production lane**, not an invisible afterthought.
- Make A‑series bottlenecks on maps **visible, quantifiable, and schedulable**.
- Separate **internal** work (briefing, review, integration) from **external** work (contractor hours).
- Provide a defensible model for **cost, schedule, and risk** when maps are involved.

This spec is intentionally **tool‑agnostic**: it describes structures and behavior, not UI.

---

## 1. Scope

The Cartography module covers:

- Work done by **cartographers** (internal or external) to produce game maps.
- Map‑specific planning for:
  - Battle maps
  - Dungeon / location maps
  - Regional / world maps
  - Tactical / schematic maps
- The **internal time** needed to support this work:
  - Briefing and requirements gathering
  - Feedback and revision review
  - Integration into layout / VTT / production pipeline

Out of scope (for this version):

- Full art direction and illustration (handled separately as an Illustration module, if added later).
- Legal/contract negotiation.
- Non‑map graphic design.

---

## 2. Roles & Responsibilities

### 2.1 Role Types

Add / recognize the following role types in the estimator domain:

- `Writer`
- `Editor`
- `Layout`
- `Cartographer`
- `Illustrator` (future)
- `Indexer` (future)
- `Producer/PM` (future)

The Cartography module specifically targets:

- **Cartographer**: produces map assets.
- **Internal Reviewer / Producer** (can be Dan, Martin, or another internal):
  - Writes the brief.
  - Reviews drafts and revisions.
  - Approves finals.
  - Integrates final assets into layout / delivery.

### 2.2 Internal vs External

Each role instance (person) must carry an `isExternal` flag:

- `isExternal = true`
  - Contractor; cost is purely billable rate (plus optional overhead factor).
  - Limited control over actual hours/day and availability.

- `isExternal = false`
  - Internal team member; cost may be blended rate or salary‑derived.
  - Hours/day are modeled via existing capacity logic.

This enables the estimator to:
- Roll up **internal hours** into capacity planning.
- Roll up **external hours** into **contractor budget**.

---

## 3. Core Data Structures

The Cartography module is built around **Map Tickets**.

### 3.1 Map Ticket

Each map required for a product is represented by a `MapTicket`.

Proposed fields:

- `id`: string — unique identifier.
- `projectId`: string — links to the parent project / A‑series entry.
- `name`: string — human‑readable label (e.g. "A1: Crypt Antechamber Battle Map").
- `type`: enum — `"battle" | "dungeon" | "regional" | "world" | "tactical" | "other"`.
- `complexityTier`: enum or numeric — `S (simple) | M | L | XL`.
- `isExternalCartographer`: boolean — true if primary map creation is external.
- `cartographerRoleId`: string | null — which roster role / contractor profile this maps to.
- `baseDraftHours`: number — expected hours for **first draft**.
- `baseRevisionHours`: number — expected hours per **revision pass**.
- `expectedRevisions`: number — default revision count (e.g. 2).
- `internalBriefingHours`: number — internal time to prepare the brief.
- `internalReviewHoursPerPass`: number — internal time to review each draft/revision.
- `integrationHours`: number — time to place/adjust map in layout / VTT / export pipeline.
- `contractorRate`: number | null — explicit $/hr if known (else fall back to role default).
- `flatMapFee`: number | null — if the contractor bills per map instead of per hour.
- `dependencies`: string[] — IDs/labels for adventures/sections this map unblocks.

### 3.2 Derived Values per Ticket

Given a `MapTicket` and role defaults:

- `artistHoursTotal = baseDraftHours + baseRevisionHours * expectedRevisions`
- `internalHoursTotal = internalBriefingHours + internalReviewHoursPerPass * (1 + expectedRevisions) + integrationHours`
- `effectiveRate = contractorRate (if provided) else cartographerRole.defaultRate`
- `contractorCost`:
  - If `flatMapFee` is set: `contractorCost = flatMapFee`
  - Else: `contractorCost = artistHoursTotal * effectiveRate`

- Optional **overhead** (if introduced later):
  - `overheadFactor` (e.g. 1.1 for 10% PM overhead)
  - `totalExternalCost = contractorCost * overheadFactor`

### 3.3 Aggregated Values

At **project level** (e.g. one A‑series module):

- `totalMaps`: number
- `totalCartographerHours`: sum of `artistHoursTotal`
- `totalInternalSupportHours`: sum of `internalHoursTotal`
- `totalCartographyCost`: sum of `contractorCost` (or `totalExternalCost` if modeling overhead)
- `maxMapDurationDays`: the longest cartography span among its tickets (for critical path)

At **portfolio level** (e.g. A‑series entire line):

- `portfolioMaps`: total maps across all projects
- `portfolioCartographyCost`
- `portfolioCartographerHours`
- `portfolioInternalSupportHours`

---

## 4. Integration with Estimator Engine

### 4.1 Relationship to Estimator V2

The current `runEstimatorV2` models:
- Words → hours → days → calendar dates for a given role / activity.

Cartography extends this by:
- Modeling **non‑word work units** (maps) with similar pacing logic.
- Using cartographer and internal reviewer roles as the pace sources.

Two integration patterns:

1. **Separate Pipeline (Recommended)**
   - Keep maps in a separate calculation path (e.g. `runCartographyEstimate`) that:
     - Accepts an array of `MapTicket`s.
     - Uses role metadata (cartographer + internal reviewer) to compute durations and costs.
   - Output can then be stitched into higher‑level projections (e.g. total module schedule).

2. **Activity Mapping (Optional Simpler Path)**
   - Treat each map as an `EstimatorInputV2` with a synthetic "word count" equivalent, using a calibration (e.g. S/M/L tiers mapped to pseudo‑word counts).
   - This reuses the same engine but requires a clear mapping spec and is more opaque.

This spec assumes we will implement **(1) a separate, explicit cartography calculation path** for clarity and defensibility.

### 4.2 Inputs to Cartography Calculations

For each `MapTicket`:

- `MapTicket` fields (see 3.1).
- Role data for `cartographerRoleId` and internal reviewer/producer (from `TEAM_ROSTER` / `ROLE_TEMPLATES`).
- Global pacing assumptions:
  - Cartographer hours/day.
  - Include / exclude weekends for external work.
  - Lead times (if modeled later).

### 4.3 Outputs

For each ticket:

- `artistHoursTotal`
- `internalHoursTotal`
- `contractorCost`
- `estimatedCalendarDurationDays` (based on cartographer pacing assumptions)
- `earliestStartDate` and `estimatedDeliveryDate` (if integrated with calendar math)

For a project:

- `projectCartographySummary`:
  - `totalMaps`
  - `totalCartographerHours`
  - `totalInternalSupportHours`
  - `totalCartographyCost`
  - `mapCriticalPathDays` (max of ticket durations)

These can be surfaced alongside writing/layout estimates in management views and 2026 projections.

---

## 5. Assumptions & Defaults

Initial defaults should be **conservative and documented**, not optimistic.

### 5.1 Complexity Tiers

Example mapping (these are placeholders; tune with real data when available):

- **S (Simple)** — small tactical / inset maps
  - `baseDraftHours`: 4–6
  - `baseRevisionHours`: 2–3
  - `expectedRevisions`: 1–2

- **M (Standard Battle / Small Dungeon)**
  - `baseDraftHours`: 8–12
  - `baseRevisionHours`: 3–4
  - `expectedRevisions`: 2

- **L (Complex Dungeon / Regional)**
  - `baseDraftHours`: 16–24
  - `baseRevisionHours`: 4–6
  - `expectedRevisions`: 2–3

- **XL (Large Regional / World)**
  - `baseDraftHours`: 32–40+
  - `baseRevisionHours`: 6–8
  - `expectedRevisions`: 3+

Actual values should be ratified with real contractor performance once available.

### 5.2 Internal Oversight

Per map, initial conservative defaults:

- `internalBriefingHours`: 1–2 h
- `internalReviewHoursPerPass`: 0.5–1 h per pass
- `integrationHours`: 1–2 h (layout, VTT prep, exports)

### 5.3 Rates

- **Contractors**: use known or target $/hr; otherwise use a `defaultCartographerRate` constant per vendor tier.
- **Internal**: cost modeling can use either a blended internal rate or ignore for high‑level planning and only track internal hours as capacity consumption.

All rate assumptions must be documented in `ASSUMPTIONS_AND_PROTOCOL.md` or a clearly linked section.

---

## 6. Risk & Governance

Cartography carries specific risks that must be made explicit:

- **Vendor availability** — maps cannot start until a cartographer slot is available.
- **Revision churn** — narrative changes and feedback loops can multiply hours.
- **Critical path dependencies** — print/VTT readiness often hinges on key maps.

To protect estimator integrity and personal accountability:

- Always treat cartography as a **separate module** with its own assumptions.
- Require **explicit inputs** (map counts, complexity, contractor tiers) from whoever is requesting maps (e.g. Martin).
- Log those inputs (who provided them, when) in planning notes or in scenario labels.

Example:
> `A1-cartography-2026Q1-martin-spec-v1` — 14 maps, 3L / 7M / 4S, 2 revisions each, default contractor tier B.

---

## 7. Usage Patterns & Scenarios

For each major project (e.g. each A‑series entry):

1. Identify all required maps and create `MapTicket`s.
2. Classify them by type and complexity.
3. Assign cartographer role(s) and internal reviewer.
4. Run cartography estimates to get:
   - Total cartographer hours and cost.
   - Total internal support hours.
   - Critical path duration for maps.
5. Integrate output into the overall project plan:
   - Ensure maps start early enough to not block layout.
   - Make explicit whether maps are on the project critical path.

Scenarios should distinguish between:

- **Conservative** (more revisions, slower throughput, higher rates).
- **Nominal** (expected typical performance).
- **Aggressive** (fewer revisions, faster turnaround) — only when explicitly requested, and clearly labeled.

---

## 8. Next Implementation Steps (Non‑binding)

Once this spec is accepted, the implementation phases are:

1. **Types & Constants**
   - Add `Cartographer` role type and defaults in `lib/constants.ts` / `TEAM_ROSTER` / `ROLE_TEMPLATES`.
   - Define `MapTicket` and `CartographySummary` interfaces in `lib/types.ts`.

2. **Calculation Layer**
   - Implement a pure calculation function, e.g. `runCartographyEstimate(mapTickets, teamRoster, options)` in `lib/calculations.ts`.
   - Ensure this remains separate from `runEstimatorV2` but compatible at the aggregation level.

3. **Optional UI** (later)
   - Internal planning view: define and edit `MapTicket`s.
   - Summary view: show cartography lanes and their costs alongside writing/layout.

This module should follow the same governance rules as the rest of the estimator (see `ASSUMPTIONS_AND_PROTOCOL.md`), especially around:
- Conservative defaults.
- Scenario hygiene.
- Documented assumptions and ownership.
