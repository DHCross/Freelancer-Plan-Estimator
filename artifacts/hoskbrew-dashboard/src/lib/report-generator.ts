import { DisplayProject, Metrics, TeamMember } from "./types";
import { DEFAULT_METRICS, COVER_ART_RATE_DEFAULT, INTERIOR_SPOT_DEFAULT, INTERIOR_FULL_DEFAULT, REGIONAL_MAP_DEFAULT, ENCOUNTER_MAP_DEFAULT, A1_ART_BASELINE, ART_DENSITY_PRESETS, ArtDensityPreset } from "./constants";
import { estimateProjectArt } from "./calculations";

export interface ReportConfig {
  title: string;
  subtitle?: string;
  projects: DisplayProject[];
  metrics: Metrics;
  teamRoster: TeamMember[];
  artBudget?: {
    regionalMaps: number;
    encounterMaps: number;
    interiorIllustrations: number;
    spotArt: number;
    npcPortraits: number;
    covers: number;
    regionalMapCost: number;
    encounterMapCost: number;
    interiorCost: number;
    spotCost: number;
    portraitCost: number;
    coverCost: number;
    totalPieces: number;
  };
  investmentRange?: {
    low: number;
    high: number;
  };
  generatedDate?: string;
  teamCapacity?: {
    supportWeeklyHours: number;
    primaryWeeklyHours: number;
    workingWeeksPerYear: number;
  };
  roleOwnership?: {
    narrativeLead: string;
    systemsLead: string;
    productionArbiter: string;
    finalEditor: string;
    assetCoordinator: string;
    projectManager: string;
  };
  marketPreset?: ArtDensityPreset;
  showMarketComparison?: boolean;
}

const ROMAN_NUMERALS = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

function getRomanNumeral(index: number): string {
  return ROMAN_NUMERALS[index - 1] || `${index}`;
}

interface QuarterGroup {
  quarter: string;
  projects: DisplayProject[];
  totalHours: number;
  totalCost: number;
}

function formatCurrency(value: number): string {
  return value.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

function formatNumber(value: number): string {
  return Math.round(value).toLocaleString("en-US");
}

function calculateCapacityAnalysis(config: ReportConfig, totalHours: number) {
  const capacity = config.teamCapacity;
  if (!capacity) return null;

  const { supportWeeklyHours, primaryWeeklyHours, workingWeeksPerYear } = capacity;
  
  // Calculate actual capacity
  const combinedWeeklyHours = supportWeeklyHours + primaryWeeklyHours;
  const annualCapacity = combinedWeeklyHours * workingWeeksPerYear;
  
  // Calculate gaps
  const hourGap = totalHours - annualCapacity;
  const weeklyGap = hourGap / workingWeeksPerYear;
  const isOverallocated = hourGap > 0;
  
  // Calculate equivalent team size
  const equivalentTeamSize = totalHours / (workingWeeksPerYear * 40); // 40 = standard full-time week
  
  return {
    supportWeeklyHours,
    primaryWeeklyHours,
    combinedWeeklyHours,
    annualCapacity,
    totalHours,
    hourGap,
    weeklyGap,
    isOverallocated,
    equivalentTeamSize,
    workingWeeksPerYear
  };
}

function generateCapacityAnalysisSection(analysis: ReturnType<typeof calculateCapacityAnalysis>) {
  if (!analysis) return "";

  const {
    supportWeeklyHours,
    primaryWeeklyHours,
    combinedWeeklyHours,
    annualCapacity,
    totalHours,
    hourGap,
    weeklyGap,
    isOverallocated,
    equivalentTeamSize,
    workingWeeksPerYear
  } = analysis;

  const gapDescription = isOverallocated
    ? `**Gap:** Short ${formatNumber(Math.abs(hourGap))} hours (${weeklyGap.toFixed(1)} hrs/week) — consider deferring lower-priority projects.`
    : `**Surplus:** ${formatNumber(Math.abs(hourGap))} hours of slack capacity.`;

  const cleanFixes = isOverallocated ? [
    "Defer lower-priority projects to the next quarter.",
    "Reduce scope on the largest in-flight project.",
    "Negotiate a later deadline with one client to redistribute load.",
  ] : [
    "You have capacity headroom — consider taking on additional work.",
    "Use the surplus to build buffer into existing deadlines.",
  ];

  const cleanFixList = cleanFixes.map(item => `- ${item}`).join("\n");

  return `
**Your capacity (realistic):**
- Weekly hours: ${combinedWeeklyHours} hrs/week × ${workingWeeksPerYear} working weeks ≈ ${formatNumber(annualCapacity)} hrs/year

**Plan demand:** ${formatNumber(totalHours)} hrs/year (${Math.round(totalHours / workingWeeksPerYear)} hrs/week equivalent)

${gapDescription}

**Equivalent workload:** ${equivalentTeamSize.toFixed(1)} FTE-equivalent (plan assumes ~${Math.round(totalHours / workingWeeksPerYear)} hrs/week).

**Recommendations:**
${cleanFixList}
`;
}

function generateRoleOwnershipAnalysis(roles: ReportConfig['roleOwnership'], headingNumeral: string = "V"): string {
  if (!roles) return "";
  
  const writer = roles.narrativeLead || "Me";
  const editor = roles.finalEditor || "Me";
  const layout = roles.productionArbiter || "Me";
  
  return `## ${headingNumeral}. Role Ownership

### Who Does What

**Writer — ${writer}**
- First draft and full prose authoring
- Tone, pacing, and scene-level decisions
- Revisions based on client feedback

**Editor — ${editor}**
- Developmental and copy-editing pass
- Consistency, clarity, and flow review
- Final proofreading before delivery

**Layout — ${layout}**
- File preparation and InDesign/template work
- Art placement and page flow
- Export and print-ready delivery

### Delivery Responsibilities

| Decision Area | Owner | Notes |
|---------------|-------|-------|
| Content & Voice | ${writer} | Direct call |
| Structural changes | ${editor} | Consult ${writer} |
| Scope cuts | ${writer} | Client approval required |
| Visual presentation | ${layout} | Consult ${writer} |
| Delivery sign-off | ${writer} | All roles complete |

---
`;
}

function getQuarterFromProject(project: DisplayProject): string {
  const display = project.displayDate || project.launchWindow || "";
  if (display.includes("March") || display.includes("Q1")) return "Q1";
  if (display.includes("May") || display.includes("June") || display.includes("Q2")) return "Q2";
  if (display.includes("September") || display.includes("Q3")) return "Q3";
  if (display.includes("December") || display.includes("Q4")) return "Q4";
  return "2026";
}

function groupProjectsByQuarter(projects: DisplayProject[]): QuarterGroup[] {
  const groups: Record<string, DisplayProject[]> = {
    "Q1": [],
    "Q2": [],
    "Q3": [],
    "Q4": [],
    "2026": [],
  };

  projects.forEach(project => {
    const quarter = getQuarterFromProject(project);
    if (groups[quarter]) {
      groups[quarter].push(project);
    } else {
      groups["2026"].push(project);
    }
  });

  return Object.entries(groups)
    .filter(([_, projects]) => projects.length > 0)
    .map(([quarter, projects]) => ({
      quarter,
      projects,
      totalHours: projects.reduce((sum, p) => sum + (p.total || p.manualHours || 0), 0),
      totalCost: projects.reduce((sum, p) => sum + (p.estCost || 0), 0),
    }));
}

function getQuarterLabel(quarter: string): string {
  const labels: Record<string, string> = {
    "Q1": "Q1 (Jan–Mar) – Preparation & Foundation Build-Out",
    "Q2": "Q2 (Apr–Jun) – Flagship Execution and Manufacturing",
    "Q3": "Q3 (Jul–Sep) – Series Continuation",
    "Q4": "Q4 (Oct–Dec) – Year-End Production Cycle",
    "2026": "2026 – Confirmed Release",
  };
  return labels[quarter] || quarter;
}

export function generateProductionPlanMarkdown(config: ReportConfig): string {
  const {
    title,
    subtitle,
    projects,
    metrics,
    teamRoster,
    artBudget,
    investmentRange,
    generatedDate = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
  } = config;

  const quarterGroups = groupProjectsByQuarter(projects);
  const totalBudget = projects.reduce((sum, p) => sum + (p.estCost || 0), 0);
  const totalHours = projects.reduce((sum, p) => sum + (p.total || p.manualHours || 0), 0);
  
  // Calculate capacity analysis
  const capacityAnalysis = calculateCapacityAnalysis(config, totalHours);

  // Calculate art budget if not provided - uses A1 manuscript reality baseline
  const calculatedArtBudget = artBudget || {
    regionalMaps: A1_ART_BASELINE.regionalMaps,
    encounterMaps: A1_ART_BASELINE.encounterMaps,
    interiorIllustrations: A1_ART_BASELINE.interiorIllustrations,
    spotArt: A1_ART_BASELINE.spotArt,
    npcPortraits: A1_ART_BASELINE.npcPortraits,
    covers: A1_ART_BASELINE.covers,
    regionalMapCost: A1_ART_BASELINE.regionalMaps * REGIONAL_MAP_DEFAULT,
    encounterMapCost: A1_ART_BASELINE.encounterMaps * ENCOUNTER_MAP_DEFAULT,
    interiorCost: A1_ART_BASELINE.interiorIllustrations * INTERIOR_FULL_DEFAULT,
    spotCost: A1_ART_BASELINE.spotArt * INTERIOR_SPOT_DEFAULT,
    portraitCost: A1_ART_BASELINE.npcPortraits * 250,
    coverCost: A1_ART_BASELINE.covers * COVER_ART_RATE_DEFAULT,
    totalPieces: A1_ART_BASELINE.totalPieces,
  };

  const totalArtBudget = calculatedArtBudget.regionalMapCost + calculatedArtBudget.encounterMapCost + calculatedArtBudget.interiorCost + calculatedArtBudget.spotCost + calculatedArtBudget.portraitCost + calculatedArtBudget.coverCost;

  // Calculate investment range if not provided
  const calculatedInvestmentRange = investmentRange || {
    low: Math.round(totalArtBudget * 0.85),
    high: Math.round(totalArtBudget * 1.2),
  };

  // Find flagship project (largest by hours)
  const flagshipProject = projects.reduce((best, p) => {
    const hours = p.total || p.manualHours || 0;
    return hours > (best?.total || best?.manualHours || 0) ? p : best;
  }, projects[0] || null);
  const flagshipHours = flagshipProject?.total || flagshipProject?.manualHours || 0;

  let sectionIndex = 1;
  const nextHeading = (title: string) => `## ${getRomanNumeral(sectionIndex++)}. ${title}`;

  const sections: string[] = [];

  // Header
  sections.push(`# ${title}

${subtitle || ""}

**Generated:** ${generatedDate}

---
`);

  // Project Overview
  sections.push(`${nextHeading("Project Overview")}

### Scope
This proposal covers the projects and deliverables detailed in the release calendar below.

### Delivery Model
All writing, editing, and production work will be completed to agreed word-count, format, and quality standards within the stated timelines.

### Quality Standards
Deliverables will follow TTRPG industry conventions for layout-ready manuscripts, consistent formatting, and editorial hygiene.

---
`);

  // Project Timeline
  sections.push(`${nextHeading("Project Timeline")}

| Title | Format | Target Date | Notes |
|-------|--------|-------------|-------|`);

  projects
    .sort((a, b) => {
      const dateA = a.targetDate || a.displayDate || a.launchWindow || "";
      const dateB = b.targetDate || b.displayDate || b.launchWindow || "";
      return dateA.localeCompare(dateB);
    })
    .forEach(project => {
      const format = project.type || "Module";
      const targetDate = project.displayDate || project.launchWindow || "2026";
      const notes = project.invoiceStatus === "paid" ? "Paid & complete" :
                    project.invoiceStatus === "invoiced" ? "Invoiced" :
                    project.lifecycleState === "Production" ? "In production" :
                    project.lifecycleState === "Planning" ? "Planned" :
                    "Confirmed";
      sections.push(`| ${project.name} | ${format} | ${targetDate} | ${notes} |`);
    });

  sections.push(`
---
`);

  // Quarterly Execution Path
  sections.push(`${nextHeading("Quarterly Execution Path")}
`);

  quarterGroups.forEach(group => {
    sections.push(`### ${getQuarterLabel(group.quarter)}
`);

    const activeProjects = group.projects.filter(p => p.lifecycleState === "Production" || p.internalStatus === "Drafting" || p.internalStatus === "Review");
    const plannedProjects = group.projects.filter(p => p.lifecycleState === "Planning" || p.internalStatus === "Planning");

    if (activeProjects.length > 0) {
      sections.push(`**Active work this ${group.quarter === "2026" ? "period" : "quarter"}:**`);
      activeProjects.forEach(p => {
        const hours = p.total || p.manualHours || 0;
        const cost = p.estCost || 0;
        const rateNote = p.rateType === "per-word" ? ` · ${formatNumber(p.targetWords || 0)} words` :
                         p.rateType === "flat-fee" ? " · flat fee" : ` · ${hours}h`;
        sections.push(`- **${p.name}** (${p.type}${rateNote}${cost > 0 ? `, ${formatCurrency(cost)}` : ""})`);
      });
      sections.push(``);
    }

    if (plannedProjects.length > 0) {
      sections.push(`**Planned for this ${group.quarter === "2026" ? "period" : "quarter"}:**`);
      plannedProjects.forEach(p => {
        const hours = p.total || p.manualHours || 0;
        sections.push(`- ${p.name} (${p.type}, ${hours}h estimated)`);
      });
      sections.push(``);
    }

    if (group.totalHours > 0) {
      sections.push(`**${group.quarter} total:** ${formatNumber(group.totalHours)} hours${group.totalCost > 0 ? ` · ${formatCurrency(group.totalCost)} estimated` : ""}
`);
    }
  });

  sections.push(`---
`);

  // Budget & Cost Estimate
  sections.push(`${nextHeading("Budget & Cost Estimate")}

**Recommended investment range:** ${formatCurrency(calculatedInvestmentRange.low)}–${formatCurrency(calculatedInvestmentRange.high)}

### Art Asset Breakdown (${calculatedArtBudget.totalPieces} pieces total):

| Category | Count | Classification | Allocation |
|----------|-------|----------------|------------|
| Regional Maps | ${calculatedArtBudget.regionalMaps} | REQUIRED | ~${formatCurrency(calculatedArtBudget.regionalMapCost)} |
| Encounter Maps | ${calculatedArtBudget.encounterMaps} | REQUIRED | ~${formatCurrency(calculatedArtBudget.encounterMapCost)} |
| Interior Illustrations | ${calculatedArtBudget.interiorIllustrations} | REQUIRED/ENHANCING | ~${formatCurrency(calculatedArtBudget.interiorCost)} |
| Spot Art/Chapter Openers | ${calculatedArtBudget.spotArt} | COSMETIC | ~${formatCurrency(calculatedArtBudget.spotCost)} |
| NPC Portraits | ${calculatedArtBudget.npcPortraits} | N/A | ~${formatCurrency(calculatedArtBudget.portraitCost)} |
| Cover Art | ${calculatedArtBudget.covers} | REQUIRED | ~${formatCurrency(calculatedArtBudget.coverCost)} |
| **Art Budget Total** | **${calculatedArtBudget.totalPieces}** | **TOTAL** | **~${formatCurrency(calculatedArtBudget.regionalMapCost + calculatedArtBudget.encounterMapCost + calculatedArtBudget.interiorCost + calculatedArtBudget.spotCost + calculatedArtBudget.portraitCost + calculatedArtBudget.coverCost)}** |

This tier prioritizes consistent execution at predictable schedules and quality.
${flagshipHours > 0 ? `
### Efficiency Note
Approximately ${formatNumber(flagshipHours)} hours invested into the flagship project establish reusable systems that reduce production time on subsequent deliverables:

- Reusable style and formatting systems
- Proven structure and pacing patterns
- Finalized layout and editorial conventions
` : ""}

---
`);

  // Market Comparison Section (if enabled)
  if (config.showMarketComparison !== false) {
    const a1Words = A1_ART_BASELINE.wordCount;
    const osrEstimate = estimateProjectArt(a1Words, "Large Adventure", "osr");
    const fiveEEstimate = estimateProjectArt(a1Words, "Large Adventure", "5e");
    const pfEstimate = estimateProjectArt(a1Words, "Large Adventure", "pathfinder");
    
    const currentPreset = config.marketPreset || "osr";
    const currentLabel = ART_DENSITY_PRESETS[currentPreset].label;
    
    sections.push(`${nextHeading("Market Comparison Analysis")}

This section compares your current art budget against industry standards for different market segments.

### Art Density Comparison (${formatNumber(a1Words)} words)

| Category | OSR/Indie (Current) | 5E Standard | Pathfinder Premium |
|----------|---------------------|-------------|--------------------|
| Regional Maps | ${osrEstimate.regionalMaps} | ${fiveEEstimate.regionalMaps} | ${pfEstimate.regionalMaps} |
| Encounter Maps | ${osrEstimate.encounterMaps} | ${fiveEEstimate.encounterMaps} | ${pfEstimate.encounterMaps} |
| Interior Illustrations | ${osrEstimate.interiorIllustrations} | ${fiveEEstimate.interiorIllustrations} | ${pfEstimate.interiorIllustrations} |
| Spot Art/Openers | ${osrEstimate.spotArt} | ${fiveEEstimate.spotArt} | ${pfEstimate.spotArt} |
| NPC Portraits | ${osrEstimate.npcPortraits} | ${fiveEEstimate.npcPortraits} | ${pfEstimate.npcPortraits} |
| **Total Pieces** | **${osrEstimate.totalPieces}** | **${fiveEEstimate.totalPieces}** | **${pfEstimate.totalPieces}** |
| **Est. Art Cost** | **${formatCurrency(osrEstimate.totalCost)}** | **${formatCurrency(fiveEEstimate.totalCost)}** | **${formatCurrency(pfEstimate.totalCost)}** |

### Market Positioning

**Current Selection:** ${currentLabel}

| Market Tier | Words/Piece | Budget Multiplier | Best For |
|-------------|-------------|-------------------|----------|
| OSR / Indie | ~4,200 | 1.0× | Classic TSR aesthetic, budget-conscious, text-dense |
| 5E Standard | ~3,000 | 1.5× | WotC market expectations, NPC portraits, chapter splashes |
| Pathfinder Premium | ~1,600 | 2.5× | Lavish illustration, competitive differentiator |

> **Note:** Your current art model (${calculatedArtBudget.totalPieces} pieces) aligns with the **${currentLabel}** tier. To match 5E expectations, budget ~50% more. For Pathfinder-level presentation, budget ~150% more.

---
`);
  }

  if (capacityAnalysis) {
    sections.push(`${nextHeading("Capacity Reality Check")}

${generateCapacityAnalysisSection(capacityAnalysis)}
---
`);
  }

  if (config.roleOwnership) {
    sections.push(generateRoleOwnershipAnalysis(config.roleOwnership, getRomanNumeral(sectionIndex++)));
  }

  // Next Steps
  sections.push(`${nextHeading("Next Steps")}

To proceed with this project:

### 1. Review and approve this proposal
Confirm scope, timeline, and investment range before work begins.

### 2. Sign contract and confirm first milestone
Secures the start date and establishes the delivery schedule.

### 3. First draft delivery
Writing and/or editing work begins per the agreed schedule.

---
`);

  // Footer
  sections.push(`${nextHeading("Summary")}

This proposal outlines the project scope, timeline, and cost estimate. Additional detail on specific deliverables, revision rounds, or milestone breakdowns is available upon request.

---

**Total Projects:** ${projects.length}
**Total Estimated Hours:** ${formatNumber(totalHours)}
**Total Estimated Budget:** ${formatCurrency(totalBudget)}
`);

  return sections.join("\n");
}

export function generateProductionPlanHTML(config: ReportConfig): string {
  const markdown = generateProductionPlanMarkdown(config);
  
  // Convert markdown to basic HTML for PDF generation
  let html = markdown
    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/\|(.+)\|/g, (match) => {
      const cells = match.split('|').filter(c => c.trim());
      if (cells.some(c => c.includes('---'))) return '';
      const isHeader = cells.some(c => c.includes('Title') || c.includes('Category'));
      const tag = isHeader ? 'th' : 'td';
      return `<tr>${cells.map(c => `<${tag}>${c.trim()}</${tag}>`).join('')}</tr>`;
    });

  // Wrap lists
  html = html.replace(/(<li>.+<\/li>\n?)+/g, '<ul>$&</ul>');

  // Wrap tables
  html = html.replace(/(<tr>.+<\/tr>\n?)+/g, '<table border="1" cellpadding="8" cellspacing="0">$&</table>');

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>${config.title}</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      max-width: 800px;
      margin: 0 auto;
      padding: 40px 20px;
      line-height: 1.6;
      color: #1e293b;
    }
    h1 { color: #0f172a; border-bottom: 3px solid #4f46e5; padding-bottom: 10px; }
    h2 { color: #1e40af; margin-top: 2em; }
    h3 { color: #3730a3; }
    table { width: 100%; border-collapse: collapse; margin: 1em 0; }
    th { background: #f1f5f9; text-align: left; }
    td, th { padding: 8px 12px; border: 1px solid #e2e8f0; }
    ul { margin: 1em 0; }
    li { margin: 0.5em 0; }
    hr { border: none; border-top: 1px solid #e2e8f0; margin: 2em 0; }
    strong { color: #0f172a; }
    .footer { margin-top: 3em; padding-top: 1em; border-top: 2px solid #e2e8f0; font-size: 0.9em; color: #64748b; }
  </style>
</head>
<body>
${html}
</body>
</html>`;
}
