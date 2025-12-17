import { DisplayProject, Metrics, TeamMember } from "./types";
import { DEFAULT_METRICS, COVER_ART_RATE_DEFAULT, CARTOGRAPHY_DEFAULT, INTERIOR_SPOT_DEFAULT } from "./constants";

export interface ReportConfig {
  title: string;
  subtitle?: string;
  projects: DisplayProject[];
  metrics: Metrics;
  teamRoster: TeamMember[];
  artBudget?: {
    interiorPieces: number;
    interiorCost: number;
    cartographyCost: number;
    coverCost: number;
  };
  investmentRange?: {
    low: number;
    high: number;
  };
  generatedDate?: string;
  teamCapacity?: {
    danWeeklyHours: number;
    martinWeeklyHours: number;
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

  const { danWeeklyHours, martinWeeklyHours, workingWeeksPerYear } = capacity;
  
  // Calculate actual capacity
  const combinedWeeklyHours = danWeeklyHours + martinWeeklyHours;
  const annualCapacity = combinedWeeklyHours * workingWeeksPerYear;
  
  // Calculate gaps
  const hourGap = totalHours - annualCapacity;
  const weeklyGap = hourGap / workingWeeksPerYear;
  const isOverallocated = hourGap > 0;
  
  // Calculate equivalent team size
  const equivalentTeamSize = totalHours / (workingWeeksPerYear * 40); // 40 = standard full-time week
  
  return {
    danWeeklyHours,
    martinWeeklyHours,
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
    danWeeklyHours,
    martinWeeklyHours,
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
    ? `**Gap:** Short ${formatNumber(Math.abs(hourGap))} hours (${weeklyGap.toFixed(1)} hrs/week) — roughly a third teammate at halftime.`
    : `**Surplus:** ${formatNumber(Math.abs(hourGap))} hours of slack capacity.`;

  const cleanFixes = [
    "Push one Q4 deliverable (e.g., Grimdark Skeleton) into Q1 2027.",
    "De-scope Ravenous Coast to a Phase 1 book (regional core + bastions).",
    "Serialize A2 development — outline in Q3, full production after A1 ship."
  ];

  const cleanFixList = cleanFixes.map(item => `- ${item}`).join("\n");

  return `
**Actual capacity (realistic):**
- Dan: ${danWeeklyHours} hrs/week
- Martin: ${martinWeeklyHours} hrs/week
- Combined: ${combinedWeeklyHours} hrs/week × ${workingWeeksPerYear} working weeks ≈ ${formatNumber(annualCapacity)} hrs/year

**Plan demand:** ${formatNumber(totalHours)} hrs/year (${Math.round(totalHours / workingWeeksPerYear)} hrs/week equivalent)

${gapDescription}

**Equivalent team size implied by plan:** ${equivalentTeamSize.toFixed(1)} FTE (plan assumes ~${Math.round(totalHours / workingWeeksPerYear)} hrs/week).

**Where load concentrates:**
1. **Q3 overlap:** A1 polish + Players Guide + Maps + A2 ramp assume parallel throughput you don't have.
2. **Q4 stack:** Ravenous Coast + Grimdark Skeleton double-book the same window; ~${formatNumber(Math.max(0, hourGap))} missing hours live here.

**Cleanest fixes (no heroics):**
${cleanFixList}
`;
}

function generateRoleOwnershipAnalysis(roles: ReportConfig['roleOwnership'], headingNumeral: string = "V"): string {
  if (!roles) return "";
  
  const {
    narrativeLead,
    systemsLead,
    productionArbiter,
    finalEditor,
    assetCoordinator,
    projectManager
  } = roles;
  
  return `## ${headingNumeral}. Role Ownership & Decision Authority

### Explicit Role Coverage

**1. Creative Lead / Setting Architect — ${narrativeLead || "Martin"}**
- Primary narrative authoring
- Tone, theme, and scene conception
- Module-level storytelling momentum

**2. Systems & Structure Lead — ${systemsLead || "Dan"}**
- Rules translation & system fluency
- Structural consistency across books
- Layout-aware writing and editorial hygiene
- Long-horizon continuity thinking

**3. Production Arbiter — ${productionArbiter || "Dan"}**
- Final calls on scope cuts
- Priority conflict resolution
- "Good enough" threshold decisions
- Completion sign-off authority

**4. Final Editor & Integrator — ${finalEditor || "Dan"}**
- Editorial enforcement phase
- Cross-project consistency
- Layout integration oversight

**5. Asset Coordinator — ${assetCoordinator || "TBD"}**
- Art brief preparation
- Map dependency tracking
- Layout question triage
- External creator liaison

**6. Project Manager / Throughput Guardian — ${projectManager || "Dan"}**
- Calendar vs reality monitoring
- Early slippage detection
- Capacity bottleneck identification

### Identified Gaps & Mitigations

**GAP 1: Explicit Project Ownership**
- **Risk:** Polite deadlocks, quiet rework, scope creep by omission
- **Mitigation:** Single Final Arbiter per deliverable (not globally)

**GAP 2: Production Management**
- **Risk:** Discovering overload at worst possible moment
- **Mitigation:** Named throughput guardian role

**GAP 3: Editorial Phase Distinction**
- **Risk:** Late-stage quality panic, tone drift, layout friction
- **Mitigation:** Dedicated editorial pass boundary

**GAP 4: Asset Coordination**
- **Risk:** Last-minute scrambling, art mismatches, layout bottlenecks
- **Mitigation:** Lightweight coordinator role (5 hrs/week)

### Decision Authority Matrix

| Decision Area | Primary Authority | Backup Authority | Escalation |
|---------------|-------------------|------------------|------------|
| Narrative Content | ${narrativeLead || "Martin"} | ${systemsLead || "Dan"} | Joint discussion |
| Rules & Systems | ${systemsLead || "Dan"} | ${narrativeLead || "Martin"} | ${productionArbiter || "Dan"} final call |
| Scope & Priority | ${productionArbiter || "Dan"} | ${narrativeLead || "Martin"} | Joint discussion |
| Editorial Quality | ${finalEditor || "Dan"} | ${narrativeLead || "Martin"} | ${productionArbiter || "Dan"} final call |
| Asset Integration | ${assetCoordinator || "TBD"} | ${finalEditor || "Dan"} | ${projectManager || "Dan"} escalation |

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

  // Calculate art budget if not provided
  const calculatedArtBudget = artBudget || {
    interiorPieces: 38,
    interiorCost: 38 * INTERIOR_SPOT_DEFAULT,
    cartographyCost: CARTOGRAPHY_DEFAULT,
    coverCost: COVER_ART_RATE_DEFAULT,
  };

  const totalArtBudget = calculatedArtBudget.interiorCost + calculatedArtBudget.cartographyCost + calculatedArtBudget.coverCost;

  // Calculate investment range if not provided
  const calculatedInvestmentRange = investmentRange || {
    low: Math.round(totalArtBudget * 0.85),
    high: Math.round(totalArtBudget * 1.2),
  };

  // Find flagship project (A1)
  const flagshipProject = projects.find(p => p.name.toLowerCase().includes("a1") && p.name.toLowerCase().includes("problem"));
  const flagshipHours = flagshipProject?.total || flagshipProject?.manualHours || 400;

  let sectionIndex = 1;
  const nextHeading = (title: string) => `## ${getRomanNumeral(sectionIndex++)}. ${title}`;

  const sections: string[] = [];

  // Header
  sections.push(`# ${title}

${subtitle || ""}

**Generated:** ${generatedDate}

---
`);

  // Strategic Priorities
  sections.push(`${nextHeading("Strategic Priorities")}

### Primary Deliverable
The A-Series Adventure Path (A0–A4) represents the core publishing initiative for the year.

### Release Window
The target for A1: The Problem of Possibility is late Q2 (May–June print and distribution window).

### Operational Continuity
Layout and asset integration will remain centralized to ensure consistency in styling, pacing, formatting, and data reliability.

### Manufacturing Model
Primary print strategy will use domestic offset printing (runs in 1k–2k units) to secure competitive per-unit cost and maintain margin strength.

---
`);

  // Release Calendar
  sections.push(`${nextHeading("Release Calendar")}

| Title | Format | Target Date | Notes |
|-------|--------|-------------|-------|`);

  projects
    .filter(p => p.stakeholder === "Martin" || p.name.toLowerCase().includes("a0") || p.name.toLowerCase().includes("a1") || p.name.toLowerCase().includes("a2") || p.name.toLowerCase().includes("a3") || p.name.toLowerCase().includes("a4") || p.name.toLowerCase().includes("player") || p.name.toLowerCase().includes("ravenous"))
    .sort((a, b) => {
      const dateA = a.targetDate || a.displayDate || a.launchWindow || "";
      const dateB = b.targetDate || b.displayDate || b.launchWindow || "";
      return dateA.localeCompare(dateB);
    })
    .forEach(project => {
      const format = project.type || "Module";
      const targetDate = project.displayDate || project.launchWindow || "2026";
      const notes = project.name.toLowerCase().includes("a1") ? "Flagship release" :
                    project.name.toLowerCase().includes("player") ? "Promotional lead-in" :
                    project.name.toLowerCase().includes("a0") ? "Intro module" :
                    project.name.toLowerCase().includes("ravenous") ? "Confirmed release" :
                    "Serialized follow-through";
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

    if (group.quarter === "Q1") {
      sections.push(`- Commission A1 art and contracts
- Deliver Player's Guide and A0
- Finalize template systems, layout framework, and encounter formatting
- **Target completion point:** March 31
`);
    } else if (group.quarter === "Q2") {
      sections.push(`**Sequence:**
- Art and maps delivered mid-April
- Full layout execution
- Print-ready file handoff

**Milestone Outcome:** A1 print and release in the May–June window
`);
    } else if (group.quarter === "Q3") {
      sections.push(`- Full development run on A2 using established conventions
- **Release target:** September 30
`);
    } else if (group.quarter === "Q4") {
      sections.push(`- Production cycle begins mid-August to protect year-end deadlines
- **Release target:** December 15
`);
    }

    if (group.projects.length > 0) {
      sections.push(`**Projects in this quarter:**`);
      group.projects.forEach(p => {
        sections.push(`- ${p.name} (${p.total || p.manualHours || 0} hours, ${formatCurrency(p.estCost || 0)})`);
      });
      sections.push(``);
    }
  });

  sections.push(`---
`);

  // Budget & Resourcing
  sections.push(`${nextHeading("Budget & Resourcing (A1-Centered)")}

**Recommended investment range:** ${formatCurrency(calculatedInvestmentRange.low)}–${formatCurrency(calculatedInvestmentRange.high)}

### Distribution:

| Category | Allocation |
|----------|------------|
| Interior Art (~${calculatedArtBudget.interiorPieces} pieces) | ~${formatCurrency(calculatedArtBudget.interiorCost)} |
| Cartography | ~${formatCurrency(calculatedArtBudget.cartographyCost)} |
| Cover Art | ~${formatCurrency(calculatedArtBudget.coverCost)} |

This tier prioritizes consistent execution at predictable schedules and quality.

### Efficiency Note
Approximately ${formatNumber(flagshipHours)} hours invested into A1 development directly reduce production time on A2-A4 due to:

- Reusable style systems
- Encounter framework established
- Proven pacing structure
- Finalized layout mechanics

---
`);

  if (capacityAnalysis) {
    sections.push(`${nextHeading("Capacity Reality Check")}

${generateCapacityAnalysisSection(capacityAnalysis)}
---
`);
  }

  if (config.roleOwnership) {
    sections.push(generateRoleOwnershipAnalysis(config.roleOwnership, getRomanNumeral(sectionIndex++)));
  }

  // Immediate Action Items
  sections.push(`${nextHeading("Immediate Action Items")}

To maintain Q2 release readiness:

### 1. Approve art staffing and send contracts
Secures availability and begins scheduling window.

### 2. Initiate commissioning and sketch review sequence
Expected execution window: 6–8 weeks.

### 3. Confirm layout readiness and asset transfer timing
Final files should be routed mid-April for uninterrupted layout flow.

---
`);

  // Footer
  sections.push(`${nextHeading("Summary")}

This plan forms the baseline working schedule, financial model, and operational sequencing for full execution of the A-Series cycle in 2026. Additional downstream planning—as marketing timing, distribution routing, and sales cadence—is available upon request.

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
