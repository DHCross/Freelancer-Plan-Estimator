import { generateSurvivalPlan } from "./skeleton-crew-plan";

export interface StrategicPivotReport {
  executiveSummary: {
    situation: string;
    decision: string;
    timeline: string;
    impact: string;
  };
  stakeholderMandates: {
    matthew: string;
    martin: string;
    dan: string;
  };
  operationalRealities: {
    capacityLoss: string;
    criticalPathRisk: string;
    survivalHorizon: string;
  };
  strategicRecommendations: {
    immediate: string[];
    shortTerm: string[];
    longTerm: string[];
  };
}

export function generateStrategicPivotReport(): StrategicPivotReport {
  const plan = generateSurvivalPlan();

  return {
    executiveSummary: {
      situation: "The Great Remote Purge eliminated 16 staff members, removing 120 hours/week of operational capacity and leaving the TTRPG division as a skeleton crew operation.",
      decision: "Strategic pivot to Institutional Archivist model with focus on knowledge preservation, critical path protection, and scalable system building.",
      timeline: "90-day stabilization window with immediate focus on Dec 22 deadline and A1 launch continuity.",
      impact: "Current operational model covers only 27% of required capacity. Without immediate intervention, major revenue streams and strategic initiatives face significant delays or cancellation."
    },
    stakeholderMandates: {
      matthew: "Dec 22nd is non-negotiable. I am protecting the Core IP revenue. Eldritch 2E: Curses to Prose must ship to maintain financial stability.",
      martin: "Admin time is the production backbone. No calendar = no A1 launch. A-series production pipeline requires administrative scaffolding to prevent collapse.",
      dan: "Without scaffolding, the A-series cannot launch and corporate deadlines slip. Institutional knowledge preservation is critical for future scaling."
    },
    operationalRealities: {
      capacityLoss: "32,000 annual hours eliminated. Ghost capacity from Jon (writing/editing), Derek (art/visuals), and Randy (production lead) creates 120h/wk deficit.",
      criticalPathRisk: "A1 flagship launch (End of May) and Eldritch 2E deadline (Dec 22) both at risk. Production pipeline collapse threatens entire 2026 revenue plan.",
      survivalHorizon: "Current runway of approximately 11 weeks at reduced capacity. Immediate action required to prevent cascade failures."
    },
    strategicRecommendations: {
      immediate: [
        "Protect Dec 22 Eldritch 2E deadline - allocate 20h/wk to Matthew's Core IP",
        "Maintain A1 production calendar - allocate 15h/wk to Martin's administrative backbone",
        "Document Jon's technical style guide - capture editorial standards before knowledge loss",
        "Preserve Derek's art coordination standards - maintain visual consistency protocols",
        "Capture Randy's production pipeline methods - ensure timeline management continuity"
      ],
      shortTerm: [
        "Create scalable scaffolding systems for future team expansion",
        "Implement automated documentation processes for institutional knowledge",
        "Establish critical path monitoring systems for early risk detection",
        "Develop contingency plans for key personnel dependencies",
        "Build modular production workflows that can operate with minimal oversight"
      ],
      longTerm: [
        "Design organization structure resilient to single-point failures",
        "Implement knowledge management systems for institutional memory",
        "Create cross-training programs to reduce key person dependencies",
        "Establish strategic partnerships for specialized capabilities",
        "Build financial models that account for capacity volatility"
      ]
    }
  };
}

export function formatPivotReportAsMarkdown(): string {
  const report = generateStrategicPivotReport();
  
  return `# Strategic Pivot Report: Great Remote Purge Response

## Executive Summary

**Situation:** ${report.executiveSummary.situation}

**Decision:** ${report.executiveSummary.decision}

**Timeline:** ${report.executiveSummary.timeline}

**Impact:** ${report.executiveSummary.impact}

---

## Stakeholder Mandates

### Matthew: Core IP Protection
> "${report.stakeholderMandates.matthew}"

### Martin: Production Backbone
> "${report.stakeholderMandates.martin}"

### Dan: Institutional Architecture
> "${report.stakeholderMandates.dan}"

---

## Operational Realities

### Capacity Loss
${report.operationalRealities.capacityLoss}

### Critical Path Risk
${report.operationalRealities.criticalPathRisk}

### Survival Horizon
${report.operationalRealities.survivalHorizon}

---

## Strategic Recommendations

### Immediate Actions (Next 30 Days)
${report.strategicRecommendations.immediate.map((item, idx) => `${idx + 1}. ${item}`).join('\n')}

### Short-Term Initiatives (30-90 Days)
${report.strategicRecommendations.shortTerm.map((item, idx) => `${idx + 1}. ${item}`).join('\n')}

### Long-Term Strategy (90+ Days)
${report.strategicRecommendations.longTerm.map((item, idx) => `${idx + 1}. ${item}`).join('\n')}

---

## Survival Metrics Dashboard

- **Operational Coverage:** 27% of required capacity
- **Critical Projects:** 3 high-risk initiatives
- **Documentation Tasks:** 3 knowledge preservation priorities
- **System Building:** 1 scalable architecture requirement
- **Runway:** 11 weeks at current capacity

---

## Conclusion

The Great Remote Purge represents both a crisis and an opportunity. By embracing the Institutional Archivist role and implementing this strategic pivot, we can:

1. **Protect immediate revenue** through deadline adherence
2. **Preserve critical knowledge** before permanent loss
3. **Build resilient systems** for future growth
4. **Maintain strategic momentum** despite capacity constraints

Success requires immediate execution of the 90-day stabilization plan while simultaneously building the foundation for long-term organizational resilience.

---

*Report generated on ${new Date().toLocaleDateString()}*
*Prepared by: Institutional Archivist*
*Classification: Internal Leadership Communication*`;
}
