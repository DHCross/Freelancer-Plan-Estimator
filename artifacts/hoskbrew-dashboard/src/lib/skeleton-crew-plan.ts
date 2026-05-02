import { TeamMember, Project } from "./types";
import { LEGACY_GHOST_CAPACITY, TEAM_ROSTER, INITIAL_PROJECTS } from "./constants";

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

export function analyzeCapacityGap(): CapacityAnalysis {
  const lostHours = LEGACY_GHOST_CAPACITY.reduce((sum, ghost) => {
    const weeklyHours = parseInt(ghost.hours.replace('h/wk', ''));
    return sum + weeklyHours;
  }, 0);

  const remainingCapacity = TEAM_ROSTER.reduce((sum, member) => sum + member.weeklyCapacity, 0);
  const netGap = lostHours - remainingCapacity;
  const coveragePercentage = (remainingCapacity / (lostHours + remainingCapacity)) * 100;

  return {
    totalLostHours: lostHours,
    remainingCapacity,
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
      action: "Protect locked deadline project",
      assignee: "Me",
      hoursReallocated: 20,
      impact: "Client-committed revenue — non-negotiable",
    },
    {
      priority: 2,
      action: "Maintain production calendar",
      assignee: "Me",
      hoursReallocated: 15,
      impact: "Keeps launch schedule intact",
    },
    {
      priority: 3,
      action: "Document style guide and editorial standards",
      assignee: "Me",
      hoursReallocated: 10,
      impact: "Preserves quality consistency across projects",
    },
    {
      priority: 4,
      action: "Capture art coordination workflow",
      assignee: "Me",
      hoursReallocated: 5,
      impact: "Maintains visual consistency for series",
    },
    {
      priority: 5,
      action: "Document production pipeline methods",
      assignee: "Me",
      hoursReallocated: 5,
      impact: "Timeline management continuity",
    },
    {
      priority: 6,
      action: "Create reusable project scaffolding",
      assignee: "Me",
      hoursReallocated: 15,
      impact: "Reduces setup time on future projects",
    },
  ];
}

export function generateSurvivalPlan() {
  const capacity = analyzeCapacityGap();
  const dependencies = identifyCriticalDependencies();
  const reallocations = generateReallocationStrategy();

  return {
    executiveSummary: {
      situation: "Great Remote Purge eliminated 16 staff, removing 120h/wk operational capacity",
      currentStatus: "Skeleton crew operations with 27% coverage of required hours",
      immediateRisk: "A1 launch failure and Dec 22 deadline breach",
      timeHorizon: "90 days to stabilize or accept major delays",
    },
    capacityAnalysis: capacity,
    criticalDependencies: dependencies,
    reallocationStrategy: reallocations,
    survivalMetrics: {
      weeksOfRunway: Math.floor(capacity.remainingCapacity / 40), // Assuming 40h/wk burn rate
      criticalPathCoverage: `${dependencies.filter(d => d.riskLevel === "critical").length} critical projects`,
      documentationTasks: reallocations.filter(r => r.action.includes("Document")).length,
      systemBuildingTasks: reallocations.filter(r => r.action.includes("scaffolding")).length,
    },
  };
}
