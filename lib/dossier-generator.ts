import { DisplayProject, Metrics, DefenseAnalysisResult } from "./types";
import { DEFAULT_METRICS } from "./constants";
import { RPG_ADVENTURE_TEMPLATE } from "./dossier-types";

export type DossierTone = "internal" | "external";

export interface DossierContext {
  project: DisplayProject;
  metrics?: Metrics;
  defense?: DefenseAnalysisResult;
  defendHourlyRate?: number;
  defendWPH?: number;
  marketPerWord?: number;
  teamWeeklyCapacity?: number;
  meetingNotes?: string;
  seriesWords?: number;
  seriesBooks?: number;
}

function safeMetrics(metrics?: Metrics): Metrics {
  return metrics ?? DEFAULT_METRICS;
}

function formatCurrency(value: number | undefined | null): string {
  if (!Number.isFinite(value ?? NaN)) return "-";
  return (value as number).toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

function formatNumber(value: number | undefined | null): string {
  if (!Number.isFinite(value ?? NaN)) return "-";
  return Math.round(value as number).toLocaleString("en-US");
}

export function generateDossierMarkdown(ctx: DossierContext, tone: DossierTone = "internal"): string {
  const { project } = ctx;
  const metrics = safeMetrics(ctx.metrics);
  const meetingNotes = (ctx.meetingNotes ?? "").trim();

  const totalWords = project.targetWords ?? 0;
  const pages = totalWords > 0 ? totalWords / metrics.wordsPerPage : 0;
  const estimatedPages = Math.round(pages || 0);

  const artPieces = estimatedPages > 0 ? Math.max(1, Math.round(estimatedPages / 3)) : 0;
  const artLow = artPieces * 50; // ~$50/spot
  const artMid = artPieces * 120; // ~$120/spot
  const artHigh = artPieces * 250; // ~$250/spot

  const actualHours = project.total ?? project.manualHours ?? 0;

  // Derive market vs internal cost from defense analysis when available
  let internalCost = project.estCost ?? 0;
  let marketCost = 0;
  let subsidy = 0;

  if (ctx.defense && totalWords > 0) {
    const marketPerWord = ctx.defense.myCostPerWord + ctx.defense.savingsPerWord;
    internalCost = ctx.defense.myCostPerWord * totalWords;
    marketCost = marketPerWord * totalWords;
    subsidy = Math.max(0, marketCost - internalCost);
  }

  const subsidyLabel = subsidy > 0 ? formatCurrency(subsidy) : "~$0";

  const industryHours = actualHours ? actualHours * 1.5 : 0;

  const teamWeeklyCapacity = ctx.teamWeeklyCapacity && ctx.teamWeeklyCapacity > 0 ? ctx.teamWeeklyCapacity : 0;
  let totalWeeks = 0;
  if (teamWeeklyCapacity > 0 && actualHours > 0) {
    totalWeeks = actualHours / teamWeeklyCapacity;
  }

  const roundedWeeks = totalWeeks ? Math.round(totalWeeks) : 0;
  const minWeeks = roundedWeeks ? Math.max(1, roundedWeeks - 2) : 0;
  const maxWeeks = roundedWeeks ? roundedWeeks + 2 : 0;

  const isSeries = (ctx.seriesBooks ?? 0) > 1;
  const seriesWords = ctx.seriesWords ?? 0;

  const template = RPG_ADVENTURE_TEMPLATE;

  const keyFindings = [
    isSeries
      ? `${project.name} sits inside a ${ctx.seriesBooks}-book arc (~${formatNumber(seriesWords)} words total).`
      : `${project.name} is modeled as a standalone product in this dossier.`,
    subsidy > 0
      ? `Your labor on this project currently embeds approximately ${subsidyLabel} of unbilled studio-equivalent value.`
      : "Labor valuation for this project is modeled but subsidy calculations require refinement.",
    roundedWeeks
      ? `With current team capacity, the modeled execution window is approximately ${minWeeks || roundedWeeks}–${maxWeeks || roundedWeeks} weeks from greenlight to print-ready files.`
      : "Timeline modeling depends on confirmed weekly capacity inputs.",
    artPieces
      ? `Art is the primary variable cost driver: about ${formatNumber(artPieces)} pieces for ~${estimatedPages} pages, with a working budget band of ${formatCurrency(artLow)}–${formatCurrency(artHigh)}.`
      : "Art budget scaffolding is present, but page count/asset density need to be confirmed.",
  ];

  const projectScope = `This dossier covers ${project.name} as modeled in the Production Engine dashboard, using current assumptions for scope, staffing, and efficiency.`;

  const strategicAlignmentInternal = `This project is treated as part of the Production Engine roadmap. The purpose of this dossier is to align scope, staffing, and financial reality so that future negotiations, print runs, and distribution choices are grounded in the same shared numbers.`;

  const strategicAlignmentExternal = `This project is positioned as part of your 2026 publishing roadmap. The purpose of this dossier is to clarify scope, budget bands, and production timing so that stakeholders can make informed decisions without reopening prior negotiations.`;

  const strategicAlignment = tone === "internal" ? strategicAlignmentInternal : strategicAlignmentExternal;

  const riskLevel = subsidy > 0 ? "high" : "medium";

  const executiveSummary = `# ${project.name} PROJECT DOSSIER
Integrated Transcript + Strategic Production Report

## Executive Summary
This document consolidates the full scope, timeline, financial modeling, and structural insight surrounding **${project.name}**.

It utilizes data from:
- Direct transcript or meeting-note synthesis (where available)
- The Production Engine's labor, scope, and efficiency modeling
- Industry-aligned production assumptions for art, layout, and printing

The combined analysis confirms:

${keyFindings.map((f) => `- ${f}`).join("\n")}

### Strategic Overview
${projectScope}

### Structural Risk Profile
- Modeled risk level: **${riskLevel.toUpperCase()}**
- Primary volatility drivers: **art budget**, **print run strategy**, and **distribution channel mix**

### Strategic Alignment
${strategicAlignment}
`;

  const transcriptSection = `## PART I — Transcript Reconstruction
(Adapted to narrative form, preserving intent and tone)

${meetingNotes || "_TODO: Paste or synthesize meeting notes/transcript excerpts here. Focus on decisions, tradeoffs, and scope clarification._"}
`;

  const laborTable = `Category | Your Work | Industry Studio | Delta
---|---|---|---
Hours | ${actualHours ? formatNumber(actualHours) : "TODO"} | ${industryHours ? formatNumber(industryHours) : "TODO"} | ${actualHours && industryHours ? `${formatNumber(industryHours - actualHours)} h` : "TODO"}
Cost | ${internalCost ? formatCurrency(internalCost) : "TODO"} | ${marketCost ? formatCurrency(marketCost) : "TODO"} | ${marketCost && internalCost ? formatCurrency(marketCost - internalCost) : "TODO"}
`;

  const financialSection = `## PART II — Integrated Financial & Production Modeling

### 1. Labor Valuation & Efficiency Benchmark

${laborTable}

> Note: Industry studio cost is derived from the market-per-word assumptions in the Efficiency model. Adjust those sliders there; this dossier will inherit the updated numbers.

### 2. Art Budget Scaffolding

- Estimated pages: **${estimatedPages || "TODO"}**
- Art density assumption: **1 piece / 3 pages**
- Total pieces (est.): **${artPieces || "TODO"}**

Art budget bands:
- Low band (lean illustrations): **${artLow ? formatCurrency(artLow) : "TODO"}**
- Mid band (balanced mix): **${artMid ? formatCurrency(artMid) : "TODO"}**
- High band (flagship treatment): **${artHigh ? formatCurrency(artHigh) : "TODO"}**

> TODO: Confirm cover commission tier, interior mix (spots/half/full), and whether maps are bundled or separate.

### 3. Timeline Validation

- Modeled execution hours: **${actualHours ? formatNumber(actualHours) : "TODO"} h**
- Current weekly capacity (team total): **${teamWeeklyCapacity ? formatNumber(teamWeeklyCapacity) : "TODO"} h/week**
- Implied production window: **${roundedWeeks ? `${minWeeks}–${maxWeeks} weeks` : "TODO"}**

> This is a blended estimate from the Production Engine. For printing lead times and freight, use the dedicated Financials tab and append those specifics here.
`;

  const seriesSection = `## PART III — Strategic Series Outlook

$${isSeries
      ? `This project is modeled as part of a multi-book arc (~${formatNumber(seriesWords)} words total across ~${ctx.seriesBooks} volumes). Use this section to articulate how this individual volume unlocks or derisks the rest of the line.`
      : "This project can be positioned either as a flagship standalone or as the first node in a future line. Use this section to describe follow-on products it enables (adventure paths, sourcebooks, or system expansions)."}

- Capital requirements across the line: **TODO**
- Recommended funding path (Kickstarter, hybrid, direct): **TODO**
- Distribution reality (break-even units, discount structures): **TODO**
`;

  const findingsInternal = `## PART IV — Consolidated Findings & Potential Impact Warning (Internal)

✅ This dossier is designed for **internal clarity and negotiation prep**. It intentionally surfaces:
- Labor subsidies and replacement-cost gaps
- Mis-scoping or misclassification of prior work
- Break-even and distribution risk

🚩 **Potential Impact Warning (PIW)**

Because this document includes financial valuations, labor comparisons, and references to past planning decisions, it carries interpretation risks if forwarded without context.

**Interpretation risks if shared externally:**
- Could be read as retroactive critique of earlier leadership choices
- Could be interpreted as an implied compensation or equity ask
- Could be framed as evidence of prior underestimation

**Usage guidance:**
- Treat this as a **war-room artifact**, not a client deliverable.
- Derive a publisher-safe summary from it instead of forwarding directly.
`;

  const findingsExternal = `## PART IV — Consolidated Findings (External / Publisher-Safe)

This section is safe to use as the backbone of a publisher-facing or stakeholder-facing summary. It should:

- Emphasize **future alignment** and shared clarity
- Focus on **budget bands**, **timelines**, and **risk mitigation**, not past mis-scoping
- Present labor valuation as a tool for **de-risking delivery**, not as a compensation argument

Suggested framing:
- "This dossier exists so that we can make clean forward decisions without reopening every prior assumption."
- "Numbers here are designed as planning bands, not ultimatums."
`;

  const findingsSection = tone === "internal" ? findingsInternal : findingsExternal;

  return [
    executiveSummary.trim(),
    "",
    transcriptSection.trim(),
    "",
    financialSection.trim(),
    "",
    seriesSection.trim(),
    "",
    findingsSection.trim(),
  ].join("\n\n");
}
