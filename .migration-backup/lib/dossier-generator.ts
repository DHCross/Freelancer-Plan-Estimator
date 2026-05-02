import { DisplayProject, Metrics, DefenseAnalysisResult } from "./types";
import { DEFAULT_METRICS, A1_ART_BASELINE, REGIONAL_MAP_DEFAULT, ENCOUNTER_MAP_DEFAULT, INTERIOR_FULL_DEFAULT, INTERIOR_SPOT_DEFAULT, COVER_ART_RATE_DEFAULT, ART_DENSITY_PRESETS } from "./constants";
import { RPG_ADVENTURE_TEMPLATE } from "./dossier-types";
import { estimateProjectArt } from "./calculations";

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

  // A1 Manuscript Reality Baseline (audited from A1: Problem of Possibilities 4.1.25)
  // Total: 23 pieces - NOT the old 1 piece per 3 pages formula which overstated needs
  const artBaseline = A1_ART_BASELINE;
  const artPieces = artBaseline.totalPieces;
  
  // Calculate costs using proper categorization
  const mapCost = (artBaseline.regionalMaps * REGIONAL_MAP_DEFAULT) + (artBaseline.encounterMaps * ENCOUNTER_MAP_DEFAULT);
  const illustrationCost = artBaseline.interiorIllustrations * INTERIOR_FULL_DEFAULT;
  const spotCost = artBaseline.spotArt * INTERIOR_SPOT_DEFAULT;
  const portraitCost = artBaseline.npcPortraits * 250; // $0 for A1 since no portraits needed
  const coverCost = artBaseline.covers * COVER_ART_RATE_DEFAULT;
  
  const artLow = Math.round((mapCost + illustrationCost + spotCost + portraitCost + coverCost) * 0.85);
  const artMid = mapCost + illustrationCost + spotCost + portraitCost + coverCost;
  const artHigh = Math.round((mapCost + illustrationCost + spotCost + portraitCost + coverCost) * 1.2);

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
      ? `Art is the primary variable cost driver: ${formatNumber(artPieces)} pieces (${artBaseline.regionalMaps} regional map, ${artBaseline.encounterMaps} encounter maps, ${artBaseline.interiorIllustrations} illustrations, ${artBaseline.spotArt} spot art), with a working budget band of ${formatCurrency(artLow)}–${formatCurrency(artHigh)}.`
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

### 2. Art Budget Scaffolding (A1 Manuscript Reality)

- Estimated pages: **${estimatedPages || "TODO"}**
- Total pieces (audited): **${artPieces}** (corrected from previous 38-piece assumption)

**Art Asset Breakdown:**
| Category | Count | Classification | Est. Cost |
|----------|-------|----------------|----------|
| Regional Maps | ${artBaseline.regionalMaps} | REQUIRED | ${formatCurrency(artBaseline.regionalMaps * REGIONAL_MAP_DEFAULT)} |
| Encounter Maps | ${artBaseline.encounterMaps} | REQUIRED | ${formatCurrency(artBaseline.encounterMaps * ENCOUNTER_MAP_DEFAULT)} |
| Interior Illustrations | ${artBaseline.interiorIllustrations} | REQUIRED/ENHANCING | ${formatCurrency(artBaseline.interiorIllustrations * INTERIOR_FULL_DEFAULT)} |
| Spot Art/Chapter Openers | ${artBaseline.spotArt} | COSMETIC | ${formatCurrency(artBaseline.spotArt * INTERIOR_SPOT_DEFAULT)} |
| NPC Portraits | ${artBaseline.npcPortraits} | N/A | ${formatCurrency(artBaseline.npcPortraits * 250)} |
| Cover Art | ${artBaseline.covers} | REQUIRED | ${formatCurrency(artBaseline.covers * COVER_ART_RATE_DEFAULT)} |

**Art budget bands:**
- Low band (lean execution): **${artLow ? formatCurrency(artLow) : "TODO"}**
- Mid band (baseline): **${artMid ? formatCurrency(artMid) : "TODO"}**
- High band (flagship treatment): **${artHigh ? formatCurrency(artHigh) : "TODO"}**

> Note: Previous plan assumed 8 NPC portraits and 12 interior illustrations where A1 text requires 0 portraits and 7 illustrations. Budget reallocated to maps and protected structural assets.

### 2b. Market Comparison Analysis

How does your art budget compare to industry standards?

| Market Tier | Total Pieces | Est. Cost | Words/Piece | Notes |
|-------------|--------------|-----------|-------------|-------|
| **OSR/Indie (Current)** | ${estimateProjectArt(totalWords || 97000, "Large Adventure", "osr").totalPieces} | ${formatCurrency(estimateProjectArt(totalWords || 97000, "Large Adventure", "osr").totalCost)} | ~4,200 | ${ART_DENSITY_PRESETS.osr.description} |
| **5E Standard** | ${estimateProjectArt(totalWords || 97000, "Large Adventure", "5e").totalPieces} | ${formatCurrency(estimateProjectArt(totalWords || 97000, "Large Adventure", "5e").totalCost)} | ~3,000 | ${ART_DENSITY_PRESETS["5e"].description} |
| **Pathfinder Premium** | ${estimateProjectArt(totalWords || 97000, "Large Adventure", "pathfinder").totalPieces} | ${formatCurrency(estimateProjectArt(totalWords || 97000, "Large Adventure", "pathfinder").totalCost)} | ~1,600 | ${ART_DENSITY_PRESETS.pathfinder.description} |

> Your current model aligns with **OSR/Indie** standards. To match 5E expectations, budget ~50% more. For Pathfinder-level presentation, budget ~150% more.

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

  const findingsInternal = `## PART IV — Consolidated Findings & Planning Notes

This dossier provides a comprehensive view of project scope, labor investment, and financial considerations to support informed decision-making.

**Key areas covered:**
- Labor estimates and resource allocation
- Scope clarification and project classification
- Financial planning and distribution considerations

**Document Purpose:**

This analysis consolidates planning data to help align expectations across stakeholders. It's designed to:
- Provide clear visibility into project requirements
- Support realistic timeline and budget planning
- Identify areas that may need further discussion

**Recommended next steps:**
- Review key figures with relevant stakeholders
- Identify any items requiring clarification before sharing externally
- Prepare a streamlined summary for publisher or client communications if needed
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
