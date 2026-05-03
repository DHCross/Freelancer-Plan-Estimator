import { Project } from "./types";
import { TEAM_ROSTER, INITIAL_PROJECTS } from "./constants";

export interface CapacityAnalysis {
  totalLostHours: number;
  remainingCapacity: number;
  netGap: number;
  coveragePercentage: number;
}

export interface CriticalDependency {
  projectId: number;
  projectName: string;
  stakeholder: string;
  deadline: string;
  riskLevel: "critical" | "high" | "medium";
  missingCapabilities: string[];
}

export interface ReallocationStrategy {
  priority: number;
  action: string;
  assignee: string;
  hoursReallocated: number;
  impact: string;
}

const PLANNING_WEEKS = 8;

export function analyzeCapacityGap(): CapacityAnalysis {
  const activeProjects = INITIAL_PROJECTS.filter(p =>
    p.lifecycleState === "Production" || p.lifecycleState === "Planning"
  );

  const totalProjectHours = activeProjects.reduce((sum, p) => {
    const writing = p.manualHours ?? 0;
    const layout = p.layoutHours ?? 0;
    return sum + writing + layout;
  }, 0);

  const weeklyDemand = Math.round(totalProjectHours / PLANNING_WEEKS);
  const weeklyCapacity = TEAM_ROSTER.reduce((sum, m) => sum + m.weeklyCapacity, 0);
  const netGap = Math.max(0, weeklyDemand - weeklyCapacity);
  const outsourceHours = Math.round(netGap * 0.4);
  const coveragePercentage = weeklyDemand > 0
    ? Math.min(100, (weeklyCapacity / weeklyDemand) * 100)
    : 100;

  return {
    totalLostHours: outsourceHours,
    remainingCapacity: weeklyCapacity,
    netGap,
    coveragePercentage,
  };
}

export function identifyCriticalDependencies(): CriticalDependency[] {
  const criticalProjects = INITIAL_PROJECTS.filter(project => 
    project.isLocked ||
    project.internalStatus === "Critical"
  );

  return criticalProjects.map(project => ({
    projectId: project.id,
    projectName: project.name,
    stakeholder: project.stakeholder,
    deadline: project.displayDate || project.launchWindow || "TBD",
    riskLevel: project.isLocked ? "critical" : "high",
    missingCapabilities: getMissingCapabilities(project),
  }));
}

function getMissingCapabilities(project: Project): string[] {
  const missing: string[] = [];
  
  if (project.type.includes("Adventure") || project.type.includes("Sourcebook")) {
    missing.push("Writing / Editing capacity");
  }
  
  if (project.type.includes("Large Adventure") || project.type.includes("Battle Maps")) {
    missing.push("Art coordination");
  }
  
  if (project.manualHours || project.layoutHours) {
    missing.push("Layout / production pipeline");
  }
  
  return missing;
}

export function generateReallocationStrategy(): ReallocationStrategy[] {
  return [
    {
      priority: 1,
      action: "Subcontract copyediting pass on locked-deadline project",
      assignee: "Freelance Copyeditor",
      hoursReallocated: 12,
      impact: "Frees writing time for first draft; editor handles polish",
    },
    {
      priority: 2,
      action: "Hire layout contractor for production pipeline",
      assignee: "Layout Designer",
      hoursReallocated: 20,
      impact: "Keeps delivery on schedule without learning curve",
    },
    {
      priority: 3,
      action: "Commission cartographer for map assets",
      assignee: "Freelance Cartographer",
      hoursReallocated: 8,
      impact: "Removes art bottleneck; maps delivered in parallel with writing",
    },
    {
      priority: 4,
      action: "Bring in developmental editor for longer manuscript",
      assignee: "Developmental Editor",
      hoursReallocated: 15,
      impact: "Improves structure and pacing before client review",
    },
    {
      priority: 5,
      action: "Delegate art brief writing and artist liaison",
      assignee: "Art Coordinator",
      hoursReallocated: 6,
      impact: "Reduces context-switching; keeps writing momentum",
    },
  ];
}

export function generateSurvivalPlan() {
  const capacity = analyzeCapacityGap();
  const dependencies = identifyCriticalDependencies();
  const reallocations = generateReallocationStrategy();

  const overloaded = capacity.netGap > 0;

  return {
    executiveSummary: {
      situation: overloaded
        ? `Current workload exceeds solo capacity by ${capacity.netGap}h/wk — some work needs to be subcontracted to hit deadlines.`
        : `Current client load is within solo capacity. Subcontracting can be used to increase output quality or speed.`,
      immediateRisk: overloaded
        ? "Deadline slippage on locked projects without contractor support for editing, layout, or art."
        : "Consider hiring a copyeditor or layout contractor to free time for higher-value writing work.",
      timeHorizon: "Next 4–8 weeks",
    },
    capacityAnalysis: capacity,
    criticalDependencies: dependencies,
    reallocationStrategy: reallocations,
    survivalMetrics: {
      weeksOfRunway: Math.max(4, Math.floor(capacity.remainingCapacity / 8)),
      criticalPathCoverage: `${dependencies.filter(d => d.riskLevel === "critical").length} locked projects`,
      documentationTasks: 2,
      systemBuildingTasks: 1,
    },
  };
}
