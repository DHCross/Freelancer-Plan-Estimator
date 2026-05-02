import { DisplayProject, Metrics, TeamMember, PaceScenario } from "./types";
import { DEFAULT_METRICS } from "./constants";
import { computePaceScenario, todayISO } from "./calculations";

export interface EmployeeEstimateConfig {
  employeeName: string;
  employeeRole: string;
  recipientName: string;
  recipientTitle?: string;
  project: DisplayProject;
  teamMember?: TeamMember;
  metrics: Metrics;
  
  // Scope inputs
  totalWords: number;
  existingWords?: number;
  
  // Pacing inputs
  draftSpeed: number;
  compileSpeed?: number;
  chaosBuffer: number;
  dailyHours: number;
  weeklyHours?: number;
  includeWeekends: boolean;
  startDate: string;
  
  // Optional notes
  assumptions?: string;
  risks?: string;
  dependencies?: string;
  
  generatedDate?: string;
}

export interface EmployeeEstimateResult {
  effectiveWords: number;
  draftScenario: PaceScenario;
  compileScenario?: PaceScenario;
  totalHours: number;
  totalDays: number;
  estimatedFinishDate: string;
  estimatedCost: number;
}

function formatCurrency(value: number): string {
  return value.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

function formatNumber(value: number): string {
  return Math.round(value).toLocaleString("en-US");
}

function formatDate(isoDate: string): string {
  if (!isoDate) return "TBD";
  const [year, month, day] = isoDate.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
}

function formatShortDate(isoDate: string): string {
  if (!isoDate) return "TBD";
  const [year, month, day] = isoDate.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export function calculateEmployeeEstimate(config: EmployeeEstimateConfig): EmployeeEstimateResult {
  const effectiveWords = Math.max(0, config.totalWords - (config.existingWords || 0));
  
  const draftScenario = computePaceScenario({
    effectiveWords,
    speed: config.draftSpeed,
    chaosPercent: config.chaosBuffer,
    pacingMode: "daily",
    dailyHours: config.dailyHours,
    weeklyHours: config.weeklyHours,
    includeWeekends: config.includeWeekends,
    startDate: config.startDate,
  });

  let compileScenario: PaceScenario | undefined;
  if (config.compileSpeed && config.compileSpeed > 0) {
    compileScenario = computePaceScenario({
      effectiveWords,
      speed: config.compileSpeed,
      chaosPercent: config.chaosBuffer,
      pacingMode: "daily",
      dailyHours: config.dailyHours,
      weeklyHours: config.weeklyHours,
      includeWeekends: config.includeWeekends,
      startDate: config.startDate,
    });
  }

  const totalHours = draftScenario.hours + (compileScenario?.hours || 0);
  const totalDays = draftScenario.days + (compileScenario?.days || 0);
  const estimatedFinishDate = compileScenario?.finishDate || draftScenario.finishDate;
  const estimatedCost = totalHours * config.metrics.blendedHourlyRate;

  return {
    effectiveWords,
    draftScenario,
    compileScenario,
    totalHours,
    totalDays,
    estimatedFinishDate,
    estimatedCost,
  };
}

export function generateEmployeeEstimateMarkdown(config: EmployeeEstimateConfig): string {
  const result = calculateEmployeeEstimate(config);
  const {
    employeeName,
    employeeRole,
    recipientName,
    recipientTitle,
    project,
    totalWords,
    existingWords,
    draftSpeed,
    compileSpeed,
    chaosBuffer,
    dailyHours,
    includeWeekends,
    startDate,
    assumptions,
    risks,
    dependencies,
    generatedDate = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
  } = config;

  const sections: string[] = [];

  // Header
  sections.push(`# Project Time Estimate

**Project:** ${project.name}
**Prepared by:** ${employeeName} (${employeeRole})
**Prepared for:** ${recipientName}${recipientTitle ? ` (${recipientTitle})` : ""}
**Date:** ${generatedDate}

---
`);

  // Executive Summary
  sections.push(`## Executive Summary

This document provides a time and effort estimate for completing **${project.name}**.

| Metric | Value |
|--------|-------|
| Total Words | ${formatNumber(totalWords)} |
| Words Remaining | ${formatNumber(result.effectiveWords)} |
| Estimated Hours | **${formatNumber(result.totalHours)} hours** |
| Estimated Working Days | **${result.totalDays} days** |
| Target Completion | **${formatDate(result.estimatedFinishDate)}** |
| Estimated Cost | ${formatCurrency(result.estimatedCost)} |

---
`);

  // Scope Details
  sections.push(`## Scope Details

### Word Count Analysis

| Category | Count |
|----------|-------|
| Total Target Words | ${formatNumber(totalWords)} |
| Existing/Completed Words | ${formatNumber(existingWords || 0)} |
| **Remaining Words** | **${formatNumber(result.effectiveWords)}** |

### Project Classification

- **Project Type:** ${project.type}
- **Current Status:** ${project.internalStatus}
- **Target Launch:** ${project.displayDate || project.launchWindow || "TBD"}
- **Stakeholder:** ${project.stakeholder}

---
`);

  // Timeline Breakdown
  sections.push(`## Timeline Breakdown

### Work Schedule Assumptions

| Parameter | Value |
|-----------|-------|
| Start Date | ${formatDate(startDate)} |
| Daily Hours | ${dailyHours} hours/day |
| Weekend Work | ${includeWeekends ? "Included" : "Excluded"} |
| Draft Speed | ${formatNumber(draftSpeed)} words/hour |
${compileSpeed ? `| Compile Speed | ${formatNumber(compileSpeed)} words/hour |` : ""}
| Chaos Buffer | ${chaosBuffer}% |

### Phase Estimates

#### Drafting Phase
- **Hours Required:** ${formatNumber(result.draftScenario.hours)} hours
- **Working Days:** ${result.draftScenario.days} days
- **Target Completion:** ${formatShortDate(result.draftScenario.finishDate)}
`);

  if (result.compileScenario && result.compileScenario.hours > 0) {
    sections.push(`
#### Compile/Review Phase
- **Hours Required:** ${formatNumber(result.compileScenario.hours)} hours
- **Working Days:** ${result.compileScenario.days} days
- **Target Completion:** ${formatShortDate(result.compileScenario.finishDate)}
`);
  }

  sections.push(`
### Total Timeline

| Phase | Hours | Days | Finish Date |
|-------|-------|------|-------------|
| Drafting | ${result.draftScenario.hours} | ${result.draftScenario.days} | ${formatShortDate(result.draftScenario.finishDate)} |
${result.compileScenario ? `| Compile/Review | ${result.compileScenario.hours} | ${result.compileScenario.days} | ${formatShortDate(result.compileScenario.finishDate)} |` : ""}
| **Total** | **${result.totalHours}** | **${result.totalDays}** | **${formatShortDate(result.estimatedFinishDate)}** |

---
`);

  // Assumptions
  if (assumptions) {
    sections.push(`## Assumptions

${assumptions}

---
`);
  } else {
    sections.push(`## Assumptions

- Work will proceed without major interruptions or competing priorities
- Source materials and references are available as needed
- Feedback cycles will be timely (within 48 hours)
- No significant scope changes after estimate approval
- ${chaosBuffer}% buffer accounts for typical revision cycles and unforeseen complexity

---
`);
  }

  // Dependencies
  if (dependencies) {
    sections.push(`## Dependencies

${dependencies}

---
`);
  }

  // Risks
  if (risks) {
    sections.push(`## Risks & Mitigation

${risks}

---
`);
  } else {
    sections.push(`## Risks & Mitigation

| Risk | Impact | Mitigation |
|------|--------|------------|
| Scope creep | Timeline extension | Clear scope boundaries, change request process |
| Competing priorities | Delayed completion | Protected work blocks, priority alignment |
| Technical complexity | Additional hours | ${chaosBuffer}% buffer built into estimate |
| Feedback delays | Schedule slip | Defined review windows, async communication |

---
`);
  }

  // Sign-off
  sections.push(`## Approval

This estimate is provided in good faith based on current project understanding and available information. Actual time may vary based on factors discovered during execution.

**Prepared by:** ${employeeName}
**Date:** ${generatedDate}

---

_This estimate was generated using the Production Engine Estimator. For questions or clarifications, please contact ${employeeName}._
`);

  return sections.join("\n");
}

export function generateEmployeeEstimateHTML(config: EmployeeEstimateConfig): string {
  const markdown = generateEmployeeEstimateMarkdown(config);
  
  // Convert markdown to basic HTML
  let html = markdown
    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^#### (.+)$/gm, '<h4>$1</h4>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/\|(.+)\|/g, (match) => {
      const cells = match.split('|').filter(c => c.trim());
      if (cells.some(c => c.includes('---'))) return '';
      const isHeader = cells.some(c => c.includes('Metric') || c.includes('Category') || c.includes('Parameter') || c.includes('Phase') || c.includes('Risk'));
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
  <title>Project Estimate: ${config.project.name}</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      max-width: 800px;
      margin: 0 auto;
      padding: 40px 20px;
      line-height: 1.6;
      color: #1e293b;
    }
    h1 { 
      color: #0f172a; 
      border-bottom: 3px solid #4f46e5; 
      padding-bottom: 10px; 
    }
    h2 { 
      color: #1e40af; 
      margin-top: 2em;
      border-bottom: 1px solid #e2e8f0;
      padding-bottom: 0.5em;
    }
    h3 { color: #3730a3; }
    h4 { color: #4338ca; font-size: 1em; }
    table { 
      width: 100%; 
      border-collapse: collapse; 
      margin: 1em 0; 
    }
    th { 
      background: #f1f5f9; 
      text-align: left; 
      font-weight: 600;
    }
    td, th { 
      padding: 10px 14px; 
      border: 1px solid #e2e8f0; 
    }
    tr:nth-child(even) td {
      background: #f8fafc;
    }
    ul { margin: 1em 0; }
    li { margin: 0.5em 0; }
    hr { border: none; border-top: 1px solid #e2e8f0; margin: 2em 0; }
    strong { color: #0f172a; }
    .summary-box {
      background: #f0fdf4;
      border: 1px solid #86efac;
      border-radius: 8px;
      padding: 1em;
      margin: 1em 0;
    }
    @media print {
      body { padding: 20px; }
      h1 { page-break-after: avoid; }
      h2, h3 { page-break-after: avoid; }
      table { page-break-inside: avoid; }
    }
  </style>
</head>
<body>
${html}
</body>
</html>`;
}
